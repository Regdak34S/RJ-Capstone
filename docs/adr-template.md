# ADR NNNN — <A short noun phrase naming the decision, not the technology>

<!--
Copy this file to docs/adr/NNNN-kebab-case-title.md in your repository.
Number sequentially from 0001. Never renumber; never delete an ADR.
An ADR is immutable once accepted: if the decision changes, write a NEW ADR
and set this one's status to Superseded by ADR NNNN.
Format after Michael Nygard, "Documenting Architecture Decisions" (2011).
Delete every comment block before you commit.
-->

- **Status:** Proposed | Accepted | Superseded by ADR NNNN | Deprecated
- **Date:** 2026-09-26
- **Decider:** Reginald
- **Requirements affected:** <FR-###, NFR-###, … the identifiers from `docs/requirements.md`>
- **Related ADRs:** 4

## Context

<!--
The forces, not the answer. What about YOUR requirements makes this a real
decision? Which requirement identifiers push on it? What do you already know
how to do, and what would be new? What is the deadline and the hours budget?
Somebody who has never met you should be able to read this section and predict
the decision before they get to it. If they cannot, the context is thin.
Two to five paragraphs. No marketing adjectives.
-->

## Options considered

| Option | Weighted score | The detail that decided it |
|---|---:|---|
| <option> | 0.00 | <the one concrete fact, not a slogan> |
| <option> | 0.00 | |
| <option> | 0.00 | |

<!-- Scores come from docs/tech-evaluation.md. At least two real options. -->

## Decision

<!-- One paragraph, active voice, present tense: "We will …" / "I will …".
Name the thing precisely, including version or edition where it matters.
If you did NOT take the top-scored option, say so here and say why. -->

## Consequences

**Positive**

- <what becomes easier, tied to a requirement identifier>

**Negative**

- <what becomes harder, or slower, or more expensive — be specific>
- <the new thing you now have to learn, and the hours you budgeted for it>
- <the mitigation, if you have one, and what it costs>

<!--
An ADR with no negative consequences is not an ADR. Every real choice costs
something. If you cannot name the cost, you did not evaluate — you shopped.
-->

## Revisit trigger

<!-- The measurable event that would make you write a superseding ADR.
"If the main-screen query misses NFR-P-02 at 1,000 records."
"If the free tier ends or the price exceeds $X/month."
Not "if it becomes a problem." Name the number. -->

## Verification

| Claim in this ADR | Source | Checked on |
|---|---|---|
| <version / price / license / limit> | <official docs URL> | YYYY-MM-DD |

<!-- Every time-varying claim gets a source and a date. This table is what
separates a decision record from a rumour. -->
