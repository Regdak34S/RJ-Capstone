# ADR 0001 — Primary language and framework

- **Status:** Accepted
- **Date:** 2026-10-03
- **Decider:** Reginald Johnson (Student Architect)
- **Requirements affected:** FR-MAP-01, FR-DRAFT-02, FR-SAVE-09, FR-LOAD-10, FR-VIEW-11, NFR-PERF-01, NFR-PERF-02, NFR-MNT-01, CON-02, CON-03
- **Related ADRs:** 0002, 0003, 0004

## Context

The product is a single-user, offline-capable content-creation tool that runs entirely in the browser. The primary user organizes sections, drafts text, tracks status, and assembles a final deliverable. There is no multi-user collaboration, no authentication, and no server-side application logic in scope. The charter limits learning to at most two technologies (Linux and JavaScript already listed). The budget is $0, and the machine is an 8 GB RAM Windows laptop. A maintainer must be able to open the project from the README in ≤ 10 minutes with no build toolchain required if possible.

## Options considered

| Option | Weighted score | The detail that decided it |
| ------------------- | -------------: | --------------------------------------------------- |
| Vanilla HTML/CSS/JavaScript | 5.00 | Fits core workflow with zero framework overhead; no build step; matches learning budget |
| React (SPA) | 3.15 | Same UI possible but adds component model, bundler, and a second major technology |
| Python Flask | 2.15 | Requires a running server for every session; overkill for single-user local drafts |

Scores taken from `docs/tech-evaluation.csv` (decision = language-framework).

## Decision

We will use plain HTML, CSS, and vanilla JavaScript as the primary language and framework. No SPA framework, no build step required for the core deliverable.

## Consequences

**Positive**

- FR-MAP-01, FR-DRAFT-02, FR-SAVE-09, FR-LOAD-10, and FR-VIEW-11 map directly onto DOM + Web Storage APIs.
- NFR-PERF-01 and NFR-PERF-02 are easier to meet with no framework runtime cost.
- NFR-MNT-01 is satisfied by a single open-in-browser path documented in the README.
- Zero recurring cost (CON-02) and fits the 8 GB laptop constraint (CON-03).

**Negative**

- Manual DOM updates and state ownership must be disciplined; mitigation is the single-owner rule in the architecture component table.
- No component library; accessibility (NFR-ACC-01, NFR-ACC-02) must be implemented by hand.
- Larger features later would require more boilerplate than a framework would provide; accepted because scope is deliberately small.

## Revisit trigger

If a future Must requirement introduces multi-user real-time collaboration or a server-side API that cannot be expressed with vanilla JS + static hosting, reopen this ADR.

## Verification

| Claim in this ADR | Source | Checked on |
| ------------------------------------------ | ------------------------------------------- | ---------- |
| Vanilla JS + localStorage covers core FRs | docs/tech-evaluation.csv language-framework rows | 2026-10-03 |
| Charter learning budget max 2 technologies | docs/charter.md §3 | 2026-10-03 |
| $0 budget constraint | docs/charter.md §3, CON-02 | 2026-10-03 |

