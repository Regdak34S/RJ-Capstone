# ADR 0003 — Hosting target

- **Status:** Accepted
- **Date:** 2026-10-03
- **Decider:** Reginald Johnson (Student Architect)
- **Requirements affected:** CON-02, NFR-MNT-01, NFR-PORT-01
- **Related ADRs:** 0001, 0002

## Context

The application is a static set of HTML, CSS, and JavaScript files with no server-side runtime. It must cost $0 through Week 16, be deployable from a git push, and remain usable when opened directly from the local filesystem for development and clean-machine tests. The target browsers are current Chrome and Firefox.

## Options considered

| Option | Weighted score | The detail that decided it |
| ------------------- | -------------: | --------------------------------------------------------------- |
| GitHub Pages | 4.50 | Free for public repos; push-to-deploy; no card required |
| Cloudflare Pages (free) | 4.40 | Free tier; no card for basic static; similar static model |
| Local-only (no public host) | 4.15 | $0 and simplest, but fails the public demo/share path |

Scores taken from `docs/tech-evaluation.csv` (decision = hosting). Top two are within 0.25; GitHub Pages chosen because the repository already lives on GitHub and the maintainer path is already documented around clone + open.

## Decision

We will host the static assets on GitHub Pages (or equivalent static host). Local `file://` or a simple static server remains the development path. No application server is deployed.

## Consequences

**Positive**

- CON-02 ($0) is satisfied for the semester.
- NFR-MNT-01 is helped by a documented clone → open (or Pages URL) path.
- HTTPS and basic CDN behaviour come free with GitHub Pages.
- No secrets or environment configuration are required at the host.

**Negative**

- Pages publishes only static files; any future server-side logic would require a different host.
- Custom domain or advanced routing is out of scope and not needed.
- Build step is unnecessary today; if a bundler is added later, the publish path must be updated.

## Revisit trigger

If a Must requirement introduces a server-side API, authentication, or dynamic backend, reopen this ADR.

## Verification

| Claim in this ADR | Source | Checked on |
| ------------------------------------------ | ------------------------------------------- | ---------- |
| GitHub Pages free for public repos | docs/tech-evaluation.csv hosting rows | 2026-10-03 |
| $0 constraint | docs/charter.md §3, CON-02 | 2026-10-03 |
| Application is static HTML/CSS/JS | ADR 0001, docs/architecture.md | 2026-10-03 |

