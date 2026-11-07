[quality-memo.md](https://github.com/user-attachments/files/34529430/quality-memo.md)
# Quality Judgment Memo — Milestone 11

**To:** Engineer inheriting Content Creation Project  
**From:** Reggie Johnson  
**Date:** 2026-11-07  

## 1. Exit criteria — why these numbers

**E1 (100% suite pass)** protects against shipping a red build. A failing unit test on `INVALID_STATUS` is cheaper than a confused demo.

**E2 (verified-Must coverage)** is about requirements, not lines. I set a high bar (≥85%) for *implemented* Must behavior. Counting unimplemented ASM/CHECK as “verified” would be fraud. Against *all* Must rows the number is 77.8%; against the Iteration 1 implemented set, acceptance tests are green. I am not inflating E2 by deleting gap rows.

**E3 (zero open S1)** means no ship-stoppers. We met it.

**E4 (≤2 open S2)** is the uncomfortable one. I have **three** open S2s: partial NAV-06, missing CHECK-12, missing ASM-05. I **missed E4 on purpose rather than relabel severity**. Those are real Must gaps. Softening E4 on Saturday so the memo looks clean would train the wrong habit.

**E5 (regression names on fixes)** is non-negotiable for Fixed rows; without a red-then-green story the fix is folklore.

## 2. What ships with known defects

| Defect | Sev | Pri | Workaround | Who is affected and why I accept it this semester |
|--------|-----|-----|------------|---------------------------------------------------|
| DEF-005 caret jump | S3 | P2 | Pause typing; or edit offline | Solo author — friction, not data loss |
| DEF-006 NAV force | S2 | P2 | Save before switching sections | Same user; banner warns; full force path Week 12 |
| DEF-007 checklist | S2 | P3 | Manual notes outside app | Author tracking completeness by status field instead |
| DEF-008 assemble | S2 | P3 | Export copy-paste by hand | Final markdown assembly is Week 12 scope in plan.md |

I am not pretending these are “features coming soon” without owners. They sit on the board with weeks attached.

## 3. What I chose not to test — and the cost

**Browser driver acceptance.** Cost: a CSS-only regression or click-handler bug could escape. Successor should add one Playwright (or equivalent) path for add-section → save → reload.

**Multi-tab localStorage.** Cost: last-write-wins corruption if two tabs edit. Failure mode: silent overwrite. Successor test: two MemoryAdapter instances is insufficient; needs real browser.

These are the two bets I am least comfortable with.

## 4. Assistant review burden

From this week’s generation pass: of **ten** proposed cases, **three** asserted the wrong thing (two expected UI strings that do not exist; one treated whitespace name as valid). Error rate ~30%. At that rate I am **not** allowed to bulk-accept generated tests. Fastest safe pace: read every assertion, run it once red if it claims a defect, then keep. Recorded in `docs/ai-usage.md`.

## Closing

Verified-requirement coverage is **70%**. That is an honest first measurement, not a target I reverse-engineered from the build. FR-ASM-05 and FR-CHECK-12 remain gaps with defects and scheduled weeks. E4 is missed. The suite is green for what exists.
