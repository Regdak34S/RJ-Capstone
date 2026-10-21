# Walking Skeleton Trace — Content Creation Project

**Author:** Reginald Johnson  
**Date:** 2026-10-21  
**Tag target:** `v0.1.0-skeleton`

---

## 1. The request path

One row per hop. "Real" means the production component, not a stub, a mock, a hard-coded fixture in the UI, or a `TODO`.

| # | Hop | Component in my system | Real? | Evidence |
|---|-----|------------------------|-------|----------|
| 1 | Client / entry point | `index.html` loads `src/app/main.js` | **yes** | Browser opens `/`; `#app` is the root |
| 2 | Route / dispatch | Browser module graph (no HTTP API in v0.1) | **yes** | Static host serves files; `main.js` is the dispatch | 
| 3 | Service / domain logic | `ensureSeeded` + `ProjectStore.loadOrSeed` | **yes** | `tests/unit/project-store.test.js`; `script/smoke` |
| 4 | Data store | Persistence → `localStorage` (browser) / `MemoryAdapter` (Node CI) | **yes** | Seeded row `Introduction` / `draft`; ADR 0002 |
| 5 | Response | Project JSON document from `ProjectStore.load()` | **yes** | Smoke prints `Introduction — draft` |
| 6 | Rendered result | `renderProject` writes `<li class="section-row">Introduction — draft</li>` | **yes** | Visible in browser after `./script/start` |
| 7 | External integration | None in v0.1 (GitHub Pages is static host only) | **deferred** | Architecture §10; ADR 0004 build-not-buy |

**Notes on hop 2:** This architecture has no application server or REST route layer (ADR 0001–0003). The “route” hop is the browser loading the module entry. That is intentional and labeled here so it is not mistaken for a stub.

**Notes on hop 4:** In the browser the real store is `localStorage`. In Node CI the same `ProjectStore` contract runs against `MemoryAdapter` so smoke and unit tests exercise the Persistence component without a browser. Both paths use the same seed document.

**Missing bone (next tasks):** Full ProjectMap UI (FR-MAP-01), DraftEditor (FR-DRAFT-02), StatusBoard (FR-PROG-03), Checklist (FR-CHECK-12), Assembly (FR-ASM-05) — see issues below.

---

## 2. Requirement traceability

| Req ID | Requirement (short) | Issue | Branch | Verified by | Status |
|--------|---------------------|-------|--------|-------------|--------|
| FR-LOAD-10 | Reopen / load project document | #1 | `main` | `tests/unit/project-store.test.js` | done (skeleton) |
| FR-SAVE-09 | Persist project document | #2 | `main` | `ProjectStore.save` + smoke | done (skeleton) |
| FR-VIEW-11 | Project overview / section list | #3 | `main` | `renderProject` shows section row | done (thin slice) |
| FR-SEC-07 | Status at a glance | #4 | `main` | Section row shows `draft` status | done (thin slice) |
| FR-MAP-01 | Create content map | #5 | — | — | not started |
| FR-DRAFT-02 | Draft / edit section text | #6 | — | — | not started |
| FR-PROG-03 | Update section status | #7 | — | — | not started |
| FR-CHECK-12 | Guided checklist | #8 | — | — | not started |
| FR-ASM-05 | Assemble final deliverable | #9 | — | — | not started |
| FR-NAV-06 | Navigate sections | #10 | — | — | not started |
| NFR-REL-02 | Draft survives close/reopen | #2 | `main` | localStorage path | in progress |
| NFR-MNT-01 | Clean clone runnable from README | #11 | `main` | `script/setup` + Run it | done (skeleton) |
| NFR-PERF-02 | Save ≤ 1 s | #12 | — | SP-01 | not started |

---

## 3. Skeleton acceptance record

- **Date the skeleton first walked end to end:** 2026-10-21
- **Commit that made it walk:** *(tag `v0.1.0-skeleton` after push — replace with SHA)*
- **CI run that proved it (URL):** *(paste green Actions run URL after first green push)*
- **One red build I caused on purpose, and the fix:**  
  - Red path locally: `FORCE_STORAGE_DOWN=1 bash script/smoke` → `SMOKE FAIL (store): STORAGE_UNAVAILABLE`  
  - In CI: temporarily set `FORCE_STORAGE_DOWN: "1"` on the smoke step, push, capture red URL, revert, capture green URL.
- **Hops still stubbed, and when they get real:**  
  - No unlabeled stubs on the skeleton path.  
  - Full map/draft/status/checklist/assembly UIs: Weeks 10–12 per `docs/plan.md` (issues #5–#10).

---

## 4. How to re-verify locally

```bash
git clone <repo> /tmp/ccp && cd /tmp/ccp
cp .env.example .env
bash script/setup
bash script/lint && bash script/test && bash script/build
bash script/start &          # http://127.0.0.1:8080/
bash script/smoke            # expects "Introduction"
# Browser: page shows "Introduction — draft"
FORCE_STORAGE_DOWN=1 bash script/smoke   # must fail
```
