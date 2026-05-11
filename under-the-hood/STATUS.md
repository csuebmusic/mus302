# Status

Current state of the build. Three sections: what's done, what's
next (in order), what's open. Update at the end of any session
that ships meaningful work; overwrite, don't append. Resolved
items get deleted, not strikethrough'd.

For editorial conventions and locked decisions, see `conventions.md`.
For audit-script behavior and intentional skips, see `audit-notes.md`.

## Done

The Module 6 removal restructure is complete. The course is now
five modules (Module 1 plus four cultural-tradition modules). The
Lamar "Alright" material that briefly belonged to a Module 6 is
substantively treated inside Module 2's leaves-out section; the
Bad Bunny "El Apagón" material is substantively treated inside
Module 3's leaves-out section. The Indigenous and queer-liberation
threads that were briefly Module 6 territory are now framed in
Module 1's cultural-roots reading as "threads that run across
modules," and each module names where its own lineup touches them.

The four major-tradition framing readings are at depth parity in
the 7,300-8,000 word range when measured consistently (body prose,
excluding tables). M2 at 7,315, M3 at 7,642, M4 at 7,494, M5 at
8,041. Each carries a queer thread parallel to the others'
structurally: queer Black thread in M2, Latin LGBTQ+ thread in M3,
queer Asian American thread in M4, integrated coverage in M5.

