# Project status

This file is the running summary of where the course build is.
Update it at the end of any session that ships meaningful work.
The README has the durable conventions and decisions; this file
has the time-sensitive picture of what is done, what is next,
and what is still open.

Last updated: end of a substantial Module 3 build session that
shipped the Module 3 framing reading and a fresh-eyes audit pass
on it, plus a glossary HTML-encoding bug fix that was a year-old
carryover from the Module 1 and Module 2 builds.

The Module 3 framing reading (`module3/roots-and-routes.html`)
is in place. Title: "Many Roots, Shared Routes." Six sections
plus a What's-coming preview plus a Sources section, parallel
in structure to Module 2's "Roots and Routes" framing reading.
The six sections cover (1) what "Latin diasporic" means here,
including the four-conditions framing of Cuban exile, Puerto
Rican statutory citizenship since the Jones-Shafroth Act, the
"the border moved" framing of the Mexican-American case via
the 1848 Treaty of Guadalupe Hidalgo, and more recent arrivals;
(2) Roots, sketching three substrates (Cuban, Puerto Rican,
Mexican), each treated separately with its own paragraph;
(3) Routes, walking through four migrations (Mexican, Puerto
Rican, Cuban, more recent Dominican/Panamanian/Colombian) with
two figures embedded (a Pearson 2005 static migration map and
the University of Washington's Latinx Great Migrations Tableau
interactive); (4) The labels that built the industry, a
twelve-row labels table from Decca Latin (1934) to VI Music /
El Cartel Records (late 1990s) using a new `.schedule.labels-
table` CSS modifier that splits city/dates onto a metadata line
below the label name; (5) The dialogue with African American
music, a cross-tradition argument running mambo-meets-bebop,
boogaloo, salsa, Latin rock, reggaeton, with the dialogue
running both directions; and (6) Latin music as political work,
using the same content/form/presence framework as Module 2's
political-modes argument. The What's-coming preview names all
five anchor tracks with one-paragraph previews each. The
Sources section has thirteen entries spanning Aparicio,
Berríos-Miranda et al's American Sabor (the closest analog to
what this module is doing), Flores, García on Cuban exile,
Gilroy's Black Atlantic, Marshall et al on reggaeton, Peña on
conjunto, Rivera on PR hip hop, Sánchez Korrol on PR New York,
Washburne on salsa, Cepeda's Remezcla series on Panamanian
reggaeton roots, the Center for Puerto Rican Studies, the
Library of Congress, and Wikipedia.

The framing reading went through several rounds of Inés-driven
revision before reaching its current form. Substantive
revisions: Section 2's opening reorganized to name the three
substrates (Cuban, Puerto Rican, Mexican) explicitly rather
than collapsing Cuban and Puerto Rican into a single "Afro-
Caribbean" tradition (the paragraphs that follow already treat
them separately, so the section opening should match); the
Pearson map figcaption got the instructor-facing rights-flag
sentence stripped (verification flags belong in commit
messages and STATUS, not in student-facing prose); the
"Presence" paragraph in Section 6 now identifies the three
artists in parentheses (Selena, Tego Calderón, Carlos Santana)
so the GE-level reader doesn't have to infer who each vignette
refers to; the CSU East Bay self-reference at the end of the
Track 3 preview was removed (it read as instructor's-note
voice rather than student-facing prose, and the previous
sentence already established the Bay Area / Mission District
context).

Then a fresh-eyes audit pass surfaced six small editorial
fixes, all shipped in commit `8af6630`: (1) Stan Getz removed
from the bebop-musicians parenthetical in Section 5 (Getz is
a Latin-jazz figure, but bossa-nova-era, not Palladium-mambo-
era; Gillespie and Parker are the right names for that
context); (2) Operation Bootstrap dating fixed from "in the
1950s" to "beginning in the late 1940s and running through
the 1950s and beyond"; (3) the "four distinct strands" count
in the What's coming intro replaced with "several distinct
strands" since it was contradicting the three-substrate
framing of Section 2; (4) "Early Exiles" lowercased to "early
exiles" to match the descriptive-vs-proper-noun pattern of
the surrounding cohort labels (Freedom Flights and Mariel
Boatlift stay capitalized as proper-noun program/event names);
(5) the 1940 NYC Puerto Rican population figure hedged from
"61,000" to "roughly 61,000" since the literature has variants
in the 61k-70k range depending on the census source; (6) the
long Section 5 paragraph (~380 words covering five separate
moments of dialogue) split at the salsa pivot into two
paragraphs, with a new bridge sentence "The dialogue
intensified in the post-civil-rights decades" opening the
second.

Glossary bug fix this session: 27 entries (going back to the
original Module 1 build) had `<em>` tags or HTML entities like
`&amp;` inside their definition strings, plus one entry with
an `<a href>` link wrapper. The glossary loader at
`assets/glossary.js` line 76 injects definitions via
`.textContent`, which renders these as literal characters
rather than parsing the HTML. The literal characters had been
showing up in popups across the site (`<em>Siembra</em>`,
`R&amp;B`, `<a href="...">the closing-paragraph framing</a>`).
A Python sweep stripped all HTML tokens from definition
strings; the file's header comment was strengthened to make
the constraint explicit (no HTML tags, no `<a>` links, no
entities, plain text only). The audit script
(`scripts/check-glossings.js`) currently checks for missed
gloss buttons but does not validate definition contents
against the textContent constraint; worth adding a definition-
content check to the audit script in a future pass to catch
this category of bug if it recurs.

Glossary count: now 347, up from 307 at the end of the
Module 2 audit. Forty new entries were added across the Module
3 build: substrates and genres (danzón, cha-cha-chá, bomba,
plena, latin-jazz, bebop, canción, corrido, ranchera, mariachi,
conjunto, orquesta, bachata, merengue), instruments (accordion,
bajo-sexto), migration history (bracero-program, jones-shafroth-
act, operation-bootstrap, freedom-flights, mariel-boatlift,
el-barrio, loisaida, little-havana), historical concepts
(atlantic-slave-trade, treaty-of-guadalupe-hidalgo, us-mexican-
war, mexican-revolution, chicano, chicano-movement, dembow,
cumbia, tex-mex), and people (mario-bauza, machito, curtis-
mayfield, ruben-blades, willie-colon, tito-puente, tito-
rodriguez). All forty have first-mention gloss buttons in the
framing reading; eight also have follow-up buttons on Module 1's
Cruz/Fania track where the new terms had triggered missed-gloss
warnings (cha-cha-cha, merengue, el-barrio, ruben-blades,
willie-colon, tito-puente).

