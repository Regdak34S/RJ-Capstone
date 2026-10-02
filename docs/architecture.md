# Architecture — Content Creation Project

**Version:** 0.1  
**Date:** 2026-10-02  
**Author:** Reginald Johnson  
**Status:** Draft  

## 1. Purpose

This document specifies the runtime architecture for the single-user web Content Creation tool: organize sections, draft text, track status, revise, and assemble a final deliverable. It implements the Must requirements in `docs/requirements.md` under the constraints in ADR 0001–0003 as evaluated in `docs/tech-evaluation.csv` (vanilla JS, localStorage, static host).

## 2. Context diagram

[See docs/diagrams/context.png]

**Actors**
- Student (primary user) — creates and edits one project at a time in the browser.
- Maintainer — clones the repo and runs from README (NFR-MNT-01).

**External systems**
- Browser localStorage (persistence boundary).
- GitHub Pages (optional static host; no application logic).

**Trust boundary**
Everything inside the browser tab is trusted for that user only. No network application API. No secrets leave the machine.

**Legend:** solid arrow = data/control flow; dashed = optional deploy path; box = container or actor.

*Diagram version 0.1 · 2026-10-02*

## 3. Container diagram

[See docs/diagrams/containers.png]

| Container | Technology | Responsibility |
|-----------|------------|----------------|
| Web UI | HTML/CSS/vanilla JS | Render map, draft, status, checklist, overview, assembly |
| Persistence adapter | JS module wrapping localStorage | Serialize/deserialize project document; version key |
| Static host (optional) | GitHub Pages | Serve immutable files only |

No application server. No shared database.

*Diagram version 0.1 · 2026-10-02*

## 4. Component responsibilities

| Component | Owns (state) | Calls | Does not call |
|-----------|--------------|-------|---------------|
| ProjectMap | section list, order, dependencies | Persistence.load/save | Assembly |
| DraftEditor | current section text, dirty flag | Persistence.save (via auto-save) | Assembly |
| StatusBoard | per-section status enum | Persistence.save | DraftEditor internals |
| Checklist | checklist item completion flags | Persistence.save | — |
| RevisionLog | revision notes list per section | Persistence.save | — |
| Overview | derived view of all sections + statuses | ProjectMap, StatusBoard (read) | Persistence directly |
| Assembly | final deliverable blob (read-only inputs) | ProjectMap, DraftEditor (read) | Persistence write during assemble |
| Persistence | single project JSON document + schemaVersion | localStorage only | UI components |
| Navigation | current section id | ProjectMap | Persistence |

**Rule:** one owner per piece of state. Overview and Assembly are read-only consumers. No cycles: UI → Persistence → localStorage only.

## 5. Interface contracts (Must requirements)

Each contract is the minimum the component guarantees.

### I-MAP — create / update content map (FR-MAP-01)
- **In:** `{ title: string, sections: [{ id, name }] }` (sections non-empty)
- **Out:** `{ projectId, sections }`
- **Error:** `EMPTY_MAP` if sections length = 0

### I-DRAFT — draft / edit section (FR-DRAFT-02)
- **In:** `{ sectionId, text }`
- **Out:** `{ sectionId, savedAt }`
- **Error:** `UNKNOWN_SECTION`

### I-PROG — update section status (FR-PROG-03)
- **In:** `{ sectionId, status: "not_started"|"draft"|"in_review"|"final" }`
- **Out:** `{ sectionId, status }`
- **Error:** `INVALID_STATUS` | `UNKNOWN_SECTION`

### I-ASM — assemble final deliverable (FR-ASM-05)
- **In:** `{ projectId }`
- **Out:** `{ markdown: string }` or downloadable blob
- **Error:** `INCOMPLETE_SECTIONS` if any status ≠ final

### I-NAV — navigate sections (FR-NAV-06)
- **In:** `{ sectionId }` + optional `{ force: bool }`
- **Out:** active section content
- **Error:** `UNSAVED_CHANGES` unless force

### I-STATUS-VIEW — status at a glance (FR-SEC-07)
- **In:** `{ projectId }`
- **Out:** `[{ sectionId, name, status }]`

### I-SAVE — auto-save (FR-SAVE-09)
- **In:** full project document
- **Out:** `{ ok: true, savedAt, bytes }`
- **Error:** `QUOTA_EXCEEDED`

### I-LOAD — reopen draft (FR-LOAD-10)
- **In:** `{ projectId }` or default key
- **Out:** project document or empty skeleton
- **Error:** `CORRUPT_DOCUMENT` (reset with user confirm)

### I-VIEW — project overview (FR-VIEW-11)
- **In:** none (current project)
- **Out:** same shape as I-STATUS-VIEW plus counts

### I-CHECK — guided checklist (FR-CHECK-12)
- **In:** `{ sectionId, itemId, done: bool }`
- **Out:** updated checklist
- **Error:** `UNKNOWN_ITEM`

### I-TRACE — maintainer trace (FR-TRACE-20)
- **In:** requirement id string
- **Out:** list of file paths / symbols that reference it (static doc + optional search)

## 6. Data model

Logical document stored under key `ccp:project:v1` (or per-project keys).

