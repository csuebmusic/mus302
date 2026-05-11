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
Fall in Love") shipped previous session and went through a deep
multi-pass revision then. Page follows the M2-M4 listening-guide
template with the standard course header, video link, hero photo
(a c. 1956 signed promotional photograph from a private autograph
collection), four-section context block, per-track family-tree
SVG with three streams converging on the 1955 Bell Sound recording
and forward arrows to Italian American doo-wop and to heartland
rock, four "things to listen for" prompts, reflective question,
and sources.

Module 5 Track 2 (Joan Baez, "Mary Hamilton," 1960) shipped this
session. Page follows the M5 listening-guide template with the
standard course header, video link (5:54 runtime to the album
recording on YouTube), hero photo (Ivan Massar's 1963 March on
Washington portrait from the National Portrait Gallery, NPG.94.245,
copyright Massar Studios LLC, used under educational fair use),
four-section context block, per-track family-tree SVG, four
"things to listen for" prompts, reflective question, and sources.
The four context sub-sections: "A nineteen-year-old at the
Manhattan Towers Ballroom" (the July 1960 recording session,
Vanguard's classical-to-folk pivot, Maynard Solomon as producer,
Marc Aubort as engineer, Fred Hellerman on second guitar on six
of thirteen tracks but not on this one, the Loder 1983 four-
nights-and-bingo quotation), "Where the ballad came from" (Child
173 history, the historical Four Maries reference and why the
song's surface narrative is fictional, the 1719 St. Petersburg
Mary Hamilton possibility, the 1563 Knox-recorded French waiting-
woman incident as a closer historical kernel, Baez's Glasgow
setting versus the published Edinburgh tradition), "The Ulster
Scots thread, the folk revival, and the urban Northeast" (the
framing reading's Thread 1 picked up on the per-track scale, the
urban-Northern-college-educated geography of the folk revival,
Greenwich Village and Harvard Square and Newport, the authenticity-
claim dynamic in which middle-class students learned rural ballads
in registers that signified rural-mountain authenticity), and
"Baez at nineteen: heritage, Quakerism, and civil rights" (the
Mexican father / Scottish-English Anglican mother / Quaker-
conversion biography, the racism Baez experienced in school as a
darker-skinned Mexican-American girl, the Albert Baez pacifist
household, the continuity from the recording forward to the
segregation-refusal touring policy, the 1963 March on Washington,
the 1964 tax resistance, the 1965 Institute for the Study of
Nonviolence, the 1967 Oakland Induction Center arrest). The
per-track family-tree SVG has two converging columns: textual
transmission (Scottish ballad collectors Scott / Motherwell /
Pitcairn into the Child catalogue, 1882-98) and oral and recorded
transmission (traditional Scottish singers, Texas Gladden for
Lomax in 1941, Jeannie Robertson for Riverside in 1955, Cynthia
Gooding for Elektra in 1957), converging in the postwar urban
folk revival and feeding into the 1960 Vanguard recording. A
bottom side-note names the parallel commercial-country and
bluegrass branch off the same Ulster Scots ballad root (Module
1's Hank Williams). The fourth prompt frames the recording's
restraint as itself a kind of statement: the political content
of the folk-revival aesthetic sits in the recording's refusal
to do what other 1960 popular forms would have done with the
same lyric. The reflective question gives students two options,
one on whether the restraint serves the ballad or holds it at
a distance, and one on what a different inheritance choice (her
father's Mexican family, contemporary topical songwriting, gospel
and R&B) would have produced. SVG rendered cleanly through
cairosvg after dropping italic-tspan content inside box labels
(consistent with the framing-reading SVG convention; album
titles in the body prose and figcaption still use proper italics).
Glossary added 11 net entries this session: joan-baez, vanguard-
records, maynard-solomon, newport-folk-festival, child-ballad,
mary-queen-of-scots, jeannie-robertson, quakerism, vibrato,
we-shall-overcome, and club-47. Total glossary entries now 656.

Methodology vocabulary convention change applied across all 20
listening guides last session. Per the revised convention, the
four methodology frames (timbre, texture, form, gesture) are
glossed on first substantive prose mention in every listening
guide. Previously the methodology reading was treated as the
standing definition. New convention: the methodology reading
itself does not gloss them (it is the definition), but every
listening guide does. M5 Track 2 follows this convention; all
four frames are buttoned on first prose mention.

Fresh-eyes deep dives completed and committed for M1, M2, M3, M4,
and M5 Track 1. The M5 Track 1 deep pass last session shipped
across multiple commits covering: initial build; M5-placement
fresh-eyes pass; production-side extraction argument; multiple
antipattern sweeps; and a final factual, antipattern, and
prose-level pass. M5 Track 2 was caught for antipatterns during
its initial build pass (a stacked-negative gesture-prompt closer
and a double-negative-then-positive Quakerism-versus-racism
construction, both restructured to positive form before commit).

The glossary renderer in `assets/glossary.js` was updated this
restructure to use `innerHTML` rather than `textContent` so that
inline `<em>` tags for album/song/book/film titles, `<strong>` for
emphasis, and inline `<a>` cross-links all render correctly in the
popup.

The calendar shifted back by one week so that all modules close
before any project deadline begins. Module 1 due Sunday, May 31
(six-day window from the May 26 term start). Modules 2-5 due
Sundays June 7, 14, 21, 28; Module 5 peer responses due Sunday,
July 5, with the project proposal also due that day. July 12 is
an open work week with no deliverable. Project full draft due
Sunday, July 19, peer review due Sunday, July 26, final due
Friday, July 31.

The full repo audit through Module 4 is at 167 warnings, zero
errors; all warnings are documented intentional-skip patterns.
M5 Track 1 and M5 Track 2 have not been audited yet; a full-repo
audit run after the remaining M5 builds will be the natural next
checkpoint.

## Next (in order)

The next significant chunk of work is the rest of Module 5's
build.

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

**Methodology-vocabulary "gesture" coverage on eight pages.**
The methodology-vocabulary glossing script left eight listening
guides without a "gesture" button because those pages do not use
the word "gesture" in prose: M1 Track 4 (Williams), M2 Track 1
(Bessie Smith), M2 Track 2 (Tharpe), and all five M3 tracks
(Puente, Bataan, Lavoe, Selena, Tego Calderón). The fourth prompts
on those pages use other analytical framings. A future small pass
could weave the word "gesture" into the prose on those pages where
it would land naturally, then re-run the glossing script. Not
urgent; the convention is satisfied at the glossary-existence and
other-page-coverage levels.

**Module 2 framing reading: M5 Track 3 cross-reference.** Line
267 of M2's framing reading currently has a verbal reference
to "Module 5's Track 3" without a hyperlink, since the M5
Track 3 listening guide has not been built yet. When M5 Track 3
(Drifters) ships, restore the `<a href="../module5/track3-drifters.html">`
wrapping around "Module 5's Track 3" in that sentence.

**Duplicate `appalachia` entry in glossary-data.js.** There are
two `"appalachia"` keys in `assets/glossary-data.js` (at lines
~809 and ~2952). JavaScript object literal semantics mean the
later-defined one wins silently, so the second (more complete)
definition is the active one. A future glossary-tidy pass should
delete the earlier shorter entry and any other duplicates the
audit surfaces. Not urgent; the user-facing behavior is correct.

**Hero photo verification across all modules.** Editorial-use
copyrighted photos appear on multiple listening guide pages across
M1, M2, M3, M4, and now M5. Per the editorial conventions, these
are defensible for educational use with attribution but flagged
for verification before launch. Tracks with editorial-use
copyrighted or unverified-rights hero photos: M1 Track 1 (Cooke),
M1 Track 4 (Williams, Getty), M2 Track 1 (Bessie Smith, Edward
Elcha / Michael Ochs / Getty), M2 Track 2 (Tharpe, Getty), M2
Track 3 (James Brown, Getty), M2 Track 4 (Flash, Sugar Hill
cover), M2 Track 5 (Beyoncé, Parkwood / Pretty Bird), most M3
and M4 tracks, M5 Track 1 (signed promotional fan-club photograph
c. 1956, original photographer unattributed, sourced from a
private autograph collection), and M5 Track 2 (Ivan Massar 1963
March on Washington portrait, NPG.94.245, copyright Massar Studios
LLC, held by the National Portrait Gallery, Smithsonian Institution).
The Massar photo's rights are explicitly held by a corporate
estate (Massar Studios LLC) but the image is held by a federal
museum collection and is widely reproduced for educational
purposes; the educational-fair-use rationale is defensible. If
the rights situation cannot be resolved at launch, candidate
substitutions for M5 Track 2 include the c. 1962-1963 Daniel
Kramer portraits, the contemporaneous Diana Davies images held
by the Smithsonian Folkways collection, or a Wikimedia Commons
press image from the 1963 March on Washington with Baez visible.

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
