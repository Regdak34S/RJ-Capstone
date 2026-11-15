# RJ-Capstone — Content Creation Project

**Author:** Reggie Johnson  
**Stack (ADR 0001–0004):** Vanilla HTML/CSS/JavaScript · browser `localStorage` · GitHub Pages (static) · build, do not buy.

A single-user tool to organize a content map, draft sections, track status, save/reload locally, and (planned) assemble a capstone deliverable.

**Release candidate tag target:** `v0.9.0-rc.1`  
**Suite:** `bash script/test` → **29** tests (unit + integration + acceptance)

---

## Current milestone — Week 12: Integrated Release Candidate

### What shipped this week

| Artifact | Location |
|----------|----------|
| Annotated RC tag (you push) | `v0.9.0-rc.1` |
| Exit criteria written **before** evaluation, then scored | `docs/rc-exit-criteria.md` |
| Performance vs Week-4 NFRs (method, sample, p50/p95, re-measure) | `docs/performance.md` |
| Security pass — seven areas, findings dispositioned | `docs/security-review.md` |
| Seam map + Tier-1 integration evidence | `docs/architecture.md` §§12–13 |
| Platform failure modes + degradation demo | architecture §13; `FORCE_STORAGE_DOWN=1 bash script/smoke` |
| Change requests (impact analysis + disposition) | `docs/change-requests/CR-001` … `CR-005` |
| At least one **REJECT** and one **DEFER** | CR-001 / CR-005 REJECT · CR-002 / CR-003 / CR-004 DEFER |
| Scope cuts marked Deferred (not deleted) + backlog | `docs/requirements.md` · `docs/backlog.md` |
| Keep a Changelog + **Known issues** | `CHANGELOG.md` |
| Hard-tier scope decision memo | `docs/scope-decision-memo.md` |
| Hours + AI usage through Week 12 | `docs/hours-log.csv` · `docs/ai-usage.md` |

### Change control summary

| CR | Title | Disposition |
|----|-------|-------------|
| CR-001 | Mobile / responsive redesign | **REJECT** |
| CR-002 | Shared multi-user sync | **DEFER** → backlog B-01 |
| CR-003 | Assemble Markdown (FR-ASM-05) | **DEFER** → B-04 / DEF-008 |
| CR-004 | Checklist (FR-CHECK-12) | **DEFER** → B-02 / DEF-007 |
| CR-005 | Auto-save every keystroke | **REJECT** (not a bug vs FR-SAVE-09) |

### Known issues in this candidate

See `CHANGELOG.md` for full wording. Open items include:

- **DEF-005 (S3)** — caret jumps on full re-render while typing  
- **DEF-006 (S2)** — FR-NAV-06 force-navigation incomplete (Save before switch)  
- **DEF-007 (S2)** — FR-CHECK-12 checklist not implemented  
- **DEF-008 (S2)** — FR-ASM-05 assemble Markdown not implemented  

---

## Prior milestones (still in the repo)

| Week | Focus | Key paths |
|------|--------|-----------|
| **11** | Test plan, suite, defect log | `docs/test-plan.md`, `docs/traceability.csv`, `docs/test-results.md`, `docs/defect-log.md`, `docs/quality-memo.md`, `tests/` |
| **10** | Core increment & demo | `docs/demo/iteration-1-script.md`, `docs/reviews/iteration-1-self-review.md`, `docs/authorship-memo.pdf` |
| **9** | Walking skeleton | `docs/skeleton-trace.md`, scripts + CI |
| **7–8** | Plan & scope | `docs/plan.md`, `docs/risk-register.md` |

**Iteration 1 behavior (working software):** section list + status (FR-VIEW-11, FR-SEC-07), add section (FR-MAP-01), draft body (FR-DRAFT-02), status change (FR-PROG-03), save/load (FR-SAVE-09, FR-LOAD-10).

---

## Run it

**Prerequisite:** Node.js 20+ (see `.nvmrc`).

```bash
git clone <your-repo-url> ccp && cd ccp
# optional: git checkout v0.9.0-rc.1
cp .env.example .env
bash script/setup
bash script/start
```

Open **http://127.0.0.1:8080/**

**What success looks like:** heading **Capstone Content Project** and rows such as **`Introduction — draft`** (from Persistence / seed, not HTML-only hard-coding).

```bash
bash script/lint
bash script/test          # unit + integration + acceptance (29)
bash script/build
bash script/smoke
# → SMOKE OK (store): Introduction — draft

FORCE_STORAGE_DOWN=1 bash script/smoke
# → SMOKE FAIL (store): STORAGE_UNAVAILABLE   ← intentional degradation path
```

### One-command verbs (same as CI)

| Command | Purpose |
|---------|---------|
| `bash script/setup` | Install from lock file; ensure `.env` |
| `bash script/lint` | `node --check` on JS modules |
| `bash script/test` | Unit + integration + acceptance |
| `bash script/build` | Verify required static assets |
| `bash script/start` | Static server on `$PORT` (default 8080) |
| `bash script/smoke` | Seeded row in store + optional HTTP check |
| `bash script/seed-test-data` | Regenerate happy / boundary / hostile fixtures |
| `node tests/data/seed.mjs` | Same seed script directly |
| `python3 tools/coverage_report.py` | Verified-requirement coverage from matrix |

---

## Documentation map

| Doc | Purpose |
|-----|---------|
| `CHANGELOG.md` | Release history, change table, **Known issues** |
| `docs/rc-exit-criteria.md` | **Week 12** RC gates |
| `docs/performance.md` | **Week 12** NFR measurements |
| `docs/security-review.md` | **Week 12** security pass |
| `docs/change-requests/` | **Week 12** CR-001…005 |
| `docs/backlog.md` | Deferred work with estimates / AC |
| `docs/scope-decision-memo.md` | **Week 12** hard-tier memo |
| `docs/architecture.md` | Spec + seam map + failure modes |
| `docs/requirements.md` | FRs / NFRs + Deferred table |
| `docs/test-plan.md` | Week 11 test plan |
| `docs/traceability.csv` | Req ↔ test matrix (gaps visible) |
| `docs/test-results.md` | Last full suite run |
| `docs/defect-log.md` | Defects (sev ≠ pri) |
| `docs/quality-memo.md` | Week 11 quality judgment |
| `docs/definition-of-done.md` | Done gate |
| `docs/demo/iteration-1-script.md` | Week 10 demo script |
| `docs/reviews/iteration-1-self-review.md` | Four-pass review |
| `docs/authorship-memo.pdf` | Week 10 authorship memo |
| `docs/plan.md` / `docs/risk-register.md` | Week 7 plan |
| `docs/ai-usage.md` | AI disclosure (through Week 12) |
| `docs/hours-log.csv` | Time log |

---

## Project board

https://github.com/users/Regdak34S/projects/1

## Secrets / rotation

1. No API keys required (static + localStorage).  
2. Secrets only in GitHub Actions secrets or local `.env` (gitignored).  
3. If a secret is committed: rotate at the provider, then clean history with instructor guidance.  
4. Audit: `git log -p | grep -iE 'api[_-]?key|secret|password|token' || true`

## License

See `LICENSE`.
ploading README-week12.md…]()

