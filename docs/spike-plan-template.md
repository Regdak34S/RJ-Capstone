# Spike SP-NN — <the unknown, named as a question>

<!--
A spike is the smallest experiment that turns an unknown into a known.
It is time-boxed, it answers ONE question, and its output is a paragraph and
a decision — never a feature. Spike code is throwaway by default; if you keep
any of it, say so in the Result section so the next reader knows.
Copy to docs/spikes/SP-NN-kebab-title.md. Delete the comments before committing.
-->

- **Unknown:** <the thing you do not know and cannot decide without>
- **Feeds:** <ADR NNNN — the decision this spike unblocks>
- **Requirements at risk:** <FR-### / NFR-###>
- **Time box:** <90 minutes | 2 hours | 4 hours — and you stop when it rings>
- **Run on:** YYYY-MM-DD

## The question

<!-- ONE sentence, answerable yes/no or with a number. Bad: "Try the barcode
API." Good: "Does the barcode API return a product name for at least 8 of the
10 items in my kitchen, within 1 second each, on the free tier?" -->

## The smallest thing that answers it

<!-- Bullet the minimum build. No UI unless the question is about UI. No auth
unless the question is about auth. If your plan takes more than the time box,
the question is too big — split it. -->

## Success criterion

<!-- The result that means "yes, proceed." A number where possible. -->

## Failure criterion

<!-- The result that means "no." Write this BEFORE you run the spike, or you
will negotiate with yourself afterward. -->

## Plan B if it fails

<!-- Named now, while it is cheap. "Fall back to manual entry (FR-004) and cut
FR-006 to Could-have." A spike with no Plan B is not de-risking anything. -->

## Result

<!-- Filled in after the time box. What actually happened, with the numbers.
Include what surprised you — that is usually the real finding. -->

## Decision

<!-- Proceed / fall back / re-spike with a narrower question. Then update the
ADR, the risk register, and your hours log. -->

---

## Worked example — PantryPilot, Spike SP-02

- **Unknown:** Will the barcode/product-lookup API actually recognise ordinary groceries?
- **Feeds:** ADR 0004 — product lookup: third-party API vs. manual entry only
- **Requirements at risk:** FR-005, FR-006, NFR-P-01
- **Time box:** 90 minutes
- **Run on:** 2026-02-10

**The question.** Does the free tier of the candidate product API return a usable
product name for at least 8 of 10 randomly chosen items in my own kitchen, in
under 1 second per lookup?

**The smallest thing that answers it.** A single script that reads ten barcodes
from a text file, calls the lookup endpoint, prints name and elapsed time. No
database, no UI, no error handling beyond printing the status code.

**Success criterion.** 8 or more of 10 return a name; median latency under 1 s.

**Failure criterion.** Fewer than 8 hits, OR any rate limit hit inside ten calls,
OR terms of use that forbid storing the returned product names.

**Plan B if it fails.** Manual entry (FR-004) becomes the only path; FR-005 drops
from Must to Could; the ADR records the scan feature as out of scope for v1.

**Result.** 7 of 10 returned a name. Median latency 340 ms — latency is fine.
The three misses were store-brand items, which is most of what this household
buys. Surprise finding: the response included a category field I had not planned
for, which would satisfy FR-011's recipe matching better than my own tagging.

**Decision.** Fall back — partly. Manual entry is the primary path and the API
becomes an *assist* that pre-fills the form the user can correct. FR-005 rewritten
with the human correction step in its acceptance criteria. ADR 0004 written the
same day; the risk register entry R-04 closed; 1.5 h logged.
