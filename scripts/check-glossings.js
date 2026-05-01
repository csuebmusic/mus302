#!/usr/bin/env node
/*
 * scripts/check-glossings.js
 *
 * Audit gloss-button coverage on student-facing HTML pages against the
 * shared glossary in assets/glossary-data.js. Flags three kinds of issues:
 *
 *   1. Unresolved buttons - data-term="x" where x is not in GLOSSARY.
 *      This is an error; the page is broken. Exit code 1.
 *
 *   2. Double-buttoning - same data-term used more than once in the same
 *      page. Convention is "first substantive mention only." Warning.
 *
 *   3. Missed gloss candidates - glossary labels that appear in the prose
 *      but aren't buttoned anywhere on the page. Warning.
 *
 * Usage:
 *   node scripts/check-glossings.js                     # check all pages
 *   node scripts/check-glossings.js module2/foo.html    # check one page
 *   node scripts/check-glossings.js module2/            # check all pages in dir
 *
 * Run before committing any change that touches a glossable HTML page or
 * the glossary file. Convention documented in README.md.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const GLOSSARY_PATH = path.join(REPO_ROOT, 'assets', 'glossary-data.js');

// Words that match a glossary label as plain English in normal prose, where a
// button would be wrong or distracting. Add entries here as false positives
// surface. Keep this list small and only add things that actually came up.
const SKIPLIST = new Set([
  'key',           // "the key of E flat" but also "the key to understanding"
  'movement',      // "civil rights movement," "the Black Power moment"
  'meter',         // "parking meter," "in meter and rhyme"
  'tempo',         // "at his own tempo," figurative
  'bridge',        // "bridge between communities"
  'melody',        // common figurative noun
  'harmony',       // "harmonic language," "in harmony with"
  'arrangement',   // "an arrangement to meet"
  'arranger',      // could be plain English
  'exile',         // common noun used non-musically
  'orchestration', // figurative use
  'improvisation', // figurative use
]);

// ---------------------------------------------------------------------------
// Load the glossary

function loadGlossary() {
  const src = fs.readFileSync(GLOSSARY_PATH, 'utf8');
  // The file declares `var GLOSSARY = { ... };`. Eval in a sandbox.
  const sandbox = {};
  // Use Function rather than eval to avoid scope leaks.
  // eslint-disable-next-line no-new-func
  new Function('sandbox', src + '; sandbox.GLOSSARY = GLOSSARY;')(sandbox);
  return sandbox.GLOSSARY;
}

// ---------------------------------------------------------------------------
// Strip non-prose regions from an HTML page so we don't false-match on
// labels appearing inside SVG figures, sources, scripts, etc.

function extractProse(html) {
  let prose = html;
  prose = prose.replace(/<head[\s\S]*?<\/head>/gi, '');
  prose = prose.replace(/<script[\s\S]*?<\/script>/gi, '');
  prose = prose.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  prose = prose.replace(/<button[\s\S]*?<\/button>/gi, '');
  prose = prose.replace(/<section class=["']sources["'][\s\S]*?<\/section>/gi, '');
  // Strip remaining HTML tags so we don't match against attribute values.
  prose = prose.replace(/<[^>]+>/g, ' ');
  // Decode the few HTML entities we actually use in this codebase.
  prose = prose
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  return prose;
}

// ---------------------------------------------------------------------------
// Build the search phrases for one glossary entry. We try several variants
// because the prose may not match the label verbatim.

function searchPhrasesFor(key, label) {
  const phrases = new Set();
  const cleanLabel = label.replace(/\([^)]*\)/g, '').trim();
  if (cleanLabel.length >= 4) phrases.add(cleanLabel);
  const keyAsPhrase = key.replace(/-/g, ' ').trim();
  if (keyAsPhrase.length >= 4) phrases.add(keyAsPhrase);
  // Also try the key as a hyphenated form, in case prose hyphenates it.
  // (Word boundaries already match across hyphens in our regex below, but
  // this is explicit.)
  return [...phrases];
}

// Word-boundary regex that allows internal hyphens or spaces in the search
// phrase to also match the other separator. So "call and response" matches
// "call-and-response" and vice versa.
function phraseRegex(phrase) {
  // Escape regex special chars except spaces and hyphens.
  const escaped = phrase
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Treat space and hyphen interchangeably.
    .replace(/[\s-]+/g, '[\\s-]+');
  return new RegExp('(^|[^\\w-])(' + escaped + ')([^\\w-]|$)', 'i');
}

// ---------------------------------------------------------------------------
// Audit one HTML file.

function auditFile(filePath, glossary) {
  const html = fs.readFileSync(filePath, 'utf8');
  const issues = { errors: [], warnings: [] };

  // --- 1. Buttons in the file
  const buttonMatches = [...html.matchAll(/data-term=["']([^"']+)["']/g)];
  const buttonTerms = buttonMatches.map((m) => m[1]);
  const buttonSet = new Set(buttonTerms);

  // 1a. Unresolved buttons
  for (const t of buttonTerms) {
    if (!glossary[t]) {
      issues.errors.push(
        'Unresolved button: data-term="' + t + '" has no glossary entry.'
      );
    }
  }

  // 1b. Double-buttoned terms
  const counts = {};
  for (const t of buttonTerms) {
    counts[t] = (counts[t] || 0) + 1;
  }
  for (const [t, n] of Object.entries(counts)) {
    if (n > 1) {
      issues.warnings.push(
        'Double-buttoned: data-term="' + t + '" appears ' + n + ' times. ' +
          'Convention is to gloss only on first substantive mention.'
      );
    }
  }

  // --- 2. Missed gloss candidates
  const prose = extractProse(html);
  const missed = [];
  for (const [key, entry] of Object.entries(glossary)) {
    if (buttonSet.has(key)) continue; // already buttoned somewhere
    if (SKIPLIST.has(key)) continue;

    const phrases = searchPhrasesFor(key, entry.label);
    for (const phrase of phrases) {
      const re = phraseRegex(phrase);
      const m = prose.match(re);
      if (m) {
        // Snippet for the report
        const idx = prose.search(re);
        const start = Math.max(0, idx - 40);
        const snippet = prose
          .slice(start, idx + m[0].length + 60)
          .replace(/\s+/g, ' ')
          .trim();
        missed.push({ key, label: entry.label, matched: phrase, snippet });
        break;
      }
    }
  }
  for (const m of missed) {
    issues.warnings.push(
      'Possible missed gloss: "' +
        m.matched +
        '" (key: ' +
        m.key +
        ', label: ' +
        m.label +
        ')\n      ...' +
        m.snippet +
        '...'
    );
  }

  return issues;
}

// ---------------------------------------------------------------------------
// Find HTML files to audit.

function defaultTargets() {
  const targets = [];
  for (const entry of fs.readdirSync(REPO_ROOT, { withFileTypes: true })) {
    if (entry.isDirectory() && /^module\d+$/.test(entry.name)) {
      const dir = path.join(REPO_ROOT, entry.name);
      for (const file of fs.readdirSync(dir)) {
        if (file.endsWith('.html')) targets.push(path.join(dir, file));
      }
    }
  }
  // Also include final-project HTML.
  const fpDir = path.join(REPO_ROOT, 'final-project');
  if (fs.existsSync(fpDir)) {
    for (const file of fs.readdirSync(fpDir)) {
      if (file.endsWith('.html')) targets.push(path.join(fpDir, file));
    }
  }
  // Also syllabus.html at the root.
  const syllabus = path.join(REPO_ROOT, 'syllabus.html');
  if (fs.existsSync(syllabus)) targets.push(syllabus);
  return targets;
}

function expandArg(arg) {
  const abs = path.resolve(arg);
  const stat = fs.statSync(abs);
  if (stat.isDirectory()) {
    return fs
      .readdirSync(abs)
      .filter((f) => f.endsWith('.html'))
      .map((f) => path.join(abs, f));
  }
  return [abs];
}

// ---------------------------------------------------------------------------
// Main

function main() {
  const args = process.argv.slice(2);
  const targets =
    args.length === 0 ? defaultTargets() : args.flatMap(expandArg);

  if (targets.length === 0) {
    console.log('No HTML files to check.');
    process.exit(0);
  }

  const glossary = loadGlossary();
  console.log(
    'Loaded glossary: ' + Object.keys(glossary).length + ' terms.\n'
  );

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const file of targets) {
    const rel = path.relative(REPO_ROOT, file);
    const { errors, warnings } = auditFile(file, glossary);
    if (errors.length === 0 && warnings.length === 0) {
      console.log('  OK    ' + rel);
      continue;
    }
    console.log((errors.length ? 'ERROR ' : 'WARN  ') + rel);
    for (const e of errors) console.log('    [error] ' + e);
    for (const w of warnings) console.log('    [warn]  ' + w);
    console.log('');
    totalErrors += errors.length;
    totalWarnings += warnings.length;
  }

  console.log(
    '\nSummary: ' +
      targets.length +
      ' file(s) checked, ' +
      totalErrors +
      ' error(s), ' +
      totalWarnings +
      ' warning(s).'
  );

  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
