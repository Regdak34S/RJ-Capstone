# Handoff Guide — Content Creation Project

**Audience:** the engineer who inherits this project and **cannot ask you a question.**  
**Version:** v1.0.0 · **Date:** 2026-11-28 · **Author:** Reggie Johnson

---

## 0. Thirty-second orientation

- **What it is:** A single-user browser tool to map sections, draft text, track status, and save a project document in `localStorage`.
- **Who uses it:** One student authoring a long deliverable offline.
- **Status as of 2026-11-23:** Shipped release candidate promoted to **v1.0.0** with known deferred Musts (checklist, assemble).
- **Deployed at:** GitHub Pages when enabled on the repo — see `docs/deployment.md`. Always runnable locally via `bash script/start`.
- **Start here:** `README.md` to run it, `docs/architecture.md` to understand it, this file to take it over.

## 1. Day one — get it running (target: under 30 minutes)

| Step | Command | You should see | If not |
|------|---------|----------------|--------|
| 1 | `git clone <url> && cd <repo>` | project files including `script/setup` | wrong URL / auth |
| 2 | `cp .env.example .env` | `.env` exists (gitignored) | — |
| 3 | `bash script/setup` | ends with **`setup OK`** | Node &lt; 20 → install Node 20+ (`node -v`) |
| 4 | `bash script/test` | **`pass 29`** / `test OK` | open failing assertion; do not parallelize oddly |
| 5 | `bash script/smoke` | **`SMOKE OK (store): Introduction — draft`** | see runbook failures |
| 6 | `bash script/start` → open http://127.0.0.1:8080/ | **Capstone Content Project** + Introduction row | port in use → `PORT=8081 bash script/start` |

## 2. Week one — ramp ending in a merged change

1. **Read** `docs/architecture.md` §0 and `docs/adr/README.md` (20 min).  
2. **Trace one path:** add section → save → reload. Files: `project-service.js` → `project-store.js` → `storage.js` → `render.js` / `main.js`.  
3. **Fix the starter issue:** **good-first-issue** — FR-CHECK-12 checklist toggle (see below and `docs/onboarding.md`).  
4. **Ship:** branch, `bash script/test`, PR, CI green, merge.

### good-first-issue (referenced)

**Title:** FR-CHECK-12 — toggle checklist item and persist `done`  
**Acceptance:** toggle persists across reload; unknown id → named error; tests green.  
**Likely files:** `src/app/project-service.js`, `src/app/render.js`, `tests/acceptance/`, `src/persistence/project-store.js`  
**Labels:** `good-first-issue`, `FR-CHECK-12`

## 3. Accounts, keys, and who pays

| Thing | Where it lives | Owner | Cost | Transfer |
|-------|----------------|-------|------|----------|
| GitHub repo | github.com | Reggie Johnson (course) | $0 student | Add collaborator / transfer repo |
| GitHub Pages | repo Settings → Pages | same | $0 public | follows repo |
| API keys | **none for v1.0.0** | — | $0 | — |
| Domain | none | — | $0 | — |

**Secrets scan:** `.env` gitignored; no production secrets in tree. If a key was ever committed historically, rotate at provider first (none required today). Re-scan: `git log -p \| grep -iE 'api[_-]?key\|secret\|password\|token' \|\| true`.

## 4. Landmines (at least five)

1. **`FORCE_STORAGE_DOWN=1` left in the environment** makes smoke fail forever — unset it.  
2. **Clearing `localStorage` on the Pages origin** wipes the user’s only copy of drafts — there is no server backup.  
3. **Do not use `innerHTML` for user body text** — XSS landmine; keep `textContent` / form values (SEC-01).  
4. **Autosave is not a bug** — explicit Save is ADR 0005 / FR-SAVE-09; rejecting CR-005 was intentional.  
5. **`package-lock.json` must stay committed** — without it `npm ci` / setup drifts.  
6. **Assemble and checklist are Musts still deferred** — do not demo them as done (DEF-007, DEF-008).

## 5. Bus-factor register (closed this week)

| Only-in-my-head item | Closed by |
|----------------------|-----------|
| How to prove store works without UI | README + `script/smoke` expected line |
| Why Save is explicit | ADR 0005 + CR-005 |
| What FORCE_STORAGE_DOWN is for | `.env.example` + runbook + landmine |
| Where seed content lives | `seed/project.json` + `seededProject()` |
| Pages vs local deploy story | `docs/deployment.md` |
| First safe change | onboarding + good-first-issue above |

## 6. AI / volatile dependency

No runtime model. Volatile surface: browser `localStorage` quota and multi-tab last-write-wins. See successor section in `docs/ai-usage.md`.

## 7. Rollback pointer

Numbered rollback: `docs/runbook.md` § Rollback.
