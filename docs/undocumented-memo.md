# The Undocumented Memo

**To:** Engineer inheriting RJ-Capstone  
**From:** Reggie Johnson  
**Date:** 2026-11-20  

## 1. What you still cannot learn from this repository

**Why the render path rebuilds the whole panel on every keystroke.** The code is readable; the *judgment* is not fully written beside it. I kept full re-paint + caret restore (DEF-005) as Iteration 1 debt instead of an in-place textarea update. You cannot see from docs alone whether I measured layout cost on large bodies or only believed it was fine at demo scale.

**Whether multi-tab localStorage corruption has ever been reproduced.** ADRs say single-user; there is no recorded experiment with two tabs writing the same key. The failure mode is “last write wins,” but I never captured a HAR or a timeline.

**The real reason assemble (FR-ASM-05) slipped past RC.** The backlog says capacity; the unspoken part is avoidance of defining Markdown edge cases (empty body finals, order vs `order` field vs array order). A successor will invent those rules under time pressure unless they read DEF-008 and B-04 together with the requirements text.

## 2. Priced gaps

| Gap | Cost to document well | Cost if left dark | Choice |
|-----|----------------------|-------------------|--------|
| In-place edit design note + invariant | ~2 h | ~4–6 h re-discover + regress caret | **Left dark for now** — code rewrite is cheaper than documenting the hack; schedule B-05 |
| Multi-tab experiment write-up | ~3 h | ~1 day if someone “just adds” sync | **Left dark** — out of scope; pointer in architecture is enough until B-01 |
| Assemble edge-case table before code | ~3 h | ~8 h thrash during implement | **Should buy** before coding B-04 — I still have not written it; that is debt |

I did **not** choose “ran out of time” as the strategy for caret debt; I chose rewrite-later over document-the-hack.

## 3. Bus factor

**After Week 13 docs: bus factor is still 1** for product intent. A competent stranger can **run** the suite and smoke from the README (author-verified). They cannot yet **extend** checklist/assemble without reading requirements + defect log + backlog and making design calls I never recorded.

For bus factor **2**, these would need to exist and be true:

1. A completed third-party clean-machine log (not only author CLI).  
2. Assemble edge-case table committed before implementation.  
3. One other person merging a small PR using only onboarding’s first issue.

## 4. The document I would delete

**Candidate:** duplicate “success looks like Introduction” prose repeated in README, smoke comments, and skeleton-trace without pointing to a single canonical acceptance line.

**Defense for deletion:** every copy will drift (one still says skeleton-only).  

**Why I keep a short form in README anyway:** graders and testers start there; the canonical automated signal remains `SMOKE OK (store): Introduction — draft`. I reduced duplication in the Week 13 README rewrite rather than deleting smoke’s message.

---

Specific, priced, honest, actionable — that was the bar for this memo.

