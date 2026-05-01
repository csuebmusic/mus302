# MUS 302: What to Listen for in Music

Course materials for MUS 302, an online asynchronous upper-division
general education course at California State University, East Bay,
taught by Inés Thiebaut. The course surveys American popular music
from the 1940s forward, organized around four cultural traditions
and the dialogues between them: African American foundational
traditions, Latin diasporic traditions, Asian American traditions,
and European American immigrant and working-class traditions.

The live site is at https://csuebmusic.github.io/mus302/. This
repository is the source.

## What is in this repo

The repo holds two kinds of content. Student-facing HTML pages
render on the live site through GitHub Pages and serve as durable
references students return to throughout the term. Markdown source
files alongside them hold content that gets pasted into Canvas
(discussion prompts, quizzes), so the repo stays the canonical
source of truth even when the delivery happens elsewhere.

## Layout

```
mus302/
  syllabus.html             Live syllabus
  syllabus.md               Markdown source for Canvas paste

  assets/
    style.css               Shared stylesheet for all pages
    glossary.js             Click-to-reveal glossary behavior
    glossary-data.js        All defined terms, growing as new pages are added
    images/                 Hero photos for listening guide pages

  module1/
    index.html              Module 1 landing page
    how-to-listen.html      Methodology reading
    cultural-roots.html     Framing reading
    track1-cooke.html       Listening guide: Sam Cooke
    track2-cruz.html        Listening guide: Fania All-Stars with Celia Cruz
    track3-desanto.html     Listening guide: Sugar Pie DeSanto
    track4-williams.html    Listening guide: Hank Williams
```

Modules 2 through 6 will follow the same pattern as `module1/`,
each with their own `index.html` and a set of listening guide
pages, plus markdown source files for discussion prompts and
quizzes that live in Canvas.

## Course architecture

The course has six modules. Module 1 must be completed first
(orientation and methodology). Modules 2 through 5 cover the
four cultural traditions and unlock simultaneously after Module
1 is complete; students can do them in any order. Module 6
synthesizes across the four traditions and adds Indigenous
popular music and queer liberation as cross-cutting threads.

A research project runs in parallel with the modules across
the term. Students research a genre and an artist of personal
significance and present as a PowerPoint deck with recorded
video commentary.

The hard-date schedule lives in the syllabus. The summer 2026
term runs May 26 to July 31.

## Editorial conventions

These conventions have been worked out across the existing
pages and should hold for new modules.

**Listening guide structure.** Each guide opens with a course
header, page title, video link card, hero photo with caption,
then a four-sub-section context block (the sub-sections are
flexible per artist but the count is consistent), then a "Things
to listen for" block with four prompts (covering some combination
of timbre, texture, form, gesture), a reflective question, sources,
and forward and back navigation.

**Methodology vocabulary.** Timbre, texture, form, and gesture
are the four frames introduced in the methodology reading and
used consistently across all subsequent listening guide pages.
Music-theory vocabulary (key, meter, tempo, the I-IV-V progression,
the 12-bar blues, simple verse form, etc.) is introduced as needed
and glossed inline.

**Glossings.** Aggressive. Any specialized vocabulary in any domain
(music theory, music industry, history, geography, ethnomusicology)
gets a glossable button with a plain-English definition. Definitions
in `assets/glossary-data.js` are written for non-majors with no
musical background and run one to three sentences. The glossary
is a shared file that grows as new pages are added.

**Sources sections.** Student-facing bibliographic entries with
brief descriptive parentheticals. No instructor-facing notes
(verification flags, pedagogical justifications, things to revisit).
Those stay in the Word planning docs and never enter the live HTML.

**Direct quotes.** Under fifteen words each, one quote per source
maximum, paraphrase as default. Scholars and journalists named in
prose ("Mark Burford has argued...", "biographer Peter Guralnick"),
full bibliographic info in the Sources section.

**Photos.** Hero photo per track, left-aligned, with full attribution
caption. Wikimedia Commons preferred; editorial-use images from
publishers are defensible for educational use with attribution but
should be flagged for verification before launch.

