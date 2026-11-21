# Runbook — Content Creation Project

**Last verified:** 2026-11-20 · **Verified by:** Reggie Johnson  

## Where it runs

| Environment | Notes |
|-------------|--------|
| Local static server | `bash script/start` → http://127.0.0.1:8080/ |
| Browser only | Open `index.html` as a module host; localStorage is origin-scoped |
| CI (GitHub Actions) | `ubuntu-latest`, Node from `.nvmrc`, no browser required for unit/integration/acceptance |
| GitHub Pages (optional) | Static host only; same files, HTTPS by platform |

## Start / stop / restart

| Action | Command | Expected |
|--------|---------|----------|
| Start | `bash script/start` | Process listens on `$PORT` (default 8080) |
| Stop | Ctrl+C in that terminal | Process exits |
| Restart | Stop, then Start | Same as start |
| Setup (once) | `bash script/setup` | `setup OK` |

## Health check

**Command:** `bash script/smoke`

| State | Output signal |
|-------|----------------|
| **Healthy** | `SMOKE OK (store): Introduction — draft` |
| **Unhealthy (store forced down)** | `SMOKE FAIL (store): STORAGE_UNAVAILABLE…` when `FORCE_STORAGE_DOWN=1` |
| **Unhealthy (missing assets)** | `bash script/build` prints `ERROR: missing …` |

## Routine operations

| Operation | Command |
|-----------|---------|
| Lint | `bash script/lint` → `lint OK` |
| Full test suite | `bash script/test` → `pass 29` / `test OK` |
| Build asset check | `bash script/build` → `build OK` |
| Reseed test fixtures | `node tests/data/seed.mjs` |
| Clear user data (browser) | DevTools → Application → Local Storage → delete origin keys **or** console: `localStorage.clear()` |

## Normal readings

| Check | Normal |
|-------|--------|
| `bash script/test` | 29 pass, 0 fail, ~1 s |
| `bash script/smoke` | SMOKE OK with Introduction |
| localStorage document | JSON with `sections` array; `schemaVersion` present |
| Page title area | “Capstone Content Project” |

## Failure catalogue (from real defects)

| ID | Symptom (operator words) | Trace | What to do |
|----|--------------------------|-------|------------|
| DEF-001 | “Empty section name got saved” | `EMPTY_SECTION_NAME` | Fixed; regression `AC-MAP-01-2`. If regresses, check `createSection` trim. |
| DEF-002 | “Unknown section blew up weirdly” | `UNKNOWN_SECTION` | Fixed; domain throws stable code. |
| DEF-003 | “Bad status stuck on section” | `INVALID_STATUS` | Fixed; `VALID_STATUSES` guard. |
| DEF-006 | “I switched sections and lost work warning only” | FR-NAV-06 partial | **Workaround:** Save before switch. Full force path deferred (B-03). |
| DEF-008 | “Where is Export / Assemble?” | FR-ASM-05 gap | **Workaround:** copy section text manually. Backlog B-04. |
| DEF-010 | “CI build missing styles” | build required files | Fixed; `src/ui/styles.css` must exist. |

## Destructive commands — do **not** run casually

| Command / action | Effect |
|------------------|--------|
| `localStorage.clear()` in the app origin | **Destroys** the user’s project document in that browser. Prefer export/copy first if any draft matters. |
| Deleting `package-lock.json` then `npm install` | May drift tooling versions; restore lock from git. |
| `git push --force` on `main` | Rewrites shared history; not part of normal ops. |

## Escalation

1. Reproduce with `bash script/smoke` and `bash script/test`.  
2. Check `docs/defect-log.md` and `CHANGELOG.md` Known issues.  
3. If data loss in browser only: reseed via reload on empty store (Introduction returns); prior drafts are gone unless the user copied them.

**Owner:** Reggie Johnson (course project).
