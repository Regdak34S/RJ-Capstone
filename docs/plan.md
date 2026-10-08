# Work Breakdown, Schedule & Burn-Down 

Copy this into your repository as `docs/plan.md`. Replace every angle-bracket placeholder.
Keep the section order; a reviewer reads it top to bottom.

---

## 1. Rules this plan obeys

- **The 100 percent rule.** The children of any node sum to *all* of that node's work — no more, no less.
  If it is not in the WBS, it is not in the plan, and it will not get done.
- **Task size: 1–6 hours.** Under one hour is noise. Over six hours means you do not yet understand it —
  split it, or write a spike for it.
- **Every task traces.** A task carries a requirement identifier from `docs/requirements.md`, or it is
  enabling work (`-`) and the plan says why it exists.
- **Every task has a done-when.** One sentence, verifiable by somebody who is not you.

## 2. Capacity — Weeks <N>–16

| Week | Chapter, quiz, reps, milestone write-up | Available for this plan |
|---|---:|---:|
| <8> | <11> | <4> |
| … | … | … |
| **Total** | **<48>** | **<87>** |

Declared project buffer: **<25>%** of available hours = **<21.8> h**
Plannable effort (available − buffer) = **<65.2> h**

## 3. Work breakdown

### WP-<n> — <work package name>  ·  requirements <FR-0xx, FR-0yy>  ·  owner: me

| Task | Name | Reqs | O | M | P | E | Done when | Depends on |
|---|---|---|---:|---:|---:|---:|---|---|
| T-<n>.1 | <task> | FR-0xx | 2 | 3 | 6 | 3.3 | <verifiable condition> | — |
| T-<n>.2 | <task> | FR-0yy | 1 | 2 | 4 | 2.2 | <verifiable condition> | T-<n>.1 |

`E = (O + 4M + P) / 6`  ·  spread `P / O` over 4 means: spike it or split it.

Repeat one block per work package. Then total every package into the roll-up below.

## 4. Roll-up

| Work package | Tasks | Raw E (h) | Calibrated (h) |
|---|---:|---:|---:|
| WP-0 <enabling> | <2> | <5.3> | <6.1> |
| … | | | |
| **Total** | | **<86.2>** | **<97.9>** |

Calibration factor from `docs/hours-log.csv`: **<1.14>×**
(actual hours ÷ expected hours over the tasks you have already finished)

## 5. Schedule

| Week | Work packages in flight | Planned hours | Gate / dependency |
|---|---|---:|---|
| <9> | <WP-0, WP-2> | <12> | <CI green before any feature merges> |

Rules: risky work first, integration before Week 12, nothing new starts after Week 14.

## 6. Burn-down baseline

| Week | Capacity | Ideal remaining | Projected remaining |
|---|---:|---:|---:|
| <8> | <4.0> | <65.2> | <97.9> |

First week the plan exceeds remaining capacity: **<week 8>**
Hours over plannable: **<32.7>**

## 7. The scope decision

| Cut / deferred / re-estimated | Item | Reqs | Hours recovered | MoSCoW before → after | Why |
|---|---|---|---:|---|---|
| cut | <WP-5 recipe suggestion> | <FR-031, FR-032> | <12.9> | Could → Won't | <one honest sentence> |

Signed: <your name>, <date>. Re-baselined after any change of more than <5> hours.
