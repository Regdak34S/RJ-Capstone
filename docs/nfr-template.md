# Non-Functional Requirements, Constraints & Obligations — Template

These sections go into the `docs/requirements.md` you started in Week 3 — you are
extending that document, not starting a second one. The non-functional tables below
replace the **§6 placeholder** the Week-3 template left for you; constraints,
assumptions, dependencies, and obligations **append as new §10–13** after the change
log. Do not renumber anything from Week 3: §5 stays your functional requirements,
§7 your out-of-scope table, §8 your open questions, §9 your change log. If you end up
with two sections numbered 5, you have pasted over the work Milestone 3 was graded on.

Delete every instruction line in angle brackets before you commit.

Rule for this whole document: **no adjective survives without a number.**
Every quality below needs four fields — METRIC, THRESHOLD, CONDITION, METHOD.
If you cannot say how you would measure it in one afternoon, it is not a requirement yet.

---

## 6. Non-Functional Requirements

<Replaces the Week-3 placeholder in this section. One table per category you are
using. Use at least six of the eight. Delete the rest and write one sentence saying
why that category does not apply to this project.>

### 6.1 Performance

| ID | Requirement (metric · threshold · condition) | Priority | How it is measured |
|---|---|---|---|
| NFR-PERF-01 | <e.g. p95 response time for the main list view is under 1.5 s with 200 seeded records on a throttled "Fast 3G" connection> | Must | <browser dev-tools throttling profile, 20 loads, record p95 in `docs/measurements.md`> |
| NFR-PERF-02 | | | |

### 6.2 Reliability & Availability

| ID | Requirement | Priority | How it is measured |
|---|---|---|---|
| NFR-REL-01 | <e.g. no unhandled exception reaches the user; every failure renders a message naming what failed and what to do next> | Must | <error-path test list in the test plan; one test per failure mode> |

### 6.3 Security

| ID | Requirement | Priority | How it is measured |
|---|---|---|---|
| NFR-SEC-01 | <e.g. no credential, token, or key appears in the repository at any commit> | Must | <secret scan over full history, run in CI, zero findings> |

### 6.4 Privacy & Data Handling

| ID | Requirement | Priority | How it is measured |
|---|---|---|---|
| NFR-PRIV-01 | <e.g. a signed-in user can delete their account and all rows referencing it in one action> | Must | <test: create data, delete account, query every table for the user id, expect zero rows> |

### 6.5 Accessibility

| ID | Requirement | Priority | How it is measured |
|---|---|---|---|
| NFR-ACC-01 | <e.g. every interactive control is reachable and operable by keyboard alone, with a visible focus indicator> | Must | <manual pass: unplug the mouse, complete the three core tasks> |

### 6.6 Usability · 6.7 Maintainability · 6.8 Portability

| ID | Requirement | Priority | How it is measured |
|---|---|---|---|
| NFR-USE-01 | <e.g. a first-time user completes the primary task without help in under 3 minutes> | Should | <two observed sessions, timed, notes recorded> |
| NFR-MNT-01 | <e.g. a clean clone reaches a running app in under 10 minutes using only the README> | Must | <clean-machine test, timed, once per iteration> |
| NFR-PORT-01 | <e.g. the app runs on the two most recent major versions of two different browsers> | Should | <manual smoke test of the three core flows on each> |

---

<Everything below appends to the END of the document, after the §9 change log.>

## 10. Constraints  <things you did NOT choose and cannot change>

| ID | Constraint | Where it comes from | What it rules out |
|---|---|---|---|
| CON-01 | <e.g. total effort is capped at ~240 hours across 16 weeks> | course | <a second client application> |

## 11. Assumptions  <things you are treating as true but have NOT verified>

| ID | Assumption | Owner | Verify by | If it is false |
|---|---|---|---|---|
| ASM-01 | <e.g. the product-lookup API's free tier permits storing responses> | me | Week 5 | <cache locally instead; scope drops to manual entry> |

## 12. Dependencies  <things outside your control that you need>

| ID | Dependency | Version / plan pinned | Failure mode | Fallback |
|---|---|---|---|---|
| DEP-01 | <third-party API> | <plan + date checked> | <rate limit, outage, shutdown> | <what the app does instead> |

## 13. Obligations  <license, third-party terms, data rights>

| Obligation | Primary source (URL) | Date checked | What it requires of me |
|---|---|---|---|
| <project license> | <spdx.org/licenses/…> | <YYYY-MM-DD> | <LICENSE at repo root, notice retained> |
| <a dependency's license> | <the dependency's own LICENSE file> | <YYYY-MM-DD> | <attribution in docs> |
| <API terms of service> | <vendor URL> | <YYYY-MM-DD> | <storage/caching limits, attribution> |

---

**Document control.** Do not start a second version block. Bump the **Version** and
**Date** in the header the Week-3 template already gave the document, then add one row
to the existing **§9 Document Change Log** — date, version 1.1, the change
("non-functional requirements, constraints, assumptions, dependencies, and obligations
added"), and the reason ("Milestone 4").
