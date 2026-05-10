# Conventions and decisions

Internal reference for the build. Editorial conventions hold across
every page on the site; design and pedagogical decisions are choices
made across the build that should not be revisited without specific
reason. Both are stable knowledge: this document changes when those
conventions or decisions actually change, which should be rare.

For session-by-session work in progress (what is built, what is
next, what is open), see `STATUS.md` in this folder.

For audit-script behavior, intentional skips, and known blind spots,
see `audit-notes.md` in this folder.

## Editorial conventions

These conventions hold for every page on the site. Drift here is
costly because students learn the visual and structural patterns
across modules.

**Listening guide structure.** Each guide opens with a course header,
page title, video link card, hero photo with caption, then a four-
sub-section context block (the sub-sections are flexible per artist
but the count is consistent), then a "Things to listen for" block
with four prompts (covering some combination of timbre, texture,
form, gesture), a reflective question, sources, and the site footer.
The Module 3 anchor tracks added a per-track inline SVG family-tree
diagram at the pivot point between Context and Things to listen for;
that convention extends to Modules 4-6 if the per-track family-tree
pattern continues to make sense.

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
also stay out of: page headings, figure captions, site footer text,
song titles, album titles, film titles, and book titles
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
guide. Log the skip in `audit-notes.md` so the audit warning does
not get re-fixed later.

**Glossary content constraint.** Definitions are short prose paragraphs.
The loader injects strings via `text.innerHTML`, so inline HTML is
permitted for `<em>` (album, song, book, and film titles), `<strong>`
(rare emphasis), and `<a href="...">` cross-links. Block-level HTML
(no `<p>`, `<ul>`, `<li>`, `<div>`, `<h1>`-`<h6>`) is not permitted;
definitions are single short paragraphs with no internal structure.
The header comment of `glossary-data.js` documents the conventions
in detail.

**Sources sections.** Student-facing bibliographic entries with
brief descriptive parentheticals. Scholars and journalists named in
prose ("Mark Burford has argued...", "biographer Peter Guralnick"),
full bibliographic info in the Sources section. No instructor-facing
notes (verification flags, pedagogical justifications, things to
revisit) in the live HTML; those live in commit messages or in
dedicated planning markdown when needed. Open verify-before-launch
items belong in `STATUS.md` under Open.

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
caption. Wikimedia Commons preferred when available; editorial-use
images from publishers (KQED, Getty, Grosso! Recordings, Salsoul /
Bataan Music, Tucker Ransom estate, NPR / Coburn Dukehart, and similar)
are defensible for educational use with attribution. All images on
the site ship under educational fair use: single-image non-commercial
classroom use, full attribution in figcaptions, no displacement of the
original market. The same framework covers the substantive teaching
figures (the Module 2 Great Migration map by Blair Tinker for the
Pathstone Antiracist Curriculum Project; the Module 3 Pearson
migration map © 2005 Pearson Prentice Hall) and the decorative hero
photos. If a rights holder requests removal, swap to a public-domain
or Creative-Commons alternative; the maps in particular have ready
substitutes from the Migration Policy Institute, US Census, and Pew
Research Center.

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

**Course header.** Two-paragraph block at the top of every student-facing
page. The first paragraph (`p.course-id`) carries two lines joined by a
`<br>`: "CSU East Bay · Music Department" then "MUS 302 · What to Listen
for in Music". Both lines render at body size in the body's typewriter
font. The second paragraph (`p.module-id`) carries the page's specific
context (e.g. "Module 4: Asian American Traditions · Listening Guide ·
Track 2 of 5" on a track page, or "Summer 2026 · Inés Thiebaut" on a
landing page) and renders at 1.4em, the same size as `h1.track-title`
and its `.track-number` span, so the module-id and the page title share
a typographic weight at the top of the page. New pages must include both
paragraphs.

