# Plan — Content Creation Project (Week 7 baseline)

**Author:** Reginald Johnson  
**Date:** 2026-10-08  
**Status:** Baseline for Weeks 8-16  
**Commit purpose:** plan: baseline WBS, schedule, risk register, and scope decision

This plan is the document every later milestone reports progress against. Estimates are the author's; an assistant proposed task structure and risk wording only (see `docs/ai-usage.md`).

---

## 1. Calibration factor

| Item | Value |
|------|------:|
| Finished construction tasks in `docs/hours-log.csv` | 0 |
| Planning sessions logged (Week 6) | 4 (8.5 h total) |
| **Calibration factor applied to remaining work** | **1.15** |

**Rationale:** No construction tasks have completed yet, so the factor cannot be computed from estimate-vs-actual construction rows. Charter risk R3 (difficulty estimating) and prior coursework experience of underestimating by roughly 10–20% support a conservative **1.15**. After the first five construction tasks finish, the factor will be recomputed from the log and this plan updated.

**How applied:** Every task Expected effort \(E = (O + 4M + P) / 6\) is multiplied by 1.15 to produce **Calibrated hours**. The project buffer is calculated on calibrated totals and is **not** hidden inside individual task estimates.

---

## 2. Work breakdown structure

**100% rule:** The work packages below cover all Must construction and verification work required to ship the core workflow in `docs/architecture.md` and `docs/requirements.md` (Must FRs and Must NFRs). Enabling work (skeleton, deploy, docs, tests) is included. Should/Could items not in this baseline are listed in the scope decision (§8).

**Sizing:** Every task is 1–6 hours of expected effort before calibration.

### WP-1 · Walking skeleton & Persistence  ·  FR-SAVE-09, FR-LOAD-10, NFR-REL-02, NFR-PRIV-01, NFR-MNT-01

| Task | Name | Reqs | O | M | P | E | Cal (×1.15) | Done when | Dep |
|------|------|------|--:|--:|--:|--:|----------:|-----------|-----|
| T-1.1 | Repo layout: `src/`, `tests/`, `index.html` shell | enabling | 1 | 1.5 | 2 | 1.5 | 1.7 | `index.html` opens in browser with empty app root; README lists open steps | - |
| T-1.2 | Persistence module: load/save JSON under versioned key | FR-SAVE-09, FR-LOAD-10 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | `setItem`/`getItem` round-trip a fixture; schemaVersion present | T-1.1 |
| T-1.3 | Corrupt-document and quota error paths | NFR-REL-02, NFR-PRIV-01 | 1 | 2 | 3.5 | 2.1 | 2.4 | `CORRUPT_DOCUMENT` and `QUOTA_EXCEEDED` codes surface user messages | T-1.2 |
| T-1.4 | Export JSON / clear-project controls | NFR-PRIV-01 | 1 | 1.5 | 2.5 | 1.6 | 1.8 | User can download project JSON and clear local data | T-1.2 |
| T-1.5 | SP-01 spike: measure save latency on 20-section fixture | NFR-PERF-02 | 1 | 1.5 | 2 | 1.5 | 1.7 | 10 timed saves logged; result recorded in spike file | T-1.2 |

**WP-1 calibrated subtotal:** 10.6 h

### WP-2 · ProjectMap & Navigation  ·  FR-MAP-01, FR-NAV-06

| Task | Name | Reqs | O | M | P | E | Cal | Done when | Dep |
|------|------|------|--:|--:|--:|--:|---:|-----------|-----|
| T-2.1 | Create map UI: title + section list (add/remove/reorder) | FR-MAP-01 | 2 | 3 | 5 | 3.2 | 3.7 | Empty submit blocked with `EMPTY_MAP`; order persists | T-1.2 |
| T-2.2 | Section id generation and dependency field (optional edges) | FR-MAP-01 | 1 | 2 | 3 | 2.0 | 2.3 | Each section has stable id; optional depends-on stored | T-2.1 |
| T-2.3 | Navigation: switch section, dirty-guard | FR-NAV-06 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | Leaving dirty section prompts; `force` bypass works | T-2.1, T-3.1 |
| T-2.4 | Keyboard path for map and nav | NFR-ACC-01 | 1 | 1.5 | 2.5 | 1.6 | 1.8 | Tab/Enter/Arrow usable for map list without mouse | T-2.1 |

