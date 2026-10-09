# Risk Register - Content Creation Project

**Author:** Reginald Johnson  
**Date:** 2026-10-09  
**Baseline paired with:** `docs/plan.md`  
**Owner of all risks (role):** Student Architect / sole engineer

Format for each risk: **cause → uncertain event → consequence**.  
Scoring: Likelihood 1–5, Impact in hours (expected extra cost if the risk fires), Exposure = L × I (hours).  
Sorted by exposure descending.

Every response that spends hours appears as a funded task in `docs/plan.md` (T-R.* or scheduled spikes).

---

## Summary table

| ID | Short name | Category | L | I (h) | Exposure | Trigger (observable) |
|----|------------|----------|--:|------:|---------:|----------------------|
| R-01 | JS/DOM learning curve | technical/novelty | 4 | 12 | 48 | Two consecutive tasks exceed P by >50% logged hours |
| R-02 | localStorage multi-tab / quota | technical | 3 | 8 | 24 | QuotaExceededError or silent overwrite observed in testing |
| R-03 | Fall break / Week 8 capacity loss | schedule/personal | 4 | 6 | 24 | Week 8 log shows < 3 h project time by Wednesday |
| R-04 | Accessibility NFRs take longer | technical | 3 | 10 | 30 | T-7.1 exceeds 4 logged hours without keyboard path complete |
| R-05 | Performance NFR fail on 20 sections | technical | 2 | 8 | 16 | SP-01 or SP-02 fails threshold after one remediation attempt |
| R-06 | Scope creep from Should features | scope | 3 | 10 | 30 | Any Should/Could task started before all Phase A Must tasks are done |
| R-07 | GitHub Pages / clean-machine fail | dependency | 2 | 6 | 12 | Pages deploy fails twice or clean-machine test > 15 min |
| R-08 | Estimates systematically low | schedule/personal | 4 | 10 | 40 | After 5 construction tasks, sum(actual) / sum(E) > 1.3 |

---

## R-01 — JS/DOM learning curve

**Statement:** Because I listed JavaScript as a technology I am still learning (charter), tasks that require non-trivial DOM state ownership (map reorder, dirty navigation, overview aggregation) may take substantially longer than the three-point estimates → those tasks overrun → Weeks 10–12 slip and buffer is consumed early.

- **Category:** technical / novelty  
- **Likelihood:** 4  
- **Impact:** 12 h  
- **Exposure:** 48  
- **Trigger:** Two consecutive tasks in WP-2 or WP-3 log > 1.5× their P hours without a done-when met.  
- **Owner:** Student Architect  
- **Response:** Mitigate — stop the third task; spend ≤ 2 h reading/writing a minimal spike for the stuck pattern; if still blocked, descope optional dependency edges (T-2.2) and keep the linear section list only.  
- **Funded work:** absorbed in task spreads; descope path recorded in plan scope decision.

---

## R-02 — localStorage multi-tab overwrite or quota

**Statement:** Because the Persistence design uses a single localStorage key with last-write-wins, concurrent tabs or a large draft may throw QuotaExceededError or silently lose data → user loses work → NFR-REL-02 / NFR-PRIV-01 confidence drops and emergency export work displaces feature tasks.

- **Category:** technical  
- **Likelihood:** 3  
- **Impact:** 8 h  
- **Exposure:** 24  
- **Trigger:** QuotaExceededError in console during SP-01 or manual test, or two tabs show divergent section text after save.  
- **Owner:** Student Architect  
- **Response:** Mitigate — implement T-R.1 (timestamp warning + documented limitation); ensure export JSON path (T-1.4) works before heavy drafting. If quota is chronic on the 8 GB machine profile, reduce fixture size and document limit.  
- **Funded work:** T-R.1, T-1.3, T-1.4 in plan.

---

## R-03 — Week 8 capacity loss (fall break)

**Statement:** Because charter already flags Week 8 as disrupted by fall break, available project hours may fall below the 4.0 h net already planned → Persistence skeleton slips → every dependent WP starts late.

- **Category:** schedule / personal  
- **Likelihood:** 4  
- **Impact:** 6 h  
- **Exposure:** 24  
- **Trigger:** By Wednesday of Week 8, hours-log shows < 3.0 h on T-1.* tasks.  
- **Owner:** Student Architect  
- **Response:** Accept reduced Week 8 output; move T-1.5 (SP-01) to Monday Week 9; do not start WP-2 until T-1.2 done-when is true. Do not "work harder" by inventing hours that do not exist — slip the gate.  
- **Funded work:** capacity table already reduced Week 8 to 4.0 h.

