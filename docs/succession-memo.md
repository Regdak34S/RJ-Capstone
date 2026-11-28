# Succession Memo — Content Creation Project v1.0.0

**To:** Engineer who inherits this repository  
**From:** Reggie Johnson  
**Date:** 2026-11-28  

## 1. What I would tell you in person

I do not fully trust the **full re-render on every keystroke** path. It works at demo scale, and the dirty flag depends on it, but DEF-005 (caret) is a symptom of that design. If you touch drafting first, prefer updating the textarea in place rather than documenting the hack further.

The product **looks** like it might have a backend because of `script/` and CI. It does not. Students and successors waste time searching for routes. Start at `project-service.js` and `project-store.js`.

Week 12 deferred assemble under “capacity.” Part of the truth is I had not frozen Markdown edge cases. Write those before coding FR-ASM-05, or you will thrash.

## 2. Decision I would revisit

**ADR 0002 — localStorage only.** Right for $0 and single-user. Wrong if the school ever wants shared drafts (CR-002). Today I would still choose localStorage for v1, but I would have written a one-page “sync exit ramp” ADR describing what would have to change (auth, conflict, host). Cost to change later: large (rewrite Persistence + security model). I would **not** spend that before checklist/assemble land.

## 3. Residual bus factor

After handoff docs, still mostly in my head:

- Exact judgment for when a section body is “good enough” to mark `final` (no product rule encoded).  
- Whether `order` field vs array order is authoritative if they diverge (never enforced).  

Everything about **running** the system is written down.

## 4. One-year cost of ownership (dated 2026-11-23)

| Item | Estimate | Source / note |
|------|----------|----------------|
| GitHub free private/public repo | $0 | github.com pricing |
| GitHub Pages for static site | $0 public | verify current Pages terms |
| Domain | $0 (use github.io) | optional custom domain ~$10–15/yr if desired |
| Database / API | $0 | none |
| AI model usage | $0 | none in product |
| **Total plausible** | **~$0–15/yr** | only if you buy a domain |

**Who pays after I graduate?** Nobody is billed today. If Pages policy changes, the project runs offline via `bash script/start` indefinitely. If nobody maintains it, cost collapses to zero and the repo simply ages.

## 5. Deprecation plan (six months of silence)

1. Collaborator or org owner archives the GitHub repo.  
2. No user database to delete; optional README notice:  

> **Archived:** This course project is unmaintained as of &lt;date&gt;. Browser `localStorage` data remains only on each user’s machine. Do not enter sensitive data.

3. Delete nothing required for license compliance (keep LICENSE, NOTICE).  
4. CI can be disabled to stop runner minutes.

## 6. Licensing vs coursework

LICENSE is **Apache-2.0** (SPDX: `Apache-2.0`). I chose it for clear patent grant and commercial-friendly reuse of a small static tool. Coursework IP: confirm your institution’s policy on student-owned vs. school-owned course projects; this repo assumes **student-authored** code under Apache-2.0 as filed in the course repository. If your program requires a different notice, replace LICENSE only after written confirmation from the program—do not leave dual conflicting headers.

