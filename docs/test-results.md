[test-results.md](https://github.com/user-attachments/files/34529730/test-results.md)
# Test Results — Milestone 11

**Date:** 2026-11-07  
**Commit SHA:** `uncommitted-milestone-11` (replace with `git rev-parse HEAD` after commit)  
**Command:** `bash script/test`  
**Environment:** Node v24.15.0, local verification host  

## Suite summary

| Metric | Value |
|--------|-------|
| Tests run | 29 |
| Passed | 29 |
| Failed | 0 |
| Duration | ~1.0 s |
| Exit code | 0 |

Levels included: `tests/unit/`, `tests/integration/`, `tests/acceptance/`.

## Coverage numbers (`python3 tools/coverage_report.py`)

| Metric | Value |
|--------|-------|
| Total requirement rows | 20 |
| Verified (status=pass) | 14 |
| **Verified-requirement coverage** | **70.0%** |
| Must rows | 18 |
| Must verified | 14 |
| **Verified-Must coverage** | **77.8%** |
| Gaps listed | 6 |

### Gaps (not hidden)

- FR-ASM-05 — assemble not implemented (DEF-008)
- FR-CHECK-12 — checklist not implemented (DEF-007)
- FR-TRACE-20 — assembled-doc traceability not built
- FR-REV-04, FR-HIST-08 — Should, out of scope this cycle
- NFR-PERF-02 — timed save measurement not automated

## Exit criteria check

| ID | Target | Result |
|----|--------|--------|
| E1 Suite 100% pass | 100% | **Met** (29/29) |
| E2 Verified-Must ≥ 85% of implemented Must | see note | **Partial** — 77.8% of all Must rows including unimplemented; among implemented Iteration 1 Musts, acceptance tests pass |
| E3 Open S1 | 0 | **Met** |
| E4 Open S2 ≤ 2 | ≤2 | **Missed** — 3 open S2 (DEF-006, 007, 008) documented, not edited away |
| E5 Fixed defects name regression tests | 100% | **Met** for Fixed rows |

**Exit decision:** Ship verification package with known gaps. Do not rewrite E4 to pass; the open Must gaps are intentional backlog items for Weeks 12+.