Audit baseline: 17 files, 0 errors, 20 warnings. The 9 Module
1 + Module 2 intentional skips documented in items 6 through
11 of the Glossary housekeeping section below carry over
unchanged. The 11 new warnings from Module 3 are all
intentional skips in already-recognized categories (table-cell
skips for tico-records, fania-records, decca, dancehall,
tex-mex; a second-mention skip for trap-music since trap is
buttoned earlier in body prose; too-basic skips for waltz,
rhythm, rhythm-section in their compound uses; the bare
"dominant" false positive that does not actually appear on
Module 3 but the same pattern of false positive does on
Module 2). Documented as intentional skips in the housekeeping
section.

## Term and dates

Summer 2026 term: May 26 to July 31, 2026. Nine instructional
weeks plus finals. Hard-date schedule is in `syllabus.html`.

## What is complete and live

**Module 1: Orientation and Methodology.** Fully built and
reviewed.
- `module1/index.html`: landing page with module overview,
  deadlines, content notice, and instructor contact.
- `module1/how-to-listen.html`: the methodology reading. Opens
  with the rhythmic-grid reference section (tempo, beat, meter,
  rhythm) with three SVG meter diagrams (4/4, 12/8, 3/4) using
  the same "main beats and ampersand subdivisions" labeling
  logic across all three. Then the four analytical frames
  (timbre, texture, form, gesture). Then description-pattern-
  claim-evidence. Eight SVG figures embedded inline (figures
  1-3: meter diagrams; figures 4-8: texture and form diagrams).
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
- `module2/index.html`: landing page following the Module 1 pattern.
  Lists the framing reading and five listening guides in
  chronological order, plus the discussion and quiz. Includes a
  brief note that Module 2 is arranged chronologically (different
  from Module 1's cross-cultural arrangement), the combined
  Modules 2-5 deadline (July 19), content advisory, and instructor
  contact info.
- `module2/roots-and-routes.html`: the framing reading.
  Five sections (what foundational means, roots in spirituals
  and the blues, routes via Great Migration and recording
  industry, sacred-secular crossover, modes of political work).
  Three figures: a Great Migration map (Blair Tinker / Antiracist
  Curriculum Project, sourced from Clarissa Uprooted, attributed
  in the figcaption and flagged for image-rights verification
  before launch), a curated 12-row labels list (Black Swan, Okeh,
  Columbia, Decca, Atlantic, Vee-Jay, Chess, Motown, King, Stax,
  Sun, Specialty), and a lineage SVG diagram from spirituals
  through hip hop with the five anchor tracks placed at their
  nodes. Cross-links to Module 1's Cooke listening guide at two
  substantive prose mentions. Per-track paragraphs in the closing
  "What's coming" section make the chronological structure
  scannable.
- `module2/track1-bessie-smith.html`: full listening guide
  for Bessie Smith with Louis Armstrong, "St. Louis Blues"
  (Columbia, January 14, 1925). Replaces the stub. Four-part
  context (Smith before the song / song before the singer /
  the recording / reception, death, and afterlife) and four
  "Things to listen for" prompts (timbre, texture, form,
  Armstrong's cornet as second voice). Hero photo is the
  Edward Elcha c. 1922 publicity portrait from the Michael
  Ochs Archives / Getty Images, in the same defensible-
  educational-use category as the Module 1 KQED/Getty hero
  photos and flagged the same way. Cross-links to all four
  Module 1 listening guides for the texture comparison and
  to Cooke for the timbre comparison. Reflective question
  uses the T-Bone Walker "you can't dress up the blues"
  quote against the framing reading's argument about Handy
  and the recorded blues.
- `module2/track2-tharpe.html`: full listening guide for
  Sister Rosetta Tharpe, "Strange Things Happening Every
  Day" (Decca, New York, September 22, 1944). Four-part
  context (Tharpe before the song: Cotton Plant, Cotton
  Club, going electric / the song as a sermon answering her
  COGIC critics / the recording session with the Sam Price
  Trio / reception, the long erasure, the 2018 Hall of Fame
  induction) and four "Things to listen for" prompts
  (timbre of the electric guitar, texture of small-group
  recording, three-chord verse-chorus form, the guitar
  break as rock-and-roll prefiguration). Hero photo is a
  mid-1960s European concert image from Inés showing
  Tharpe with her white Gibson SG Custom; flagged in the
  same defensible-educational-use category as the other
  editorial Getty photos. Cross-links: forward and backward
  to the Bessie Smith track for the cornet/electric-guitar
  timbre comparison and the three-voice/four-piece texture
  comparison; back to Cooke and Cruz for the small-group-
  vs-orchestral arrangement contrast. Reflective question
  picks up the framing reading's "Tharpe walked onstage
  with an electric guitar" point and pushes students to
  argue from a specific moment in the recording about what
  political work it does. Page is 109 lines, slightly under
  the Module 1 envelope (111-117) but within range.
- `module2/track3-brown.html`: full listening guide for
  James Brown, "Say It Loud — I'm Black and I'm Proud"
  (King single, recorded August 7, 1968 at Vox Studios,
  Van Nuys CA). Four-part context (Brown before the song:
  Augusta, the Famous Flames, the soul-to-funk turn / the
  political moment: King assassination, Boston Garden
  April 5, the lyrics on a hotel napkin / the recording:
  the Vox session, the touring band with Stubblefield Nolen
  Parker Ellis and Wesley's first session, the school-bus
  children's chorus from Watts and Compton / reception, the
  cost, and the hip hop afterlife: chart performance, Chuck
  D's testimonial, Brown's loss of crossover audience, the
  political contradictions including the Nixon inauguration
  performance, the sampling lineage from Eric B and Rakim
  forward) and four "Things to listen for" prompts (timbre
  of Brown's gravelly voice contrasted with the five voices
  already heard / texture of small-number-of-elements funk
  / form as single-vamp loop instead of verse-chorus, with
  the explicit argument that this is the form hip hop will
  take / politics in two registers, with the form-as-politics
  argument that the Sanctified leader-and-community
  structure was moved into a Los Angeles studio with thirty
  Black kids from Watts and Compton given thirty equal
  voices). Hero photo is a 1970s/80s editorial Getty image
  of Brown mid-leap with cape and jumpsuit; same defensible-
  educational-use category as the other hero photos and
  flagged the same way. Cross-links: forward to Track 4
  Grandmaster Flash for the Brown-to-hip-hop conceptual
  handoff; backward to all five voices in the listening
  guide for the timbre comparison; backward to Tharpe for
  the gospel-quartet stagecraft inheritance via the Dixie
  Hummingbirds' Ira Tucker. Reflective question asks
  students to argue from a specific moment in the call-and-
  response between Brown and the children about what the
  recording is doing politically, and to hold that against
  Brown performing the song five months later at Richard
  Nixon's inauguration. Page is 104 lines, slightly under
  the envelope but in range.
- New glossary entries added for Track 3 vocabulary:
  boston-garden, al-sharpton, stokely-carmichael,
  clyde-stubblefield, fred-wesley, charles-bobbitt,
  hubert-humphrey, rhythm-guitar, vamp, plus pee-wee-ellis
  added in a follow-on pass after the Track 3 ship to give
  Brown's bandleader, arranger, and "Say It Loud" co-writer
  his own glossary popup rather than just a name in the
  personnel sentence. Glossary count is now 252. The new
  rhythm-guitar entry caused a missed-gloss warning on
  module1/track4-williams.html (the Williams session
  personnel paragraph names Louis Innis on rhythm guitar),
  resolved with a first-mention button. Per the cross-
  linking convention, module2/roots-and-routes.html's first
  prose mention of "Say It Loud" in the political-modes
  paragraph is now linked to track3-brown.html.
- `module2/track4-grandmaster-flash.html`: full listening
  guide for Grandmaster Flash and the Furious Five, "The
  Message" (Sugar Hill, single released July 1, 1982).
  Four-part context (the South Bronx that made hip hop, with
  Robert Moses and the Cross-Bronx Expressway as the
  structural backstory and Kool Herc / Bambaataa / Flash as
  the founding DJs / Sugar Hill Records and Sylvia Robinson
  as the "Mother of Hip-Hop" who pushed the group toward
  serious subject matter / the recording itself, including
  the honest accounting that the track was largely written
  and performed by Duke Bootee with Skip McDonald on guitar
  and only Melle Mel from the credited group performing,
  with the "authenticity is more complicated than the
  legend" framing as the pedagogical move / reception and
  afterlife: charts, the 2002 NRR induction, the lineage to
  Public Enemy and KRS-One through Kendrick Lamar) and four
  "Things to listen for" prompts (timbre of two rapping
  voices plus electronic rhythm section / texture of just
  four sonic strands with audible space between them /
  form as expanding-verse architecture, with the verse-
  length progression 8/11/13/16/28 measures from the LoC
  essay carried over and used as the structural argument /
  gesture, focused on Mel's final-verse tightening and the
  closing arrest skit). Hero photo is the original 1982 12-
  inch single cover (seven young men on a South Bronx
  street with a boombox), credited to Sugar Hill Records
  and used here for educational and analytical purposes.
  Cross-links: backward to Brown for the funk-vamp-to-hip-
  hop-vamp inheritance and the call-and-response question;
  backward to Tharpe for the new-instrument absorption
  point (electric guitar in 1944, drum machine and synth
  in 1982); forward to Beyoncé in the navigation footer.
  Reflective question asks students to pick a specific
  moment and argue which of the three modes of political
  work named in the framing reading (content, form, or
  presence) that moment is doing. Page is 107 lines,
  within the Module 2 envelope (104-117).
- 20 new glossary entries added for Track 4 vocabulary:
  south-bronx, robert-moses, cross-bronx-expressway,
  white-flight, deindustrialization, kool-herc,
  afrika-bambaataa, block-party, breakbeat,
  sugar-hill-records, sylvia-robinson, melle-mel,
  duke-bootee, skip-mcdonald, drum-machine, synthesizer,
  analog-synth, prophet-5, public-enemy, conscious-hip-hop.
  Glossary count is now 272. Two retroactive first-mention
  button additions on existing pages: south-bronx on
  module1/track2-cruz.html (in the El Barrio / South Bronx
  Caribbean migrant paragraph), and public-enemy on
  module2/track3-brown.html (in the Chuck D testimonial
  paragraph). Per the cross-linking convention,
  module2/roots-and-routes.html's first prose mention of
  "The Message" in the political-modes paragraph is now
  linked to track4-grandmaster-flash.html (parallel to the
  existing Brown link in the same paragraph).
- After Track 4 shipped, two follow-up passes ran. First, a
  glossary expansion added cluster-mate entries for
  clifton-jiggs-chase (the Sugar Hill in-house producer who
  co-wrote and co-produced "The Message") and the four other
  Furious Five MCs who, like Grandmaster Flash, did not
  perform on the recording: cowboy, kid-creole, scorpio,
  rahiem. Each of the four is buttoned at first mention in
  the Track 4 recording paragraph at the line "Neither did
  Cowboy, Kid Creole, Scorpio, or Rahiem." Brought glossary
  count to 277. Second, a fresh-eyes proofread of all four
  Module 2 listening guides caught three real factual
  problems on Track 4, all corrected in commit dabc2e6:
  (1) replaced a fabricated "always tired, my legs feel
  like lead" lyric (which does not appear in the song) with
  the actual transit-strike lyric "can't take the train to
  the job, there's a strike at the station" (sourced from
  Rolling Stone's Duke Bootee obituary); (2) corrected the
  personnel attribution by distinguishing the 1980 demo
  (Bootee played most of the parts in his Elizabeth, NJ
  apartment) from the released 1982 studio version (which
  added overdubs from the Sugar Hill house rhythm section:
  Doug Wimbish on electric bass, Keith LeBlanc on drums,
  Skip McDonald on guitar, with the Prophet-5 hook credited
  on the album sleeve to Reggie Griffin, Jiggs Chase, and
  Sylvia Robinson, Griffin generally cited in oral histories
  as the source of the synth lick); (3) hedged the drum
  machine attribution from "programmed rather than performed
  live" to a more accurate framing that names what students
  hear (a drum machine) while acknowledging that the album
  credits LeBlanc on drums and that how exactly the live
  drumming and the DMX were combined on the released master
  is not fully documented. Three new glossary entries
  added to support the corrections: doug-wimbish,
  keith-leblanc, reggie-griffin. Glossary count: 280. Page
  remains at 107 lines, within the Module 2 envelope
  (104-117). Track 4 audit is back to a single documented
  intentional skip (the "dominant" false positive in the
  reflective question, which is an English adjective, not
  the music-theory V chord; documented in the intentional-
  skip section below as item 9).
- `module2/track5-beyonce.html`: full listening guide for
  Beyoncé, "Formation" (Parkwood / Columbia, surprise-released
  February 6, 2016). Four-part context (Beyoncé before
  "Formation," with Houston, Destiny's Child, and the Tina
  Knowles Louisiana Creole / Mathew Knowles Alabama family
  geography that the song's opening lines name directly /
  the political moment of February 2016, with Trayvon Martin
  through Ferguson through Sandra Bland and the question of
  mainstream Black-celebrity political voice / the recording,
  with Mike Will Made-It and Pluss on the original beat,
  Swae Lee on the chorus freestyle, Beyoncé writing verses
  on top, the marching-band horns added at her request, the
  Messy Mya and Big Freedia samples, and the Mya estate's
  $20M lawsuit and February 2018 settlement / reception, with
  Pazz and Jop number one of 2016, Rolling Stone's number-one
  music video of all time, the BLM and 2017 Women's March
  anthem status, AND the Black New Orleanian critique by
  Yaba Blay and Shantrelle Lewis that the song exploits
  Katrina, police-violence, and queer-Black-death imagery
  for a star's brand). Four "Things to listen for" prompts:
  the timbre of Beyoncé's deliberately low, vocal-fry-grounded
  delivery as a refusal to code-switch / the texture of the
  two-stage trap-plus-marching-band build / the form, with
  attention to how the song gives structural weight (not
  ornamental cameo weight) to two voices that are not the
  lead artist's / the gesture of the brass stab entering at
  0:55 and shifting the song's address from private-trap to
  public-march. Hero photo is a still from the music video
  (the El Camino parking-lot scene; user-uploaded JPEG saved
  at `assets/images/beyonce-formation.jpg`, credited to
  Parkwood Entertainment / Pretty Bird Pictures and used here
  for educational and analytical purposes). Cross-links:
  backward to all four other Module 2 tracks in the things-
  to-listen-for prompts (Bessie Smith for the contralto
  comparison, Tharpe for the soprano comparison, Brown for
  the looped-vamp inheritance, "The Message" for the
  sampled-voices structural argument). Reflective question
  asks students to pick a moment, name which mode of
  political work it does, and then take a position on whether
  the song's political force depends on how we resolve the
  appropriation questions raised by the Mya estate lawsuit
  and the New Orleanian critics. Page is 106 lines, within
  the Module 2 envelope (104-117).
- 25 new glossary entries added for Track 5 vocabulary:
  tina-knowles, louisiana-creole, acadian,
  keeanga-yamahtta-taylor, trayvon-martin, black-lives-matter,
  sandra-bland, mike-will-made-it, atlanta-trap,
  marching-band, second-line, trap-music, bounce-music,
  messy-mya, big-freedia, fair-use, melina-matsoukas,
  arthur-jafa, malcolm-x, pazz-and-jop, trap-808, vocal-fry,
  code-switching, hbcu. The existing black-panthers entry
  was enriched with the COINTELPRO and fiftieth-anniversary
  detail (a duplicate black-panther-party entry I drafted in
  parallel was rolled into the existing entry rather than
  shipped). Two retroactive cleanups: module2/index.html's
  Track 5 link (which had been pointing to the placeholder
  filename track5-formation.html since the landing page was
  first built) now points to track5-beyonce.html, and
  module2/roots-and-routes.html's first substantive prose
  mention of "Formation" in the political-modes presence
  paragraph is now linked to the Track 5 listening guide,
  parallel to the existing forward links to Brown, Tharpe,
  and "The Message" in the same paragraph. Two new
  intentional skips were introduced and are documented below
  as items 10 and 11.
- Post-Track-5 review of the Module 2 landing page caught two
  issues. (1) The Track 4 link on the landing page had been
  pointing to the placeholder filename track4-message.html
  since Track 4 shipped; the actual file has always been
  track4-grandmaster-flash.html. Same family of bug as the
  Track 5 placeholder link caught when Track 5 was shipped,
  but lived on the live page for multiple sessions. Now
  resolved. Note for future link audits: when shipping a
  track, grep the landing page for placeholder-shaped hrefs
  before pushing. (2) The Track 5 description on the landing
  page was rewritten to match the pattern of the other four
  track descriptions: a pivot clause followed by specifics
  that preview the actual musical and recording-level work
  the listening guide does. The closing beat of the new
  description ("the long lineage of Black political music
  the song closes") also makes Track 5's role as the
  module's chronological closer explicit on the landing page.
- Three follow-up glossings added to Track 5 body prose
  after a closer read found three names buttoned-by-neighbors
  but unbuttoned themselves: michael-brown and eric-garner
  in the political-moment paragraph (where trayvon-martin,
  black-lives-matter, and sandra-bland were already buttoned),
  and pluss in the recording paragraph (where mike-will-made-it
  was already buttoned). The michael-brown and eric-garner
  entries follow the structural pattern of the existing
  trayvon-martin and sandra-bland entries (name, age, place
  and date of death, arresting officer or party, what
  happened, the legal outcome, the political-organizing
  afterlife with its specific rallying cry). The pluss entry
  parallels the mike-will-made-it entry it sits next to in
  the glossary file. The one-button-per-page convention
  meant only the first mention of each name on the page got
  the button. Glossary count: 307.
- `module2/discussion.md`: discussion prompt with Canvas paste
  block. Frames the Module 2 thread as "Two Tracks in
  Conversation" (matching the wording on the Module 2 landing
  page), in deliberate contrast to Module 1's "pick one track
  and write about your strongest reaction" frame. Names three
  shapes a conversation can take (a thread that runs from
  earlier to later, a productive contrast, a shared thing two
  tracks each do differently), with the three modes of
  political work from the framing reading (content, form,
  presence) cited as one organizing axis for the third shape.
  Asks students to respond to classmates who picked different
  pairs of tracks so the thread covers more of the module
  rather than concentrating on a few popular pairs. Initial
  post and two responses both due Sunday, July 19 (the
  combined Modules 2 through 5 deadline). Names the SLOs
  addressed (2, 3, 5) plus the GE-UD-3 methodology outcome
  and the Diversity Overlay outcome on cultural histories.
  Pattern follows the Module 1 discussion file.
- `module2/quiz.md`: 12-question checkpoint quiz with student
  intro, structured questions, Canvas paste block, and
  bulleted answer key. Coverage distribution: four framing-
  reading questions (what "foundational" means, the roots-and-
  routes phrase from Gilroy, the three modes of political
  work, the sacred-secular argument), two questions per anchor
  track for Tracks 1 through 4 spread across factual recall
  and methodology-vocabulary application (Q5 Bessie Smith's
  three musicians, Q6 the habanera bridge, Q7 Tharpe's
  COGIC tension, Q8 the gospel-into-R&B chart crossover, Q9
  the children's chorus from Watts and Compton, Q10 the
  single-vamp form of "Say It Loud," Q11 the expanding-verse
  architecture of "The Message"), and one Track 5 question
  (Q12 the marching-band horns at 0:55). Every fact-claim in
  the quiz is grounded in the existing Module 2 page text;
  spot-checked all twelve before shipping. Pattern follows
  the Module 1 quiz file, including the all-correct-answers-
  are-(a) convention in the structured-for-reading half (the
  Canvas paste block strips the letters since Canvas
  randomizes answer order at quiz-build time).
- Fresh-eyes audit pass on Module 2 after the discussion and
  quiz shipped. Six small editorial fixes across four
  listening guides, all detailed in the Last-updated header at
  the top of this file: the Track 4 "The 2007 Rock and Roll
  Hall of Fame" phrasing, the Track 5 Shantrelle Lewis broken-
  quote construction, the Track 1 stacked-negative texture
  beat, two Sanctified capitalization inconsistencies on Track
  3 and Track 5, the two Track 2 "rock-and-roll" hyphenations
  in the guitar-break paragraph, and the Track 5 Wikipedia
  citation format. No factual claims changed, no navigation
  changed, no glossary changes; audit baseline (16 files, 0
  errors, 9 intentional warnings) preserved. The audit also
  ran a battery of cross-page checks that came back clean:
  cross-track BPM references match (Smith 70, Tharpe 155,
  Brown 115, "The Message" 101, Beyoncé 123); the navigation
  chain across all seven Module 2 pages is bidirectional and
  correct; "Track N of 5" labels are right; no body-prose em
  dashes outside song titles and nav labels; the Track 3 voices
  recap matches each individual track's own description of its
  vocal timbre; and the discussion and quiz I shipped this
  session ground every fact-claim in the actual listening-
  guide text.
- After Track 2 shipped, a series of cleanup passes ran on the
  methodology reading and the glossary. The methodology reading
  gained a tempo/beat/meter/rhythm reference section between the
  "how to actually listen" section and the four analytical
  frames, with three new SVG meter diagrams (4/4, 12/8, 3/4) all
  using the same "main beats numbered, ampersand subdivisions"
  labeling logic so students can read the three meters as
  variations on the same shape. Six new glossary entries were
  added through that work and through subsequent prose passes:
  carmen, louis-armstrong, dynamics, beat, offbeat,
  dixie-hummingbirds, muddy-waters. First-mention buttons added
  retroactively across the relevant pages.
- A glossary-data encoding bug was caught and fixed: 12 entries
  carried HTML-entity-encoded ampersands ("R&amp;B", "Earth,
  Wind &amp; Fire") that rendered as the literal entity string
  in gloss popups because glossary.js injects the strings via
  textContent. Replaced all "&amp;" with plain "&" and added
  a header comment to glossary-data.js flagging the gotcha.
- Final-project Wikipedia citation policy updated. The original
  "Wikipedia is fine for orienting yourself but does not count
  as a source" rule (in final-project/index.html, 01-proposal.md,
  and 02-annotated-bibliography.md) is gone; Wikipedia and
  similar well-cited reference articles now count as cited
  sources, with a soft nudge for students to follow Wikipedia
  citations down to a primary source. AI-generated text and
  unverifiable internet posts are still excluded.
- A swept fix for misplaced first-mention gloss buttons: the
  audit script's once-buttoned-anywhere logic clears any term
  that has any button on a page, which means cases where the
  button is later than the actual first prose mention don't
  fire. A one-off Python scan caught five real misplacements
  (blues, gospel, salsa on the methodology reading; tango on
  Bessie Smith; beat on Cooke; afro-cuban on Cruz). Each
  button moved to first prose mention; redundant later
  buttons dropped.
- New glossary entries added for Track 2 vocabulary: cogic,
  decca, electric-guitar, boogie-woogie, marie-knight,
  sammy-price, cotton-club, from-spirituals-to-swing,
  gayle-wald, overdrive, afm-strike, v-discs. Glossary now
  at 242 entries (after the post-Track-2 additions named above).
  The electric-guitar entry caused missed-gloss warnings on
  module1/track4-williams.html (Williams session personnel
  paragraph), module1/track3-desanto.html (Chess house band
  paragraph), and module2/roots-and-routes.html (Tharpe
  paragraph), all resolved with first-mention buttons. The decca
  entry added a documented intentional skip on the framing
  reading's labels-list table (same pattern as the existing
  house-band, w-c-handy table-cell skips). Per the cross-linking
  convention, the framing reading's prose mention of Tharpe at
  first substantive prose mention is now linked to the new
  track2-tharpe.html page (parallel to the existing Bessie Smith
  link).
- New glossary entries added for Track 1 vocabulary:
  empress-of-the-blues, classic-blues, vaudeville, toba,
  columbia-records, w-c-handy, habanera, spanish-tinge,
  tango, acoustic-recording, cornet, harmonium, contralto,
  obbligato, aab, ragtime, billie-holiday, big-mama-thornton.
  The new w-c-handy entry introduced a documented intentional
  skip in the Module 2 framing reading's labels-list table
  cell (same narrow-monospace-cell rendering issue as the
  existing house-band skip). The new billie-holiday entry
  caused a missed-gloss warning on module1/track3-desanto.html
  (Holiday named in the Fillmore-clubs paragraph), resolved
  with a gloss button at first mention.
- New glossary entries added across recent sessions covering
  Module 2 vocabulary: spirituals, west-african-music,
  field-hollers, ring-shouts, reconstruction, bent-notes,
  juke-joints, funk, motown, mississippi-delta, chicago-blues,
  thomas-dorsey, pentecostal, sacred-music, vocal-runs,
  testifying, cipher, mc, sampling, backbeat, downbeat,
  black-power, black-panthers, beyonce, whitney-houston,
  grandmaster-flash, jazz. Glossary previously at 201
  entries; the housekeeping pass dropped duplicate blues
  and country-music entries and merged son/son-cubano into
  one, then added jazz; earlier in the session beyonce,
  whitney-houston, grandmaster-flash, and black-panthers
  had been added for the framing-reading editorial pass.
  This session pushed the count to 219 with the Bessie
  Smith Track 1 cluster.

**Module 3: Latin diasporic traditions.** Partial.
- Anchor track lineup decided and locked. Five tracks,
  chronological 1962-2002, ending pre-Bad-Bunny: Tito Puente
  "Oye Como Va" (1962/63, mambo/cha-cha-chá NY); Joe Bataan
  "Gypsy Woman" (1967, Latin soul/boogaloo, Spanish Harlem);
  Santana "Oye Como Va" (1970, Latin rock, Bay Area Chicano
  scene, direct Puente cover); Selena "Bidi Bidi Bom Bom"
  (1994, Tejano, Texas-Mexico borderland); Tego Calderón
  "Pa' Que Retozen" (2002, Afro-Puerto Rican reggaeton,
  artistic-political anchor track since the framing reading
  carries Daddy Yankee's "Gasolina" 2004 as the commercial-
  breakthrough context). Salsa is not anchored in Module 3
  because Module 1's Cruz/Fania track already carries it; the
  Module 3 framing reading cross-references back to that
  Module 1 track. The framing reading's labels table also
  documents the Puerto-Rican-mixtape-to-major-label arc that
  produced reggaeton as commercial genre.
- `module3/roots-and-routes.html`: full framing reading,
  shipped. Title: "Many Roots, Shared Routes." Full structure
  and revision history detailed in the Last-updated header
  at the top of this file. The structural decision was that
  Module 3 needed a full framing reading parallel to Module 2,
  not just a shorter framing on the landing page, because the
  territory it covers (Cuban + Puerto Rican + Mexican +
  Dominican + Panamanian + Colombian, across the Caribbean and
  the Mexican-American borderland) is dispersed enough that
  it earns the longer treatment. The reading is 254 lines, in
  the Module 2 framing-reading length range. Page validates
  cleanly, audit baseline holds.
- The labels table in Section 4 uses a new `.schedule.labels-
  table` CSS modifier (introduced in commit `4bc3685`) that
  splits `(city, dates)` onto a metadata line below the label
  name. The same modifier was applied to the Module 2 labels
  table at the same time for consistency. The syllabus
  schedule table remains on the bare `.schedule` class with
  its original `nowrap` first-column behavior, which is right
  for short date strings like "Sun, July 12."
- Module 3 has not yet shipped: the landing page
  (`module3/index.html`); the five listening guides
  (`module3/track1-puente.html`, `module3/track2-bataan.html`,
  `module3/track3-santana.html`, `module3/track4-selena.html`,
  `module3/track5-tego.html`); the discussion
  (`module3/discussion.md`) and the checkpoint quiz
  (`module3/quiz.md`). The framing reading's nav footer points
  to `track1-puente.html`, which currently 404s; building the
  Track 1 listening guide is the natural next step.
- Glossary expansion: 40 new entries added across the Module 3
  build, listed in the Last-updated header. Glossary count
  went from 307 (end of Module 2) to 347 (end of this session).

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

**Module 2.** Complete. Framing reading, landing page, all
five anchor tracks, the discussion (`module2/discussion.md`),
and the checkpoint quiz (`module2/quiz.md`) are in place. The
remaining open items are not content-pending but launch-
pending: image rights for the Great Migration map and for the
Track 1, 2, 3, and 4 hero photos still need verification or
swap before the course goes live (see "Image rights to verify
before launch" further down).

**Module 3: Latin diasporic traditions.** Partial. The framing
reading is shipped (see What is complete and live). What
remains: landing page (`module3/index.html`), five listening
guides (Tito Puente "Oye Como Va," Joe Bataan "Gypsy Woman,"
Santana "Oye Como Va," Selena "Bidi Bidi Bom Bom," Tego
Calderón "Pa' Que Retozen"), `discussion.md`, and `quiz.md`.
Each listening guide will follow the Module 2 envelope (104-117
lines) and the established four-section context plus four-prompt
"Things to listen for" structure. Framing-reading nav footer
currently points to `track1-puente.html` which 404s; building
the Tito Puente Track 1 guide is the natural next step.

The framing reading also flagged a small set of labels-table
factual claims for verification before launch (in addition to
image rights):
- Discos Falcon founding date claimed as 1947; double-check
  before launch.
- Tico Records claimed dates 1948-1974; double-check.
- EMI Latin geography claimed as "Los Angeles / Miami"; this
  is the rough framing but the corporate history is more
  complicated and worth verifying that both city labels are
  defensible.
- Q-Productions founding year claimed as 1986; double-check.

**Modules 4 and 5.** None yet drafted. Each will follow
the `module1/` pattern: an `index.html` landing page, the
listening guides for the module's anchor tracks (count to be
decided per module), `discussion.md`, and `quiz.md`.

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

**Image rights to verify before launch.** Several items, same
defensible-educational-use category as the KQED/Getty editorial
photos already in the course:

1. *Module 2 Great Migration map* (`assets/images/great-migration-map.jpg`,
   used in `module2/roots-and-routes.html` Figure 1). Map by Blair
   Tinker for the Pathstone Antiracist Curriculum Project, sourced
   from Clarissa Uprooted (Teen Empowerment, Rochester NY,
   clarissauprooted.org). The Antiracist Curriculum Project / RIT /
   University of Rochester ecosystem describes the materials as
   freely available for educator use ("we don't want to gate keep
   any of this information," per co-executive director Kesha James,
   WXXI 2023). Source site has a generic All Rights Reserved
   notice. Used with full attribution. Before the course goes
   live, contact the Antiracist Curriculum Project (likely through
   info@arcjustice.org or the Clarissa Uprooted team via
   ClarissaUprooted@teenempowerment.org) for explicit
   permission, or swap for a public-domain alternative.

2. *Module 3 Pearson migration map*
   (`assets/images/latin-american-migration-map.jpg`, used in
   `module3/roots-and-routes.html` Figure 1). Static map © 2005
   Pearson Prentice Hall, showing migration to the US from Latin
   America and the Caribbean with annual figures in thousands.
   Defensible educational use with the © attribution in the
   figcaption ("Map © 2005 Pearson Prentice Hall."). The original
   instructor-facing rights-flag sentence in the figcaption was
   removed because instructor-facing flags belong in commit
   messages and STATUS, not in student-facing prose. The map is
   still on the launch-pending verification list. Before launch,
   contact Pearson education permissions for explicit clearance,
   or swap for a public-domain or Creative-Commons-licensed
   alternative (e.g., the Migration Policy Institute's data
   visualizations, US Census or Pew Research Center static
   maps, or a hand-drawn equivalent).

3. *Module 1, Module 2, and Module 3 hero photos.* Editorial-use
   copyrighted photos from KQED, Getty, and similar (already
   noted in the README photo convention). Same flag-before-launch
   rule. The Module 3 listening guides have not yet been built;
   their hero photos will land in this category as well, and
   should be selected with the verification queue in mind.

**Glossary housekeeping.** Items 1 through 5 from the previous
list have been resolved in this session. Two known intentional
skips remain.

Resolved:

1. *Duplicate `blues` and `country-music` keys.* The earlier
   entries (in the Module 1 vocabulary clusters) have been
   deleted. The canonical entries now live in the Module 2
   "Framing reading: genres" cluster. The `country-music`
   definition was merged to preserve the Hank-Williams-superstar
   fact and the hillbilly-to-country-and-western rebranding
   detail from the older entry, while keeping the broader
   Scots-Irish / Black-music dialogue framing of the newer one.

2. *`son` and `son-cubano` duplicate.* Consolidated into a single
   `son` entry with label "Son cubano" (no parens), combining
   the cuerpo-and-montuno structural detail from the old
   `son-cubano` entry with the basic-ensemble detail from the
   old `son` entry. The button at `track2-cruz.html` line 74
   was unwrapped (it was the second gloss on the same page,
   violating the per-page first-mention rule); the first-mention
   button at line 52 keeps its `data-term="son"`. The label
   change to "Son cubano" also resolves item 5 below.

3. *`shipyards` entry broadened.* Label changed from "West Coast
   shipyards" to "Wartime shipyards"; definition broadened to
   cover both West Coast yards (Bay Area, LA, Portland, Seattle)
   and Gulf Coast yards (Mobile, AL). The Williams-track
   reference to "shipyards in Mobile, Alabama, and Portland,
   Oregon" is now glossed, pointing to the broadened entry.
   The track3-desanto and module2/roots-and-routes button text
   "West Coast shipyards" still works correctly because the
   button text is just the visible label and the gloss popup
   uses the data-term key.

4. *`jazz` entry added.* New entry in the Module 2 genres
   cluster, between blues and country-music. Three sentences:
   New Orleans origins from blues/ragtime/brass-band/spirituals/
   Afro-Caribbean rhythm, improvisation as the central feature,
   1920s-1940s dominance and ongoing influence on R&B, soul,
   hip hop, and Latin music. First-mention buttons added to
   `module1/cultural-roots.html` (genre-list paragraph),
   `module1/track2-cruz.html` ("jazz harmony"),
   `module1/track3-desanto.html` ("jazz and R&B clubs"), and
   `module1/track4-williams.html` (Tee Tot Payne biography).

5. *`son` audit false-positive.* Resolved as a side effect of
   item 2: the label change from "Son (cubano)" to "Son cubano"
   means the audit script's `searchPhrasesFor` no longer
   produces the bare phrase "son" as a search term. The
   "son of a minister" and "son of a logger" prose mentions
   no longer trigger missed-gloss warnings.

Remaining known intentional skips (audit warnings to live with):

6. *`house-band`, `w-c-handy`, `decca`, and `muddy-waters` in
   Module 2 labels-list table.* Four cells in
   `module2/roots-and-routes.html`'s record-labels reference
   table contain glossable terms whose buttons are
   intentionally omitted. The Stax row mentions "racially
   integrated house band (Booker T. & the M.G.'s)"; the Black
   Swan row mentions "founded by W.C. Handy's business partner
   Harry Pace"; the Decca row's leftmost cell reads "Decca (New
   York)" as a header-style label; the Chess row's artist-list
   cell reads "Muddy Waters, Howlin' Wolf, Chuck Berry, Etta
   James, Sugar Pie DeSanto." All four terms are glossed in
   regular prose elsewhere on the site (house-band on the
   Module 1 DeSanto and Williams guides; w-c-handy in the
   Module 2 Track 1 Bessie Smith guide; decca in the Module 2
   Track 2 Tharpe guide; muddy-waters in the Module 1 DeSanto
   guide and the Module 2 Track 2 Tharpe guide). Inside the
   narrow monospace table cells the dotted-underline gloss
   button rendered awkwardly across the inter-word space, so
   the cells stay unbuttoned. Same skip pattern as the
   original Stax house-band item.

7. *`diaspora` in `module1/cultural-roots.html`.* The term is
   defined in extended prose at first mention rather than
   glossed inline ("Diaspora is the word we use for a community
   that has spread out from a homeland..."). Deliberate
   pedagogical choice. The audit flags it; intentional skip.

8. *bare `rhythm` inside "rhythm section" on
   `module2/track2-tharpe.html`.* The Tharpe Track 2 page glosses
   the compound term `rhythm-section` at first mention in the
   recording paragraph, then refers to "a rhythm section in the
   modern sense" two paragraphs later in the texture prompt. The
   audit's once-buttoned-anywhere-on-page logic clears the
   compound `rhythm-section` matches, but the bare `rhythm` label
   then matches the same span. Adding a separate `rhythm` button
   inside the words "rhythm section" would visually double-gloss
   a compound term that is already adequately glossed. The bare
   `rhythm` term is glossed on five other pages where it appears
   in standalone use; on the Tharpe page it only appears inside
   compounds (`rhythm-section`, `rhythm and blues`, `rhythmic`,
   `rhythmically`), all of which are either separately glossed or
   are word-boundary-different forms the audit correctly does not
   flag. Intentional skip.

9. *bare `dominant` in
   `module2/track4-grandmaster-flash.html`'s reflective question.*
   The `dominant` glossary entry defines the music-theory term
   (the V chord). The reflective question's last line uses the
   English adjective "dominant" in "the dominant culture wished
   to ignore." Glossing it as the music-theory term would be
   misleading. The audit's word-boundary regex (`[^\w-]` on each
   side) correctly does not flag the bare `dominant` on
   `module2/track3-brown.html` because the only occurrence there
   is "dominant-flavored E-flat chord" and the trailing hyphen
   fails the boundary check; on Track 4 the word appears only in
   the reflective question, with a space on each side, so it
   matches. Intentional skip.

10. *page subject `beyonce` in
    `module2/track5-beyonce.html`'s video card.* The `beyonce`
    glossary entry exists for cross-references on other pages
    (the cultural-roots reading, the framing reading) where
    Beyoncé's name is one term among many in a list of
    influential artists. On the Track 5 listening guide,
    Beyoncé is the subject of the entire page, and the
    convention developed across the other Module 2 listening
    guides is that the page subject is not buttoned in body
    prose. The audit flags her name in the video-card
    `<span class="video-title">` element, which is a UI label
    rather than substantive prose. Same family as Track 4's
    track-title element naming Grandmaster Flash and the
    Furious Five (Track 4 happens not to flag because the
    `grandmaster-flash` key is buttoned elsewhere in body
    prose for its own pedagogical reasons; Track 5 does flag
    because the same is not true here). Intentional skip.

11. *bare `second-line` on
    `module2/track1-bessie-smith.html`'s timbre paragraph.*
    The `second-line` glossary entry, added during the Track 5
    work, defines the New Orleans parade tradition and the
    associated rhythm pattern. The Bessie Smith Track 1 page
    uses the same two words in their ordinary English sense:
    "the small breath she takes before the second line of each
    verse." Glossing this as the New Orleans tradition would
    be misleading. Track 1 also predates the term's entry into
    the glossary by several months, so the prose was not
    written with the gloss in mind. Intentional skip.

The Module 3 framing reading shipped this session contributed
11 new intentional skips, all in already-recognized categories:

12. *`tico-records`, `fania-records`, `decca`, `dancehall`,
    `tex-mex` in `module3/roots-and-routes.html`'s labels
    table.* Five table-cell warnings, same skip pattern as
    Module 2's labels-table cells (item 6 above): the cells
    are narrow and the dotted-underline gloss button rendered
    awkwardly across the inter-word space. All five terms are
    glossed in regular prose elsewhere on the framing reading
    or in adjacent pages.

13. *`trap` (key: trap-music) in
    `module3/roots-and-routes.html`'s opening paragraph and
    Section 6 Bad Bunny mention.* The framing reading buttons
    Latin trap explicitly with the `latin-trap` key at first
    mention in the opening paragraph; subsequent prose uses of
    the bare word "trap" point to the same family of music
    but the second mention is intentionally not buttoned per
    the one-button-per-page convention.

14. *`waltz`, `rhythm`, `rhythm-section` in
    `module3/roots-and-routes.html`.* Three too-basic / false-
    positive skips. `waltz` appears in the Mexican-substrate
    paragraph in compound contexts ("polkas and waltzes")
    where the audit's word-boundary regex matches but the
    word is doing ordinary-English work and is not a music-
    theory pedagogical target on this page. `rhythm` and
    `rhythm-section` similarly appear in compound or generic-
    English uses ("rhythmic patterns," "rhythm section
    practice") where the bare-word match is a false positive.
    Same family as the `dominant` false positive on Module 2
    Track 4 (item 9) and the bare `rhythm` false positive on
    Module 2 Track 2 Tharpe (item 8).

**Repo-wide audit state.** 17 files, 0 errors, 20 warnings.
All twenty are documented as intentional skips above. The 9
Module 1 + Module 2 skips (items 6 through 11) carry over
unchanged. The 11 new warnings from Module 3 are documented
in items 12, 13, and 14, all in already-recognized intentional-
skip categories (table-cell skips, second-mention skips, too-
basic / compound-usage false positives). The
`module1/index.html`, `module2/index.html`, and (when built)
`module3/index.html` landing pages are explicitly out of scope
for missed-gloss flagging because landing pages are
navigational summaries; this is formalized in the README's
"Where glossings do not go" section.

**Audit-script future improvement.** The HTML-encoding bug
discovered this session (27 entries with `<em>` tags or
HTML entities or one `<a>` tag inside their definition strings,
all rendering as literal characters via the loader's
`textContent` injection) was a year-old carryover from the
original Module 1 build. The bug survived multiple audit passes
because `scripts/check-glossings.js` checks for missed gloss
buttons but does not validate the contents of definition
strings against the textContent constraint. Worth adding a
definition-content check to the audit script in a future pass:
flag any definition string containing `<` or `>` characters,
or HTML entities like `&amp;`, `&lt;`, `&gt;`. Would catch this
category of bug at audit time rather than relying on Inés
spotting raw characters in a popup.

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
- Module 3 anchor tracks: five, in chronological order.
  Tito Puente "Oye Como Va" (1962/63), Joe Bataan "Gypsy
  Woman" (1967), Santana "Oye Como Va" (1970), Selena "Bidi
  Bidi Bom Bom" (1994), Tego Calderón "Pa' Que Retozen" (2002).
  Salsa is not anchored in Module 3 because Module 1's
  Cruz/Fania track already carries it; the Module 3 framing
  reading cross-references back to that Module 1 track.
- Module 3 opens with a full framing reading
  (`module3/roots-and-routes.html`), not just a shorter framing
  on the landing page. The territory (Cuban + Puerto Rican +
  Mexican + Dominican + Panamanian + Colombian) is dispersed
  enough to earn the longer treatment. Title: "Many Roots,
  Shared Routes."
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
- Glossary content constraint: definitions are plain text
  only, no HTML tags, no `<a>` links, no entities. The loader
  injects via `.textContent`. Documented in the header
  comment of `assets/glossary-data.js` and enforced manually
  during writing pending an audit-script enhancement.
- Labels-table CSS modifier: `.schedule.labels-table`
  introduced in commit `4bc3685` for the Module 2 and Module 3
  record-labels tables. Splits city/dates onto a metadata line
  (`<span class="meta">`) below the label name, drops `nowrap`
  on the first column, caps it at `max-width: 14rem`. The
  syllabus schedule table stays on the bare `.schedule` class
  with its original `nowrap` first-column behavior.
- Visual identity: cool slate type, cool blue links, warm
  cream background, warm rust glossings (#7a4a3a). Locked.

## Decisions still open

- Modules 4 and 5 anchor track selection. Each module
  needs its own short list, ideally previewed by the artists
  named in the framing reading where they overlap.
- Module 6 anchor track selection beyond the two contemporary
  tracks (Lamar, Bad Bunny). Indigenous and queer liberation
  threads need their own anchor tracks.
- Whether Modules 4 and 5 need full framing readings of their
  own. Modules 2 and 3 each have one; whether 4 and 5 need
  full readings or shorter framing on the landing page is
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