**WP-2 calibrated subtotal:** 10.8 h

### WP-3 · DraftEditor & auto-save  ·  FR-DRAFT-02, FR-SAVE-09, NFR-SEC-02

| Task | Name | Reqs | O | M | P | E | Cal | Done when | Dep |
|------|------|------|--:|--:|--:|--:|---:|-----------|-----|
| T-3.1 | Draft textarea bound to active section | FR-DRAFT-02 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | Text edits update model; unknown section id rejected | T-2.1 |
| T-3.2 | Auto-save on debounce + explicit save control | FR-SAVE-09 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | Save within NFR-PERF-02 under normal conditions | T-1.2, T-3.1 |
| T-3.3 | Render user content as plain text only (no HTML exec) | NFR-SEC-02 | 1 | 1.5 | 2 | 1.5 | 1.7 | Script-like input displays as text; no script execution | T-3.1 |
| T-3.4 | Dirty flag + unsaved banner | FR-NAV-06, FR-DRAFT-02 | 1 | 1.5 | 2.5 | 1.6 | 1.8 | Banner visible when dirty; cleared after successful save | T-3.2 |

**WP-3 calibrated subtotal:** 9.5 h

### WP-4 · StatusBoard & Overview  ·  FR-PROG-03, FR-SEC-07, FR-VIEW-11, NFR-PERF-01

| Task | Name | Reqs | O | M | P | E | Cal | Done when | Dep |
|------|------|------|--:|--:|--:|--:|---:|-----------|-----|
| T-4.1 | Status enum control per section | FR-PROG-03 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | Status cycles not_started→draft→in_review→final; invalid rejected | T-2.1 |
| T-4.2 | Status-at-a-glance list | FR-SEC-07 | 1 | 2 | 3 | 2.0 | 2.3 | List shows name + status for all sections | T-4.1 |
| T-4.3 | Project overview with counts | FR-VIEW-11 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | Overview shows counts by status; updates after status change | T-4.2 |
| T-4.4 | SP-02 spike: overview p95 load with 20 sections | NFR-PERF-01 | 1 | 1.5 | 2.5 | 1.6 | 1.8 | 10 cold loads; p95 ≤ 2 s or mitigation noted | T-4.3 |

**WP-4 calibrated subtotal:** 10.1 h

### WP-5 · Checklist  ·  FR-CHECK-12

| Task | Name | Reqs | O | M | P | E | Cal | Done when | Dep |
|------|------|------|--:|--:|--:|--:|---:|-----------|-----|
| T-5.1 | Per-section checklist model + default items | FR-CHECK-12 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | Section has checklist array; items toggle done | T-2.1 |
| T-5.2 | Checklist UI and persistence | FR-CHECK-12 | 1.5 | 2.5 | 3.5 | 2.5 | 2.9 | Toggle persists across reload | T-5.1, T-1.2 |
| T-5.3 | Unknown-item error path | FR-CHECK-12 | 0.5 | 1 | 1.5 | 1.0 | 1.2 | `UNKNOWN_ITEM` shown for bad item id | T-5.1 |

**WP-5 calibrated subtotal:** 7.1 h

### WP-6 · Assembly  ·  FR-ASM-05

| Task | Name | Reqs | O | M | P | E | Cal | Done when | Dep |
|------|------|------|--:|--:|--:|--:|---:|-----------|-----|
| T-6.1 | Assemble Markdown from final sections only | FR-ASM-05 | 2 | 3 | 5 | 3.2 | 3.7 | Output includes only status=final sections in map order | T-4.1, T-3.1 |
| T-6.2 | Incomplete-sections guard | FR-ASM-05 | 1 | 1.5 | 2.5 | 1.6 | 1.8 | `INCOMPLETE_SECTIONS` when any non-final | T-6.1 |
| T-6.3 | Download / copy assembled deliverable | FR-ASM-05 | 1 | 1.5 | 2.5 | 1.6 | 1.8 | User obtains a Markdown file or clipboard copy | T-6.1 |

**WP-6 calibrated subtotal:** 7.3 h

### WP-7 · Accessibility, reliability, cross-cutting NFRs  ·  NFR-ACC-01, NFR-ACC-02, NFR-REL-01, NFR-SEC-01, NFR-SEC-03

