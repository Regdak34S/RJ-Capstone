# Deployment — Content Creation Project v1.0.0

**Author:** Reggie Johnson  
**Last updated:** 2026-11-28  

## Target

| Option | Used for v1.0.0? | Notes |
|--------|------------------|-------|
| **GitHub Pages** (static) | **Yes — primary** | Free static host; matches ADR 0003; no card required |
| Local `bash script/start` | Dev + offline equivalent | Documented in README |
| Paid VPS / managed Node host | No | Not required — no server runtime |

**Constraint policy:** This product is a static front-end with browser `localStorage`. There is no application server to host. GitHub Pages (or any static file host) is the production surface. Money is not the blocker; architecture is.

**Deployed URL (fill after Pages is enabled on your repo):**  
`https://<your-github-user>.github.io/<repo>/`  
Until Pages is on: the graded equivalent is **one-command local run** + this document + the annotated tag.

## Configuration

See `.env.example`. Production Pages needs **no secrets**. `PORT` / `APP_BASE_URL` apply only to local smoke/server.

## Deploy steps (from tag)

1. Ensure `main` (or release branch) contains the `v1.0.0` tree.  
2. Tag: `git tag -a v1.0.0 -m "v1.0.0 Content Creation Project"` && `git push origin v1.0.0`.  
3. GitHub → Settings → Pages → Source: Deploy from branch `main` (root) **or** GitHub Actions static workflow.  
4. Wait for Pages build; open the site URL.  
5. Hard-refresh; confirm **Capstone Content Project** and **Introduction — draft** after first load (seed writes to that browser’s localStorage).

## Verification / health

| Check | Where | Expected |
|-------|--------|----------|
| CLI smoke on tag checkout | any machine | `SMOKE OK (store): Introduction — draft` |
| UI | Pages URL or localhost:8080 | Heading + section rows |
| Suite | `bash script/test` | 29 pass |

**Logs:** GitHub Actions run log for CI; browser DevTools console for client errors. There is no server log stream.

## Proof of reproduction (not my long-lived laptop state)

```text
Clean-environment run — 2026-11-23
Environment:  fresh working tree extract of release package on Linux CI-like host
              (no pre-existing node_modules for this project)
Operator:     author, following README setup path only
Attempt 1:    PASS setup → lint → test (29) → build → smoke
              Clone/extract → suite green ≈ under 5 minutes on this host
              First-time human friction historically: missing styles.css (DEF-010, fixed);
              package-lock must remain committed (it is).
Transcript signals:
  setup OK
  lint OK
  ℹ pass 29
  build OK
  SMOKE OK (store): Introduction — draft
```

**What broke historically (already fixed in tree):** DEF-010 build missing CSS; single-section seed vs tests (aligned to two sections).

## Rollback

See **docs/runbook.md** § Rollback (rehearsed). For Pages: redeploy previous tag / revert commit on the Pages source branch. **No database migrations** — state is per-browser localStorage; rolling back code does not rewrite users’ already-written local documents.
