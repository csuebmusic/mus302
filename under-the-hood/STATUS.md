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

The full repo audit is at 165 warnings, zero errors. All warnings
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

**Module 3 Discos Falcon date.** Currently 1947 in the framing
reading; UCLA Frontera Collection sources are split between 1947
and 1948. Defensible either way.

**Module 3 Track 4 Selena hero photo.** Current image is
iHeart/Rovi-sourced and unattributed. Two stronger-attributed
candidates exist (Al Rendon 1992, John Dyer 1992). Curation
question, not a rights question; swap when convenient.

**Module 3 Héctor Lavoe queerness framing.** The Latin LGBTQ+
thread describes Lavoe's queerness as an open secret inside the
scene, drawing on an LGBTQ Nation oral-history source. This is
the most factually delicate claim in the M3 framing reading and
is drawn from a popular outlet rather than peer-reviewed
scholarship. Revisit on a polish pass to see whether better
sourcing exists or whether the framing should soften.

**Tin Pan Alley glossary entry.** Current entry covers the place
and industry frame but doesn't pick up the Great American
Songbook racial-dynamics framing that the M2 appropriation
argument builds on. Polish-pass target.

**Tier 2 glossary entries for M2.** Mos Def, Common, KRS-One,
Killer Mike, Paul Whiteman, Benny Goodman, Fletcher Henderson
all appear in body prose in M2's conscious-hip-hop lineage list
and its 1920s-1940s appropriation paragraph, but only in
passing. Add entries on a polish pass if they come up
substantively.

**Project proposal feedback turnaround.** The new calendar puts
the proposal due Sunday, July 12 and the draft due Sunday, July
19, which gives less than a week between when the instructor
returns proposal feedback and when students need to start
drafting. The proposal-and-bibliography markdown was reworded
to say "as quickly as I can" rather than committing to a
specific turnaround. Operational: budget for a 3-4 day feedback
turnaround on the proposal so students have the weekend before
the draft to incorporate it.

**Module 4 Track 5 (Mitski) length.** Three context subsections
rather than the four-section pattern the rest of Module 4 uses;
the convention is flexible but four is the modal pattern.
Reread on a polish pass.

**Module 4 Track 1 Will Crittendon source.** Current Track 1
framing-reading discussion of A Grain of Sand mentions
Crittendon by name; verify the bibliographic source is current
before launch.

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
launch. The M3 Track 4 Selena photo is its own item above
(curation rather than rights). For the rest: do a
verification pass before public launch confirming each photo's
educational-use fair-use rationale holds, or swap in Wikimedia
Commons alternatives where available. Tracks with editorial-use
copyrighted hero photos: M1 Track 1 (Cooke), M1 Track 4
(Williams, Getty), M2 Track 1 (Bessie Smith, Edward Elcha /
Michael Ochs / Getty), M2 Track 2 (Tharpe, Getty), M2 Track 3
(James Brown, Getty), M2 Track 4 (Flash, Sugar Hill cover), M2
Track 5 (Beyoncé, Parkwood / Pretty Bird), and most M3 and M4
tracks.