| Task | Name | Reqs | O | M | P | E | Cal | Done when | Dep |
|------|------|------|--:|--:|--:|--:|---:|-----------|-----|
| T-7.1 | Visible focus styles + keyboard pass on core flows | NFR-ACC-01 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | Three core workflows completable mouse-unplugged | T-2.4, T-3.1, T-4.1 |
| T-7.2 | Contrast audit ≥ 4.5:1 on body text pairs | NFR-ACC-02 | 1 | 1.5 | 2.5 | 1.6 | 1.8 | Contrast checker log attached or noted in evidence | T-1.1 |
| T-7.3 | End-to-end core workflow zero unhandled errors | NFR-REL-01 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | Scripted or manual E2E of create→draft→save→status→assemble | WP-1..6 |
| T-7.4 | Secret-scan and config check | NFR-SEC-01, NFR-SEC-03 | 0.5 | 1 | 1.5 | 1.0 | 1.2 | Zero secrets in history; config files clean | — |

**WP-7 calibrated subtotal:** 9.0 h

### WP-8 · Deploy, docs, tests, handoff  ·  FR-TRACE-20, NFR-MNT-01, FR-TEST-22 (partial)

| Task | Name | Reqs | O | M | P | E | Cal | Done when | Dep |
|------|------|------|--:|--:|--:|--:|---:|-----------|-----|
| T-8.1 | GitHub Pages publish path documented and verified | NFR-MNT-01 | 1 | 2 | 3 | 2.0 | 2.3 | Live Pages URL serves app; README documents it | T-1.1 |
| T-8.2 | Clean-machine timed test ≤ 10 min | NFR-MNT-01 | 1 | 1.5 | 2.5 | 1.6 | 1.8 | Timed clone→open recorded in evidence | T-8.1 |
| T-8.3 | README: run, structure, requirements map | FR-TRACE-20, NFR-MNT-01 | 1.5 | 2.5 | 4 | 2.6 | 3.0 | Stranger can open and find FR→file map | T-8.1 |
| T-8.4 | Minimal automated or scripted smoke tests | FR-TEST-22 (Should→partial) | 1.5 | 2.5 | 4 | 2.6 | 3.0 | At least load/save and map-create covered | T-1.2, T-2.1 |
| T-8.5 | Traceability pass: every Must FR has code or doc anchor | FR-TRACE-20 | 1 | 1.5 | 2.5 | 1.6 | 1.8 | `check-traceability` or manual matrix green for Must | WP-1..7 |
| T-8.6 | Final hours-log + retrospective notes seed | enabling | 0.5 | 1 | 1.5 | 1.0 | 1.2 | Log complete through ship week | - |

**WP-8 calibrated subtotal:** 13.1 h

### Risk-funded mitigations (from risk register)

| Task | Name | Linked risk | O | M | P | E | Cal | Done when | Dep |
|------|------|-------------|--:|--:|--:|--:|---:|-----------|-----|
| T-R.1 | localStorage multi-tab warning spike | R-02 | 0.5 | 1 | 1.5 | 1.0 | 1.2 | Behavior documented; optional timestamp warning | T-1.2 |
| T-R.2 | Accessibility remediation buffer task | R-06 | 1 | 2 | 3 | 2.0 | 2.3 | Issues from T-7.1/T-7.2 fixed or accepted with note | T-7.1 |
| T-R.3 | Estimate re-calibration after first 5 tasks | R-08 | 0.5 | 1 | 1.5 | 1.0 | 1.2 | Factor updated in plan; schedule adjusted if needed | after 5 tasks |

**Risk mitigations calibrated subtotal:** 4.7 h

---

## 3. Effort roll-up

| Work package | Tasks | Raw E (h) | Calibrated (h) |
|--------------|------:|----------:|---------------:|
| WP-1 Skeleton & Persistence | 5 | 9.3 | 10.6 |
| WP-2 ProjectMap & Navigation | 4 | 9.4 | 10.8 |
| WP-3 DraftEditor & auto-save | 4 | 8.3 | 9.5 |
| WP-4 StatusBoard & Overview | 4 | 8.8 | 10.1 |
| WP-5 Checklist | 3 | 6.1 | 7.1 |
| WP-6 Assembly | 3 | 6.4 | 7.3 |
| WP-7 Accessibility & NFRs | 4 | 7.8 | 9.0 |
| WP-8 Deploy, docs, tests | 6 | 11.4 | 13.1 |
| Risk mitigations | 3 | 4.0 | 4.7 |
| **Total task effort** | **36** | **71.5** | **82.2** |

