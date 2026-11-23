# Content Creation Project (RJ-Capstone)

**Author:** Reggie Johnson  
**Current Milestone:** 14 - Deployable Release v1.0 & Handoff Package   
**Status:** Release candidate `v0.9.0-rc.1` · suite green (29 tests)  
**License:** See [LICENSE](LICENSE)

---

## 1. What it is and who it is for

A **single-user, browser-based** tool for organizing a content map, drafting section text, tracking section status (`not_started` → `draft` → `in_review` → `final`), and saving the project document in the browser so it survives reload.

**Primary reader:** a student building one capstone-style deliverable offline.  
**Secondary reader:** a maintainer who clones the repo and follows this README.

### Non-goals (what it does **not** do)

- Multi-user collaboration or real-time sync  
- Server-side auth, accounts, or a hosted API  
- Full Markdown assemble export (FR-ASM-05) in this candidate — deferred  
- Per-section checklist UI (FR-CHECK-12) in this candidate — deferred  
- Native mobile app  

---

## 2. Demo

After `bash script/start`, open **http://127.0.0.1:8080/**.

You should see:

- Heading: **Capstone Content Project**
- Section rows including **`Introduction — draft`** (and **Methods** on a seeded project)

Data comes from **Persistence** (`localStorage` / seed), not from a hard-coded HTML-only string.

Terminal proof without the browser:

```text
$ bash script/smoke
==> smoke (expect substring: Introduction)
SMOKE OK (store): Introduction — draft
==> smoke HTTP skipped (server not reachable at http://127.0.0.1:8080)
==> smoke OK
```

(HTTP line appears only when nothing is listening on 8080; the store check is the required success signal.)

---

## 3. Prerequisites

| Tool | Version | Check command | Expected output | Failure mode |
|------|---------|---------------|-----------------|--------------|
| Node.js | **≥ 20** (pinned in `.nvmrc` as `20`) | `node -v` | `v20.x` or higher (e.g. `v24.15.0` is OK per `engines`) | `command not found` → install Node 20+ from nodejs.org or nvm |
| npm | ships with Node | `npm -v` | a version number | missing with Node → reinstall Node |
| Git | any recent | `git --version` | `git version …` | needed only to clone |
| Python 3 | optional | `python3 --version` | `Python 3.x` | only used if you run `tools/coverage_report.py` |

```text
$ cat .nvmrc
20
$ node -v
v24.15.0
```

---

## 4. Install

```bash
git clone <your-repo-url> ccp
cd ccp
cp .env.example .env
bash script/setup
```

**Expected output (tail):**

```text
==> Content Creation Project setup
==> npm ci (from package-lock.json)
...
==> setup OK
    Next: ./script/start   then open http://127.0.0.1:${PORT:-8080}/
    Success looks like: page shows 'Introduction — draft'
```

---

## 5. Configure

| Variable | Where | Default | Purpose |
|----------|--------|---------|---------|
| `PORT` | environment | `8080` | static server port for `script/start` |
| (none required for core app) | — | — | no API keys; single-user localStorage |

`.env` is **gitignored**. `.env.example` is the only committed template.

---

## 6. Run

```bash
bash script/start
```

Then open **http://127.0.0.1:8080/** (or the port you set).

Stop with **Ctrl+C** in that terminal.

---

## 7. Test

```bash
bash script/lint
# ==> lint (node --check)
# ==> lint OK

bash script/test
# ... 29 tests ...
# ℹ pass 29
# ==> test OK

bash script/build
# ==> build OK (static assets present)

bash script/smoke
# SMOKE OK (store): Introduction — draft

FORCE_STORAGE_DOWN=1 bash script/smoke
# SMOKE FAIL (store): STORAGE_UNAVAILABLE: forced down for smoke/red test
```

All of the above were executed on 2026-11-21 against this tree.

---

## 8. Project layout

```text
.
├── README.md
├── CHANGELOG.md
├── THIRD-PARTY-NOTICES.md
├── LICENSE
├── index.html
├── package.json / package-lock.json
├── .nvmrc
├── script/          # setup lint test build start smoke
├── src/
│   ├── app/         # main, render, seed, project-service
│   ├── persistence/ # ProjectStore + storage adapters
│   └── ui/styles.css
├── seed/project.json
├── tests/           # unit | integration | acceptance | data
└── docs/            # development, runbook, handoff, ADRs, etc …
```

---

## 9. Troubleshooting

| Symptom | Likely cause | What to do |
|---------|--------------|------------|
| `node: command not found` | Node not installed | Install Node ≥ 20; confirm `node -v` |
| Page blank / “Loading…” stuck | JS error or missing `#app` | Open browser console; ensure `src/app/main.js` loads as module |
| Smoke fails with `STORAGE_UNAVAILABLE` | `FORCE_STORAGE_DOWN=1` set | Unset the variable and re-run |
| Empty section list after reload | Cleared site data | Refresh; seed runs on empty store (`Introduction`) |
| `npm ci` fails | Node &lt; 20 or broken lock | Use Node 20+; do not delete lock without reason |
| Port in use | Another process on 8080 | `PORT=8081 bash script/start` |

More operational failures: **[docs/runbook.md](docs/runbook.md)**.

---

## 10. License

See [LICENSE](LICENSE).

---

## 11. Contact and further reading

- **Maintainer:** Reggie Johnson (course repository owner)
- **Board:** https://github.com/users/Regdak34S/projects/1
- **Architecture:** [docs/architecture.md](docs/architecture.md)
- **Runbook:** [docs/runbook.md](docs/runbook.md)
- **Onboarding:** [docs/onboarding.md](docs/onboarding.md)
- **ADRs:** [docs/adr/README.md](docs/adr/README.md)
- **Changelog / known issues:** [CHANGELOG.md](CHANGELOG.md)
