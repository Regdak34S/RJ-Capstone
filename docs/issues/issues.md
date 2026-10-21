# Issue backlog (Week 9 baseline)

---

## #1 · FR-LOAD-10 — Load project from Persistence

**Acceptance criteria**
- Given a seeded storage key, when the app boots, then the project document is loaded without error.
- Given empty storage, when `loadOrSeed` runs, then a skeleton project is written and returned.

**Status:** Done in skeleton (`ProjectStore.load` / `loadOrSeed`).

---

## #2 · FR-SAVE-09 — Save project document

**Acceptance criteria**
- Given a project object, when `save` is called, then storage contains valid JSON with `schemaVersion` and `updatedAt`.
- Given corrupt JSON in storage, when `load` is called, then `CORRUPT_DOCUMENT` is raised.

**Status:** Done in skeleton.

---

## #3 · FR-VIEW-11 — Render section list from store

**Acceptance criteria**
- Given a project with ≥1 section, when the page loads, then each section name is visible.
- Given zero sections, when the page loads, then an empty state is shown.

**Status:** Thin slice done (skeleton render).

---

## #4 · FR-SEC-07 — Show status on section row

**Acceptance criteria**
- Given a section with status `draft`, when rendered, then the row includes the status text.

**Status:** Thin slice done.

---

## #5 · FR-MAP-01 — Create / edit content map

**Acceptance criteria**
- Given the user starts a new map, when they add section names and submit, then sections are stored and listed.
- Given empty section list on submit, when they submit, then `EMPTY_MAP` is shown.

**Status:** Not started (Week 10).

---

## #6 · FR-DRAFT-02 — Draft editor for active section

**Acceptance criteria**
- Given an active section, when the user edits text, then the model updates and can be saved.
- Given an unknown section id, when save is attempted, then `UNKNOWN_SECTION` is shown.

**Status:** Not started (Week 10).

---

## #7 · FR-PROG-03 — Update section status

**Acceptance criteria**
- Given a section, when status is set to `not_started` | `draft` | `in_review` | `final`, then the value persists.
- Given an invalid status string, when set, then `INVALID_STATUS` is shown.

**Status:** Not started (Week 11).

---

## #8 · FR-CHECK-12 — Per-section checklist

**Acceptance criteria**
- Given a section, when a checklist item is toggled, then `done` persists across reload.
- Given an unknown item ID, when toggled, then `UNKNOWN_ITEM` is shown.

**Status:** Not started (Week 11).

---

## #9 · FR-ASM-05 — Assemble Markdown deliverable

**Acceptance criteria**
- Given all sections are `final`, when assemble runs, then Markdown contains those sections in order.
- Given any non-final section, when assemble runs, then `INCOMPLETE_SECTIONS` is shown.

**Status:** Not started (Week 12).

---

## #10 · FR-NAV-06 — Navigate with dirty guard

**Acceptance criteria**
- Given a dirty draft, when navigating away without force, then `UNSAVED_CHANGES` is shown.
- Given force=true, when navigating, then the new section becomes active.

**Status:** Not started (Week 10).

---

## #11 · NFR-MNT-01 — README clean-machine path

**Acceptance criteria**
- Given a clean clone, when the user follows README ## Run it, then the app is reachable in ≤ 10 minutes.

**Status:** Skeleton path documented.

---

## #12 · NFR-PERF-02 — Save latency spike SP-01

**Acceptance criteria**
- Given a 20-section fixture, when save is timed 10 times, then results are recorded in `docs/spikes/`.

**Status:** Not started (Week 9–10 spike).