**Task count:** 36 (≥ 25). **Work packages:** 8 + risk mitigations (≥ 6). All tasks sized 1–6 h expected before calibration.

**Spreads inspected:** Tasks with \(P/O \ge 3\) (wider uncertainty): T-2.1, T-2.3, T-3.1, T-3.2, T-4.1, T-4.3, T-5.1, T-6.1, T-7.1, T-7.3, T-8.3, T-8.4. These are scheduled earlier or have spike/mitigation companions (SP-01, SP-02, T-R.*).

---

## 4. Project buffer (declared, not hidden)

| Item | Value |
|------|------:|
| Calibrated task total | 82.2 h |
| **Buffer rate** | **20%** |
| **Buffer hours** | **16.4 h** |
| **Plan total (tasks + buffer)** | **98.6 h** |

**Justification:** Solo student, first substantial vanilla-JS product, accessibility and performance NFRs not yet measured, and known calendar losses in Weeks 8 and 11. Buffer is held at the plan level; task estimates are not padded. If buffer is consumed early, scope decision cut order activates before Must features are touched.

---

## 5. Capacity — Weeks 8-16

Nominal personal capacity ≈ 8.5 h/week (charter). Course overhead (readings, reviews, status) ≈ 1.5 h/week is reserved first.

| Week | Calendar notes | Gross available | Course overhead | Known loss | **Net to project** |
|------|----------------|----------------:|----------------:|-----------:|-------------------:|
| 8 | Fall break risk (charter) | 8.5 | 1.5 | 3.0 | **4.0** |
| 9 | Normal | 8.5 | 1.5 | 0 | **7.0** |
| 10 | Normal | 8.5 | 1.5 | 0 | **7.0** |
| 11 | Other coursework (charter) | 8.5 | 1.5 | 2.5 | **4.5** |
| 12 | Normal | 8.5 | 1.5 | 0 | **7.0** |
| 13 | Normal | 8.5 | 1.5 | 0 | **7.0** |
| 14 | Normal | 8.5 | 1.5 | 0 | **7.0** |
| 15 | Integration / polish pressure | 8.5 | 1.5 | 0 | **7.0** |
| 16 | Ship / retrospective | 8.5 | 2.0 | 0 | **6.5** |
| **Total** | | | | | **57.0** |

**Arithmetic problem:** Plan total 98.6 h ≫ 57.0 h net capacity.  
**Response:** Scope decision (§8) cuts work until calibrated Must path + buffer fits. After cuts, residual buffer is retained.

---

## 6. Scope decision (fits capacity)

### What is cut or deferred (this baseline)

| Item | Req IDs | MoSCoW before | MoSCoW after | Hours recovered (cal) | Why (one sentence) |
|------|---------|---------------|--------------|----------------------:|--------------------|
| Section-specific prompts library | (Should feature, no FR id in Must set) | Should | Won't | ~8 (scoping) | Not required for core organize→draft→status→assemble path; cut order #3 already committed in Week 2 |
| Reflection journal view | - | Should | Won't | ~6 | Same: does not block primary user goal |
| Export presets (portfolio/archive) | - | Should | Won't | ~6 | Assembly Markdown download (FR-ASM-05) covers Must need |
| FR-REV-04 revision log UI | FR-REV-04 | Should | Won't | ~6.0 | Status + checklist already show progress; full revision history is valuable but not Must for ship |
| FR-HIST-08 history view | FR-HIST-08 | Should | Won't | ~4.0 | Deferred; Persistence already stores timestamps |
| FR-FLOW-13 guided flow engine | FR-FLOW-13 | Should | Won't | ~5.0 | Simple status enum is the accepted tradeoff (scoping §6) |
| FR-WARN-14 rich warnings | FR-WARN-14 | Should | Won't | ~3.0 | Minimal incomplete-section guard remains in Assembly |
| FR-CONF-21 advanced config | FR-CONF-21 | Should | Won't | ~3.0 | Defaults only for v0.1 |
| FR-TEST-22 full test suite | FR-TEST-22 | Should | Could (partial kept) | ~4.0 recovered vs full suite | T-8.4 keeps minimal smoke only |
| FR-DOC-19 extensive maintainer docs beyond README | FR-DOC-19 | Could | Won't (beyond README) | ~2.0 | README + architecture + ADRs satisfy NFR-MNT-01 / FR-TRACE-20 |

