# ADR 0005 — Explicit save instead of auto-save on every keystroke

- **Status:** Accepted
- **Date:** 2026-10-30 (decision) · **Recorded:** 2026-11-21 (index catch-up)
- **Decider:** Reggie Johnson
- **Requirements affected:** FR-SAVE-09, FR-NAV-06, NFR-PERF-02
- **Related:** CR-005 (REJECT autosave as “bug”)

## Context

Iteration 1 draft editing needed a persistence story. Auto-save on each `input` event was the assistant’s first sketch and matches many web apps. Explicit Save matches the written requirement FR-SAVE-09 and enables a dirty-state warning before navigation.

## Decision

**Persist only on explicit Save** (and on successful status change paths that already call `store.save`). Track `ui.dirty` and block section switch with `UNSAVED_CHANGES` when dirty.

## Consequences

- User must click Save; some will report this as a “bug” (CR-005 — rejected).  
- Dirty flag and NAV behavior stay meaningful.  
- Avoids writing partial keystrokes on every character (perf + fewer confusing intermediate states).  
- Full force-navigation still incomplete (DEF-006) — follow-up, not a reversal of this ADR.
