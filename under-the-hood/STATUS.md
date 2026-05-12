# Status

Current state of the build. Three sections: done, next, open.
Overwrite at the end of any session that ships meaningful work;
resolved items get deleted, not strikethrough'd. The git log is
the history; STATUS is the snapshot.

For editorial conventions and locked decisions, see `conventions.md`.
For audit-script behavior and intentional skips, see `audit-notes.md`.

## Done

Module 1, Module 2, Module 3, Module 4, and Module 5 Tracks 1-2
shipped. Five framing readings, all four-tradition modules at
depth parity. M5 Track 2 (Baez, "Mary Hamilton") shipped with
deep editorial revision: a three-cohort folk-revival frame
(first generation / bridge / second, with the 1953 McCarthy-era
blacklist as the causal hinge), two SVG figures (the three-
collectors illustration and the three-cohorts diagram), the
Lomax Digital Archive callout, and a full fresh-eyes pass.
Glossary at 663 entries. M5 Track 1 (Lymon) and M5 Track 2
(Baez) both pass the gloss audit at 7 and 10 documented
intentional skips respectively.

## Next (in order)

- **M5 Track 3 (the Drifters, "Up on the Roof," 1962).** Brill
  Building, Goffin and King writing for a Black vocal group. When
  this ships, restore the `<a href="../module5/track3-drifters.html">`
  wrapping around "Module 5's Track 3" at line 267 of M2's framing
  reading.
- **M5 Track 4 (Wendy Carlos, *Switched-On Bach* excerpt, 1968).**
  Synthesis pioneers. Needs special handling for the YouTube card
  given Carlos's stated wishes about her catalog; convention for
  that case is open until we draft the page.
- **M5 Track 5 (Bruce Springsteen, "The River," 1980).**
- **M5 index, discussion, quiz.** Pattern set by M1-M4.
- **Full-repo audit pass** before public launch.

After M5 is fully built, the course is ready for the May 26 term
start.

## Open

**Methodology-vocabulary "gesture" coverage on eight pages.** M1
Track 4 (Williams), M2 Tracks 1-2 (Smith, Tharpe), and all five
M3 tracks do not use "gesture" in prose; the methodology-glossing
script left those pages without a gesture button. A future small
pass could weave the word in where it lands naturally, then re-run
the script. Not urgent.

**M2 framing reading: M5 Track 3 cross-reference.** Line 267 has
a verbal reference to "Module 5's Track 3" without a hyperlink.
Restore the link wrapping when M5 Track 3 ships.

**Duplicate `appalachia` entry in glossary-data.js.** Two
`"appalachia"` keys (lines ~809 and ~2952). Second one wins
silently and is the more complete definition, so behavior is
correct; tidy on a future glossary pass.

**Hero photo verification before public launch.** Most listening
guides use editorial-use copyrighted photos (Getty, Michael Ochs,
Sugar Hill, Parkwood, etc.) under educational fair use with full
attribution. Confirm rationale holds, or swap to Wikimedia
Commons / public-domain alternatives, before launch. M5 Track 2
uses Ivan Massar's 1963 portrait via Smithsonian NPG (NPG.94.245,
copyright Massar Studios LLC); fair-use defensible but flagged.
M3 Track 4 Selena photo: contact Al Rendon via alrendon.com to
confirm attribution and obtain explicit educational-use clearance,
then update caption credit to "Photo by Al Rendon."

**Wikipedia citations in M5 Track 2 sources.** Two Wikipedia
entries cited for biographical and album-history facts that are
also covered by the LOC essay (Massimo 2019) and Baez's
autobiography (already cited). Wikipedia is acceptable for
student-facing materials but the standing convention prefers
scholarly or primary sources where available. Tidy on a future
sources pass; not blocking for term start.
