# Audit notes

How the audit script behaves, which warnings to live with as
intentional skips, and known blind spots worth folding in eventually.
This is stable knowledge: it changes only when the audit script
itself is revised or new categories of intentional skips emerge.

For session-by-session work in progress, see `STATUS.md`.

## Glossary intentional skips (audit warnings to live with)

The audit reports 34 warnings on Module 3 after its fresh-eyes pass;
all fall into the categories below. Module 2 reports 12 after its
fresh-eyes pass; all fall into the categories below. Module 4
reports 18 after the fresh-eyes pass that closed the framing reading
and the per-track listening guides; all fall into the categories
below. Module 1 reports 11 after its fresh-eyes pass; all fall into
the categories below. The M1 fresh-eyes pass cleared fifteen real
misses (`crooner`, `folk-revival`, `rock-and-roll` on the
cultural-roots reading; `elvis-presley`, `joan-baez`, `pete-seeger`,
`clyde-mcphatter` on Track 1; `bongos`, `bb-king`, `hector-lavoe`,
`frank-sinatra` on Track 2; `chuck-berry`, `rock-and-roll`,
`atlantic-records` on Track 3; `elvis-presley` on Track 4). The M2
fresh-eyes pass cleared twenty-nine real misses (`form`, `arca`,
`cornet`, `baptist`, `w-c-handy`, `indigenous`, `rock-and-roll`,
`sugar-hill-records`, `sam-cooke`, `james-brown`, `sugar-pie-desanto`
on the framing reading; `elvis-presley`, `sam-cooke` on Track 1;
`hook`, `chuck-berry`, `rock-and-roll`, `elvis-presley`,
`little-richard`, `rolling-stones` on Track 2; `james-brown` on
Track 3; `hook`, `lauryn-hill`, `tupac-shakur`, `kendrick-lamar`,
`black-lives-matter`, `sam-cooke`, `janelle-monae` on Track 4;
`hook`, `beyonce` on Track 5). The M3 fresh-eyes pass cleared
twenty-four real misses (`indigenous`, `washington-heights`,
`joe-bataan`, `fania-all-stars`, `celia-cruz`, `frank-ocean`,
`dembow` on the framing reading; `tito-puente`, `eddie-palmieri`,
`hook`, `bongos`, `rhythm` on Track 1; `vibrato`, `string-section`
on Track 2; `bb-king`, `rock-and-roll`, `eddie-palmieri`,
`rhythm-section` on Track 3; `hook`, `rock-and-roll` on Track 4;
`latin-jazz`, `rhythm`, `latin-soul`, `atlantic-records` on Track 5).
The `joe-bataan` button on the framing reading is a fix for an
audit blind spot rather than an audit-flagged miss: the audit's
once-buttoned-on-page logic was clearing the warning because
`joe-bataan` appears in a labels-table cell on the framing reading,
even though the first substantive prose mention was unbuttoned.
The M4 fresh-eyes pass cleared several real misses (`mobile-dj`,
`indie-rock`, `paredon-records`, `barbara-dane`,
`asian-improv-records`, `cotton-club` on the framing reading;
`rhythm-guitar`, `pre-chorus`, `jazz`, `blues` on Track 3;
`jazz`, `soul`, `james-brown` on Track 4); the rest are documented
skips.

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
   `pop`, `dominant`, etc., as a possible missed gloss for the
   corresponding technical entry. Most are bare English words in non-
   technical senses (e.g., `dominant musical infrastructure` is the
   adjective, not the V chord; Module 4 framing reading carries one
   such hit on `dominant` in "the dominant non-white labor force,"
   Track 1 carries one on `dominant` in "the dominant mode in commercial
   folk," Track 3 carries one on `dominant` in "the dominant pop
   production aesthetic," Track 4 carries one on `rhythm` in
   "breakbeat-derived rhythm" used in the everyday sense rather than
   as the technical glossary entry, Module 5 framing reading
   carries one on `dominant` in "the dominant nineteenth- and early-
   twentieth-century scientific racism," and Module 5 Track 2 (Baez)
   carries one on `dominant` in "the dominant form of the European
   narrative ballad" and one on `measure` in "in equal measure" as
   the everyday English noun). Track 1 also carries a wrong-
   sense hit on `form` as the verb "would form in 1978," and Track 2
   and the framing reading carry wrong-sense hits on `form` as a
   passing methodology-vocabulary noun ("African American form,"
   "musical form") that is not the page's first substantive mention.
   Under the current convention, the four methodology frames (timbre,
   texture, form, gesture) are glossed on the first substantive prose
   mention in every listening guide; subsequent mentions on the same
   page are not buttoned, and stray noun-sense passing uses in framing
   readings (where the methodology frames are not the page's organizing
   vocabulary) stay unbuttoned as documented skips. Module 5 framing
   reading also carries one on `form` as an everyday English noun in
   "the integrated [book musical] form" and one on `dynamics` as an
   everyday English plural noun ("the racialized credit and royalty
   dynamics") in the figure-note under the Jewish songwriting diagram,
   neither of which is the technical music-vocabulary sense the
   glossary entry covers. Module 5 Track 1 (Lymon) carries the same
   "royalty dynamics" hit on `dynamics` in its production-side
   extraction paragraph. Module 5 Track 3 (Drifters) carries the
   same "royalty dynamics" hit on `dynamics` in its first context
   sub-section, plus a "dominant gospel voice of her decade" hit on
   `dominant` (adjective sense, not the V chord) in the Clara Ward
   paragraph, a "baion-derived rhythm pattern" hit on `rhythm`
   (descriptive use of the everyday English noun rather than the
   technical methodology-frame sense; `baion` is glossed at first
   mention and the rhythm-pattern noun functions as part of the
   compound description), and a "first beat of each measure" hit on
   `beat` (everyday English noun in a descriptive sentence about
   the baion pattern; `measure` is glossed as the technical bar-of-
   music sense on the same line).
   For `pop` specifically: every page in Modules 1-4 carries one
   verb-sense hit in the standard reading-tips note ("you can pop
   open by clicking"); these are wrong-sense matches and not
   buttoned. Two pages also carry intentional skips:
   `module1/track2-cruz.html` has only the verb-sense reading-tips
   hit (the page does not use `pop` as a genre noun anywhere) and
   is skipped entirely; `module1/track3-desanto.html` has
   `pop-chart` already buttoned at first mention (audit-notes
   category 4 below) and no other genre-noun mention to gloss
   separately. All documented per page.
3. **Wrong-sense matches.** The audit cannot distinguish a `tenor`
   saxophone from a tenor voice, or a stage `MC` (master of
   ceremonies) from a hip hop MC, or a song-title `Santana` cross-link
   from the band-name first mention. Each surfaces as a warning that
   is actually a wrong-sense match. Module 4 framing reading carries
   one such hit on `american-national` matched inside the proper noun
   "Filipino American National Historical Society," and one on `aacm`
   inside the proper noun "Association for the Advancement of
   Creative Musicians (AACM)" where the prose itself defines the
   acronym (parallel to the `aapi` skip below). Module 4 Track 4
   carries one on `horn` matched inside "horn stab" (a sample type
   in DJ/scratch vocabulary, not the jazz/blues/R&B horn-section
   sense the gloss describes). Module 4 Track 5 (Mitski) carries one
   on `pop` matched inside the record-label name "Sub Pop" (the indie
   label, not the genre); the page also has the standard reading-tips
   verb-sense hit on `pop`. The genre noun `pop` is not used in the
   prose. Related: the audit's quote-stripping for song-and-album
   titles can leave possessive forms stranded next to following prose.
   Module 5 Track 2 (Baez) carries one such hit on `jazz` matched
   inside the proper-noun festival name "Newport Jazz Festival"
   (the festival, not the genre); the genre noun `jazz` is not used
   substantively in the prose. Module 5 Track 3 (Drifters) carries
   one such hit on `rock-and-roll` matched inside "the Rock and
   Roll Hall of Fame" (the institution, not the genre); the genre
   noun is not used substantively in the prose, which stays inside
   the R&B / pop / soul vocabulary the recording's marketing
   actually used.
4. **Compound-already-buttoned upstream.** When a longer compound key
   like `latin-trap` is buttoned at first mention, the audit also
   flags the bare `trap` later in the prose. Buttoning the bare term
   on top of the compound is redundant; the compound carries the
   gloss. Module 5 Track 1 (Lymon) carries one such hit on `pop`
   matched at "the pop chart in 1981" after `pop-chart` is buttoned
   at first mention upstream ("the Pop Singles chart" in the release-
   history paragraph).
5. **YouTube card metadata, song-title cross-links, and inside-link
   first mentions.** Track 1 and Track 2 video-card labels (`Tito
   Puente`, `Joe Bataan`) and Track 4's song-title cross-link
   (`Santana's "Oye Como Va"` linking to the Santana track) surface as
   audit warnings. Per house style, nav-style metadata, song titles,
   and cross-link anchors are not glossed. The same applies to
   person-name and band-name cross-links wrapped inside `<a>` tags to
   other pages: Module 4 Track 3 carries inside-link first-mention
   hits on `Nobuko Miyamoto` and `Sugar Pie DeSanto` where the names
   appear as the linked text of cross-references back to earlier
   tracks (the names were substantively introduced and glossed on
   their own pages). Module 4 Track 4 carries similar inside-link
   hits on `The Jets` and on cross-reference parentheticals
   ("the layered Minneapolis-sound production on the Jets recording
   (where the labor is divided across a programming team...)";
   "Compare this to the salsa orchestra on the Cruz recording...";
   "moving between blues home base and freely improvised passages")
   where the cross-reference comparison is the rhetorical mode and
   the term has been substantively introduced and glossed on the
   referenced page. Module 5 framing reading carries one such hit on
   `indie-rock` matched inside the not-covered-here list ("the broader
   1990s indie-rock scene"); the term is mentioned in passing inside
   a list of final-project possibilities that the framing reading is
   pointing students past, and the prose reads more naturally without
   buttoning each item. Module 5 framing reading also carries hits on
   `jazz`, `soul`, and `detroit-techno` matched inside the
   `.figure-note` callouts under the Scots-Irish and Jewish-songwriting
   diagrams; these are commentary on the diagram patterns rather than
   substantive body-prose introductions of the terms (which all live
   on Module 2's framing reading), and per house style figure-note
   commentary is not buttoned. The hits exist because earlier drafts
   of Module 5 had a "Where Black music sits in this story" section
   that buttoned these terms substantively in body prose; that section
   was consolidated into the closing "What this module leaves out"
   section in May 2026, and the figure-note mentions are now uncleared
   by any body-prose button.
   Module 5 Track 2 (Baez) carries five passing-list hits inside two
   rhetorical enumerations: the folk-revival instrumentation list
   ("acoustic guitar, banjo, fiddle, harmonica") and the gesture-
   prompt comparison of how other 1960 popular forms handle
   melodramatic lyric material ("the doo-wop lead's vocal break, the
   country singer's catch on the high note, the blues singer's bent
   pitch, the Broadway belt's escalating volume, the gospel singer's
   call-and-response with a choir"). The terms `banjo`, `fiddle`,
   `blues`, `gospel`, and `call-and-response` are mentioned in
   passing as one item each inside a parallel rhetorical sequence;
   none is substantively introduced. All five are substantively
   glossed elsewhere on the site (Module 2 framing reading and
   listening guides primarily). Track 2 also carries one passing-list
   hit on `muddy-waters` matched inside the Lomax Digital Archive
   callout's roster of Library of Congress recordings ("Lead Belly,
   Muddy Waters, Jelly Roll Morton, Vera Hall, Texas Gladden,
   Honeyboy Edwards, and many others"); same passing-list pattern,
   with Muddy Waters substantively introduced on the Module 2
   framing reading. Track 2 also carries one passing-list hit on
   `harry-belafonte` in the bridge-generation paragraph
   ("Harry Belafonte's folk-circuit work also belongs here"),
   matched as a passing parenthetical reference; Belafonte is
   substantively introduced on the Module 2 framing reading.
   Module 5 Track 1 (Lymon) carries four passing-list hits and one
   inside-link cross-reference hit. The crooner-lineage parenthetical
   ("Tony Bennett came up in Astoria, Queens; Sinatra in Hoboken;
   Russ Columbo and a generation of Italian American singers") gives
   passing-list hits on `tony-bennett` and `russ-columbo`, both
   substantively introduced on the Module 5 framing reading. The
   Lymon-influence-list sentence ("Michael Jackson and Billy Joel
   have named Lymon as an influence") gives a passing-list hit on
   `michael-jackson` (none of the other names in the same paragraph
   have glossary entries, and the page's convention is to leave
   influence-list names unglossed). The Morris-Levy credit-theft
   parenthetical ("songs actually written by Chuck Berry, Tommy
   James, and many others") gives a passing-list hit on `chuck-berry`.
   The Module 3 cross-reference paragraph closer ("The Module 3 Joe
   Bataan track (link 'Gypsy Woman,' 1967 endlink) carries the same
   neighborhood-doo-wop inheritance...") gives an inside-link cross-
   reference hit on `joe-bataan`, where Bataan is substantively
   introduced and glossed on his own Module 3 listening guide.
   Module 5 Track 3 (Drifters) carries four passing-list and cross-
   reference skips on the same pattern. The timbre prompt's contrast
   sentence ("a tenor that sits noticeably lower in his range than
   the equivalent Frankie Lymon or Ben E. King leads") gives a
   passing-reference hit on `frankie-lymon`, who is substantively
   introduced and glossed on Track 1; Ben E. King is already
   buttoned upstream on Track 3 itself. The timbre prompt also
   carries an inside-link cross-reference hit on `sam-cooke` matched
   inside `<a href="../module1/track1-cooke.html">Sam Cooke on
   Module 1's Track 1</a>`, where Cooke is substantively introduced
   and glossed on his own page. The gesture prompt's cross-reference
   to Track 1 ("the four-voice doo-wop harmony of three Black and
   two Puerto Rican boys from one street in Washington Heights")
   gives a passing-reference hit on `washington-heights`,
   substantively introduced and glossed on Track 1.
   Module 5 Track 4 (Carlos) carries nine documented intentional
   skips. One on `beat` ("three subdivisions per beat") in the
   compound-meter explanation, where `compound-meter` is buttoned
   at first mention and the bare `beat` is being defined inline as
   part of the same explanation. One on `dominant` matched in "the
   dominant institutional voice" (adjective sense, not the V chord).
   One inside-link cross-reference hit on `hank-williams` matched
   inside `<a href="../module1/track4-williams.html">Hank Williams
   on Module 1's Track 4</a>`, where Williams is substantively
   introduced and glossed on his own page. One on `grand-ole-opry`
   in the same cross-reference paragraph, substantively introduced
   and glossed on Module 1 Track 4. One on `gary-sherman` matched
   in "Garry Sherman's string section" inside the Track 3 cross-
   reference paragraph, substantively introduced and glossed on
   Track 3. The remaining four are from the "Where this track sits
   in Module 5" sub-section, which by design references the other
   M5 tracks substantively rather than crossing into them via the
   methodology-vocabulary cross-callback pattern: one on
   `the-drifters` ("The Drifters in Track 3 are an African American
   vocal group..."), one on `folk-revival` ("working a transatlantic
   folk-revival tradition..."), and one on `brill-building`
   ("working inside a Brill Building songwriting and producing
   system..."), all three substantively introduced and glossed on
   their respective track pages and on the framing reading. And one
   false-positive hit on `basement-workshop` matched in the bare
   English phrase "the family basement workshop" in the Moog
   biographical paragraph, which has nothing to do with the
   Basement Workshop Asian American organization in NYC the
   glossary entry covers.
   Module 5 Track 5 (Springsteen) carries thirteen documented
   intentional skips. Four are wrong-sense or common-English-word
   hits in non-technical senses: `blues` ("the early blues" as a
   passing genre noun, not the technical glossary entry); `rhythm`
   ("R&B rhythm section" where `rhythm-section` is the compound
   and is buttoned elsewhere on the page); `soul` ("doo-wop and
   soul singers" as a passing genre noun, substantively covered
   in Module 2); and `punk` ("the Ramones (the punk band the
   framing reading discussed...") as a framing-reading cross-
   callback in a parenthetical aside. Four are framing-reading
   cross-callbacks where the term is substantively introduced
   and glossed in the framing reading and is being referenced
   on this page rather than re-introduced: `scots-irish` ("the
   Ulster Scots ballad inheritance"), `country-music` (matched
   inside the "country-blues and country-music position" phrase
   explaining cross-harp), `tin-pan-alley` ("the same Tin Pan
   Alley songwriting lineage through Sinatra and Bennett" in the
   Module-5 closing section's three-threads-converging paragraph,
   covered in the framing reading and on multiple other listening
   guides), and `brill-building` ("the Brill Building songwriters
   who wrote for the Drifters and the other doo-wop and R&B
   singers" in the same closing section, covered substantively
   on Track 3 and in the framing reading). Five are cross-track
   callbacks where the named figure or band is substantively
   introduced and glossed on their own listening guide:
   `the-drifters` (Track 3), `frankie-lymon` (Track 1),
   `sam-cooke` (Module 1 Track 1; matched inside a passing
   comparison rather than an `<a href>` wrap on this page),
   `rufus-payne` (Module 1 Track 4, where the Hank Williams /
   Tee Tot Payne apprenticeship is substantively introduced),
   and `deford-bailey` (a passing-list mention in the African
   American harmonica-tradition parenthetical, alongside the
   already-substantively-introduced Sonny Boy Williamson and
   the un-glossed Sonny Terry).
6. **Module 3 Track 2 (Bataan) listening-guide skips.** Four
   documented intentional skips on Track 2 itself, same patterns as
   2 and 3.
7. **Module 5 framing reading: country-music re-glossed in the
   leaves-out section.** The term `country-music` is glossed
   substantively in Thread 1 of the framing reading (line 99, in
   the Ulster Scots paragraph) and re-glossed in the closing
   "What this module leaves out" section (line 501). The audit
   flags this as a "Double-buttoned" warning and per house style
   the convention is first-mention only. The leaves-out section
   is positioned as a self-contained final-project starting point
   that students may jump straight to without reading the full
   framing reading top to bottom; re-glossing the foundational
   genre term there means students don't have to scroll back to
   find the definition. This is a deliberate exception to the
   convention. If similar exceptions accumulate across modules the
   convention should be revisited; for now this is the only one.
8. **Module 1 fresh-eyes pass: documented skips.** The methodology
   reading (`module1/how-to-listen.html`) carries four skips on
   `timbre`, `texture`, `form`, and `gesture`. The methodology
   reading defines the four frames in extended prose and does not
   gloss them on its own page; the surrounding prose is the
   definition. This is a documented exception per conventions; in
   every other listening guide the four frames are glossed on first
   substantive mention. The cultural-roots reading
   (`module1/cultural-roots.html`) carries four skips. One on `form`
   matched in the everyday English compound "global art form of
   turntablism" (the documentary-noun sense, not the methodology
   frame). One on `texture` in "the dense texture and improvisational
   energy of the recording," used as a descriptive English noun in a
   framing reading rather than the methodology-frame sense the
   listening-guide convention covers; the parallel to the methodology
   reading's own no-gloss treatment applies here as well. One on
   `oklahoma` matched inside the state name in "the Dust Bowl
   movement from Oklahoma to California," where the glossary entry
   is the 1943 musical <em>Oklahoma!</em> (wrong-sense match). One on
   `the-river-album` matched inside the river-as-metaphor phrase
   "the river runs through everything" in the closing paragraph,
   where the glossary entry is the Bruce Springsteen 1980 album
   (wrong-sense match).
9. **Module 2 fresh-eyes pass: documented skips.** Twelve skips
   across the framing reading and the five listening guides. On the
   framing reading (`module2/roots-and-routes.html`): three labels-
   table cells (`house-band`, `decca`, `counterpoint`) per item 1
   above; one wrong-sense hit on `dominant` matched in "the dominant
   template for global popular dance music" (adjective sense, not
   the V chord). Note `counterpoint` is also wrong-sense in that
   cell ("in counterpoint to Motown's polished sound" is the
   everyday English "in contrast with," not the musical
   contrapuntal-texture sense the glossary entry covers). On Track 1
   (`track1-bessie-smith.html`): one on `second-line` matched inside
   the everyday English phrase "the small breath she takes before
   the second line of each verse" (the line-2-of-a-verse sense, not
   the New Orleans second-line parade tradition the glossary entry
   covers); one on `rock-and-roll` matched inside "the Rock and Roll
   Hall of Fame" (the institution, not the genre) and inside the book
   title <em>Black Diamond Queens: African American Women and Rock
   and Roll</em>. On Track 2 (`track2-tharpe.html`): one on `rhythm`
   matched inside "rhythm section in the modern sense" where
   `rhythm-section` is the compound key and is buttoned upstream
   (item 4 above); one on `articulation-music` matched inside "crisp
   consonant articulation she learned in COGIC services" (the
   everyday English how-consonants-are-pronounced sense, not the
   technical music sense of note-attack-and-release the glossary
   entry covers). On Track 4 (`track4-grandmaster-flash.html`): one
   on `rock-and-roll` matched inside "the Rock and Roll Hall of Fame
   inducted Grandmaster Flash" (the institution, not the genre); one
   on `dominant` matched inside "the dominant culture wished to
   ignore" (adjective sense, not the V chord); one on `james-brown`
   matched as an inside-link first-mention via `<a
   href="track3-brown.html">James Brown</a>` per item 5 above, with
   subsequent prose mentions following the first-mention-only
   convention. On Track 5 (`track5-beyonce.html`): one on
   `james-brown` matched as an inside-link first-mention via `<a
   href="track3-brown.html">James Brown</a>` per item 5 above.
10. **Module 3 fresh-eyes pass: documented skips.** Thirty-four skips
    across the framing reading and the five listening guides. On the
    framing reading (`module3/roots-and-routes.html`): sixteen
    labels-table cells per item 1 (`tex-mex`, `charanga`, `joe-cuba`,
    `dancehall`, `emi-latin`, `tico-records`, `fania-records`,
    `decca`, `jerry-masucci`, `q-productions`, `johnny-pacheco`,
    `george-goldner`, `abraham-quintanilla`, plus a `tijuana`
    wrong-sense match inside the band name "Los Tucanes de Tijuana"
    in prose, and a `prince` wrong-sense match inside "Prince Royce"
    in prose — the glossary entries are the city and the
    funk/pop star respectively). One compound-already-buttoned hit
    on `trap` per item 4 (`latin-trap` is buttoned upstream). One
    on `form` matched as a generic-noun-sense descriptive phrase
    in "the rumba (a percussion-and-voice form with Yoruba and
    Bantu roots)," where `form` reads as a near-synonym for "genre"
    rather than the methodology-frame sense (parallel to the M5
    framing-reading `form` skip and the M1 cultural-roots
    `texture` skip). One on `rhythm` matched in "the habanera
    rhythm that ran through" as a descriptive-noun pattern after
    `habanera` is buttoned upstream (compound-adjacent descriptive
    noun, parallel to the M5 Track 3 baion-rhythm skip). One on
    `santana-the-band` matched as a passing single-name reference
    in "Santana 1970" inside the five-track chronology summary,
    where `carlos-santana` is the entry being substantively used
    on this page and is buttoned at first prose mention; the band
    per se is substantively introduced and glossed on the Track 3
    listening guide. One on `dominant` matched in "a country whose
    dominant musical infrastructure has long assumed English-
    language commercial product" (adjective sense, not the V
    chord). One on `the-river-album` matched inside the river-as-
    metaphor phrase "kept neatly to its own side of the river"
    (wrong-sense, parallel to the M1 cultural-roots skip).
    On Track 1 (`track1-puente.html`): one on `tenor` matched in
    "Al Abreu on tenor; Pete Fanelli on alto" where the glossary
    entry is tenor *voice* and the prose use is tenor *saxophone*
    (wrong-sense per item 3); two inside-link first-mention hits
    on `celia-cruz` and `james-brown` per item 5.
    On Track 2 (`track2-bataan.html`): one on `mc` matched inside
    "the MC mistaking the name" (the master-of-ceremonies stage MC,
    not the hip hop MC the glossary entry covers; wrong-sense per
    item 3); one compound-already-buttoned hit on `rhythm` inside
    "the rhythm section (piano, bass, conga, timbales, bell)" where
    `rhythm-section` is buttoned upstream (item 4); three inside-
    link first-mention hits on `sam-cooke`, `celia-cruz`, and
    `sugar-pie-desanto` per item 5.
    On Track 3 (`track3-santana.html`): one bare-`rhythm` warning
    that persists after `rhythm-section` was buttoned at first
    prose mention, because the audit script's once-buttoned-on-page
    logic doesn't reconcile the bare key with the compound key
    (documented audit blind spot future-improvement #2).
    On Track 4 (`track4-selena.html`): one on `rhythm` matched in
    "the most widely played dance rhythm in Mexican popular music"
    (descriptive-noun sense rather than the methodology-frame
    sense); two inside-link first-mention hits on `santana-the-band`
    and `celia-cruz` per item 5.
    On Track 5 (`track5-tego.html`): one on `beat` matched inside
    "a dembow programmed beat" (the modern hip-hop/reggaeton
    producer's-track sense, not the methodology rhythmic-grid
    sense the glossary entry covers; wrong-sense).

## Audit script future improvements

Three blind spots accumulated across the build, none blocking, all
worth folding in eventually:

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

## Running the audit

From the repo root:

```
node under-the-hood/scripts/check-glossings.js                       # check all pages
node under-the-hood/scripts/check-glossings.js module2/foo.html      # check one page
node under-the-hood/scripts/check-glossings.js module2/              # check all pages in dir
```

Run before committing any change that touches a glossable HTML page
or the glossary file. The script flags three things: buttons that
reference a `data-term` not in the glossary (a hard error, the page
is broken); the same `data-term` used more than once on a page (a
warning, since the convention is "first substantive mention only");
and glossary labels that appear in the prose but are not buttoned
anywhere on the page (a warning, in case the gloss got missed).

New pages should come back clean before they ship. Some intentional
skips on shipped pages are documented above.
