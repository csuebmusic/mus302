# MUS 302: What to Listen for in Music

Course materials for MUS 302, an online asynchronous upper-division
general education course at California State University, East Bay,
taught by Inés Thiebaut. The course surveys American popular music
from the 1940s forward, organized around four cultural traditions
and the dialogues between them: African American foundational
traditions, Latin diasporic traditions, Asian American traditions,
and European American immigrant and working-class traditions.

The live site is at https://csuebmusic.github.io/mus302/. This
repository is the source.

## What is in this repo

The repo holds two kinds of content. Student-facing HTML pages
render on the live site through GitHub Pages and serve as durable
references students return to throughout the term. Markdown source
files alongside them hold content that gets pasted into Canvas
(discussion prompts, quizzes, project assignment descriptions), so
the repo stays the canonical source of truth even when the delivery
happens elsewhere.

## Layout

```
mus302/
  syllabus.html             Live syllabus
  syllabus.md               Markdown source for Canvas paste
  STATUS.md                 Running summary of what is built and what is pending
  README.md                 This file

  assets/
    style.css               Shared stylesheet for all pages
    glossary.js             Click-to-reveal glossary behavior
    glossary-data.js        All defined terms, growing as new pages are added
    images/                 Hero photos and figures for listening guides and readings

  module1/                  Orientation and Methodology
  module2/                  African American foundational traditions
  module3/                  Latin diasporic traditions
  module4/                  Asian American traditions (not yet drafted)
  module5/                  European American immigrant and working-class (not yet drafted)
  module6/                  Cross-Cutting Threads / Synthesis (not yet drafted)

  final-project/
    index.html              Final-project landing page (linked from Canvas)
    01-proposal.md          Proposal (Canvas paste source)
    02-annotated-bibliography.md
    03-draft.md
    04-peer-review.md
    05-final.md

  scripts/
    check-glossings.js      Audit script for gloss-button coverage (run before commit)
```

Each module folder follows the same pattern: an `index.html` landing
page, listening guide HTML pages for the module's anchor tracks,
optional `roots-and-routes.html` framing reading where the module
warrants one, plus `discussion.md` and `quiz.md` Canvas paste sources.

## Module navigation

Live pages on the site:

- Module 1: https://csuebmusic.github.io/mus302/module1/
- Module 2: https://csuebmusic.github.io/mus302/module2/
- Module 3: https://csuebmusic.github.io/mus302/module3/ (landing page pending)
- Final project: https://csuebmusic.github.io/mus302/final-project/
- Syllabus: https://csuebmusic.github.io/mus302/syllabus.html

STATUS.md tracks what is complete, what is pending, and what is
launch-blocking on a session-to-session basis.

## Course architecture

Six modules. Module 1 must be completed first (orientation and
methodology). Modules 2 through 5 cover the four cultural traditions
and unlock simultaneously after Module 1 is complete; students can
do them in any order. Module 6 synthesizes across the four traditions
and adds Indigenous popular music and queer liberation as cross-cutting
threads.

A research project runs in parallel with the modules across the term
and is worth 40 percent of the course grade. Students research a
genre and a single artist or group of personal significance and
present as a slide deck (18 to 20 slides, including title slide and
sources slide, with up to three slides carrying embedded audio or
video media) plus recorded video commentary. The project is
scaffolded into five graded checkpoints across the term: proposal
(June 21), annotated bibliography (June 28), full draft (July 19),
peer review (July 26), final submission (July 31). Materials live
in `final-project/`.

The hard-date schedule lives in the syllabus. The summer 2026 term
runs May 26 to July 31.

## Editorial conventions

These conventions hold for every page on the site. Drift here is
costly because students learn the visual and structural patterns
across modules.

**Listening guide structure.** Each guide opens with a course header,
page title, video link card, hero photo with caption, then a four-
sub-section context block (the sub-sections are flexible per artist
but the count is consistent), then a "Things to listen for" block
with four prompts (covering some combination of timbre, texture,
form, gesture), a reflective question, sources, and forward and back
navigation. The Module 3 anchor tracks added a per-track inline SVG
family-tree diagram at the pivot point between Context and Things
to listen for; that convention extends to Modules 4-6 if the
per-track family-tree pattern continues to make sense.

