# Status

Current state of the build. Three sections: what's done, what's
next (in order), what's open. Update at the end of any session
that ships meaningful work; overwrite, don't append.

For editorial conventions and locked decisions, see `conventions.md`.
For audit-script behavior and intentional skips, see `audit-notes.md`.

## Done

- Module 1 (Orientation and Methodology): full build
- Module 2 (African American foundational traditions): full build
- Module 3 (Latin diasporic traditions): full build
- Module 4 (Asian American traditions): full build (framing reading,
  five tracks, index, discussion, quiz; index discussion blurb
  updated to the pick-a-reflective-question pattern)
- Module 5 framing reading: full build, with substantial polish
  pass to sharpen the racial-dynamics framing throughout. Anchor
  lineup locked, full framing essay with Jacobson three-periods
  diagram + four thread diagrams (all vertical, label font 16px
  in SVG, rendered at max-width 440px CSS for ~12px effective
  text). Glossary now at 582 entries.
  Whiteness-as-outcome thesis stated up front; WASP/German
  Protestant/Scandinavian Lutheran bullies named; anti-Black-floor
  paragraph with Draft Riots and Roediger/Ignatiev citation; Tin
  Pan Alley split into Jewish-songwriting paragraph plus Black-
  music-exchange paragraph, with the exchange paragraph sharpened
  to name appropriation and minstrelsy plainly (Jazz Singer is
  named as the racist work it is, not "something more
  uncomfortable"). Two thread diagrams (Ulster Scots and Jewish
  songwriting) rebuilt with Black-music side-stream architecture:
  the Ulster Scots diagram shows the banjo's path from West
  Africa via enslaved musicians via blackface minstrelsy into
  Appalachia; the Jewish songwriting diagram shows continuous
  absorption across three institutional eras (ragtime/blues/jazz
  into Tin Pan Alley, jazz standards into Broadway, R&amp;B/gospel/
  doo-wop into the Brill Building). Both diagrams carry a new
  `.figure-note` callout below the figcaption explicitly framing
  what the side stream depicts. Songbook and Brill Building
  glossary entries revised to push back on canonical framings,
  separating writer-canon (overwhelmingly white), performer-canon
  (heavily Black), and source material (inseparable from African
  American music), and naming the structural racism in
  rights/income retention. Six gloss buttons moved from the
  four-traditions overview paragraph to substantive later mentions.
  Multiple roll-call paragraphs and biographical parentheticals
  dropped where the gloss popups carry the same information.
  Italian-Irish-Polish thread section rebuilt: Springsteen
  biographical paragraph removed (that material belongs in the
  listening guide); Italian American crooner tradition expanded
  from a name-drop into two substantive paragraphs (Crosby
  template + Italian American adopters with bel canto and
  canzone napoletana inheritances; crooners' relationship to
  African American music with Sinatra's 1958 Ebony quote and
  Bennett at Selma 1965); diagram restructured so crooners and
  doo-wop are parallel mid-century branches off the urban-enclaves
  box, both feeding the rock-and-roll merge node, then on to
  heartland rock. Ten new glossary entries (crooner, bing-crosby,
  russ-columbo, frank-sinatra, tony-bennett, bel-canto,
  neapolitan-song, house-i-live-in, selma-march, harry-belafonte).
  Three new sources (Sinatra Ebony 1958, Bennett autobiography,
  Kaplan Frank: The Voice, Cinotto Making Italian America).
  Thread 1 renamed from "Scots-Irish" to "Ulster Scots"
  throughout (heading, diagram title, figcaption, body prose,
  cross-references, related-not-anchored country aside, and
  Sources section descriptive text), to keep the Protestant
  Ulster population distinct from the Catholic Irish who arrive
  in Thread 3. The data-term key remains `scots-irish` (internal
  identifier); the gloss label and definition are rewritten to
  lead with "Ulster Scots," noting "Scots-Irish" as the dominant
  American scholarly synonym so students can find their way in
  the broader literature. The substantive first-mention gloss
  button moved from the line-22 example to the line-99 substantive
  introduction, matching the pattern used for `appalachia`.
  Crooner-adopters list trimmed from seven names (Columbo, Sinatra,
  Bennett, Como, Damone, Martin, Darin) to three (Columbo, Sinatra,
  Bennett); the diagram crooner-box label updated to match
  ((Columbo, Sinatra, Bennett), 1930s-1950s). Added a "Credit where
  due" callout between the crooners' racial-dynamics paragraph
  and the doo-wop paragraph, naming Sinatra and Bennett as
  documented exceptions to the appropriation pattern (Sinatra's
  1958 Ebony essay on Holiday and his civil-rights record,
  Bennett's Selma participation), with the qualifier that
  neither dismantled the structural racism of the music industry.
  Added a new `.callout` CSS class (sibling to `.figure-note`,
  same visual treatment, semantically distinct: in-prose callout
  rather than figure commentary) and `.callout-lead` for the
  bold opening clause.
  Tail of the framing reading consolidated: the four closing
  sections (Where country and folk sit, Where Black music sits,
  The arc of the anchor tracks, What this module does not cover)
  collapsed into a single "What this module leaves out" section
  parallel to Module 4's existing version. The Black-music section
  was redundant given the racial-dynamics work woven through the
  rest of the reading (banjo card, Jewish-songwriting figure-note,
  Credit-where-due callout, prose); the arc-of-the-anchor-tracks
  section was a recap of material the four threads had just
  finished doing. The new consolidated section covers seven paths
  not taken (country, Elvis, the crooner tradition past Sinatra
  and Bennett, polka, German-Eastern-European art-music refugees,
  punk, the 1990s indie-rock / grunge / Americana grab-bag) as
  final-project territory. New glossary entry for `elvis-presley`;
  the new section also picks up first-substantive-mention glosses
  for `gospel`, `rnb`, `blues`, `waltz`, `b-side`, and
  `big-mama-thornton` in the Elvis paragraph. Glossary now 583.
  Audit-notes documents three new intentional skips
  (`jazz`, `soul`, `detroit-techno`) on the framing reading,
  introduced when the consolidation removed the Black-music section
  that had been clearing the figure-note mentions.
- Final project module: full build

## Next (in order)

- Module 5 listening guides (5 tracks: Lymon, Baez, Drifters,
  Carlos, Springsteen). Track 1 (Lymon) is fully verified and
  ready to draft when Ines greenlights. Track 4 (Carlos) needs
  special handling for the YouTube card pattern given Carlos's
  stated wishes about her catalog.
- Module 5 index, discussion, quiz
- Module 6: anchor tracks beyond Lamar / Bad Bunny, then build

## Open

**Module 3 forward-reference links.** Anchor tags at
`module3/roots-and-routes.html` lines 189 (Module 6) and 201
(Module 4) point to pages that did not yet exist when Module 3
shipped. Module 4 now exists; Module 6 does not. Upgrade the
Module 4 link in a Module 3 polish pass.

**Module 3 Discos Falcon date.** Currently 1947; UCLA Frontera
Collection sources are split between 1947 and 1948. Defensible
either way.

**Module 6 anchor tracks.** Indigenous and queer-liberation
threads still need their own anchor tracks beyond the named
Lamar and Bad Bunny tracks.

**Track 4 Selena hero photo.** Current image is iHeart/Rovi-sourced
and unattributed. Two stronger-attributed candidates exist (Al Rendon
1992, John Dyer 1992). Curation question, not a rights question;
swap when convenient.

**Module 4 framing reading length.** ~4,500 words, vs ~3,000-3,500
for Modules 2 and 3. The "1965 and what changed" section has some
overlap with "What 'Asian American' means here" that could be
tightened in a polish pass; not blocking.

**Module 4 Track 5 (Mitski) length.** Three context subsections
rather than the four-section pattern the rest of Module 4 uses; the
convention says four is flexible, but this is the only Module 4
track that breaks the pattern. A natural fourth subsection would
pick up the post-2016 indie rock landscape and the song's afterlife
(the Marie Claire 10-year retrospective material is already in the
sources). Optional polish.

**Module 4 Track 1 (Iijima/Miyamoto/Chin) Will Crittendon source.**
Sources section cites Wang's interview on the 1972 Crittendon-
produced 7" single, but the body text does not mention the 1972
single. Either weave the single into the recording paragraph or
drop the source from the Sources section.

**Tin Pan Alley glossary entry.** The Songbook and Brill Building
entries were revised this session to name the writer-canon /
performer-canon / source-material racial dynamics explicitly. The
tin-pan-alley entry uses the older "exchange" framing and does not
yet acknowledge the same dynamics in parallel. Worth bringing it
up to the same standard in a future polish pass.