**Visual identity.** Courier Prime served from Google Fonts, with
Courier and Courier New as fallbacks. Cooler off-white background
(`#f4f1ea`), slate-grey body text (`#5b6770`), near-black for
structural emphasis (`#1f2933`), faded blue accent (`#36546f`).
Two-size type hierarchy: page title at 1.4em bold uppercase,
everything else at 0.9em. Column at 820px max-width. All defined
in `assets/style.css` through CSS variables; new pages inherit
the look automatically by linking the shared stylesheet.

**HTML and Canvas-paste source.** Pages a student needs as a
durable reference (readings, listening guides, syllabus, module
landings) are HTML, hosted on the live site. Content delivered
in Canvas (discussion prompts, quizzes) lives as Markdown source
files in the repo for paste-in. The repo is the canonical source
of truth either way.

## Working with this repo

The Word documents in the project (welcome, methodology reading,
framing reading, content notice template, syllabus) are planning
artifacts, not source material that gets ported verbatim. They
hold initial drafts plus instructor-facing notes, verification
flags, and pedagogical commentary. The HTML pages are written
fresh from the Word drafts with student-facing language only.
When the Word planning docs and the live HTML diverge, the live
HTML is authoritative.

The glossary file is shared across every page. When you add new
glossings on a new page, append the new term definitions to
`assets/glossary-data.js`. Sections in the glossary are organized
roughly by the page or theme that introduced the term.

GitHub Pages rebuilds within a minute or two of a push to `main`.
Live changes appear at https://csuebmusic.github.io/mus302/ shortly
after.

## Decisions worth remembering

A few choices made across the build that are not obvious from
reading the files:

**Indigenous artists in the framing reading.** The cultural roots
reading uses Jim Pepper as the 1960s example of Indigenous popular
music, alongside Robbie Robertson and the Halluci Nation. Pepper
replaced an earlier draft that named Buffy Sainte-Marie. The
substitution reflects the 2023 CBC investigation into Sainte-Marie's
ancestry claims, which complicated her status as a straightforward
Indigenous example for an introductory reading. Sainte-Marie may
still belong in Module 6 as a case study in contested identity in
the folk revival; she does not belong in the framing reading as the
lead Indigenous example. Do not "fix" this back based on training
data.

**Module 1 anchor tracks: only four.** Earlier planning included
Kendrick Lamar's "Alright" and Bad Bunny's "El Apag\u00f3n" as
Module 1 anchor tracks (six total). Those two were moved to Module
6 (synthesis), where they fit the contemporary cross-tradition
framing better. Module 1 now has four anchor tracks: Cooke, Cruz,
DeSanto, Williams. The Word planning docs in the project may still
reference the older six-track structure; the live HTML is
authoritative. The same applies to the Module 1 content notice,
which was rewritten to cover only the four current tracks.

**Glossings: aggressive but not exhaustive.** The convention is to
gloss specialized terms a non-majors student might not know that
are not defined inline in the prose; to gloss artists who will recur
across the course (one shared definition that grows with use); and
to skip glossing terms the surrounding prose itself defines. The
framing reading defines migration, displacement, and diaspora in
extended prose, so those are not glossed even though they are
clearly specialized. The methodology reading defines timbre,
texture, form, and gesture the same way and they are similarly
not glossed.

**Two-warm-two-cool palette by design.** The site uses cool slate
type and cool blue accents (links, play button), warm cream
background, and warm rust glossings (#7a4a3a). The warm rust on
glossings is intentional: it differentiates them from links so
students do not click expecting to leave the page, and it gives
the typewriter pages a hand-annotated quality, like someone marked
up the manuscript with a colored pencil. The visual identity is
locked, including this color. Future palette adjustments should
preserve the warm/cool distinction between glossings and links.

**Footer band.** The dark navigation footer at the bottom of every
page is edge-to-edge, which means `<nav class="track-nav">` is a
sibling of `<main>` rather than a child. New pages following the
listening guide pattern need to keep this structure: close
`</main>` first, then place the nav with its `.track-nav-inner`
wrapper outside. The styling and column-width constraint are
handled in CSS.



Course materials © Inés Thiebaut. All rights reserved.
Photos and embedded media are used under their respective licenses,
credited inline on each page.
