# RJ-Capstone

## Project

**Content Creation Project:** A small software tool to help a student organize, draft, track, revise, and assemble a capstone deliverable from scattered ideas and section drafts.

**Stack (ADR 0001–0004):** Vanilla HTML/CSS/JavaScript · browser `localStorage` · GitHub Pages (static) · build, do not buy.

## Current status

**Milestone 8-9 - Walking Skeleton & Continuous Integration**  
Tag target: `v0.1.0-skeleton`

## Run it

**Prerequisite:** Node.js 20+ (see `.nvmrc`). Python 3 is used only to serve static files.

```bash
git clone <your-repo-url> ccp && cd ccp
cp .env.example .env
bash script/setup
bash script/start
```

Open **http://127.0.0.1:8080/**

**What success would've looked like:** the page shows a heading **Capstone Content Project** and a list row **`Introduction - draft`**. That text comes from Persistence (seeded into storage), not from a hard-coded string in the HTML.

Prove the data hop without the browser:

```bash
bash script/smoke
# → SMOKE OK (store): Introduction — draft
```

Prove the pipeline can fail when the store is down:

```bash
FORCE_STORAGE_DOWN=1 bash script/smoke
# → SMOKE FAIL (store): STORAGE_UNAVAILABLE
```

Other one-command verbs (same as CI):

| Command | Purpose |
|---------|---------|
| `bash script/setup` | Install from lock file, copy `.env.example` → `.env` |
| `bash script/lint` | `node --check` on all JS modules |
| `bash script/test` | Unit tests (`node --test`) |
| `bash script/build` | Verify static assets present |
| `bash script/start` | Static file server on `$PORT` (default 8080) |
| `bash script/smoke` | Seeded row in store + optional HTTP check |



## Documentation map

- `docs/architecture.md` — Week 6 technical specification
- `docs/plan.md` — Week 7 WBS / schedule / burn-down
- `docs/risk-register.md` — Week 7 risks
- `docs/skeleton-trace.md` — **Week 9 hop table + acceptance record**
- `docs/issues.md` — Requirement-traced issue list for the board
- `docs/requirements.md` — FRs / NFRs
- `docs/ai-usage.md` — AI disclosure
- `docs/hours-log.csv` — time log

## Project board

https://github.com/users/Regdak34S/projects/1

## Secrets/rotation plan

1. No API keys are required for the skeleton (static + localStorage).
2. If a secret is ever added: put it only in GitHub Actions secrets / local `.env` (gitignored).
3. If a secret is committed by mistake: rotate it at the provider immediately, purge from git history (`git filter-repo` or BFG), force-push only with instructor guidance.
4. Re-run a full-history scan (`git log -p | grep -iE 'api[_-]?key|secret|password|token'`) after any incident.

## License

See `LICENSE`.
