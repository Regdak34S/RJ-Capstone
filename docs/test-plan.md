# Test Plan — Content Creation Project

**Project:** RJ-Capstone Content Creation  
**Author:** Reggie Johnson  
**Plan version:** 1.0  
**Date:** 2026-11-06  
**Scope commit (named):** `iteration-1` / main at Milestone 11 freeze  

---

## 1. Scope

In scope for this verification cycle:

- Domain operations in `src/app/project-service.js` (add section, update body, set status).
- Persistence contract in `src/persistence/*` (save, load, seed, corrupt handling).
- Seeded demo path and committed `seed/project.json`.
- Must requirements implemented in Iteration 1: FR-MAP-01, FR-DRAFT-02, FR-PROG-03, FR-SAVE-09, FR-LOAD-10, FR-VIEW-11, FR-SEC-07 (and partial FR-NAV-06 domain behavior).
- Explicit error codes: `EMPTY_SECTION_NAME`, `UNKNOWN_SECTION`, `INVALID_STATUS`, `STORAGE_UNAVAILABLE`, `CORRUPT_DOCUMENT`.

## 2. Out of scope (with reasons)

| Item | Reason |
|------|--------|
| Full browser/UI automation (Playwright/Cypress) | Static app; acceptance exercised via domain+store; UI drivers deferred to Week 12 if needed |
| FR-ASM-05 assemble Markdown | Not implemented in Iteration 1 — gap in matrix |
| FR-CHECK-12 checklist toggles | Not implemented — gap |
| FR-HIST-08 revision history | Should-have; not built |
| Multi-tab localStorage races | Single-user assumption in ADR 0002 |
| Performance NFR p95 under load automation | Manual note only this week; numeric NFR remains open |
| Accessibility automated axe suite | Manual keyboard check logged as defects if found |

## 3. Levels (stack mapping)

| Level | This project means | Location |
|-------|--------------------|----------|
| **Unit** | Domain validators and pure transforms (`project-service`, store pure paths) | `tests/unit/` |
| **Integration** | Real seams: storage adapter, committed seed file, hostile payload through store | `tests/integration/` |
| **Acceptance** | One-to-one with acceptance criteria for implemented Must FRs | `tests/acceptance/` |

## 4. Environment

- Runtime: Node 20+ (`.nvmrc`)
- OS: Linux CI (`ubuntu-latest`) and local macOS/Windows with Node
- Command: `bash script/test` (also `npm test` if wired)
- Data: `bash script/seed-test-data` regenerates happy/boundary/hostile under `tests/data/`
- No network services required (localStorage/MemoryAdapter only)

## 5. Entry criteria

- Iteration 1 tag or equivalent main build installs with `bash script/setup`
- `bash script/lint` and `bash script/build` green
- `docs/requirements.md` and issues list available for criterion IDs

## 6. Exit criteria (checkable numbers)

| # | Criterion | Target | How checked |
|---|-----------|--------|-------------|
| E1 | Automated suite pass rate | 100% of executed tests | `bash script/test` exit 0 |
| E2 | Verified-Must coverage for **implemented** Must FRs | ≥ 85% of Must FRs that have code in Iteration 1 | `docs/traceability.csv` + results |
| E3 | Open severity S1 defects | 0 | `docs/defect-log.md` |
| E4 | Open severity S2 defects | ≤ 2 | defect log |
| E5 | Every fixed defect names a regression test | 100% of Fixed rows | defect log |

**Honest note:** Must FRs not yet implemented (ASM-05, CHECK-12, full NAV-06, TRACE-20 productization) remain **gaps**, not silent passes. Exit E2 is scored against implemented Must set unless noted.

## 7. Risks to the testing itself

- Over-reliance on MemoryAdapter may miss pure browser localStorage quirks → mitigated by smoke + manual reload check.
- Acceptance tests call domain directly, not DOM → UI-only regressions possible; logged as residual risk.
- Assistant-generated cases may assert the wrong oracle → every assertion reviewed (see ai-usage).

## 8. Schedule

| Day | Focus |
|-----|--------|
| Mon–Tue | Plan + matrix |
| Wed | Data families + unit/integration |
| Thu | Acceptance pass + defect logging |
| Fri | Triage, fixes, regression tests |
| Sat | Full re-run + test-results.md |

## 9. Signature

I own the assertions in this suite. Assistant proposals were reviewed before acceptance.

**Signed:** Reggie Johnson · 2026-11-06
