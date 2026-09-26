# ADR 0001 — Primary language and framework

- **Status:** Accepted
- **Date:** 2026-09-26
- **Decider:** (Reginald) Student Architect
- **Requirements affected:** FR-01 (user authentication), FR-03 (real-time task updates), FR-07 (offline support), NFR-P-01 (page load < 2 s), NFR-M-02 (maintainable by a 3-person team)
- **Related ADRs:** 0002, 0003, 0004

## Context

The product must deliver a responsive single-page experience with real-time collaboration and a progressive-web-app offline mode. The team already knows TypeScript and has two prior React projects; learning a new language would consume the 40-hour learning budget allocated for the semester. Server-side rendering is required only for the initial authentication page (NFR-P-01). The remaining UI is highly interactive, so a client-heavy framework is preferable. Deadline for the first vertical slice is three weeks from today.

## Options considered

| Option              | Weighted score | The detail that decided it                          |
| ------------------- | -------------: | --------------------------------------------------- |
| Next.js 15 (App Router) + TypeScript | 8.7 | Built-in SSR + React Server Components + first-class PWA support |
| Remix + TypeScript  | 7.2 | Excellent data loading, but smaller ecosystem for real-time |
| SvelteKit + TypeScript | 6.1 | Smaller learning curve, but team has zero Svelte experience |

## Decision

We will use Next.js 15 (App Router) with TypeScript as the primary language and framework. The top-scored option was selected; the team’s existing React knowledge removes the learning-cost penalty that would otherwise apply.

## Consequences

**Positive**

- FR-03 real-time updates become straightforward with React Query + Server Actions.
- NFR-P-01 is satisfied by Next.js automatic static optimisation and edge rendering.
- TypeScript gives compile-time safety that directly supports NFR-M-02.

**Negative**

- App Router mental model (Server Components vs Client Components) is still new to two team members; we budgeted 12 hours of pair-programming time in week 1.
- Bundle size can grow if Client Components are over-used; mitigation is a strict “Server Component by default” rule and weekly Lighthouse checks (adds ~2 h/week).
- Next.js major releases have historically broken App Router APIs; we pin the version and review the changelog before every upgrade (adds 1–2 h per upgrade).

## Revisit trigger

If the production Lighthouse performance score for the main task board drops below 85 at 1 000 concurrent users, or if a critical security CVE is announced for Next.js 15 that is not patched within 14 days.

## Verification

| Claim in this ADR                          | Source                                      | Checked on |
| ------------------------------------------ | ------------------------------------------- | ---------- |
| Next.js 15 App Router is stable            | https://nextjs.org/blog/next-15             | 2026-09-26 |
| TypeScript 5.x is the recommended language | https://nextjs.org/docs/app/building-your-application/configuring/typescript | 2026-09-26 |
| Free Vercel hobby plan supports Next.js 15 | https://vercel.com/docs/plans/hobby         | 2026-09-26 |