| Entity | Key | Fields (type, nullability) | Invariants |
|--------|-----|----------------------------|------------|
| Project | `id` (string, required) | `title` string req; `schemaVersion` int req; `updatedAt` ISO string req | exactly one active project in v0.1 |
| Section | `id` (string, required) | `name` string req; `order` int ≥ 0; `status` enum req; `draftText` string default ""; `checklist` array; `revisions` array | name non-empty; status ∈ enum |
| ChecklistItem | `id` | `label` string; `done` bool | — |
| RevisionNote | `id` | `at` ISO string; `text` string | text non-empty |

**Relationships:** Project 1—* Section; Section 1—* ChecklistItem; Section 1—* RevisionNote.

**Volume estimate (student scale):** 1 project, ≤ 30 sections, ≤ 10 KB text/section → &lt; 500 KB JSON (localStorage quota typically 5+ MB).

## 7. Sequence flows

### 7.1 Happy path — create map → draft → save → overview
Student → UI(ProjectMap): create sections  
UI → Persistence: save document  
Persistence → localStorage: setItem  
Student → UI(DraftEditor): edit text  
UI → Persistence: save (auto or explicit)  
Student → UI(Overview): read aggregated status  

### 7.2 Risky path — mark final with missing checklist items (FR-WARN-14 related)
Student → StatusBoard: set status=final  
StatusBoard → Checklist: validate required items  
Checklist → UI: warning list  
UI → Student: confirm or cancel  
(If confirm) StatusBoard → Persistence: save  

### 7.3 Failure path — quota exceeded on save (NFR-PERF-02 / NFR-REL-02)
DraftEditor → Persistence: save  
Persistence → localStorage: setItem throws QuotaExceededError  
Persistence → UI: `QUOTA_EXCEEDED`  
UI → Student: message + offer JSON export / delete old data  
No silent data loss.

## 8. Error-handling policy

- Every failure surfaces a **named code** and a **user-visible message** that states what failed.
- Persistence never writes partial documents; replace whole JSON atomically.
- Corrupt load → offer reset to empty project after confirm (NFR-REL-02).
- No secrets in messages or storage keys (NFR-SEC-01).

### Concrete edge cases (≥ 12)

1. Empty section list on map create → `EMPTY_MAP`  
2. Unknown section id → `UNKNOWN_SECTION`  
3. Invalid status string → `INVALID_STATUS`  
4. Assemble with non-final section → `INCOMPLETE_SECTIONS`  
5. Navigate away with dirty draft → `UNSAVED_CHANGES`  
6. localStorage quota exceeded → `QUOTA_EXCEEDED`  
7. JSON parse failure on load → `CORRUPT_DOCUMENT`  
8. Missing schemaVersion → migrate or reject  
9. Duplicate section id on import → reject  
10. Checklist item id not found → `UNKNOWN_ITEM`  
11. Browser private mode / blocked storage → detect and show “storage unavailable”  
12. Multi-tab overwrite (last write wins) → document limitation; optional timestamp warning  
13. Oversized single draft (&gt; 1 MB) → warn before save  
14. Clear site data by user → empty project on next load (expected)

## 9. Timeout / retry rules

| External call | Timeout | Retry | Fallback |
|---------------|---------|-------|----------|
| localStorage setItem/getItem | none (sync) | none | export JSON file; disable auto-save with banner |
| GitHub Pages static fetch (app assets) | browser default | browser default | local `index.html` open |
| No third-party HTTP APIs in v0.1 | — | — | — |

## 10. AI / third-party dependency specification

**v0.1:** no runtime AI or paid third-party APIs.  
**Budget:** $0 (CON-02).  
**Fallback:** all features work offline with localStorage only.  
If a future ADR adds an optional assist API, it must sit behind one interface, have a kill switch, and degrade to manual drafting (FR-DRAFT-02).

## 11. Traceability (two-way)

| Must requirement | Component(s) | Interface |
|------------------|--------------|-----------|
| FR-MAP-01 | ProjectMap, Persistence | I-MAP |
| FR-DRAFT-02 | DraftEditor, Persistence | I-DRAFT |
| FR-PROG-03 | StatusBoard, Persistence | I-PROG |
| FR-ASM-05 | Assembly | I-ASM |
| FR-NAV-06 | Navigation, DraftEditor | I-NAV |
| FR-SEC-07 | StatusBoard, Overview | I-STATUS-VIEW |
| FR-SAVE-09 | Persistence, DraftEditor | I-SAVE |
| FR-LOAD-10 | Persistence | I-LOAD |
| FR-VIEW-11 | Overview | I-VIEW |
| FR-CHECK-12 | Checklist | I-CHECK |
| FR-TRACE-20 | docs + optional search helper | I-TRACE |
| NFR-PERF-01 | Overview render path | — measured in spike SP-02 |
| NFR-PERF-02 | I-SAVE | — measured in spike SP-01 |
| NFR-REL-02 | Persistence load | I-LOAD |
| NFR-SEC-01 | repo policy | — |
| NFR-PRIV-01 | Persistence delete/export | — |
| NFR-MNT-01 | README + static layout | — |

Reverse: each component lists the requirement ids it serves (see Component table notes in repo if expanded).

## 12. Open questions

| ID | Question | Blocker | Owner | Decide by |
|----|----------|---------|-------|-----------|
| OQ-01 | Multi-project support in v1 or single project only? | Affects Persistence key design | Reginald | 2026-10-09 |
| OQ-02 | Export format for assembly: Markdown only or also plain text? | FR-ASM-05 acceptance | Reginald | 2026-10-09 |
| OQ-03 | Should multi-tab editing show a conflict warning? | Edge case 12 | Reginald | 2026-10-16 |