**Family-tree diagrams.** viewBox 720 wide, height fits the diagram
(340-440 typical), Courier Prime font throughout, the cool blue-grey
palette of the site's typewriter aesthetic (#1f2933 text, #5b6770
muted, #36546f accent stroke and connector lines, #e6e9ee fill,
#d4dae2 emphasis fill, #f4f1ea cream inverse text on the dark accent
endpoint), 1.5px stroke for box borders, 1.2px for connector lines,
time axis at the bottom with date anchors below, dashed lines for
"feedback influence" or displacement, solid lines for direct descent.
The highlighted track endpoint uses dark accent (#36546f) fill with
cream text. Each diagram has a detailed figcaption that flags the
simplifications the diagram makes. CSS support sits at `figure
svg.diagram` in `assets/style.css`.

**Methodology vocabulary.** Timbre, texture, form, and gesture are
the four frames introduced in the methodology reading and used
consistently across all subsequent listening guide pages. Music-
theory vocabulary (key, meter, tempo, the I-IV-V progression, the
12-bar blues, simple verse form, etc.) is introduced as needed and
glossed inline.

**Glossings.** Aggressive. Any specialized vocabulary in any domain
(music theory, music industry, history, geography, ethnomusicology)
gets a glossable button with a plain-English definition. Definitions
in `assets/glossary-data.js` are written for non-majors with no
musical background and run one to three sentences. The glossary is a
shared file that grows as new pages are added.

**Where glossings do not go.** Each glossable term is buttoned only
on the first substantive prose mention in a given page. Subsequent
mentions stay unbuttoned, even when they recur many times. Glossings
also stay out of: page headings, figure captions, navigation footer
text, song titles, album titles, film titles, and book titles
(typeset in `<em>` or in quotation marks). Landing pages
(`module*/index.html`, `syllabus.html`) are navigational summaries
and carry no glossings; students hit the gloss when they reach the
reading or listening guide where the term lives. The audit script
treats these as out-of-scope when flagging missed glosses.

Multi-word gloss buttons can render awkwardly inside narrow
monospace table cells: the dotted underline running across the
inter-word space looks visually broken at narrow column widths.
When a term appears in a reference table this way, the cleanest
fix is usually to drop the button in that specific cell and add
a parenthetical naming a concrete example instead (as done for
"house band" → "house band (Booker T. & the M.G.'s)" in the
Module 2 labels-list table). The term should still be glossed in
regular prose elsewhere on the page or in a related listening
guide. Log the skip in STATUS so the audit warning does not get
re-fixed later.

**Glossary content constraint.** Definitions are plain text only.
The loader injects strings via `text.textContent`, which means HTML
tags (`<em>`, `<strong>`), HTML entities (`&amp;`, `&lt;`), and
inline `<a>` links all render as literal characters in the popup.
The header comment of `glossary-data.js` documents this and gives
examples of what fails.

**Sources sections.** Student-facing bibliographic entries with
brief descriptive parentheticals. Scholars and journalists named in
prose ("Mark Burford has argued...", "biographer Peter Guralnick"),
full bibliographic info in the Sources section. No instructor-facing
notes (verification flags, pedagogical justifications, things to
revisit) in the live HTML; those live in commit messages, in STATUS,
or in dedicated planning markdown when needed.

**Internal sourcing (for the assistant).** Every factual claim in
student-facing course content needs to be grounded in at least one
source. That includes dates, biographical facts, musical analyses,
historical context, and attributed statements. No claims from
training-data memory alone, even confident-feeling ones. Search
before writing rather than after; if a claim cannot be sourced,
drop it or flag it for verification before publishing. Personnel-
list import-by-association is a recurring failure mode worth naming:
when a piece of biographical information appears near an artist's
name in a source but is not actually about that artist, the model
is prone to attaching it to the artist anyway. Double-check
personnel-adjacent biographical claims before they ship.

**Direct quotes.** Free. Use quotation when a real voice serves the
writing better than paraphrase, paraphrase when paraphrase is clearer
or more efficient. Multiple quotes from a single source are fine when
each does distinct work. No hard length ceiling, though extended
block quotes should still be used sparingly. The internal sourcing
rule still applies: every quote needs a real, verifiable source
attached.

**Photos.** Hero photo per track, left-aligned, with full attribution
caption. Wikimedia Commons preferred; editorial-use images from
publishers are defensible for educational use with attribution but
should be flagged for verification before launch (tracked in STATUS
under image rights).

**Visual identity.** Courier Prime served from Google Fonts, with
Courier and Courier New as fallbacks. Cooler off-white background
(`#f4f1ea`), slate-grey body text (`#5b6770`), near-black for
structural emphasis (`#1f2933`), faded blue accent (`#36546f`),
warm rust glossings (`#7a4a3a`). Two-size type hierarchy: page
title at 1.4em bold uppercase, everything else at 0.9em. Column at
820px max-width. All defined in `assets/style.css` through CSS
variables; new pages inherit the look automatically by linking the
shared stylesheet.

The two-warm-two-cool palette is by design: cool slate type and
cool blue accents (links, play button), warm cream background, and
warm rust glossings. The warm rust on glossings differentiates them
from links so students do not click expecting to leave the page,
and gives the typewriter pages a hand-annotated quality. Locked.

**Footer band.** The dark navigation footer at the bottom of every
page is edge-to-edge, which means `<nav class="track-nav">` is a
sibling of `<main>` rather than a child. New pages following the
listening guide pattern need to keep this structure: close `</main>`
first, then place the nav with its `.track-nav-inner` wrapper outside.

**Labels-table CSS modifier.** The Module 2 and Module 3 record-
labels reference tables use a `.schedule.labels-table` modifier
that drops `white-space: nowrap` on the first column, sets
`max-width: 14rem`, and adds a `.meta` span style for the city/dates
line that sits below the label name (`<span class="meta">`). The
syllabus schedule table stays on the bare `.schedule` class with
its original `nowrap` first-column behavior, which is right for
short date strings like "Sun, July 12." Future labels-table-style
uses should adopt the multi-class pattern (`class="schedule
labels-table"`) and the `<br><span class="meta">...</span>`
first-cell structure.

**Canvas markdown sources.** Markdown files in module folders
(quizzes, discussions, project assignment descriptions) follow a
consistent two-part structure. The top half is written for reading
and editing: structured headings, rubric, outcomes addressed,
internal notes for the instructor. A horizontal rule separates that
from a "PASTE INTO CANVAS BELOW THIS LINE" block formatted in plain
prose, ready to copy directly into Canvas. The two halves carry the
same substantive content; the paste block strips structural markdown
that would not render correctly in Canvas. When revising, edit both
halves; do not let them drift.

**Writing style.** Clear, direct, grounded in specific examples.
Prose paragraphs, not bullet lists. Use commas or parentheses where
an em dash might appear; do not use em dashes. Headings should be
minimal and not in title case. Constructive and actionable over
evaluative. Avoid double-negative-then-positive constructions
("There is no X. There is no Y. There is only Z."); reach for a
positive statement or a single comma-separated negative list
instead. Match the audience: student-facing materials read like a
person talking to a class, internal planning documents read like
notes between colleagues.

## Working with this repo

When student-facing content needs revision, edit the HTML directly.
When Canvas content needs revision, edit the Markdown file and copy
from its paste block into Canvas.

The glossary file is shared across every page. When you add new
glossings on a new page, append the new term definitions to
`assets/glossary-data.js`. Sections in the glossary are organized
roughly by the page or theme that introduced the term.

Before committing changes to a glossable HTML page or to the
glossary file, run `node scripts/check-glossings.js` to audit
gloss-button coverage. The script flags three things: buttons
that reference a `data-term` not in the glossary (a hard error,
the page is broken); the same `data-term` used more than once
on a page (a warning, since the convention is "first substantive
mention only"); and glossary labels that appear in the prose but
are not buttoned anywhere on the page (a warning, in case the
gloss got missed). Pass a single file or directory to limit the
audit. New pages should come back clean before they ship; some
intentional skips on shipped pages are documented in STATUS.

The audit script has known blind spots: it does not validate
definition-string contents against the textContent constraint
(plain text only); it clears any term that has any button on a
page, so a button placed at a later mention than the actual first
prose mention passes audit silently; and it does not check that
every page using `class="glossable"` also includes the two expected
`<script>` tags at end of body. STATUS tracks these for future
script enhancement.

GitHub Pages rebuilds within a minute or two of a push to `main`.
Live changes appear at https://csuebmusic.github.io/mus302/ shortly
after.

## Decisions worth remembering

Choices made across the build that are not obvious from reading
the files. These should not be revisited without a specific reason.

**Cultural roots framing, not chronology or genre.** The course is
organized around four cultural traditions and the dialogues between
them, with a synthesis module at the end. Within modules,
chronological structure is fine (Module 2 and Module 3 both run
their anchor tracks chronologically), but the top-level organizing
principle is cultural roots.

**Module 1 anchor tracks: only four.** Earlier planning included
Kendrick Lamar's "Alright" and Bad Bunny's "El Apagón" as Module 1
anchor tracks (six total). Those two were moved to Module 6
(synthesis), where they fit the contemporary cross-tradition framing
better. Module 1 has four anchor tracks: Cooke, Cruz, DeSanto,
Williams.

**Module 2 anchor tracks: five, chronological.** Bessie Smith with
Armstrong "St. Louis Blues" 1925, Sister Rosetta Tharpe "Strange
Things Happening Every Day" 1944, James Brown "Say It Loud" 1968,
Grandmaster Flash and the Furious Five "The Message" 1982, Beyoncé
"Formation" 2016. Arc: blues → gospel/rock pivot → soul/funk
political moment → hip hop → contemporary. Module 2 opens with a
full framing reading (`module2/roots-and-routes.html`), not a
shorter framing on the landing page.

**Module 3 anchor tracks: five, chronological, ending pre-Bad-Bunny.**
Tito Puente "Oye Como Va" (1962), Joe Bataan "Gypsy Woman" (1967),
Santana "Oye Como Va" (1970), Selena "Bidi Bidi Bom Bom" (1994),
Tego Calderón "Pa' Que Retozen" (2002). Salsa is not anchored in
Module 3 because Module 1's Cruz/Fania track already carries it;
the Module 3 framing reading cross-references back. Reggaeton is
anchored on Tego (the artistic-political anchor) rather than Daddy
Yankee's "Gasolina" 2004 (the commercial-breakthrough track), which
the framing reading carries as context. Module 6 picks up Bad
Bunny's "El Apagón" as the contemporary continuation. Module 3
opens with a full framing reading (`module3/roots-and-routes.html`,
"Many Roots, Shared Routes") parallel to Module 2's.

**Modules 4 and 5 framing reading: open per module.** Default
assumption is shorter framing on the landing page unless there is
a reason for a full reading.

**Indigenous artists in the framing reading.** The Module 1 cultural
roots reading uses Jim Pepper as the 1960s example of Indigenous
popular music, alongside Robbie Robertson and the Halluci Nation.
Pepper replaced an earlier draft that named Buffy Sainte-Marie. The
substitution reflects the 2023 CBC investigation into Sainte-Marie's
ancestry claims, which complicated her status as a straightforward
Indigenous example for an introductory reading. Sainte-Marie may
still belong in Module 6 as a case study in contested identity in
the folk revival; she does not belong in the framing reading as
the lead Indigenous example. Do not "fix" this back based on
training data.

**Glossings: aggressive but not exhaustive.** The convention is to
gloss specialized terms a non-majors student might not know that
are not defined inline in the prose; to gloss artists who will
recur across the course (one shared definition that grows with
use); and to skip glossing terms the surrounding prose itself
defines. The framing reading defines migration, displacement, and
diaspora in extended prose, so those are not glossed. The
methodology reading defines timbre, texture, form, and gesture
the same way and they are similarly not glossed.

**Final project specs.** The deck is 18 to 20 slides total, including
title slide and sources slide, with up to three of those slides
allowed to carry embedded audio or video media of the artist (the
remaining 15 to 17 are substantive content slides). The video
commentary has a minimum length determined by what it takes to walk
through the deck at a reasonable pace, with no maximum, and explicit
language asking students to be mindful that the instructor watches
all 60 of them across the two course sections. Slide design
organization is suggested (introduction of genre, introduction of
artist, musical analysis, argument, legacy, sources) but not
prescribed.

**Final project rubric weights.** Five checkpoint point totals:
proposal 20, annotated bibliography 25, draft 50, peer review 20,
final 100. Total 215 raw points scaling to 40 percent of the
course grade. The final's 100-point rubric breaks down: argument
and analysis 35, genre and cultural context 20, source integration
15, personal significance 10, slide deck quality 10, video
commentary 10. Each checkpoint markdown file names the SLOs it
addresses; full mapping is in `final-project/05-final.md`.

**Final project peer review structure.** Six structured questions
each reviewer answers per assigned draft, with question 6 required
to be a specific actionable suggestion. Two reviews per student.
Canvas's built-in peer review tool handles random assignment after
the draft deadline.

**Personal significance framing in the project.** Open by design.
Four angles named in the landing page (music students grew up with,
music they discovered that changed them, music their community
made, music outside their tradition they have come to care about).
Disclosure is up to the student; significance is a stance behind
the choice, not required content of the project itself. Do not
narrow this if revising the project page.

**Wikipedia is allowed as a citable source on the final project.**
The original final-project pages had a rule that "Wikipedia is fine
for orienting yourself but does not count as a source." That rule
was removed mid-build. Well-cited Wikipedia articles and similar
reference works now count as sources, with a soft nudge asking
students to follow at least one Wikipedia footnote down to a
primary source when they cite the article. AI-generated text and
unverifiable internet posts are still excluded. Do not "fix" this
back to the old rule.

**Methodology reading structure.** The reading opens with a "how to
actually listen" section, then a tempo/beat/meter/rhythm reference
section with three SVG meter diagrams (4/4, 12/8, 3/4) that all use
the same "main beats numbered, ampersand subdivisions" labeling
logic, then the four analytical frames (timbre, texture, form,
gesture), then description-pattern-claim-evidence. The rhythmic-
grid section is reference vocabulary, not a fifth analytical frame.
Three meter diagrams are figs 1-3; the texture and form diagrams
are figs 4-8. Eight figures total, all using the same courier-
monospace and palette colors.

---

Course materials © Inés Thiebaut. All rights reserved.
Photos and embedded media are used under their respective licenses,
credited inline on each page.
