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
(discussion prompts, quizzes, project assignment descriptions), so
the repo stays the canonical source of truth even when the delivery
happens elsewhere.

## Layout

```
mus302/
  syllabus.html             Live syllabus
  syllabus.md               Markdown source for Canvas paste
  README.md                 This file

  assets/
    style.css               Shared stylesheet for all pages
    glossary.js             Click-to-reveal glossary behavior
    glossary-data.js        All defined terms, growing as new pages are added
    images/                 Hero photos and figures for listening guides and readings

  module1/                  Orientation and Methodology
  module2/                  African American foundational traditions
  module3/                  Latin diasporic traditions
  module4/                  Asian American traditions (not yet drafted)
  module5/                  European American immigrant and working-class (not yet drafted)
  module6/                  Cross-Cutting Threads / Synthesis (not yet drafted)

  final-project/
    index.html                          Final-project landing page (linked from Canvas)
    01-proposal-and-bibliography.md     Combined proposal + preliminary bibliography (Canvas paste source)
    02-draft.md
    03-peer-review.md
    04-final.md

  under-the-hood/
    STATUS.md               Working snapshot: what is built, what is next, what is open
    conventions.md          Editorial conventions and locked design decisions
    audit-notes.md          Glossary intentional-skip categories and audit-script blind spots
    scripts/
      check-glossings.js    Audit script for gloss-button coverage
```

Each module folder follows the same pattern: an `index.html` landing
page, listening guide HTML pages for the module's anchor tracks,
optional `roots-and-routes.html` framing reading where the module
warrants one, plus `discussion.md` and `quiz.md` Canvas paste sources.

## Course architecture

Six modules. Module 1 must be completed first (orientation and
methodology). Modules 2 through 5 run in strict sequence after
Module 1, one module per week, in this order: Module 2 (African
American foundational traditions), Module 3 (Latin diasporic
traditions), Module 4 (Asian American traditions), Module 5
(European American immigrant and working-class traditions). Each
has its own deadline. Module 6 follows Module 5 and synthesizes
across the four traditions, adding Indigenous popular music and
queer liberation as cross-cutting threads.

A research project runs in parallel with the modules across the term
and is worth 40 percent of the course grade. Students research a
genre and a single artist or group of personal significance and
present as a slide deck (18 to 20 slides, including title slide and
sources slide, with up to three slides carrying embedded audio or
video media) plus recorded video commentary. The project is
scaffolded into four graded checkpoints. Materials live in
`final-project/`.

The hard-date schedule lives in the syllabus. The summer 2026 term
runs May 26 to July 31.

## Live pages

- Module 1: https://csuebmusic.github.io/mus302/module1/
- Module 2: https://csuebmusic.github.io/mus302/module2/
- Module 3: https://csuebmusic.github.io/mus302/module3/
- Final project: https://csuebmusic.github.io/mus302/final-project/
- Syllabus: https://csuebmusic.github.io/mus302/syllabus.html

GitHub Pages rebuilds within a minute or two of a push to `main`.

## Working with the repo

When student-facing content needs revision, edit the HTML directly.
When Canvas content needs revision, edit the Markdown file and copy
from its paste block into Canvas.

Before committing changes to a glossable HTML page or to the
glossary file, run `node under-the-hood/scripts/check-glossings.js`
to audit gloss-button coverage. Editorial conventions, locked
design decisions, and the audit-script intentional-skip categories
are documented in the `under-the-hood/` folder.

---

Course materials © Inés Thiebaut. All rights reserved.
Photos and embedded media are used under their respective licenses,
credited inline on each page.
