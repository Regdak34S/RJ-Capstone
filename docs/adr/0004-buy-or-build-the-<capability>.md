# ADR 0004 — Buy versus build for real-time collaboration

- **Status:** Accepted
- **Date:** 2026-09-26
- **Decider:** Student Architect
- **Requirements affected:** FR-03 (real-time task updates visible to all collaborators within 1 s), NFR-P-03 (end-to-end latency < 800 ms), NFR-C-01 (zero or near-zero recurring cost), NFR-M-01 (team can maintain the feature after the semester)
- **Related ADRs:** 0001, 0002, 0003

## Context

Multiple users must see each other’s edits to the same task list with sub-second latency. Building a custom WebSocket server plus presence and conflict-resolution logic is estimated at 60–80 hours—more than the remaining implementation budget. Several managed services exist that provide the same capability for free or low cost. The team has never operated a production WebSocket fleet and does not want to learn Redis pub/sub or CRDT libraries under deadline pressure.

## Options considered

| Option                          | Weighted score | The detail that decided it                                      |
| ------------------------------- | -------------: | --------------------------------------------------------------- |
| Liveblocks (free tier)          | 8.5 | Purpose-built for collaborative UIs, React hooks, free up to 50 MAU |
| Ably (free tier)                | 7.1 | Excellent WebSocket infra, but more configuration required      |
| Custom Socket.IO + Redis        | 3.9 | Full control, but 60+ hours of work and ongoing ops burden      |

## Decision

We will buy the real-time collaboration capability from Liveblocks (free tier) rather than build it ourselves. The top-scored option was selected.

## Consequences

**Positive**

- FR-03 is delivered with < 10 lines of React code and sub-second latency out of the box.
- NFR-C-01 is satisfied for the expected class size (< 50 monthly active users).
- The team avoids learning CRDTs, operational transformation, and WebSocket scaling—saving the entire 60-hour estimate.

**Negative**

- Vendor dependency: if Liveblocks changes its free-tier limits or pricing we must either pay or rewrite. Mitigation: abstract the Liveblocks client behind a thin adapter interface (adds 3 h now, saves weeks later).
- Learning the Liveblocks React hooks and presence API still costs ~8 hours of documentation reading and experimentation.
- Data residency is outside our control; acceptable for a non-production student project but would be a blocker for real customer data.

## Revisit trigger

If the free tier’s 50 monthly-active-user limit is reached, or if Liveblocks raises the price of the free tier above $0, or if a critical security incident is disclosed that is not remediated within 7 days.

## Verification

| Claim in this ADR                                      | Source                                      | Checked on |
| ------------------------------------------------------ | ------------------------------------------- | ---------- |
| Liveblocks free tier includes 50 MAU                   | https://liveblocks.io/pricing               | 2026-09-26 |
| Official React hooks exist for Next.js App Router      | https://liveblocks.io/docs/api-reference/liveblocks-react | 2026-09-26 |
| End-to-end latency typically < 200 ms on the free tier | https://liveblocks.io/docs/platform/limits  | 2026-09-26 |
