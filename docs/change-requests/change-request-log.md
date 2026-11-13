# Change Request Template — one file per request, plus worked examples

Copy the template below into `docs/change-requests/` as `CR-0NN-<short-slug>.md` — **one file per
request**, exactly the way you copied `CR-000-template.md` into that folder in Week 8, and exactly
the way `docs/adr/` holds one file per decision. Then add **one row** to the change table at the top
of `CHANGELOG.md`, so eight weeks of decisions read in a single screen and each row points at the
file that holds the analysis.

A request with no file did not happen. That is the whole point of one decision, one document.

This is the same change-request form you set up in Week 8, with the impact assessment written the way
Chapter 12 teaches it — three lines instead of a table. Either shape is fine. What every file must
carry is a cost, a blast radius, a risk line that runs in both directions, a disposition, a decider,
and a date.

## The three-line impact analysis

Every request gets exactly three lines before you decide. Not a paragraph. Three lines.

1. **Cost** — build hours + test hours + doc hours, against the hours you have left.
2. **Blast radius** — which requirement IDs, modules, interfaces, tests, and documents change.
3. **Risk** — what accepting endangers, and what refusing gives up.

Then a **disposition**: `ACCEPT` (into this release), `DEFER` (into the backlog, with where it went),
or `REJECT` (out of scope, with the reason a stranger would accept).

## Template — copy this into a new file

```
# CR-0NN — <one-line title>

| Field | Value |
|---|---|
| Raised by | advisor / user / self / dependency / defect triage |
| Date raised | YYYY-MM-DD |
| Baseline affected | spec-baseline-v1.0 |
| Request | <what is actually being asked, in the requester's words> |

## Impact analysis

- **Cost:** <build h> + <test h> + <doc h> = <total h>; <hours remaining> remain
- **Blast radius:** <FR / NFR IDs>; <modules>; <interfaces>; <tests>; <docs>
- **Risk:** accept -> <what it endangers>; refuse -> <what is lost>

## Decision

| Field | Value |
|---|---|
| Disposition | ACCEPT / DEFER -> <where, sized> / REJECT |
| Decided by | <you>, YYYY-MM-DD |
| Rationale | required in writing, even when you approve your own request |

## Applied

- [ ] Requirements specification updated; anything cut marked `Deferred`, not deleted
- [ ] Traceability matrix updated
- [ ] Plan and hours re-baselined
- [ ] Row added to the change table at the top of `CHANGELOG.md`
- [ ] Traces recorded: <issue #, commit, CHANGELOG entry>
```

---

## Worked example — GOOD (PantryPilot, the running example)

Saved as `docs/change-requests/CR-014-shared-shopping-list.md`:

```
# CR-014 — Advisor asks for a shared household shopping list

| Field | Value |
|---|---|
| Raised by | advisor, Week 12 check-in |
| Date raised | 2026-11-04 |
| Baseline affected | spec-baseline-v1.0 |
| Request | "It would be great if roommates could see one combined shopping list." |

## Impact analysis

- **Cost:** 9 build + 4 test + 1 doc = 14 h; 38 h remain before the Week-14 freeze
- **Blast radius:** new FR; Pantry, Household, and Auth modules; one new endpoint and one
  new table with a migration; invalidates 6 existing integration tests; changes
  docs/architecture.md and README.md
- **Risk:** accept -> 14 of 38 remaining hours go to a feature with no acceptance criteria,
  and the deploy/handoff work in Weeks 13-14 loses its buffer; refuse -> the demo shows
  single-user lists only, which is what FR-09 promised

## Decision

| Field | Value |
|---|---|
| Disposition | DEFER -> docs/backlog.md as B-07, "post-handoff, ~14 h, needs acceptance criteria first" |
| Decided by | M. Ruiz, 2026-11-04 |
| Rationale | The idea is good and the hours are not there. Deferring keeps it findable and sized. |

## Applied

- [x] Requirements specification unchanged; nothing was in scope to cut
- [x] Backlog entry B-07 written with the estimate and the missing acceptance criteria
- [x] Row added to the change table at the top of CHANGELOG.md
- [x] Traces: issue #61 (closed as deferred), noted in the Week-12 status memo
```

And the single row it puts in the change table at the top of `CHANGELOG.md`:

```
| CR-014 | 2026-11-04 | Shared household shopping list | new FR (never raised) | +14.0 | deferred — backlog B-07 |
```

Why the file is good: the cost is decomposed and compared against a real remaining-hours number, the
blast radius names identifiers and documents rather than gesturing at "the backend," the risk line
is honest in **both** directions, and the deferral has a destination and an estimate. The advisor
can read this and disagree with the *decision* without disputing the *facts*.

## Worked example — BAD (the same request)

```
# CR-014 — shopping list

Advisor suggested a shared shopping list. Shouldn't be too bad. Will try to get to it.
```

What is wrong, line by line:

| Problem | What it costs you |
|---|---|
| No cost estimate | You cannot tell whether it fits; you will find out in Week 15 |
| "Shouldn't be too bad" | A feeling, not an analysis; every over-run starts here |
| No blast radius | The migration and six broken tests are discovered at 2 a.m. |
| No disposition | Neither accepted nor refused — so it haunts the project |
| No decider, no date | Nobody owns it, so nobody closes it |
| "Will try to get to it" | Reads to the advisor as **yes**. It is not a yes. |

---

## Worked example — a REJECT that a reader will accept

Saved as `docs/change-requests/CR-017-native-mobile-app.md`:

```
# CR-017 — Add a mobile app

| Field | Value |
|---|---|
| Raised by | self, after a demo-day conversation |
| Date raised | 2026-11-06 |
| Baseline affected | spec-baseline-v1.0 |
| Request | native iOS client alongside the web app |

## Impact analysis

- **Cost:** 60+ build + 20 test + 6 doc = 86 h; 38 h remain
- **Blast radius:** an entire second client, a new toolchain, app-store review, a new
  README section, and a second deploy pipeline
- **Risk:** accept -> the project does not ship; refuse -> the demo stays in a browser,
  which the charter (Week 2) always said it would

## Decision

| Field | Value |
|---|---|
| Disposition | REJECT — outside the baselined scope |
| Decided by | M. Ruiz, 2026-11-06 |
| Rationale | 86 h against 38 remaining is not a close call. Recorded in docs/backlog.md as future work so the handoff reader knows it was considered, not missed. |

## Applied

- [x] Row added to the change table at the top of CHANGELOG.md
- [x] Traces: docs/handoff.md, "Future work"
```

A rejection with a number in it is a decision. A rejection without one is an excuse.
