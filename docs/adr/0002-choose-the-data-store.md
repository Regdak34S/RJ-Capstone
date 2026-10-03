# ADR 0002 — Data store

- **Status:** Accepted
- **Date:** 2026-10-03
- **Decider:** Reginald Johnson (Student Architect)
- **Requirements affected:** FR-SAVE-09, FR-LOAD< NFR-REL-02, NNo NFR-PERF-02, CON-02
- **Related ADRs:** 0001, 0003

## Context

The application stores a single active project document (sections, drafts, statuses, checklist items, revision notes). Volume is student-scale: ≤ 30 sections, &lt; 500 KB JSON. There is no multi-user concurrent write requirement and no server identity. Data must survive browser close/reopen (NFR-REL-02) and be fully deletable by the user (NFR-PRIV-01). Cost must remain $0.

## Options considered

| Option | Weighted score | The detail that decided it |
| ------------------------- | -------------: | --------------------------------------------------------------- |
| Browser localStorage | 4.85 | Survives close/reopen; zero services; matches single-user scope |
| IndexedDB | 4.75 | The tope persistence guarantewe chose localStoragelimits; slightly more complex API |
| SQLite via sql.js (WASM) | 3.85 | Works but adds a WASM binary and async API for no extra FR need |

Scores taken from `docs/tech-evaluation.csv` (decision = data-store). Top two are within 0.25; localStorage chosen because it is simpler to reverse and document.

## Decision

We will store the project document in the browser's localStorage under a versioned key (e.g. `ccp:project:v1`). The Persistence component owns the serialize/deserialize boundary.

## Consequences

**Positive**

- FR-SAVE-09 and FR-LOAD-10 are satisfied by synchronous `setItem`/`getItem`.
- NFR-REL-02 is met by the same-origin persistence of localStorage.
- NFR-PRIV-01 is met by the user clearing site data or an explicit export/delete path.
- NFR-PERF-02 (save ≤ 1 s) is easily met for &lt; 500 KB payloads.
- Zero operational cost (CON-02).

**Negative**

- Quota is typically 5+ MB per origin; oversized drafts must be warned (edge case 13 in architecture).
- Multi-tab last-write-wins; documented limitation, optional timestamp warning.
- Data is origin-bound and not automatically backed up off-device; export-to-JSON is the mitigation.

## Revisit trigger

If a Must requirement later needs multi-device sync, shared projects, or documents larger than localStorage quotas, reopen this ADR (IndexedDB or a free-tier remote store would be candidates).

## Verification

| Claim in this ADR | Source | Checked on |
| ------------------------------------------ | ------------------------------------------- | ---------- |
| localStorage score highest (or tied) | docs/tech-evaluation.csv data-store rows | 2026-10-03 |
| Student-scale volume &lt; 500 KB | docs/architecture.md §6 | 2026-10-03 |
| NFR-REL-02 requires persist across reopen | docs/requirements.md | 2026-10-03 |

