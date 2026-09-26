# Spike SP-02 — Does a static host meet NFR-PERF-01 on cold load?

- **Unknown:** Whether a minimal static build of the project overview, served from the free tier of the chosen host, loads within NFR-PERF-01 (p95 ≤ 2 s cold cache, 20-section project) on a normal laptop connection.
- **Feeds:** ADR 0003 — Choose the hosting target
- **Requirements at risk:** NFR-PERF-01, NFR-PORT-01, NFR-MNT-01
- **Time box:** 90 minutes
- **Run on:** 2026-09-26

## The question

Does a static page that renders a 20-section project overview, hosted on the free tier of GitHub Pages (or equivalent static free tier), achieve a cold-cache p95 load time ≤ 2 seconds when measured with browser DevTools on a normal laptop?

## The smallest thing that answers it

- One HTML file + one JS file that renders a table of 20 sections with status badges (no images, no external fonts).
- Deploy to GitHub Pages (or the free static host under test) via a single push.
- From a different network profile if possible, open DevTools → Network, disable cache, reload 10 times, record load event / DOMContentLoaded times.
- Confirm the page is reachable over HTTPS from current Chrome and Firefox (NFR-PORT-01 smoke).

## Success criterion

- p95 of the measured load times ≤ 2000 ms.
- Page is served over HTTPS.
- No console errors that block the overview render.

## Failure criterion

- p95 > 2000 ms, **or**
- Host refuses the deploy / free tier blocks the push, **or**
- Page fails to render the 20-section overview.

## Plan B if it fails

Stay on local-only (open the HTML file or a simple `npx serve`) for the semester and treat remote hosting as a Week 14 stretch. Or switch to the other free static host scored in the matrix (Cloudflare Pages). Update ADR 0003.

## Result

Ran on 2026-09-26.

- Minimal overview page (HTML + ~8 KB JS, 20 hardcoded section rows) pushed to a GitHub Pages branch.
- Cold-cache loads (DevTools, cache disabled, 10 runs) on the development laptop over normal residential broadband:
  - DOMContentLoaded: min 180 ms, max 420 ms, p95 ≈ 390 ms.
  - Full load event: p95 ≈ 510 ms.
- Both well under the 2-second NFR-PERF-01 threshold.
- HTTPS served correctly; page rendered in current Chrome and Firefox with no blocking errors.

Surprise: the dominant time was DNS + TLS, not the payload. At this size the static host is not the bottleneck; any future large client-side library would be.

## Decision

**Proceed with GitHub Pages** as the primary hosting target for ADR 0003. NFR-PERF-01 is met with large margin for the current static shape. Keep local-only as the documented fallback in the README (open `index.html` or a one-line static server) so a maintainer can still run without network. Revisit if the free tier policy changes or if the built asset size grows enough to push p95 above 2 s.
