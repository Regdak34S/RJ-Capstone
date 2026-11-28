# Top five open issues (groomed for v1.0.0+)

## 1. FR-CHECK-12 — Checklist toggle · **good-first-issue**

- **ID:** FR-CHECK-12 / DEF-007 / B-02  
- **Acceptance:** Toggle persists `done` across reload; unknown item → named error; `bash script/test` green.  
- **Files:** `src/app/project-service.js`, `src/app/render.js`, `tests/acceptance/`

## 2. FR-ASM-05 — Assemble Markdown

- **ID:** FR-ASM-05 / DEF-008 / B-04  
- **Acceptance:** All `final` → ordered Markdown; else `INCOMPLETE_SECTIONS`.  
- **Files:** new `src/app/assemble.js`, acceptance tests, demo script

## 3. FR-NAV-06 — Force navigation when dirty

- **ID:** FR-NAV-06 / DEF-006 / B-03  
- **Acceptance:** Dirty switch without force → `UNSAVED_CHANGES`; force=true switches.  
- **Files:** `src/app/main.js`, `render.js`

## 4. DEF-005 — Caret jump on re-render

- **ID:** DEF-005 / B-05  
- **Acceptance:** Typing mid-string keeps caret; no full list rebuild per key.  
- **Files:** `main.js`, `render.js`

## 5. NFR-PERF-02 — Large-body save sample

- **ID:** NFR-PERF-02  
- **Acceptance:** Documented p95 save with multi-KB bodies; action if miss.  
- **Files:** `docs/performance.md`, optional micro-bench script
