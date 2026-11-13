# Release candidate exit criteria — 0.9.0-rc.1

**Written:** 2026-11-10 (before evaluation)  
**Evaluated:** 2026-11-13  
**Evaluator:** Reggie Johnson  

| # | Criterion | Result |
|---|-----------|--------|
| 1 | Automated suite green: `bash script/test` | **PASS** — 29/29 (2026-11-13) |
| 2 | Zero open S1 defects | **PASS** — none open |
| 3 | Security pass complete; findings fixed or accepted in writing | **PASS** — `docs/security-review.md` |
| 4 | Every Week-4 performance NFR measured with method + p50/p95 | **PASS** — both PERF targets pass; see `docs/performance.md` |
| 5 | Clean documented path: setup → lint → test → build | **PASS** — verified on this tree |
| 6 | CHANGELOG Known issues non-empty and actionable | **PASS** |
| 7 | At least one REJECT and one DEFER CR on record | **PASS** — CR-001 REJECT, CR-002/004 DEFER |

**Overall:** **PASS for tagging 0.9.0-rc.1** with known S2 gaps deferred (checklist, assemble, full NAV).
[rc-exit-criteria.md](https://github.com/user-attachments/files/34814228/rc-exit-criteria.md)
