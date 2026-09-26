# ADR 0003 — Hosting target

- **Status:** Accepted
- **Date:** 2026-09-26
- **Decider:** Student Architect
- **Requirements affected:** NFR-P-01 (page load < 2 s), NFR-A-01 (99 % uptime during demo week), NFR-C-01 (zero-cost deployment for the semester), FR-07 (PWA offline support)
- **Related ADRs:** 0001, 0002

## Context

The front-end is a Next.js application and the database is already on Neon. The deployment must be free for the duration of the semester, support automatic previews for every pull request, and provide a global CDN so that the first contentful paint stays under 2 s from both North-American and European campuses. The team has previously deployed to Vercel and has no experience with container-based platforms.

## Options considered

| Option              | Weighted score | The detail that decided it                                      |
| ------------------- | -------------: | --------------------------------------------------------------- |
| Vercel (Hobby)      | 9.1 | Zero-config Next.js, automatic HTTPS, global edge network, free for non-commercial |
| Railway             | 6.8 | Good DX, but free tier ends after $5 credit and no native Next.js optimisations |
| Self-hosted on a $5 VPS (Fly.io / DigitalOcean) | 4.3 | Full control, but requires Docker knowledge the team does not have |

## Decision

We will host the application on Vercel’s Hobby plan. The top-scored option was selected.

## Consequences

**Positive**

- NFR-P-01 is helped by Vercel’s edge network and automatic image optimisation.
- Preview deployments for every PR reduce integration risk (supports NFR-M-02).
- Zero cash cost for the semester satisfies NFR-C-01.

**Negative**

- Hobby plan has a 100 GB-hours serverless-function limit and soft rate limits; if the demo week produces a traffic spike the site may throttle. Mitigation: load-test early and keep serverless functions under 50 ms (adds 4 h of testing).
- Vendor lock-in: moving off Vercel later requires rewriting the deployment pipeline (estimated 8–12 h). Accepted because the project ends with the semester.
- Build minutes are limited; large monorepo builds can exhaust the free quota. Mitigation: enable Turborepo remote caching (1 h setup).

## Revisit trigger

If the Hobby plan’s 100 GB-hours limit is exceeded in any calendar month, or if Vercel announces that the Hobby plan will no longer be free for student projects.

## Verification

| Claim in this ADR                                  | Source                                      | Checked on |
| -------------------------------------------------- | ------------------------------------------- | ---------- |
| Vercel Hobby plan is free for non-commercial use   | https://vercel.com/docs/plans/hobby         | 2026-09-26 |
| Next.js is a first-class citizen on Vercel         | https://vercel.com/docs/frameworks/nextjs   | 2026-09-26 |
| Edge network covers major university locations     | https://vercel.com/docs/edge-network/regions| 2026-09-26 |
