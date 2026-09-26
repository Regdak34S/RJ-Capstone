# Spike SP-01 — Can localStorage hold a 20-section project and still meet NFR-PERF-02?

- **Unknown:** Whether browser localStorage can store a realistic 20-section project (titles, drafts, statuses, revision notes) and still complete a save in ≤ 1 second on the development laptop.
- **Feeds:** ADR 0002 — Choose the data store
- **Requirements at risk:** FR-SAVE-09, FR-LOAD-10, NFR-PERF-02, NFR-REL-02
- **Time box:** 90 minutes
- **Run on:** 2026-09-26

## The question

Can localStorage hold a 20-section project with realistic draft sizes (~2–4 KB of text per section plus metadata) and still meet NFR-PERF-02 (save ≤ 1 s) on a normal laptop browser?

## The smallest thing that answers it

- Create a plain HTML page with a script that:
  - Builds a project object with 20 sections (title, status, draft text of ~3 KB each, two revision notes).
  - Serializes to JSON and writes to `localStorage` under one key.
  - Times 10 consecutive write cycles with `performance.now()`.
  - Reads the data back and checks integrity.
- No UI beyond console output. No framework.

## Success criterion

- All 10 saves complete in ≤ 1000 ms each.
- Data round-trips without loss or parse error.
- Total stored size stays under the common ~5 MB localStorage quota.

## Failure criterion

- Any save exceeds 1000 ms, **or**
- QuotaExceededError is thrown, **or**
- Loaded data does not match what was written.

## Plan B if it fails

Fall back to IndexedDB (next-highest score in the matrix) or a downloadable JSON file export/import path. Keep the same single-user, no-server model. Update ADR 0002 accordingly.

## Result

Ran on 2026-09-26 in Chrome on the Windows laptop (8 GB RAM).

- Project payload: 20 sections × ~3.2 KB draft + metadata ≈ 78 KB JSON.
- 10 timed `localStorage.setItem` writes: min 0.4 ms, max 2.1 ms, p95 ≈ 1.8 ms — all well under 1000 ms.
- Read-back matched the written object (JSON.parse integrity check passed).
- No QuotaExceededError. Available space remained far above the payload size.

Surprise: even a deliberately oversized test (200 sections, ~800 KB) still saved in under 15 ms. The 1-second NFR is not the limiting factor; quota and multi-tab consistency are the real edges to watch later.

## Decision

**Proceed with localStorage** as the data store for ADR 0002. NFR-PERF-02 is satisfied with large margin at the required scale. Document a simple JSON export in the README as the user-visible backup/delete path (supports NFR-PRIV-01). Revisit only if a future spike shows multi-tab overwrite problems that IndexedDB would solve more cleanly.
