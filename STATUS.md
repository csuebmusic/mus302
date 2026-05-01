# Project status

This file is the running summary of where the course build is.
Update it at the end of any session that ships meaningful work.
The README has the durable conventions and decisions; this file
has the time-sensitive picture of what is done, what is next,
and what is still open.

Last updated: end of the session that landed the Module 2 framing
reading and locked Module 2 anchor track selection.

## Term and dates

Summer 2026 term: May 26 to July 31, 2026. Nine instructional
weeks plus finals. Hard-date schedule is in `syllabus.html`.

## What is complete and live

**Module 1: Orientation and Methodology.** Fully built and
reviewed.
- `module1/index.html`: landing page with module overview,
  deadlines, content notice, and instructor contact.
- `module1/how-to-listen.html`: the methodology reading
  (timbre, texture, form, gesture; description-pattern-claim-
  evidence). Five SVG figures embedded inline.
- `module1/cultural-roots.html`: the framing reading (cultural
  traditions, migration/displacement/diaspora, four traditions
  preview, Module 6 threads, intersections, listener position).
- Four listening guides for the anchor tracks: Sam Cooke
  ("A Change Is Gonna Come"), Fania All-Stars with Celia Cruz
  ("Quimbara"), Sugar Pie DeSanto ("I Don't Wanna Fuss"), Hank
  Williams ("I'm So Lonesome I Could Cry").
- `module1/discussion.md`: discussion prompt with Canvas paste
  block. Lives in Canvas as the Module 1 discussion thread.
- `module1/quiz.md`: 12-question checkpoint quiz with student
  intro, structured questions, Canvas paste block, and
  bulleted answer key.
- The two readings link out to each anchor track's listening
  guide at the first substantive prose mention.

**Module 2: African American foundational traditions.** Partial.
- `module2/roots-and-routes.html`: the framing reading.
  Five sections (what foundational means, roots in spirituals
  and the blues, routes via Great Migration and recording
  industry, sacred-secular crossover, modes of political work).
  Embedded SVG lineage diagram from spirituals through hip hop
  with the five anchor tracks placed at their nodes.
- Cross-links to Module 1's Cooke listening guide at two
  substantive prose mentions.
- New glossary entries added: `spirituals`, `west-african-music`.

**Final project module.** Fully built.
- `final-project/index.html`: student-facing landing page with
  full project description, what "personal significance"
  means, what the deck has to do, suggested deck organization,
  all five deadlines, tech guide, source expectations, and
  outcomes mapping. Linked from Canvas wherever the project
  lives.
- Five Canvas markdown sources for the five graded checkpoints:
  `01-proposal.md`, `02-annotated-bibliography.md`,
  `03-draft.md`, `04-peer-review.md`, `05-final.md`.

## What is pending

**Module 2 (rest of it).** The framing reading is done; the
landing page, five listening guides, discussion, and quiz are
not yet drafted.
- `module2/index.html`: landing page following the Module 1
  pattern. Should list the framing reading, the five listening
  guides in chronological order, the discussion, and the quiz.
- Listening guides for the five anchor tracks, in chronological
  order:
  Track 1: Bessie Smith with Louis Armstrong, "St. Louis Blues"
    (1925). Recorded blues anchor; predates the formal 1940s
    start of the course but anchors the lineage.
  Track 2: Sister Rosetta Tharpe, "Strange Things Happening
    Every Day" (1944). Gospel-to-rock pivot; Black queer woman
    written back into rock origin.
  Track 3: James Brown, "Say It Loud — I'm Black and I'm Proud"
    (1968). Soul-to-funk turn at the Black Power moment.
  Track 4: Grandmaster Flash and the Furious Five, "The Message"
    (1982). Hip hop's pivot from party to social commentary in
    the deindustrializing city.
  Track 5: Beyoncé, "Formation" (2016). Black Southern identity
    on the largest stage of American mass culture.
- `module2/discussion.md`: discussion prompt with Canvas paste
  block. Default frame from the framing reading: put two of
  the five tracks in conversation.
- `module2/quiz.md`: checkpoint quiz with student intro,
  structured questions, Canvas paste block, answer key.

**Modules 3 through 5.** None yet drafted. Each will follow
the `module1/` pattern: an `index.html` landing page, the
listening guides for the module's anchor tracks (count to be
decided per module), `discussion.md`, and `quiz.md`.

