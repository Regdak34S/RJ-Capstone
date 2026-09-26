# ADR 0002 — Data store

- **Status:** Accepted
- **Date:** 2026-09-26
- **Decider:** Student Architect
- **Requirements affected:** FR-02 (CRUD on tasks), FR-04 (full-text search), FR-08 (audit log), NFR-S-01 (data at rest encrypted), NFR-P-02 (query latency < 100 ms for 10 k records)
- **Related ADRs:** 0001, 0003

## Context

The application stores hierarchical tasks, comments, and an immutable audit trail. Write volume is modest (expected < 50 writes/s at peak), but the team needs strong consistency for concurrent edits and full-text search across task titles and descriptions. The free-tier budget is $0; any paid database must stay under $25/month once the free tier ends. The team has prior experience with PostgreSQL and zero experience with document stores.

## Options considered

| Option                    | Weighted score | The detail that decided it                                      |
| ------------------------- | -------------: | --------------------------------------------------------------- |
| PostgreSQL 16 (Neon free tier) | 8.9 | Relational model matches task hierarchy; free tier includes 0.5 GB storage and branching |
| MongoDB Atlas free tier   | 6.4 | Flexible schema, but team has no Mongo experience and consistency guarantees are weaker |
| SQLite + Turso            | 5.8 | Zero-ops, but concurrent write limits are too low for FR-03     |

## Decision

We will use PostgreSQL 16 hosted on Neon’s free tier (with the option to upgrade to the $19/month Launch plan if storage exceeds 0.5 GB). The top-scored option was selected.

## Consequences

**Positive**

- FR-02 and FR-08 map directly onto tables and triggers; no schema-design risk.
- NFR-P-02 is met by Neon’s serverless connection pooler and proper indexing.
- NFR-S-01 is satisfied by Neon’s encryption-at-rest (AES-256) which is on by default.

**Negative**

- Neon free-tier compute suspends after 5 min of inactivity; cold starts can add 300–800 ms latency. Mitigation: a lightweight keep-alive cron (adds ~1 h of setup and $0 cost).
- Full-text search requires the `pg_trgm` or `tsvector` extension; the team must learn the relevant SQL (budgeted 6 hours).
- If the project outlives the semester and storage grows past 0.5 GB, the monthly cost becomes $19; this is accepted and documented in the budget spreadsheet.

## Revisit trigger

If the free-tier storage limit of 0.5 GB is exceeded, or if any query that is part of the main task-board load exceeds 100 ms p95 latency at 10 000 records.

## Verification

| Claim in this ADR                              | Source                                              | Checked on |
| ---------------------------------------------- | --------------------------------------------------- | ---------- |
| Neon free tier includes 0.5 GB storage         | https://neon.tech/docs/introduction/free-tier       | 2026-09-26 |
| PostgreSQL 16 is the current major version     | https://www.postgresql.org/docs/16/index.html       | 2026-09-26 |
| Neon encrypts data at rest by default          | https://neon.tech/docs/security/security-overview   | 2026-09-26 |
