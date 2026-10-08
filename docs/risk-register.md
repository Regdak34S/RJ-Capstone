# Risk Register

Copy this into your repository as `docs/risk-register.md`. Review it every Monday.
A register you write once is a document. A register you review weekly is a control.

---

## Scales (use these exact ones so your numbers mean something week to week)

**Likelihood** — 1 rare · 2 unlikely · 3 even odds · 4 likely · 5 near certain, before you do anything about it.

**Impact** — score in *hours you would lose*, not in feelings:
1 = under 2 h · 2 = 2–5 h · 3 = 5–12 h · 4 = 12–25 h · 5 = over 25 h, or the project cannot ship.

**Exposure** = Likelihood × Impact. Order the register by exposure, descending. Work the top five.

**Response** — one of: **avoid** (change the plan so it cannot happen) · **mitigate** (reduce likelihood or
impact) · **transfer** (make it somebody else's problem — a managed service, a library) · **accept**
(name it, write the contingency, move on).

## The row format

| Field | What goes in it |
|---|---|
| ID | `R-01`, stable forever, never reused |
| Risk | **cause → uncertain event → consequence**, in one sentence |
| Category | technical · dependency · scope · schedule/personal · data/legal |
| L / I / E | likelihood, impact, exposure |
| Trigger | the *observable* thing that says it is happening — a number, a date, a log line |
| Owner | you, by name; a risk with no owner is a wish |
| Response | avoid / mitigate / transfer / accept + the concrete action, with a due week |
| Contingency | what you do if it happens anyway |
| Status | open · retired · **became an issue on <date>** |

---

## Worked rows (running example: PantryPilot)

**R-01** — Because the barcode lookup service is a free third-party API whose rate limit I have not
confirmed, calls may start failing during Week 12 integration testing, and FR-021 could not be
demonstrated in the Week-16 demo.
· technical/dependency · L 3 · I 4 · **E 12**
· **Trigger:** two consecutive days where my daily call count exceeds 60% of the documented cap, *or* any
`429` response in the logs.
· **Owner:** me. · **Response:** mitigate by Week 10 — cache every lookup by barcode locally (T-4.2) and
commit a fixture file of 50 known products so the demo never touches the network.
· **Contingency:** manual entry (FR-022) is already specified and already in the plan.
· **Status:** open. Reviewed weekly.

**R-02** — Because I have never deployed to this host, the Week-14 deployment may take far longer than the
3.7 hours estimated, eating the documentation time in the same week.
· technical/novelty · L 4 · I 3 · **E 12**
· **Trigger:** the Week-9 hello-world deploy (T-0.2) took more than 3 h. *(It took 3.0. Watch it.)*
· **Owner:** me. · **Response:** avoid — deploy the walking skeleton in Week 9, not Week 14, so the
unknown is retired eight weeks early.
· **Contingency:** fall back to the host I used in a previous course; the ADR names it as the alternative.
· **Status:** open.

**R-03** — Because two other courses have projects due in Week 12, my available hours that week may drop
from 12 to 5, pushing the integration work package past its gate.
· schedule/personal · L 4 · I 3 · **E 12**
· **Trigger:** the Week-11 hours log shows fewer than 9 hours logged.
· **Owner:** me. · **Response:** mitigate — move 4 hours of WP-4 forward into Week 10, where the plan has
slack, and book the Week-12 hours on the calendar now.
· **Contingency:** spend project buffer, and record the draw in `docs/plan.md`.
· **Status:** open.

---

## The bad version, for contrast

> **R-04** — The project might not get finished on time. Likelihood: high. Impact: high. Mitigation: work harder.

Everything is wrong here. There is no cause and no specific event, so nobody can tell what would make it
true. There is no trigger, so it can never be detected — it can only be discovered, in Week 15, as a
catastrophe. "Work harder" is not a response; it names no action, no week, and no cost. And there is no
contingency, which means the plan has no answer if it happens. A row like this is not risk management.
It is anxiety, written down.