---

## R-04 — Accessibility pass exceeds estimate

**Statement:** Because I have not previously delivered a formal keyboard-only + contrast audit on a multi-view UI, T-7.1 and T-7.2 may overrun → polish week compresses → NFR-ACC-01/02 remain open at ship.

- **Category:** technical  
- **Likelihood:** 3  
- **Impact:** 10 h  
- **Exposure:** 30  
- **Trigger:** T-7.1 exceeds 4 logged hours without the three core workflows completable without a mouse.  
- **Owner:** Student Architect  
- **Response:** Mitigate — run T-R.2 remediation buffer; if still open after T-R.2, document residual gaps as known limitations and keep Must functional path shippable (partial ACC credit with evidence of attempt).  
- **Funded work:** T-7.1, T-7.2, T-R.2.

---

## R-05 — Performance NFR failure

**Statement:** Because overview rendering and save latency are not yet measured on a 20-section fixture, SP-01 or SP-02 may fail NFR-PERF-01/02 → remediation coding displaces Assembly or deploy work in Weeks 12–14.

- **Category:** technical  
- **Likelihood:** 2  
- **Impact:** 8 h  
- **Exposure:** 16  
- **Trigger:** After one remediation attempt, p95 overview load > 2 s or save > 1 s on the standard fixture.  
- **Owner:** Student Architect  
- **Response:** Mitigate — profile; simplify Overview to counts-only (already planned); if still failing, request NFR threshold review at Week-8/10 change control rather than infinite optimization.  
- **Funded work:** T-1.5 (SP-01), T-4.4 (SP-02).

---

## R-06 — Scope creep from Should features

**Statement:** Because Should items (revision log, prompts, journal, export presets) remain attractive and partially described in earlier docs, I may start them before Phase A is done → Must path misses gates → plan burns buffer on non-Must work.

- **Category:** scope  
- **Likelihood:** 3  
- **Impact:** 10 h  
- **Exposure:** 30  
- **Trigger:** Any commit or hours-log row whose task ID is not in the Phase A/B baseline before T-6.3 is done.  
- **Owner:** Student Architect  
- **Response:** Avoid — refuse the work; re-read scope decision §6 in plan.md; if a Should item is truly needed, open formal change control and cut an equal Must-adjacent polish item first.  
- **Funded work:** none (prevention); cuts already recorded in requirements.md as Won't.

---

## R-07 — GitHub Pages or clean-machine path fails

**Statement:** Because the deploy and maintainer path are late in the schedule, a Pages configuration mistake or README gap may surface only in Week 14 → NFR-MNT-01 fails timed test → scramble displaces verification.

- **Category:** dependency  
- **Likelihood:** 2  
- **Impact:** 6 h  
- **Exposure:** 12  
- **Trigger:** First Pages deploy attempt fails twice, or clean-machine timed test exceeds 15 minutes.  
- **Owner:** Student Architect  
- **Response:** Mitigate — attempt a dry-run Pages publish at the end of Week 12 (after vertical slice); fix README immediately; fallback is local `file://` or simple static server documented as acceptable for demo if Pages remains blocked.  
- **Funded work:** T-8.1, T-8.2; early dry-run is part of Week 12 gate flexibility.

---

## R-08 — Systematic underestimation

**Statement:** Because charter risk R3 acknowledges estimation difficulty and calibration is currently based on zero construction tasks, actual hours may run ≥ 30% over expected values → cumulative slip exceeds buffer by Week 13.

- **Category:** schedule / personal  
- **Likelihood:** 4  
- **Impact:** 10 h  
- **Exposure:** 40  
- **Trigger:** After any five completed construction tasks, \(\sum actual / \sum E > 1.3\).  
- **Owner:** Student Architect  
- **Response:** Mitigate — execute T-R.3 (recompute calibration factor, update plan.md); if factor ≥ 1.3, immediately apply cut order: reduce T-8.4 depth, drop T-R.2 if unused, thin T-2.2, and freeze all Should work.  
- **Funded work:** T-R.3 scheduled Week 15 (or earlier when trigger fires).

---

## Category coverage

| Category | Risk IDs |
|----------|----------|
| technical / novelty | R-01, R-02, R-04, R-05 |
| schedule / personal | R-03, R-08 |
| scope | R-06 |
| dependency | R-07 |

At least two risks differ in category from the technical majority (R-03, R-06, R-07, R-08).

---

## Review cadence

- Check triggers at each weekly gate (plan.md §7).  
- Update exposure if likelihood changes after spikes.  
- New risks discovered in construction are appended with the same fields; they do not erase this baseline.
