# RJ-Capstone — Content Creation Project

**Author:** Reginald Johnson  
**Stack (ADR 0001–0004):** Vanilla HTML/CSS/JavaScript · browser `localStorage` · GitHub Pages (static) · build, do not buy.

A small tool to organize, draft, track status, and (later) assemble a capstone deliverable from section drafts.

---

## Current milestone — Week 12: Integrated Release Candidate & Change Log

**What shipped this week**

| Artifact | Location |
|----------|----------|
| Test plan (scope, out-of-scope, levels, env, entry/exit criteria, risks, schedule, signature) | `docs/test-plan.md` |
| Requirements ↔ tests matrix (gaps visible) | `docs/traceability.csv` |
| Unit tests (domain + store, boundary/negative) | `tests/unit/` |
| Integration tests (≥3 seams: store, seed file, hostile payload) | `tests/integration/` |
| Acceptance tests named by criterion id | `tests/acceptance/` |
| Test data families: happy / boundary / hostile | `tests/data/` |
| Reproducible data seed | `node tests/data/seed.mjs` or `bash script/seed-test-data` (if present) |
| Last run record + coverage numbers | `docs/test-results.md` |
| Defect log (10 defects, sev ≠ pri, regression links) | `docs/defect-log.md` |
| Hard-tier quality judgment memo | `docs/quality-memo.md` |
| Coverage helper | `python3 tools/coverage_report.py` |

**Suite command (one command, CI-compatible):**

```bash
bash script/test
# → unit + integration + acceptance (29 tests)
```

**Coverage (last recorded):** ~70% verified-requirement · ~78% verified-Must · gaps listed for FR-ASM-05, FR-CHECK-12, FR-TRACE-20, NFR-PERF-02 (not hidden).

**Known open defects:** DEF-005 (caret), DEF-006 (NAV force partial), DEF-007 (checklist), DEF-008 (assemble) — see `docs/defect-log.md`.

Prior construction: Iteration 1 vertical slices (FR-VIEW-11, FR-SEC-07, FR-MAP-01, FR-DRAFT-02, FR-PROG-03, FR-SAVE-09, FR-LOAD-10) under tag target `iteration-1`.

---

## Run it

**Prerequisite:** Node.js 20+ (see `.nvmrc`).

```bash
git clone <your-repo-url> ccp && cd ccp
cp .env.example .env
bash script/setup
bash script/start
```

Open **http://127.0.0.1:8080/**

**What success looks like:** heading **Capstone Content Project** and section rows such as **`Introduction — draft`** (data from Persistence / seed, not a hard-coded HTML-only fixture).

```bash
bash script/smoke
# → SMOKE OK (store): Introduction — draft

FORCE_STORAGE_DOWN=1 bash script/smoke
# → SMOKE FAIL (store): STORAGE_UNAVAILABLE
```

### One-command verbs (same as CI)

| Command | Purpose |
|---------|---------|
| `bash script/setup` | Install from lock file; ensure `.env` |
| `bash script/lint` | `node --check` on JS modules |
| `bash script/test` | **Unit + integration + acceptance** |
| `bash script/build` | Verify required static assets |
| `bash script/start` | Static server on `$PORT` (default 8080) |
| `bash script/smoke` | Seeded row in store + optional HTTP check |

```bash
node tests/data/seed.mjs          # regenerate happy/boundary/hostile fixtures
python3 tools/coverage_report.py  # verified-requirement coverage from matrix
```

---

## Documentation map

| Doc | Purpose |
|-----|---------|
| `docs/requirements.md` | FRs / NFRs |
| `docs/architecture.md` | Technical specification |
| `docs/test-plan.md` | **Milestone 11** test plan |
| `docs/traceability.csv` | **Milestone 11** req ↔ test matrix |
| `docs/test-results.md` | **Milestone 11** last full run |
| `docs/defect-log.md` | **Milestone 11** defects |
| `docs/quality-memo.md` | **Milestone 11** hard-tier judgment |
| `docs/definition-of-done.md` | Done gate |
| `docs/demo/iteration-1-script.md` | **Milestone 10** demo script |
| `docs/reviews/iteration-1-self-review.md` | Four-pass review |
| `docs/authorship-memo.pdf` | **Milestone 10** authorship memo |
| `docs/ai-usage.md` | AI disclosure (through Week 11) |
| `docs/hours-log.csv` | Time log |

---

## Project board

https://github.com/users/Regdak34S/projects/1

## Secrets / rotation

1. No API keys required (static + localStorage).  
2. Secrets only in GitHub Actions secrets or local `.env` (gitignored).  
3. If a secret is committed: rotate, purge history with instructor guidance.  
4. Audit: `git log -p | grep -iE 'api[_-]?key|secret|password|token' || true`

## License

See `LICENSE`.

