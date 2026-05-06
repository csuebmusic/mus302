# Project status

Running snapshot of where the build is. Update at the end of any
session that ships meaningful work. Editorial conventions and
locked design decisions live in `conventions.md`; audit-script
behavior and intentional-skip categories live in `audit-notes.md`.
This file has what is done, what is next, and what is open.

Last updated: end of a session that restructured the under-the-hood
folder. Editorial conventions, locked design decisions, audit-script
notes, and glossary intentional-skip categories all moved out of
README and STATUS into dedicated documents. The README is now a
short public-facing overview.

Modules 1, 2, 3, and the final-project module are fully built and
shipped. Modules 4, 5, 6 are still to draft.

The schedule (locked):
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

Glossary count: 428. Working tree clean at commit time.

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

**Final project module.** Fully built. Landing page, four Canvas
markdown sources for the four graded checkpoints (combined proposal-
and-bibliography, draft, peer review, final).

## What is pending

**Module 3 small cleanup pass** (deferred items):
- Forward-reference links to Modules 4 and 6 in the Module 3 framing
  reading: broken anchor tags at lines 189 and 201. Decision deferred
  until those modules exist.

**Module 3 facts to verify before launch:**
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

**Images: educational fair use claimed.** All images in the course
ship under educational fair use with full attribution in figcaptions.
This includes the Module 2 Great Migration map (Blair Tinker for the
Pathstone Antiracist Curriculum Project), the Module 3 Pearson
migration map (© 2005 Pearson Prentice Hall), and the hero photos
across Modules 1-3 (KQED, Getty, Grosso! Recordings,
Salsoul / Bataan Music, Tucker Ransom estate, NPR / Coburn Dukehart,
and similar editorial-use sources). The substantive teaching figures
(the two migration maps) and the decorative hero photos sit under
the same framework: single-image non-commercial classroom use, full
attribution, no displacement of the original market. If a rights
holder requests removal, swap to a public-domain or Creative-Commons
alternative; the maps in particular have ready substitutes from the
Migration Policy Institute, US Census, and Pew Research Center.

**Track 4 Selena hero: curation question, not a rights question.**
The current image is widely circulated but unattributed via
iHeart / Rovi metadata. Two stronger-attributed candidates exist:
Al Rendon's 1992 *Entre A Mi Mundo* session and John Dyer's 1992
*Mas Magazine* session. Worth a swap when convenient; not blocking.

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
