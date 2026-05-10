# Audit notes

How the audit script behaves, which warnings to live with as
intentional skips, and known blind spots worth folding in eventually.
This is stable knowledge: it changes only when the audit script
itself is revised or new categories of intentional skips emerge.

For session-by-session work in progress, see `STATUS.md`.

## Glossary intentional skips (audit warnings to live with)

The audit reports 29 warnings on Module 3 after the fresh-eyes pass;
all fall into the categories below. Audit reports a handful more on
Module 2; same categories. Module 4 reports 18 after the fresh-eyes
pass that closed the framing reading and the per-track listening
guides; all fall into the categories below. The fresh-eyes pass cleared
several real misses (`mobile-dj`, `indie-rock`, `paredon-records`,
`barbara-dane`, `asian-improv-records`, `cotton-club` on the framing
reading; `rhythm-guitar`, `pre-chorus`, `jazz`, `blues` on Track 3;
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
   as the technical glossary entry, and Module 5 framing reading
   carries one on `dominant` in "the dominant nineteenth- and early-
   twentieth-century scientific racism"). Track 1 also carries a wrong-
   sense hit on `form` as the verb "would form in 1978," and Track 2
   and the framing reading carry wrong-sense hits on `form` as the
   four-frame methodology vocabulary noun ("African American form,"
   "musical form"), which per convention is not glossed. Module 5
   framing reading also carries one on `form` as an everyday English
   noun in "the integrated [book musical] form" and one on `dynamics`
   as an everyday English plural noun ("the racialized credit and
   royalty dynamics") in the figure-note under the Jewish songwriting
   diagram, neither of which is the technical music-vocabulary sense
   the glossary entry covers.
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
4. **Compound-already-buttoned upstream.** When a longer compound key
   like `latin-trap` is buttoned at first mention, the audit also
   flags the bare `trap` later in the prose. Buttoning the bare term
   on top of the compound is redundant; the compound carries the
   gloss.
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
   buttoning each item.
6. **Module 3 Track 2 (Bataan) listening-guide skips.** Four
   documented intentional skips on Track 2 itself, same patterns as
   2 and 3.

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