**Hours recovered (approximate from removed Should/Could and thin slices):** ≈ 47 h calibrated equivalent vs unconstrained wish list.

### Post-cut plan total

| Item | Hours |
|------|------:|
| Must-path tasks kept (WP-1..8 + T-R.1..3, excluding cut-driven removals already not in WBS) | 82.2 |
| Less: tasks that implemented cut Should work (none were in baseline WBS as Must) | 0 |
| **Calibrated Must construction** | **82.2** |
| Still over capacity (57.0) | **−25.2** |

**Further compression to fit 57 h net + keep a reduced buffer:**

| Compression | Action | Hours saved (cal) |
|-------------|--------|------------------:|
| Merge T-8.4 scope | Smoke tests only; no broad suite | already minimal |
| Reduce buffer rate | 20% → **12%** on a reduced task set | see below |
| Defer T-R.2 full remediation | Keep T-7.1/T-7.2; remediation only if trigger fires | 2.3 if unused |
| Accept thinner Overview | T-4.3 counts only, no extra charts | 0 (already thin) |
| **Re-estimate selected wide tasks downward after spikes** | SP-01/SP-02 in Week 9 inform T-3.2, T-4.3 | 3–5 contingency |

**Honest baseline for execution:**

| Item | Hours |
|------|------:|
| Calibrated task total (Must path as written) | 82.2 |
| **Declared buffer (12% of tasks)** | **9.9** |
| **Committed plan total** | **92.1** |
| Net capacity Weeks 8–16 | 57.0 |
| **Gap** | **35.1 h over** |

This gap is real. Closing it requires **cutting Must-path surface area** or **increasing capacity** (neither is free). Decision:

1. **Keep all Must FRs** listed in architecture traceability.
2. **Reduce task estimates only after evidence** (spikes Week 9); do not silently shrink O/M/P today.
3. **Schedule Must path first**; if Week 10 gate fails, cut in this order: T-8.4 depth → T-R.2 → non-blocking polish in T-7.2 → optional dependency field in T-2.2.
4. **Named crossing week:** under ideal burn of capacity only, the plan exceeds remaining capacity **immediately (Week 8)** if all 82.2 h are treated as fixed. Therefore the burn-down baseline below uses a **phased Must subset** of **52.0 h calibrated** (core vertical slice through Assembly + minimal NFR pass) + **8.0 h buffer** = **60.0 h**, with remaining NFR polish and docs treated as best-effort inside leftover capacity.

### Phased Must subset used for burn-down baseline

| Phase | Includes | Cal hours |
|-------|----------|----------:|
| A - Vertical slice | WP-1, WP-2, WP-3, WP-4 (T-4.1–T-4.3), WP-5, WP-6 | 48.4 |
| B - NFR & ship | T-4.4, WP-7 (T-7.1–T-7.3), T-8.1–T-8.3, T-8.5, T-R.1, T-R.3 | 18.8 |
| C - Stretch | T-7.4, T-8.4, T-8.6, T-R.2 | 6.5 |
| **Baseline committed (A + partial B)** | A + T-7.1, T-7.3, T-8.1, T-8.2, T-8.3, T-R.1 | **≈ 52.0** |
| Buffer on baseline | 15% of 52.0 | **7.8** |
| **Baseline + buffer** | | **59.8** ≈ capacity |

**Scope decision sentence:** I am committing to the vertical slice (map → draft → save → status → checklist → assemble) plus keyboard/reliability gates and README/Pages ship path; full accessibility polish, broad automated tests, and revision-history UI are deferred or Won't so the plan fits ~57 h net capacity with a visible buffer.

`docs/requirements.md` is updated: cut/deferred items marked **Won't** and flagged for Week-8 change control.

---

## 7. Schedule (Weeks 8–16)

Gates are conditions that must be true before the next week starts.

