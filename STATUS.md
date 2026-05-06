# Project status

Running snapshot of where the build is. Update at the end of any
session that ships meaningful work. The README has the durable
conventions and locked decisions; this file has what is done, what
is next, and what is open.

Last updated: end of Module 3 anchor-tracks build. All five Module 3
listening guides shipped with their family-tree diagrams. STATUS and
README trimmed in the same session.

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

**Module 3: Latin diasporic traditions.** Anchor-tracks set complete.
Framing reading (`roots-and-routes.html`, "Many Roots, Shared Routes,"
with Pearson migration map and labels table), five chronological
anchor-track listening guides each with an inline family-tree SVG
diagram at the Context-to-listening-prompts pivot (Puente 1962,
Bataan 1967, Santana 1970, Selena 1994, Tego Calderón 2002).

**Final project module.** Fully built. Landing page, five Canvas
markdown sources for the five graded checkpoints (proposal, annotated
bibliography, draft, peer review, final).

## What is pending

**Module 3 wrap-up.**
1. `module3/index.html` landing page, mirroring the Module 1 and
   Module 2 pattern. Track 5's nav footer points to it and currently
   404s; this is the natural next step.
2. `module3/discussion.md`.
3. `module3/quiz.md`.

**Module 3 small cleanup pass** (could go in one polish commit before
or after the wrap-up):
- Cross-page glossings still to retrofit: `chord-progression` on
  `module2/roots-and-routes.html` line 38, `module2/track1-bessie-
  smith.html` line 80, `module2/track3-brown.html` lines 66 and 72;
  `onomatopoeia` on `module1/track2-cruz.html`; `corpus-christi` on
  `module3/roots-and-routes.html` line 28.
- Astrodome attendance figure standardization. Framing reading says
  "60,000," Track 4 says "more than 60,000." Wikipedia gives 66,994
  specifically. Pick one and use it consistently.
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
module's anchor tracks, optional framing reading, `discussion.md`,
and `quiz.md`.
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

**Glossary intentional skips** (audit warnings to live with).
1. `house-band`, `w-c-handy`, `decca`, `muddy-waters` in Module 2's
   labels-list table cells. Multi-word gloss buttons render awkwardly
   inside narrow monospace cells. All four terms are glossed in
   regular prose elsewhere on the site.
2. Equivalent labels-table skips on the Module 3 framing reading
   (logged at audit time). Same pattern.
3. `dominant` on Module 2 Track 4 (an English adjective in the
   reflective question, not the music-theory V chord).
4. Module 3 Track 2 (Bataan) listening-guide skips: four documented
   intentional skips. Same pattern as the labels-table cells.

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
submissions (after July 12) need to be manually assigned by the
instructor; budget time on July 13-14 for cleanup.