**Site footer.** Edge-to-edge dark band at the bottom of every page,
two lines: "CSU East Bay · Music Department" then "Inés Thiebaut ·
ines.thiebaut@csueastbay.edu · Summer 2026". The `<footer
class="site-footer">` element is a sibling of `<main>` rather than a
child so it can span the full viewport; the `.site-footer-inner`
wrapper holds it to column width. New pages following the listening
guide pattern need to keep this structure: close `</main>` first,
then place the footer with its `.site-footer-inner` wrapper outside.
Track-to-track prev/next navigation is intentionally not part of the
footer; students navigate through Canvas and the module landing
pages rather than via in-page page-flipping links. Update the term
line at the start of each new term.

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
anchor tracks (six total). Those two were removed when the Module 1
lineup tightened around the four-tradition cross-cultural contrast.
Lamar's "Alright" is now substantively treated in Module 2's "what
this module leaves out" section as the BLM-era conscious-hip-hop
endpoint of the lineage Track 4 (Grandmaster Flash) introduces; Bad
Bunny's "El Apagón" is substantively treated in Module 3's "what
this module leaves out" section as the contemporary peak of the
reggaeton-into-Latin-trap tradition Track 5 (Tego) introduces. Both
are explicitly named as defensible final-project subjects. Module 1
has four anchor tracks: Cooke, Cruz, DeSanto, Williams.

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
the framing reading carries as context. Bad Bunny's "El Apagón" and
the broader 2010s-2020s Latin trap moment are treated in the "what
this module leaves out" section as the contemporary continuation
and named as final-project territory. Module 3 opens with a full
framing reading (`module3/roots-and-routes.html`, "Many Roots,
Shared Routes") parallel to Module 2's.

**Module 5 anchor tracks: five, chronological.** Frankie Lymon
and the Teenagers "Why Do Fools Fall in Love" (1956), Joan Baez
"Mary Hamilton" (1960), the Drifters "Up on the Roof" (1962),
Wendy Carlos "Switched-On Bach" excerpt (1968), Bruce Springsteen
"The River" (1980). Arc: cross-ethnic urban doo-wop → Ulster Scots
ballad inheritance reactivated through the folk revival → Brill
Building songwriting tradition → synthesis pioneers as a pivot
beyond the singer-songwriter assumption → deindustrialization-
era working-class heartland rock. Country is not anchored in
Module 5 because Module 1's Hank Williams track already carries
that thread; the Module 5 framing reading cross-references back
and the Baez track picks up the Ulster Scots ballad inheritance
that feeds country and bluegrass. Aretha Franklin was considered
for the Brill Building anchor (via her recording of Goffin/King's
"Natural Woman") and ruled out: Module 5 stays inside European
American immigrant and working-class traditions, the Drifters'
recording does the songwriter-as-craft work, and Aretha's
interpretive presence is amply represented elsewhere in the
course's framing prose. Module 5 opens with a full framing reading
parallel to Modules 2 and 3.

**Modules 4 and 5 framing reading.** The default for Modules 4
and 5 was shorter framing on the landing page unless there was
a specific reason for a full reading. Both ended up with full
readings (`module4/roots-and-routes.html`, "Many Routes Across
the Pacific"; `module5/roots-and-routes.html`). Module 5 in
particular: the "European American" frame is the most internally
heterogeneous of the four cultural traditions and benefits from
explicit prose laying out the Ulster Scots, Eastern
European Jewish, Italian/Irish/Polish urban Catholic, and
German/Eastern European synthesis-pioneer threads the listening
guides each touch.

**Modules 2-5 are strictly sequential.** Module 2 first, then 3,
then 4, then 5, one per week. Each module has its own deadline and
its own discussion (initial post on the module deadline, peer
responses one week later via Canvas's automatic peer-review tool).

**Modules 2-5 discussion pattern.** Pick one of the listening guides'
reflective questions and respond to it. After the initial-post
deadline, Canvas's peer-review tool automatically assigns each
student two classmates' posts to respond to. Two assigned responses,
not student-chosen. The pattern moves the close-listening work into
the listening guides themselves (where the reflective questions
already exist as standalone prompts), reduces the per-discussion
writing-and-feedback load for a sixty-student section, and lets
Canvas spread coverage across all five tracks rather than letting
the most popular two or three tracks attract all the responses.
Module 1's discussion is a separate pattern (open thread, "pick one
track and write about your strongest reaction") and stays on its
existing shape because Module 1 anchors students to the methodology
and the open-thread pattern is appropriate for that orientation.
The Modules 2-5 pattern requires Canvas's peer-review feature on
the discussion to be set to "automatic" rather than "manual" so
assignments fire on the deadline.

**Indigenous artists in the framing reading.** The Module 1 cultural
roots reading uses Jim Pepper as the 1960s example of Indigenous
popular music, alongside Robbie Robertson and the Halluci Nation.
Pepper replaced an earlier draft that named Buffy Sainte-Marie. The
substitution reflects the 2023 CBC investigation into Sainte-Marie's
ancestry claims, which complicated her status as a straightforward
Indigenous example for an introductory reading. Sainte-Marie may
still belong in the course as a case study in contested identity in
the folk revival, in one of Modules 2 through 5's "what this module
leaves out" sections or as a final-project topic. She does not
belong in the Module 1 framing reading as the lead Indigenous
example. Do not "fix" this back based on training data.

**Glossings: aggressive but not exhaustive.** The convention is to
gloss specialized terms a non-majors student might not know that
are not defined inline in the prose; to gloss artists who will
recur across the course (one shared definition that grows with
use); and to skip glossing terms the surrounding prose itself
defines. The framing reading defines migration, displacement, and
diaspora in extended prose, so those are not glossed. The
methodology reading defines timbre, texture, form, and gesture
the same way and they are similarly not glossed.

**Final project: four checkpoints.** Combined proposal-and-
preliminary-bibliography, draft, peer review, final. Combined
checkpoint replaces what was originally proposal plus annotated
bibliography as separate items; the bibliography portion is lighter
than the old standalone (3-4 sources with one-sentence descriptions,
not 5-7 sources with fuller annotations) and the annotation work
moves into the draft, where students discuss sources in context as
part of the deck.

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

**Final project rubric weights.** Four checkpoint point totals:
proposal and preliminary bibliography 35, draft 50, peer review 20,
final 100. Total 205 raw points scaling to 40 percent of the
course grade. The final's 100-point rubric breaks down: argument
and analysis 35, genre and cultural context 20, source integration
15, personal significance 10, slide deck quality 10, video
commentary 10. Each checkpoint markdown file names the SLOs it
addresses; full mapping is in `final-project/04-final.md`.

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

## Operational notes

**GitHub PAT.** The personal access token for pushes to the repo
is stored in the project instructions for this assistant. If the
PAT is rotated, update the project instructions; the README does
not contain it.

**Canvas peer review for the project draft.** Uses Canvas's built-in
peer review tool with random assignment after the draft deadline.
Late draft submissions need manual assignment by the instructor;
budget time on the day or two after the draft deadline for cleanup.
Under the current schedule, peer review opens immediately after the
draft deadline, so instructor draft feedback runs in parallel with
the peer-review window rather than preceding it.

**Term and schedule.** Hard-date schedule lives in `syllabus.html`,
which is the canonical source. STATUS.md does not duplicate it.

**Unicode characters in HTML files.** Type literal Unicode characters
(curly apostrophes 's', curly quotes "...", em dashes, accented
letters) directly into HTML body content. JavaScript-style escapes
like `\u2019` work inside JS string literals (the glossary-data.js
file uses them by convention) but render as the literal six-character
sequence inside HTML body content. If a paragraph shows escapes like
'period\u2019s' in the rendered output, the fix is to replace each
`\uXXXX` with the actual character.