- Module 3: Latin diasporic traditions. Mambo, Latin soul and
  boogaloo, salsa, Tejano, Latin rock and the Chicano movement,
  reggaeton, Latin trap.
- Module 4: Asian American traditions. Filipino American R&B
  and jazz, Asian American jazz movement, Filipino DJs and
  turntablism, Asian American hip hop, indie, electronic, K-pop
  crossover.
- Module 5: European American immigrant and working-class
  traditions. Country and folk, doo-wop and crooner traditions,
  Brill Building, punk, synthesis figures.

**Module 6.** Cross-cutting threads and synthesis: Indigenous
popular music (Jim Pepper, Robbie Robertson, the Halluci Nation
named in the framing reading), queer liberation (disco era,
AIDS crisis, contemporary artists), and contemporary
cross-tradition work (Kendrick Lamar's "Alright" and Bad
Bunny's "El Apagón" land here, moved from earlier Module 1
plans).

**Aretha Franklin placement.** Ines wants Aretha somewhere in
the course. Most natural fits are Module 5's Brill Building
section (she covered Goffin/King) or as a deep cut in Module 6.
To be decided when those modules get built.

**Glossary housekeeping.** Two pre-existing duplicate keys in
`assets/glossary-data.js`: `blues` (lines 34 and 853) and
`country-music` (lines 450 and 858). The later definitions are
the more thorough ones; the JavaScript object literal will use
whichever is parsed last, which happens to be the better one,
so this is not currently breaking anything. The earlier
`country-music` entry at line 450 carries Hank-Williams-specific
content that the later more-general entry does not; cleanup
should preserve any track-specific content from the earlier
entries before deleting them. Not urgent. Worth doing as part
of one of the upcoming modules.

**Syllabus revisions, if any.** Not flagged yet.

## Decisions made and locked

These decisions should not be revisited without a specific
reason. They are documented in more detail in the README's
"Decisions worth remembering" section.

- Cultural roots framing, not chronology or genre.
- Module 1 anchor tracks: only four (Cooke, Cruz, DeSanto,
  Williams). Lamar and Bad Bunny moved to Module 6.
- Module 2 anchor tracks: five, in chronological order.
  Bessie Smith with Armstrong "St. Louis Blues" 1925,
  Sister Rosetta Tharpe "Strange Things Happening Every Day"
  1944, James Brown "Say It Loud" 1968, Grandmaster Flash and
  the Furious Five "The Message" 1982, Beyoncé "Formation" 2016.
  Arc: blues → gospel/rock pivot → soul/funk political moment →
  hip hop → contemporary.
- Module 2 opens with a full framing reading
  (`roots-and-routes.html`), not just a shorter framing on the
  landing page. Subsequent modules' need for full readings is
  still open per module.
- Indigenous artist in framing reading: Jim Pepper, not
  Buffy Sainte-Marie.
- Final project: 18-20 slides, up to 3 media slides, video
  length determined by deck pacing with no max, structured
  six-question peer review form.
- Project rubric weights: 20/25/50/20/100 across the five
  checkpoints, scaling to 40 percent of the course grade.
- Editorial conventions: aggressive glossings, internal
  sourcing rule for the assistant (every claim grounded in
  at least one source), free quotation rule (multiple quotes
  per source fine, no hard length ceiling).
- Visual identity: cool slate type, cool blue links, warm
  cream background, warm rust glossings (#7a4a3a). Locked.

## Decisions still open

- Module 3 through 5 anchor track selection. Each module
  needs its own short list, ideally previewed by the artists
  named in the framing reading where they overlap.
- Module 6 anchor track selection beyond the two contemporary
  tracks (Lamar, Bad Bunny). Indigenous and queer liberation
  threads need their own anchor tracks.
- Whether each subsequent module needs a methodology-style
  reading of its own. Module 2 has one; whether Modules 3, 4, 5
  need full readings or shorter framing on the landing page is
  module-by-module. Default assumption stays: shorter framing
  on the landing page unless there's a reason for a full reading.
- Aretha Franklin placement (see "What is pending").

## Operational notes

The GitHub PAT is stored in the project instructions. If the
PAT is rotated, update the project instructions; the README
does not contain it.

Canvas peer review for the final project draft uses Canvas's
built-in peer review tool with random assignment. Late draft
submissions (after July 12) need to be manually assigned by
the instructor; budget time on July 13 to 14 for cleanup.
