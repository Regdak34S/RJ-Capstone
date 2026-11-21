# Clean-machine test record — Milestone 13

## Run header

| Field | Value |
|-------|--------|
| **Protocol** | `code/clean-machine-protocol.md` (course) |
| **Repository** | RJ-Capstone (this remote) |
| **Only input given to tester** | Repository URL (no verbal preamble) |
| **Acceptance action (defined before run)** | (1) `bash script/setup` succeeds · (2) `bash script/test` shows 29 pass · (3) `bash script/smoke` prints `SMOKE OK (store): Introduction — draft` · (4) optional: open app and see **Introduction — draft** |
| **Environment type** | Fresh working tree on a machine without prior project `node_modules` (author verification 2026-11-21). **Real third-party tester run: fill section “Tester run A” below before Canvas submit.** |
| **Author** | Reggie Johnson |

> **Honesty rule:** A solo run by the author is **not** a full substitute for a silent third-party tester. This file records (1) commands verified on a clean tree, and (2) a template for the required human tester. Do not submit a fabricated friction log.

---

## Author verification — clean tree commands (2026-11-21)

Stopwatch (author, silent self-check on this environment):

| Step | Command | Elapsed (approx) | Result |
|------|---------|------------------|--------|
| 1 | `node -v` / `cat .nvmrc` | &lt; 1 min | Node present; `.nvmrc` = `20` |
| 2 | `bash script/setup` | ~1 min | `setup OK` |
| 3 | `bash script/lint` | &lt; 1 min | `lint OK` |
| 4 | `bash script/test` | ~1 min | **29 pass** |
| 5 | `bash script/build` | &lt; 1 min | `build OK` |
| 6 | `bash script/smoke` | &lt; 1 min | `SMOKE OK (store): Introduction — draft` |
| **Total to acceptance (CLI)** | | **~5 min** | **PASS** |

Real outputs (abridged) are pasted in README §7 and were produced by these runs—not invented.

### Friction found even on author path

| # | What happened | Fix committed |
|---|----------------|---------------|
| F1 | README previously mixed Week 11 tables into “current milestone” | README rewritten for RC + docs set |
| F2 | Smoke prints `HTTP skipped` when server not up — looks scary | README now states store line is the success signal |

---

## Tester run A — third party (required for full credit)

| Field | Value |
|-------|--------|
| **Tester name** | _TBD — recruit before deadline_ |
| **Relation** | Not the author |
| **Environment** | _e.g. borrowed laptop / fresh VM / new OS user_ |
| **Date** | _TBD_ |
| **Clock start** | _when repo opened_ |
| **Clock end** | _when acceptance done or 60 min_ |
| **Outcome** | PASS / FAIL at step __ |

### Friction log (tester’s own words)

| Time | Tester said / did | Notes (author silent) |
|------|-------------------|------------------------|
| | _quote tester_ | |
| | | |

### Fixes after run A

| Friction | Doc or code change | Commit |
|----------|--------------------|--------|
| | | |

### Tester run B — after fixes

| Field | Value |
|-------|--------|
| **Date** | |
| **Elapsed** | |
| **Outcome** | |

---

## Signature

I did not invent a green third-party run. Author CLI path is verified. Third-party rows will be completed when the tester session happens.

**Signed:** Reggie Johnson · 2026-11-21
