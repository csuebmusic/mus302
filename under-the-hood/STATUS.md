# Project status

Running snapshot of where the build is. Update at the end of any
session that ships meaningful work. Editorial conventions and
locked design decisions live in `conventions.md`; audit-script
behavior and intentional-skip categories live in `audit-notes.md`.
This file has what is done, what is next, and what is open.

Last updated: end of a Module 1 framing-reading pass that locked
`cultural-roots.html` after the Module 4 framing-reading work raised
several items needing retrofit on the older page. Sixteen glossary
entries were added (count 472 to 488): four groups (Pure Hell and
Death, the pre-named-genre Black punk bands referenced in the
punk-roots line, plus Japanese Breakfast, The Drifters, The
Ronettes, and The Band), and ten individuals (the four Module 1
anchor-track artists Cooke, Cruz, DeSanto, and Williams, all
previously unentered; James Brown, central to the mid-century R&B
to soul to funk to hip hop thread and the Module 2 Track 3 anchor;
Anthony Brown and Yaeji in the Asian American thread; Robbie
Robertson in the Indigenous thread; and Janelle Monáe and Lil Nas X
in the queer-liberation thread). Three small prose revisions to
`cultural-roots.html`: a transitional sentence before the African
American h2 framing the four-tradition walkthrough as a thumbnail
sketch; the Latin diasporic catalog paragraph split at the postwar
to contemporary boundary, with a "The thread continues across
regions and into the streaming era" hinge; and the Asian American
catalog paragraph split at the historical to contemporary boundary,
with a "The thread continues into the present" hinge. Button audit
cleanup retrofitted first-mention gloss buttons against the
expanded glossary across all four Module 1 listening guides
(`track1-cooke.html`, `track2-cruz.html`, `track3-desanto.html`,
`track4-williams.html`) and `how-to-listen.html`. One small
addition to the audit script. Audit clean across the 24-file
Module 1 set with zero errors. The earlier Module 4 framing
reading restructure (commits `5637473` through `61b4d00`) brought
that page from a track-by-track preview into framing-reading
parity with Modules 2 and 3: three sections of real framing work
(panethnic category with the Aoki rejection of "Oriental"; the
long pre-history with its three threads of Filipino Pacific
musicians, Chinese and Japanese American jazz on the prewar West
Coast, and the Japanese American camps; 1965 and what changed,
with the Hart-Celler timeline SVG as Figure 1) plus four new
framing-reading sections (Movement-and-its-music centered on
institutional infrastructure (TWLF strike, Basement Workshop, KSW,
Asian Improv aRts, FANHS); dialogue with African American music
parallel to Module 3's section of the same shape; music-as-
political-work parallel to Module 2's; and a brief track-preview
list parallel to Modules 2 and 3). Word count came down from
~11,500 to ~6,950. One new glossary entry (`asian-improv-arts`)
was added during that work and one unverified factual claim
(Lumpen-on-Paredon attribution) was replaced with a verified
Paredon-Newton-speeches attribution. Two documented skiplist
warnings remain on Module 4 (`dominant` as adjective,
`american-national` matched inside "Filipino American National
Historical Society").

Modules 1, 2, 3, and the final-project module are fully built and
shipped. Module 4 has its framing reading; the listening guides,
landing page, discussion, and quiz are still to build. Modules 5
and 6 are still to draft.

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

Glossary count: 488. Working tree clean at commit time.

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
Migration map, labels reference table, course-spanning lineage SVG
diagram), five chronological anchor-track listening guides each
with an inline family-tree SVG diagram at the Context-to-listening-
prompts pivot (Bessie Smith with Armstrong 1925, Tharpe 1944, Brown
1968, Grandmaster Flash and the Furious Five 1982, Beyoncé 2016),
discussion, and quiz.

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

**Module 4: Asian American traditions.** Framing reading drafted
(`module4/roots-and-routes.html`, "A Category That Had to Be
Invented"), with the immigration-law timeline SVG as Figure 1 and
sections on the panethnic category, the long pre-history (Filipino
Pacific musicians, Chinese-and-Japanese American prewar West Coast
jazz, the Japanese American camps), 1965 and after, the Movement
and the music it made (institutional infrastructure: TWLF strike,
Basement Workshop, KSW, Asian Improv aRts, FANHS), the dialogue
with African American music, music as political work, a brief
track preview, and a "what this module leaves out" disclaimer
covering South Asian American, Southeast Asian refugee musics, and
K-pop / 88rising. The five anchor tracks the framing reading
commits to: the Iijima-Miyamoto-Chin trio's <em>A Grain of Sand</em>
(1973), Jon Jang and the Asian American Jazz movement (1980s), The
Jets (1986), the Invisibl Skratch Piklz / Filipino American Bay
Area DJ scene (mid-1990s), and Mitski's "Your Best American Girl"
(2016). Still to build for Module 4: index.html landing page, five
listening guides (each with hero photo, four-prompt structure, and
inline family-tree SVG diagram at the Context-to-listening-prompts
pivot per Module 2-3 convention), discussion in the new "pick a
reflective question" pattern, and quiz. The framing reading
contains one forward-reference link to `track1-grain-of-sand.html`
that resolves once Track 1 is built.

**Module 5: European American immigrant and working-class traditions.**
None drafted. Will follow the `module1/` pattern: landing page,
listening guides for the module's anchor tracks, framing reading
(open per module per the locked decision in `conventions.md`),
`discussion.md` in the new "pick a reflective question" pattern,
and `quiz.md`. Topic territory: country and folk, doo-wop and
crooner traditions, Brill Building, punk, synthesis figures.

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

- **Module 5 anchor track lineup.** Still needs its own short list,
  ideally previewed by the artists named in the framing reading where
  they overlap. Module 4's lineup is now committed in its framing
  reading (Iijima-Miyamoto-Chin trio's <em>A Grain of Sand</em> 1973,
  Jon Jang and the AAJM 1980s, The Jets 1986, Invisibl Skratch Piklz
  mid-1990s, Mitski 2016).
- **Module 6 anchor tracks beyond Lamar and Bad Bunny.** Indigenous
  and queer liberation threads need their own anchor tracks.
- **Whether Module 5 needs a full framing reading of its own.**
  Modules 2, 3, and 4 each have one. Default assumption for Module 5
  remains shorter framing on the landing page unless there's a reason
  for a full reading.
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
