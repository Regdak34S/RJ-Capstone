# Walking Skeleton Trace — TEMPLATE

Copy this to `docs/skeleton-trace.md` in your repository. Keep it current for the
rest of the term; Week 13 grades it as part of the documentation set, and Week 16
uses it to check that every requirement you claimed is actually reachable.

Replace everything in ANGLE BRACKETS. Delete the PantryPilot example rows once
your own are in — they are here to show the shape, not to be kept.

---

## 1. The request path

One row per hop. "Real" means the production component, not a stub, a mock, a
hard-coded fixture, or a `TODO`. A hop that is not real is a bone that is missing.

| # | Hop | Component in my system | Real? | Evidence |
|---|---|---|---|---|
| 1 | Client / entry point | `<web page, CLI arg parser, webhook>` | yes / no | `<how you know>` |
| 2 | Route / dispatch | `<the handler that receives it>` | yes / no | |
| 3 | Service / domain logic | `<the module that decides something>` | yes / no | |
| 4 | Data store | `<real DB + real table + seeded row>` | yes / no | |
| 5 | Response | `<status + payload shape>` | yes / no | |
| 6 | Rendered result | `<what a human actually sees>` | yes / no | |
| 7 | External integration | `<third-party API, or "deferred">` | stub / real | |

**Example (PantryPilot — an example project, not yours):**

| # | Hop | Component | Real? | Evidence |
|---|---|---|---|---|
| 1 | Client | `/pantry` page, `fetch('/api/items')` | yes | browser network tab |
| 2 | Route | `GET /api/items` handler | yes | `script/smoke` gets 200 |
| 3 | Service | `ItemService.listExpiring()` | yes | unit test `list-expiring` |
| 4 | Data store | SQLite `items`, seeded row "oat milk" | yes | `script/setup` seeds it |
| 5 | Response | `200`, `[{name, expiresOn}]` | yes | smoke asserts "oat milk" |
| 6 | Rendered | one `<li>` in the pantry list | yes | screenshot in the PR |
| 7 | Barcode API | stubbed, returns fixed product | stub | ADR-0004, deferred to Wk 12 |

**Missing bone (the next task):** `<name the first "no" above and the issue number>`

## 2. Requirement traceability

Every requirement identifier you baselined in Week 8 gets a row. A requirement
with no issue is a promise nobody is keeping.

| Req ID | Requirement (short) | Issue | Branch | Verified by | Status |
|---|---|---|---|---|---|
| `<FR-1>` | `<one line>` | `#<n>` | `<branch>` | `<test name or "manual">` | not started / in progress / done |
| FR-4 | List items expiring within 7 days | #12 | `fr-4-expiring-list` | `tests/unit/list-expiring` | done |
| FR-7 | Add an item from the web form | #14 | `fr-7-add-item` | — | in progress |
| NFR-2 | First page paint under 2 s on 3G | #21 | — | — | not started |

## 3. Skeleton acceptance record

- **Date the skeleton first walked end to end:** `<YYYY-MM-DD>`
- **Commit that made it walk:** `<sha>`
- **CI run that proved it (URL):** `<link to the green run>`
- **One red build I caused on purpose, and the fix:** `<red run URL>` -> `<fix sha>`
- **Hops still stubbed, and when they get real:** `<list, with issue numbers>`
