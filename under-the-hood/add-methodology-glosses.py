#!/usr/bin/env python3
"""
Add glossable buttons for the four methodology frames (timbre, texture,
form, gesture) on the first substantive prose mention in each listening
guide page.

"Substantive prose mention" means: inside a <p> element, not already
wrapped in a <button class="glossable">, and not inside an <svg>,
<figcaption>, <title>, <desc>, <h1>-<h6>, alt="...", or aria-label="..."
context.

Skips a page silently if a button for that term already exists.
Skips a term silently if no plausible prose occurrence is found.

Reports each change.
"""
import re
import sys
import os

TERMS = ['timbre', 'texture', 'form', 'gesture']

# Build a regex that matches one <p>...</p> block (non-greedy, dotall).
P_BLOCK_RE = re.compile(r'<p(\s[^>]*)?>(.*?)</p>', re.DOTALL)

# A regex that, given a paragraph's inner HTML, locates the first
# whole-word case-insensitive match for the term that is NOT inside
# an existing <button class="glossable" data-term="..."> ... </button>.
# Strategy: split the paragraph on glossable-button spans, scan only
# the non-button text segments for the first match. Then re-assemble
# the paragraph with the wrapping inserted in the right place.

BUTTON_SPAN_RE = re.compile(
    r'<button class="glossable" data-term="[^"]+">.*?</button>',
    re.DOTALL,
)

def add_button_in_paragraph(p_inner, term):
    """
    Try to add a glossable button to the first match of `term` inside
    `p_inner` that is not within an existing glossable button.
    Returns (new_inner, changed_bool, matched_word_or_none).
    """
    # Tokenize the paragraph into alternating non-button text and button
    # spans so we only scan non-button text for the match.
    parts = []  # list of (kind, text) where kind in {'text','btn'}
    last = 0
    for m in BUTTON_SPAN_RE.finditer(p_inner):
        if m.start() > last:
            parts.append(('text', p_inner[last:m.start()]))
        parts.append(('btn', p_inner[m.start():m.end()]))
        last = m.end()
    if last < len(p_inner):
        parts.append(('text', p_inner[last:]))

    word_re = re.compile(r'\b' + re.escape(term) + r's?\b', re.IGNORECASE)

    for i, (kind, text) in enumerate(parts):
        if kind != 'text':
            continue
        wm = word_re.search(text)
        if not wm:
            continue
        matched = text[wm.start():wm.end()]
        new_text = (
            text[:wm.start()]
            + f'<button class="glossable" data-term="{term}">{matched}</button>'
            + text[wm.end():]
        )
        parts[i] = ('text', new_text)
        return (''.join(p for _, p in parts), True, matched)

    return (p_inner, False, None)


def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    changes = []

    for term in TERMS:
        # If the page already buttons this term anywhere, skip.
        if f'data-term="{term}"' in html:
            continue

        # Walk paragraphs in three tiers of preference:
        #
        # Tier A: ordinal paragraphs ("First, ...", "Second, ...",
        #   "Third, ...", "Fourth, ...") where the term word appears
        #   shortly after the ordinal marker (i.e., the paragraph
        #   introduces this frame as its prompt: "Second, the texture
        #   ...").
        # Tier B: ordinal paragraphs that contain the term anywhere.
        # Tier C: any paragraph that contains the term.
        ordinal_re = re.compile(
            r'^\s*(First|Second|Third|Fourth)\b',
            re.IGNORECASE,
        )
        # "Ordinal, the <term>" within the first ~60 chars of visible text.
        ordinal_introduces_re = re.compile(
            r'^\s*(First|Second|Third|Fourth)\b[^.]{0,60}\b'
            + re.escape(term) + r's?\b',
            re.IGNORECASE,
        )

        placed = False
        p_matches = list(P_BLOCK_RE.finditer(html))

        def try_paragraphs(predicate):
            """
            Walk p_matches in order; for the first paragraph that
            satisfies `predicate(visible_text)`, attempt to add the
            button. Return True if button was added.
            """
            nonlocal html, placed
            for pm in p_matches:
                inner = pm.group(2)
                visible = re.sub(r'<[^>]+>', '', inner).strip()
                if not predicate(visible):
                    continue
                new_inner, changed, matched = add_button_in_paragraph(
                    inner, term
                )
                if changed:
                    attrs = pm.group(1) or ''
                    new_p = f'<p{attrs}>{new_inner}</p>'
                    html = html[:pm.start()] + new_p + html[pm.end():]
                    changes.append((term, matched))
                    placed = True
                    return True
            return False

        # Tier A: ordinal-introduces.
        if try_paragraphs(lambda v: bool(ordinal_introduces_re.match(v))):
            # Re-fetch p_matches in case offsets shifted; not needed
            # because we break on first success and don't re-search
            # for this term.
            continue

        # Tier B: any ordinal paragraph.
        if try_paragraphs(lambda v: bool(ordinal_re.match(v))):
            continue

        # Tier C: any paragraph.
        try_paragraphs(lambda v: True)

        # If never placed, silently skip.

    if changes:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)

    return changes


def main():
    files = sys.argv[1:]
    if not files:
        print('Usage: python3 add-methodology-glosses.py <file> [<file> ...]')
        sys.exit(1)

    total = 0
    for path in files:
        if not os.path.isfile(path):
            print(f'SKIP (not a file): {path}')
            continue
        changes = process_file(path)
        if not changes:
            print(f'  no changes: {path}')
        else:
            print(f'  updated:    {path}')
            for term, matched in changes:
                print(f'    + {term:<8} (matched "{matched}")')
            total += len(changes)

    print(f'\nTotal buttons added: {total}')


if __name__ == '__main__':
    main()