Module 5 Track 1 (Frankie Lymon and the Teenagers, "Why Do Fools
Fall in Love") shipped in commit 16729c0. The page follows the
M2-M4 listening-guide template with the standard course header,
video link, hero photo (a c. 1956 signed promotional photograph
from a private autograph collection), four-section context block,
per-track family-tree SVG (three streams converging: Black vocal-
harmony R&B, upper-Manhattan Latin music, NY indie R&B labels),
four "things to listen for" prompts, reflective question, and
sources. The cross-link from the M5 framing reading at the first
substantive prose mention of the song is in place. Glossary added
15 net entries (16 new for this page plus an expansion of the
existing `frankie-lymon` entry, which had been written for the
M3 Bataan page and is now expanded with full birth-date,
neighborhood, vocal-influence, and death-date context). Total
glossary entries now 641.

Fresh-eyes deep dives completed and committed for M1, M2, M3,
and M4. The M3 pass (commit 6f820f8) shipped seven fixes including
the M1 cultural-roots cross-link drop, structural-opener convention
normalization across Bataan/Selena/Tego, the Bataan-to-DeSanto
cross-link, the Discos Falcon date set to 1948, the Selena hero
photo Al Rendon attribution, and the Lavoe queerness framing
softening. The M4 pass (commit d558b94) shipped five fixes including
reflective-question h3 heading consistency across all M4 tracks,
the M4-to-M3 Bataan cross-link, the Piklz source-list typo, the
Mitski source-list byline correction to Sadie Bell / April 13 2026,
and the McCarran-Walter figcaption acknowledgment.

The glossary renderer in `assets/glossary.js` was updated this
restructure to use `innerHTML` rather than `textContent` so that
inline `<em>` tags for album/song/book/film titles, `<strong>` for
emphasis, and inline `<a>` cross-links all render correctly in the
popup. The file-header comment in `glossary-data.js` and the
relevant section of `conventions.md` both reflect the new
convention.

The calendar shifted back by one week so that all modules close
before any project deadline begins. Module 1 due Sunday, May 31
(six-day window from the May 26 term start). Modules 2-5 due
Sundays June 7, 14, 21, 28; Module 5 peer responses due Sunday,
July 5, with the project proposal also due that day. July 12 is
an open work week with no deliverable. Project full draft due
Sunday, July 19, peer review due Sunday, July 26, final due
Friday, July 31. The schedule is reflected consistently in
`syllabus.html`, `syllabus.md`, the four project-checkpoint
markdown files, the final-project landing page, the module 1
framing reading, the module 1 index page, and the module 2-4
index and discussion files. The `module1/discussion.md`,
`module2/discussion.md`, `module3/discussion.md`, and
`module4/discussion.md` files all have both the editing-half and
the Canvas-paste block updated.

The full repo audit through Module 4 is at 167 warnings, zero
errors; all warnings are documented intentional-skip patterns
(labels-table cells where multi-word buttons render awkwardly in
monospace columns; passing-list mentions where buttoning would
clutter prose; substring false-positives like "Prince" matching
"Prince Royce", "Form" matching "form" as a chord-progression
term; common English words colliding with technical glossary
keys). The Module 5 Track 1 page has not been audited yet; a
full-repo audit run after the remaining M5 builds will be the
natural next checkpoint.

## Next (in order)

The next significant chunk of work is the rest of Module 5's
build.

- **Module 5 Track 2 (Joan Baez).** Likely "Mary Hamilton" from
  the 1960 *Joan Baez* debut album, per the locked anchor-track
  list in `conventions.md`. Ulster Scots ballad inheritance
  reactivated through the folk revival.
- **Module 5 Track 3 (the Drifters, "Up on the Roof," 1962).**
  Brill Building songwriting tradition; Carole King and Gerry
  Goffin as Jewish American songwriters writing for a Black vocal
  group. When this ships, restore the
  `<a href="../module5/track3-drifters.html">` wrapping around
  "Module 5's Track 3" at line 267 of M2's framing reading.
- **Module 5 Track 4 (Wendy Carlos, *Switched-On Bach* excerpt,
  1968).** Synthesis pioneers as a pivot beyond the singer-
  songwriter assumption. Needs special handling for the YouTube
  card pattern given Carlos's stated wishes about her catalog;
  the convention for that case is open until we draft this page.
- **Module 5 Track 5 (Bruce Springsteen, "The River," 1980).**
  Deindustrialization-era working-class heartland rock.
- **Module 5 index, discussion, quiz.** Follows the pattern set
  by Modules 1-4.

After M5 is fully built, the live course is ready to ship for
the May 26 term start.

## Open

**Module 2 framing reading: M5 Track 3 cross-reference.** Line
267 of M2's framing reading currently has a verbal reference
to "Module 5's Track 3" without a hyperlink, since the M5
listening guides have not been built yet. When M5 Track 3
(Drifters) ships, restore the `<a href="../module5/track3-drifters.html">`
wrapping around "Module 5's Track 3" in that sentence.

**Hero photo verification across all modules.** Editorial-use
copyrighted photos (Getty Images, Michael Ochs Archives, Sugar
Hill Records, Parkwood Entertainment, etc.) appear on multiple
listening guide pages across M1, M2, M3, M4, and now M5. Per the
editorial conventions, these are defensible for educational use
with attribution but flagged for verification before launch. Do
a verification pass before public launch confirming each photo's
educational-use fair-use rationale holds, or swap in Wikimedia
Commons alternatives where available. Tracks with editorial-use
copyrighted or unverified-rights hero photos: M1 Track 1 (Cooke),
M1 Track 4 (Williams, Getty), M2 Track 1 (Bessie Smith, Edward
Elcha / Michael Ochs / Getty), M2 Track 2 (Tharpe, Getty), M2
Track 3 (James Brown, Getty), M2 Track 4 (Flash, Sugar Hill
cover), M2 Track 5 (Beyoncé, Parkwood / Pretty Bird), most M3
and M4 tracks, and M5 Track 1 (signed promotional fan-club
photograph c. 1956, original photographer unattributed, sourced
from a private autograph collection). For M5 Track 1 specifically,
if the rights situation cannot be resolved, a Wikimedia Commons
alternative (a 1956-era performance still from a syndicated TV
appearance, the Wikipedia infobox photo, or a public-domain
Library of Congress / Smithsonian image of doo-wop-era street
singers) might work.

The M3 Track 4 Selena photo is a special case inside this
verification pass. The image is now attributed in the caption
to Al Rendon's 1992 *Entre A Mi Mundo* session based on visual
evidence (cobalt-blue backdrop, black satin top, formal-portrait
composition) matching documented Rendon session work; the same
1992 portrait series is held by the Smithsonian National
Portrait Gallery. Before public launch, contact Al Rendon via
his editorial licensing program at alrendon.com to confirm
attribution and obtain explicit educational-use clearance, then
update the caption credit to "Photo by Al Rendon."
