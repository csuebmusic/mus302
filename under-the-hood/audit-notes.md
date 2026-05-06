# Audit notes

How the audit script behaves, which warnings to live with as
intentional skips, and known blind spots worth folding in eventually.
This is stable knowledge: it changes only when the audit script
itself is revised or new categories of intentional skips emerge.

For session-by-session work in progress, see `STATUS.md`.

## Glossary intentional skips (audit warnings to live with)

The audit reports 29 warnings on Module 3 after the fresh-eyes pass;
all fall into the categories below. Audit reports a handful more on
Module 2; same categories. The fresh-eyes pass cleared five real
misses (`waltz`, `Loíza` placement, `rhythm-section`,
`corpus-christi`, `horn`); the rest are documented skips.

1. **Labels-table cells.** Module 2's record-labels table has four
   skipped cells (`house-band`, `w-c-handy`, `decca`, `muddy-waters`);
   Module 3's framing-reading labels table has roughly thirteen
   (`Tex-Mex`, `charanga`, `Joe Cuba`, `Dancehall`, `EMI Latin`,
   `Tico Records`, `Fania Records`, `decca`, `Jerry Masucci`,
   `Q-Productions`, `Johnny Pacheco`, `Fania All-Stars`,
   `abraham-quintanilla`). Multi-word gloss buttons render awkwardly
   inside narrow monospace cells. Each term is glossed in regular
   prose elsewhere on the site.
2. **Common English words colliding with technical glossary keys.**
   The audit flags every prose use of `rhythm`, `beat`, `jazz`, `soul`,
   `dominant`, etc., as a possible missed gloss for the corresponding
   technical entry. Most are bare English words in non-technical
   senses (e.g., `dominant musical infrastructure` is the adjective,
   not the V chord). All documented per page.
3. **Wrong-sense matches.** The audit cannot distinguish a `tenor`
   saxophone from a tenor voice, or a stage `MC` (master of
   ceremonies) from a hip hop MC, or a song-title `Santana` cross-link
   from the band-name first mention. Each surfaces as a warning that
   is actually a wrong-sense match. Related: the audit's quote-stripping
   for song-and-album titles can leave possessive forms stranded
   (Module 4 framing reading flags `Beyoncé` because the prose says
   `Beyoncé's "Formation."` and the title strips out, leaving the
   possessive next to the following sentence).
4. **Compound-already-buttoned upstream.** When a longer compound key
   like `latin-trap` is buttoned at first mention, the audit also
   flags the bare `trap` later in the prose. Buttoning the bare term
   on top of the compound is redundant; the compound carries the
   gloss.
5. **YouTube card metadata and song-title cross-links.** Track 1 and
   Track 2 video-card labels (`Tito Puente`, `Joe Bataan`) and Track
   4's song-title cross-link (`Santana's "Oye Como Va"` linking to
   the Santana track) surface as audit warnings. Per house style,
   nav-style metadata, song titles, and cross-link anchors are not
   glossed.
6. **Module 3 Track 2 (Bataan) listening-guide skips.** Four
   documented intentional skips on Track 2 itself, same patterns as
   2 and 3.

## Audit script future improvements

Three blind spots accumulated across the build, none blocking, all
worth folding in eventually:

1. Validate definition-string contents at audit time. Flag any
   definition string containing `<`, `>`, or HTML entities like
   `&amp;`, `&lt;`, `&gt;`. Would have caught a year-old 27-entry
   HTML-encoding bug at audit time rather than relying on Inés
   spotting raw characters in popups.
2. Treat each glossary key independently. The current
   once-buttoned-anywhere-on-page logic clears any term that has any
   button on a page, which means when a longer compound key
   (`rhythm-section`, `mambo-section`) is buttoned but the bare
   shorter key (`rhythm`, `mambo`) is the one the prose actually
   needs glossed at first mention, the audit clears both and the
   miss survives.
3. Check that every page using `class="glossable"` also includes the
   two expected `<script>` tags at end of body. Missing script tags
   silently break all gloss buttons on the page; this happened on
   Module 3 Track 3 in early drafts and was caught only by manual
   structural review.

There is also a misplaced-first-mention blind spot, currently caught
by a one-off Python scan rather than the audit script. Same fix
direction. Most hits from the Python scan are false positives
(proper nouns sharing words with technical terms, song titles,
compound-vs-bare distinctions); eyeball before fixing.

## Running the audit

From the repo root:

```
node under-the-hood/scripts/check-glossings.js                       # check all pages
node under-the-hood/scripts/check-glossings.js module2/foo.html      # check one page
node under-the-hood/scripts/check-glossings.js module2/              # check all pages in dir
```

Run before committing any change that touches a glossable HTML page
or the glossary file. The script flags three things: buttons that
reference a `data-term` not in the glossary (a hard error, the page
is broken); the same `data-term` used more than once on a page (a
warning, since the convention is "first substantive mention only");
and glossary labels that appear in the prose but are not buttoned
anywhere on the page (a warning, in case the gloss got missed).

New pages should come back clean before they ship. Some intentional
skips on shipped pages are documented above.
