# Project status

Running snapshot of where the build is. Update at the end of any
session that ships meaningful work. The README has the durable
conventions and locked decisions; this file has what is done, what
is next, and what is open.

Last updated: end of a second schedule restructure plus a project-
checkpoint consolidation. Two substantive changes in this session.

First, the Modules 2-5 deadline structure. The previous "all four
due on the same Sunday" shape did not work for Canvas's peer-review
tool (peer-review fires after the initial-post deadline, so all
four modules' peer reviews would have stacked on a single weekend).
The new shape is one module per week, in strict sequence: Module 2
due Sun June 14, Module 3 due Sun June 21, Module 4 due Sun July 5,
Module 5 due Sun July 12. Each module's discussion initial post is
due on the module deadline; each module's peer responses are due
the following Sunday. Module 3's peer responses are an exception
(due Sun July 5, two weeks after the initial post) because the
project proposal-and-bibliography is due Sun June 28 in the gap
and Inés did not want students juggling peer review and a project
checkpoint on the same weekend.

Second, the project checkpoint structure. The previous five-
checkpoint structure (proposal, annotated bibliography, draft, peer
review, final) collapsed the proposal and annotated bibliography
into a single "Proposal and Preliminary Bibliography" checkpoint
due Sun June 28. The combined checkpoint is 35 points (20 proposal,
15 bibliography); the bibliography portion is lighter than the old
standalone (3-4 sources with one-sentence descriptions, rather than
5-7 sources with fuller annotations). The annotation work that
used to live in the bibliography moves into the draft itself, where
students discuss sources in context as part of the deck. Total
project raw points 215 → 205. Project file numbering re-sequenced:
01-proposal-and-bibliography.md, 02-draft.md, 03-peer-review.md,
04-final.md.

Architectural change: Modules 2-5 are now strictly sequential, not
"in any order." This propagates to the syllabus, the README's
locked decisions, the Module 1 framing reading's "What this means
for the rest of the course" section, and Module 1's landing page.

The new schedule:
  Sun May 31:  (week 1, no deadline)
  Sun June 7:  Module 1 complete (quiz + discussion initial post)
  Sun June 14: Module 2 (quiz + initial post); Module 1 peer responses
  Sun June 21: Module 3 (quiz + initial post); Module 2 peer responses
  Sun June 28: Project proposal and preliminary bibliography
  Sun July 5:  Module 4 (quiz + initial post); Module 3 peer responses
  Sun July 12: Module 5 (quiz + initial post); Module 4 peer responses
  Sun July 19: Project full draft; Module 5 peer responses
  Sun July 26: Module 6 quiz; project peer review
  Fri July 31: Final submission

Module 6 has a quiz only, no discussion. The synthesis work that a
discussion would normally carry is folded into the project's final
revision arc.

Glossary count: 428. Working tree clean.

## Term and dates

Summer 2026: May 26 to July 31, 2026. Nine instructional weeks plus
finals. Hard-date schedule lives in `syllabus.html`.

## What is complete

**Module 1: Orientation and Methodology.** Fully built and reviewed.
Landing page, methodology reading (`how-to-listen.html`, eight figures
including three meter diagrams and five texture/form diagrams),
framing reading (`cultural-roots.html`), four anchor-track listening
guides (Cooke, Cruz, DeSanto, Williams), discussion and quiz.

**Module 2: African American foundational traditions.** Fully built.
Landing page, framing reading (`roots-and-routes.html`, with Great
Migration map, labels reference table, lineage SVG diagram), five
chronological anchor-track listening guides (Bessie Smith with
Armstrong 1925, Tharpe 1944, Brown 1968, Grandmaster Flash and the
Furious Five 1982, Beyoncé 2016), discussion, and quiz.

**Module 3: Latin diasporic traditions.** Fully built. Landing page,
framing reading (`roots-and-routes.html`, "Many Roots, Shared
Routes," with Pearson migration map and labels table), five
chronological anchor-track listening guides each with an inline
family-tree SVG diagram at the Context-to-listening-prompts pivot
(Puente 1962, Bataan 1967, Santana 1970, Selena 1994, Tego Calderón
2002), discussion (in the new "pick a reflective question" pattern),
and quiz.

**Final project module.** Fully built. Landing page, five Canvas
markdown sources for the five graded checkpoints (proposal, annotated
bibliography, draft, peer review, final).

## What is pending

**Module 3 small cleanup pass** (could go in one polish commit at
some point):
- Cross-page glossings still to retrofit: `chord-progression` on
  `module2/roots-and-routes.html` line 38, `module2/track1-bessie-
  smith.html` line 80, `module2/track3-brown.html` lines 66 and 72;
  `onomatopoeia` on `module1/track2-cruz.html`.
- Forward-reference links to Modules 4 and 6 in the Module 3 framing
  reading: broken anchor tags at lines 189 and 201. Decision deferred
  until those modules exist.

**Module 3 facts to verify before launch** (in addition to image
rights below):
- Discos Falcon founding date claimed as 1947.
- Tico Records claimed dates 1948-1974.
- EMI Latin geography claimed as "Los Angeles / Miami." Corporate
  history is more complicated; verify both city labels are
  defensible.
- Q-Productions founding year claimed as 1986.

**Modules 4 and 5.** None drafted. Each will follow the `module1/`
pattern: an `index.html` landing page, listening guides for the
module's anchor tracks, optional framing reading, `discussion.md`
in the new "pick a reflective question" pattern (see Locked
decisions below), and `quiz.md`.
- Module 4: Asian American traditions. Filipino American R&B and
  jazz, Asian American jazz movement, Filipino DJs and turntablism,
  Asian American hip hop, indie, electronic, K-pop crossover.
- Module 5: European American immigrant and working-class traditions.
  Country and folk, doo-wop and crooner traditions, Brill Building,
  punk, synthesis figures.

**Module 6: Cross-cutting threads and synthesis.** Indigenous popular
music (Jim Pepper, Robbie Robertson, the Halluci Nation are named
in the framing reading), queer liberation (disco era, AIDS crisis,
contemporary artists), and contemporary cross-tradition work
(Kendrick Lamar's "Alright," Bad Bunny's "El Apagón").

**Image rights to verify before launch.** Same defensible-educational-
use category as the existing KQED/Getty editorial photos already in
the course; tracked here so they get cleared or swapped before the
course goes live.
1. Module 2 Great Migration map (`assets/images/great-migration-
   map.jpg`). Map by Blair Tinker for the Pathstone Antiracist
   Curriculum Project, sourced from Clarissa Uprooted (Teen
   Empowerment, Rochester NY). The ARCP / RIT / U Rochester
   ecosystem describes materials as freely available for educator
   use; source site has a generic All Rights Reserved notice.
   Contact info@arcjustice.org or
   ClarissaUprooted@teenempowerment.org for explicit permission, or
   swap for a public-domain alternative.
2. Module 3 Pearson migration map (`assets/images/latin-american-
   migration-map.jpg`). © 2005 Pearson Prentice Hall. Defensible
   educational use with attribution in the figcaption. Contact
   Pearson education permissions, or swap for a public-domain or
   Creative-Commons alternative (Migration Policy Institute, US
   Census, Pew Research Center, or hand-drawn equivalent).
3. Hero photos across Modules 1-3. Editorial-use copyrighted photos
   from KQED, Getty, Grosso! Recordings, Salsoul / Bataan Music,
   Tucker Ransom estate, NPR/Coburn Dukehart, and similar. All
   carry attribution captions and are flagged for verification or
   swap before launch.
4. Module 3 Track 4 Selena hero photo specifically: current image is
   widely circulated but unattributed via iHeart / Rovi metadata.
   Stronger candidates exist: Al Rendon 1992 *Entre A Mi Mundo*
   session and John Dyer 1992 *Mas Magazine* session, both better
   attributed. Consider swap before launch.

**Glossary intentional skips** (audit warnings to live with). The
audit reports 29 warnings on Module 3 after the fresh-eyes pass; all
fall into the categories below. Audit reports a handful more on Module
2; same categories. The fresh-eyes pass cleared five real misses
(`waltz`, `Loíza` placement, `rhythm-section`, `corpus-christi`,
`horn`); the rest are documented skips.

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
   is actually a wrong-sense match.
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
   documented intentional skips on Track 2 itself (already noted in
   the previous STATUS), same patterns as 2 and 3.

**Audit script future improvements.** Three blind spots accumulated
across the build, none blocking, all worth folding in eventually:
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

## Recently locked decisions

These decisions were made during the build and should propagate to
new modules. Migrate to the README's "Decisions worth remembering"
section the next time README is touched.

**Modules 2-5 are strictly sequential.** Module 2 first, then 3,
then 4, then 5, one per week. Each module has its own deadline and
its own discussion (initial post on the module deadline, peer
responses one week later via Canvas's automatic peer-review tool).
Module 6 follows Module 5. The earlier "in any order" framing is
retired and removed from syllabus, README, and Module 1 framing.

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

**Project: four checkpoints, not five.** Proposal and preliminary
bibliography are combined into a single checkpoint due Sun June 28.
Combined point value 35 (20 proposal, 15 bibliography). The
bibliography portion is lighter than the old standalone (3-4
sources with one-sentence descriptions, rather than 5-7 sources
with fuller annotations); the annotation work moves into the draft
itself, where students discuss sources in context as part of the
deck. Total project raw points 215 → 205. File numbering re-
sequenced.

**Module 6 has a quiz, not a discussion.** The synthesis work a
discussion would normally do is folded into the project's final
revision arc, which is itself a synthesis exercise. Module 6's
quiz still covers Indigenous popular music, queer liberation, and
the contemporary cross-tradition material.

## Decisions still open

- **Modules 4 and 5 anchor track lineups.** Each module needs its
  own short list, ideally previewed by the artists named in the
  framing reading where they overlap.
- **Module 6 anchor tracks beyond Lamar and Bad Bunny.** Indigenous
  and queer liberation threads need their own anchor tracks.
- **Whether Modules 4 and 5 need full framing readings of their own.**
  Modules 2 and 3 each have one. Default assumption: shorter framing
  on the landing page unless there's a reason for a full reading.
- **Aretha Franklin placement.** Inés wants Aretha somewhere in the
  course. Most natural fits are Module 5's Brill Building section
  (she covered Goffin/King) or as a deep cut in Module 6. To be
  decided when those modules get built.

## Operational notes

The GitHub PAT is stored in the project instructions. If the PAT
is rotated, update the project instructions; the README does not
contain it.

Canvas peer review for the final project draft uses Canvas's
built-in peer review tool with random assignment. Late draft
submissions (after July 19) need to be manually assigned by the
instructor; budget time on July 20-21 for cleanup. Note also that
under the current schedule, peer-review opens immediately after
the draft deadline (no buffer for instructor draft feedback before
peer review begins), so instructor draft feedback runs in parallel
with the peer-review window.