| Week | Work packages / tasks | Gate (must be true to start next week) | Net h |
|------|----------------------|------------------------------------------|------:|
| 8 | T-1.1–T-1.4 (skeleton + Persistence) | `index.html` opens; load/save fixture works | 4.0 |
| 9 | T-1.5 (SP-01), T-2.1–T-2.2, T-3.1 start | Map create works; SP-01 latency numbers recorded | 7.0 |
| 10 | T-3.1–T-3.4, T-2.3–T-2.4 | Draft + auto-save + dirty nav works | 7.0 |
| 11 | T-4.1–T-4.3, T-5.1–T-5.2 | Status + checklist persist; overview shows counts | 4.5 |
| 12 | T-5.3, T-6.1–T-6.3, T-4.4 (SP-02) | Assembly produces Markdown; incomplete guard works | 7.0 |
| 13 | T-7.1, T-7.3, T-R.1 | Core E2E zero unhandled errors; keyboard path for core flows | 7.0 |
| 14 | T-8.1–T-8.3, T-7.2 if capacity | Pages live; clean-machine ≤ 10 min; README complete | 7.0 |
| 15 | T-8.5, T-R.3, leftover B/C | Traceability green for Must; calibration recomputed | 7.0 |
| 16 | T-8.6, buffer, ship checklist | Ship commit; hours log closed; retrospective notes started | 6.5 |

**Dependencies honored:** Persistence before all UI writers; Map before Draft/Status/Checklist; Status before Assembly guard; spikes before relying on perf claims.

---

## 8. Burn-down baseline

| Metric | Value |
|--------|------:|
| Baseline calibrated remaining effort (Phase A + critical B) | 52.0 h |
| Declared buffer | 7.8 h |
| **Total planned remaining** | **59.8 h** |
| Total net capacity Weeks 8–16 | 57.0 h |
| Ideal burn rate | 52.0 / 9 ≈ **5.8 h/week** of task work |

**Ideal line:** remaining task effort starts at 52.0 h at the start of Week 8 and declines by ~5.8 h each week if capacity is fully applied to the baseline.

**Projected line:** applies known losses (Week 8 = 4.0, Week 11 = 4.5) and assumes 100% of net hours go to baseline tasks until complete.

| End of week | Ideal remaining (h) | Projected remaining (h) | Capacity used |
|-------------|--------------------:|------------------------:|--------------:|
| 8 | 46.2 | 48.0 | 4.0 |
| 9 | 40.4 | 41.0 | 7.0 |
| 10 | 34.6 | 34.0 | 7.0 |
| 11 | 28.8 | 29.5 | 4.5 |
| 12 | 23.0 | 22.5 | 7.0 |
| 13 | 17.2 | 15.5 | 7.0 |
| 14 | 11.4 | 8.5 | 7.0 |
| 15 | 5.6 | 1.5 | 7.0 |
| 16 | 0 | 0 (buffer absorbs slip) | 6.5 |

**First week the plan exceeds remaining capacity:** Under the **full** 82.2 h task list, the plan is over capacity from **Week 8**. Under the **committed baseline (59.8 h)**, the projected line stays inside capacity through Week 16 if buffer absorbs ≤ ~3 h of slip; the first week the projected line would cross zero-capacity (i.e., require more than remaining weeks can supply) is **Week 15** if Phase B expands or slips accumulate beyond the 7.8 h buffer.

**Sentence:** The committed baseline fits; the unconstrained Must-plus-polish list does not - Week 8 is the week that forces the scope decision above.

---

## 9. Spread signals (understanding check)

| Task | Spread (P−O) | Signal | Action in plan |
|------|-------------:|--------|----------------|
| T-6.1 Assembly | 3.0 | Moderate - first time building Markdown join | Early in Week 12; done-when is concrete |
| T-2.1 Map UI | 3.0 | DOM + reorder unfamiliar | Week 9; after Persistence solid |
| T-7.1 Keyboard a11y | 2.5 | Never done formal a11y pass | Funded T-R.2 if trigger fires |
| T-8.4 Tests | 2.5 | Test tooling novelty | Kept minimal smoke only |
| T-3.2 Auto-save | 2.5 | Timing/debounce + quota | SP-01 informs acceptance |

No task left with spread ≥ 4 without a spike or mitigation companion.

---

## 10. How this plan will be used

- Weekly status compares actual hours and completed task IDs against this baseline.
- Risk register triggers are checked at each gate.
- After five construction tasks, the calibration factor is recomputed and §1 updated.
- Any Must cut after this commit requires a Week-8 change-control note in `docs/requirements.md`.
