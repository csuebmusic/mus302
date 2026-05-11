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

Specific substantive expansions shipped:
- M2: African American as a category opening, sustained
  appropriation argument across the routes section, queer Black
  thread covering classic blues women, disco-era dance-music
  infrastructure, the AIDS toll, and contemporary figures.
- M3: Siembra and the 1970s salsa political moment treated as a
  substantive paragraph, Latin LGBTQ+ thread covering the
  cross-cultural dance-music network, the salsa-era closet, the
  2010 commercial wave (Martin and García), and contemporary
  figures (Tokischa, Bad Bunny, Arca), plus a reggaetón
  forward-arc paragraph from Tego through Daddy Yankee to Bad
  Bunny.
- M4: queer Asian American thread covering the Movement-era
  closet, the Bay Area 1980s-1990s institutional buildout (GAPA,
  GAPA Men's Chorus, API Wellness Center), and the contemporary
  scene (Hayley Kiyoko, Yaeji, the Mitski case).

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

The glossary is at 626 entries. The renderer in `assets/glossary.js`
was updated this restructure to use `innerHTML` rather than
`textContent` so that inline `<em>` tags for album/song/book/film
titles, `<strong>` for emphasis, and inline `<a>` cross-links all
render correctly in the popup. The file-header comment in
`glossary-data.js` and the relevant section of `conventions.md`
both reflect the new convention.

The calendar shifted back by one week so that all modules close
before any project deadline begins. Module 1 due Sunday, May 31
(six-day window from the May 26 term start). Modules 2-5 due
Sundays June 7, 14, 21, 28; Module 5 peer responses due Sunday,
July 5. Project proposal due Sunday, July 12, draft due Sunday,
July 19, peer review due Sunday, July 26, final due Friday,
July 31. The schedule is reflected consistently in
`syllabus.html`, `syllabus.md`, the four project-checkpoint
markdown files, the final-project landing page, the module 1
framing reading, the module 1 index page, and the module 2-4
index and discussion files. The `module1/discussion.md`,
`module2/discussion.md`, `module3/discussion.md`, and
`module4/discussion.md` files all have both the editing-half and
the Canvas-paste block updated.

The full repo audit is at 167 warnings, zero errors. All warnings
are documented intentional-skip patterns: labels-table cells
where multi-word buttons render awkwardly in monospace columns;
passing-list mentions where buttoning would clutter prose;
substring false-positives ("Prince" matching "Prince Royce",
"Form" matching "form" as a chord-progression term); common
English words colliding with technical glossary keys.

## Next (in order)

The next significant chunk of work is Module 5's remaining build.
The M5 framing reading is in place and at depth; the listening
guides, the module index page, and the discussion and quiz are
the natural next step.

- **Module 5 listening guides.** Five anchor tracks: Frankie
  Lymon and the Teenagers (Track 1), Joan Baez (Track 2), the
  Drifters (Track 3), Wendy Carlos (Track 4), Bruce Springsteen
  (Track 5). Track 1 (Lymon) is the most ready to draft. Track 4
  (Wendy Carlos) needs special handling for the YouTube card
  pattern given Carlos's stated wishes about her catalog.
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
listening guide pages across M1, M2, M3, and M4. Per the
editorial conventions, these are defensible for educational
use with attribution but flagged for verification before
launch. Do a verification pass before public launch confirming
each photo's educational-use fair-use rationale holds, or swap
in Wikimedia Commons alternatives where available. Tracks with
editorial-use copyrighted hero photos: M1 Track 1 (Cooke), M1
Track 4 (Williams, Getty), M2 Track 1 (Bessie Smith, Edward
Elcha / Michael Ochs / Getty), M2 Track 2 (Tharpe, Getty), M2
Track 3 (James Brown, Getty), M2 Track 4 (Flash, Sugar Hill
cover), M2 Track 5 (Beyoncé, Parkwood / Pretty Bird), and most
M3 and M4 tracks.

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
