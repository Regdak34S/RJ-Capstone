# Software Requirements Specification — PantryPilot (worked excerpt)

**Author:** M. Ruiz  **Version:** 1.0  **Date:** 2026-02-09
**Status:** Draft

> This is an excerpt from the book's running example, not a complete document —
> six requirements out of twenty-eight. Use it to see the *shape* of a good
> requirement and to test the linter. Your project will look nothing like a
> pantry app, and that is fine; the shape transfers.

---

## 1. Purpose and Scope

PantryPilot lets a shared household record what food it has, see what is about to
expire, and get a cooking suggestion that uses the items closest to spoiling. It
serves one household of three to six people who currently track nothing and throw
out food they forgot they owned.

Out of the boundary for this release: shopping lists, price tracking, nutrition
data, and any multi-household or public-account features.

## 2. Stakeholders and Personas

| Persona | Who they are | What they need | Evidence they exist |
|---|---|---|---|
| Dana, 22, the organizer | Buys most of the groceries; keeps a whiteboard list that goes stale | To see, in under ten seconds, what will spoil this week | Interview 2026-02-03; photographed the whiteboard |
| Marcus, 21, the passive housemate | Will open the app only when something pings him | To be told what to eat tonight without entering anything | Interview 2026-02-04 |
| The next maintainer | Inherits this repository after the course ends | To understand what each feature was for, from the document alone | Course requirement; Chapter 13 clean-machine test |

---

## 5. Functional Requirements

### FR-INV-01 — Add a pantry item

**Priority:** Must
**Requirement:** A signed-in household member shall be able to add an item to the household pantry by supplying a name, a quantity with a unit, and an expiry date.
**Rationale:** Nothing else in the system works until inventory exists. Dana's whiteboard is the behavior being replaced.
**Acceptance criteria:**
- Given a signed-in member on the pantry screen, when they submit a name, quantity, unit, and expiry date, then the item appears in the household pantry list within one page refresh and is visible to every member of that household.
- Given a submission with an expiry date earlier than today, when the member submits, then the item is saved and displayed in the expired group rather than rejected.
- Given a submission missing the item name, when the member submits, then the system rejects the submission and states which field is missing.

**Source:** Interview with Dana, 2026-02-03

### FR-INV-04 — Remove a consumed item

**Priority:** Must
**Requirement:** A signed-in household member shall be able to mark a pantry item as consumed, which removes it from the active pantry list.
**Rationale:** An inventory that only grows is worse than no inventory.
**Acceptance criteria:**
- Given an item in the active pantry list, when a member marks it consumed, then it no longer appears in the active list.
- Given an item marked consumed in error, when the member selects undo within the same session, then the item returns to the active list with its original expiry date.

**Source:** Observation of the whiteboard: crossed-out lines were never erased.

### FR-EXP-02 — Expiring-soon view

**Priority:** Must
**Requirement:** A signed-in household member shall be able to view every pantry item whose expiry date falls within the next seven days, ordered soonest first.
**Rationale:** This is the whole reason Dana would open the app.
**Acceptance criteria:**
- Given a pantry containing items expiring in 2, 6, and 20 days, when a member opens the expiring-soon view, then exactly the 2-day and 6-day items are listed, in that order.
- Given a pantry with no items expiring in the next seven days, when a member opens the view, then the system displays an explicit empty state rather than a blank screen.

**Source:** Interview with Dana, 2026-02-03

### FR-SCAN-01 — Add an item by barcode

**Priority:** Should
**Requirement:** A signed-in household member shall be able to add a pantry item by submitting a product barcode, which the system uses to pre-fill the item name.
**Rationale:** Typing every item is the reason the whiteboard died.
**Acceptance criteria:**
- Given a barcode the product-lookup service recognizes, when the member submits it, then the add-item form opens with the product name pre-filled and the quantity, unit, and expiry fields empty.
- Given a barcode the service does not recognize, when the member submits it, then the system opens the manual add-item form with the barcode retained and states that no product was found.

**Source:** Interview with Marcus, 2026-02-04

### FR-SCAN-02 — Behavior when the lookup service is unavailable

**Priority:** Must
**Requirement:** When the product-lookup service does not respond within five seconds, the system shall present the manual add-item form with any data the member has already entered preserved.
**Rationale:** The one third-party dependency in this project will be down at some point, probably during the demo.
**Acceptance criteria:**
- Given the lookup service is unreachable, when a member submits a barcode, then within six seconds the manual form appears, the barcode is still in the field, and a message states that lookup is unavailable.
- Given the lookup service is unreachable, when a member completes the manual form, then the item saves normally.

**Source:** Risk identified during scoping, Week 2.

### FR-INV-08 — Export the pantry as a spreadsheet

**Priority:** Won't (this release)
**Requirement:** A signed-in household member shall be able to export the household pantry as a comma-separated file.
**Rationale:** Requested once, valued by nobody who was asked a second time. Recorded so the decision is visible rather than forgotten. A Won't requirement needs no acceptance criteria — there is nothing to accept.

**Source:** Interview with Marcus, 2026-02-04

---

## 7. Out of Scope (the Won't-Have List)

| Not building | Why not | Revisit when |
|---|---|---|
| Shopping list generation | A second feature area with its own data model; costs an estimated 25 hours the budget does not have | After a v1.0 release exists |
| Multiple households per account | No evidence any interviewed user wants it | A second household asks |
| Price and spend tracking | Requires reliable price data this project cannot source | Never, in this course |
| Native mobile applications | Doubles the build and the release process | Out of scope permanently |
| Nutrition or allergen information | Health claims carry a duty of care this project cannot meet | Out of scope permanently |
