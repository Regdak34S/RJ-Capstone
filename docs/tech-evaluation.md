# Technology Evaluation — Content Creation Project

**Version:** 1.0  
**Date:** 2026-10-03  
**Author:** Reginald Johnson  
**Status:** Complete for Week 5 / Week 6 hand-off

Machine-checkable scores live in `docs/tech-evaluation.csv`. Run:

```bash
python docs/score-stack.py docs/tech-evaluation.csv
```

## 1. Architectural drivers

| Driver ID | Driver | Traces to | Why it matters |
|----|-----|----|----|
| D1 | Persist drafts across sessions with zero data loss | FR-SAVE-09, FR-LOAD-10, NFR-REL-02 | Core user pain |
| D2 | Fast enough for 20-section project on modest hardware | NFR-PERF-01, NFR-PERF-02, CON-03 | 8 GB RAM laptop |
| D3 | $0 cash cost through Week 16 | CON-02 | Hard budget |
| D4 | Single developer can set up from README in ≤ 10 min | NFR-MNT-01, FR-DOC-19 | Maintainer persona |
| D5 | No secrets in repo; local or free-tier only | NFR-SEC-01, NFR-SEC-03, NFR-PRIV-01 | Security + privacy |
| D6 | Keyboard-operable + contrast ≥ 4.5:1 | NFR-ACC-01, NFR-ACC-02 | Accessibility musts |
| D7 | Learning budget ≤ 1 major new technology | Charter (max 2 to learn; Linux + JS already listed) | Capacity |
| D8 | Works on current Chrome + Firefox | NFR-PORT-01 | Portability |

## 2. Weighted evaluations (summary)

Scores are 0–5; weights sum to 1.00 per decision. Full rows and evidence are in `docs/tech-evaluation.csv`.

### 2.1 Language / framework

| Option | Weighted score | Rank |
|--------|---------------:|-----:|
| vanilla-js-localstorage | 5.00 | 1 |
| react | 3.15 | 2 |
| python-flask | 2.15 | 3 |

**Decision:** Vanilla HTML/CSS/JavaScript (ADR 0001).

### 2.2 Data store

| Option | Weighted score | Rank |
|--------|---------------:|-----:|
| localStorage | 4.85 | 1 |
| indexeddb | 4.75 | 2 |
| sqlite-via-sqljs | 3.85 | 3 |

**Decision:** Browser localStorage (ADR 0002). Top two within 0.25; localStorage chosen for simpler API and documentation.

### 2.3 Hosting

| Option | Weighted score | Rank |
|--------|---------------:|-----:|
| github-pages | 4.50 | 1 |
| cloudflare-pages-free | 4.40 | 2 |
| local-only | 4.15 | 3 |

**Decision:** GitHub Pages for public static hosting; local file open remains the development path (ADR 0003).

### 2.4 Build vs buy (core capability)

No third-party runtime service or heavy editor library is required for Must features. Decision: **build** with native browser APIs (ADR 0004).

## 3. Seam inventory

Seams are the boundaries where technology choices can be swapped without rewriting the whole system.

| Seam | Current choice | Swap cost if reversed | Notes |
|------|----------------|----------------------|-------|
| Persistence adapter | localStorage wrapper | Low–medium | Interface already isolates `load`/`save`; IndexedDB can replace the adapter |
| UI rendering | Plain DOM | Medium | Component ownership is clear; a framework could be introduced behind the same state owners |
| Hosting | GitHub Pages / static | Low | Pure static assets; any static host works |
| Assembly output | Markdown string / blob | Low | Format is a pure function of the project document |
| Optional future assist | None in v0.1 | N/A | Architecture §10 requires a single interface + kill switch if added |

## 4. Novelty load

| Technology | Already known? | Learning budget impact | Mitigation |
|------------|----------------|------------------------|------------|
| JavaScript (browser APIs) | Willing to learn (charter) | Primary learning item | Time-boxed spikes SP-01 (save latency), SP-02 (overview render) |
| localStorage / Web Storage | Part of JS learning | Low incremental | Simple synchronous API |
| HTML/CSS | Assumed basic | Low | Accessibility (contrast, keyboard) is the non-trivial part |
| GitHub Pages | Low | Low | Documented push path |
| React / Flask / SQL engines | Not selected | Avoided | Keeps novelty within charter limit |

Charter limit: at most two technologies to learn. Selected stack stays inside that limit.

## 5. Cost / watch list

| Item | Cost model | Watch trigger | Fallback |
|------|------------|---------------|----------|
| GitHub Pages | Free for public repos | Pricing or eligibility change | Cloudflare Pages free tier or local-only |
| localStorage quota | Browser-imposed (typically 5+ MB) | User projects approaching quota | Export JSON + warn (architecture edge case 13) |
| Domain / custom DNS | Not used | N/A | Stay on default Pages URL |
| Any future paid API | Forbidden by CON-02 unless re-approved | Proposal of paid dependency | Reject or move behind optional kill switch |

**Hard constraint:** $0 cash through Week 16 (CON-02).

## 6. License inventory

| Dependency | License | Compatible with project LICENSE? | Notes |
|------------|---------|-----------------------------------|-------|
| Browser platform APIs (DOM, localStorage) | N/A (platform) | Yes | No redistribution of browser code |
| Project source | See root LICENSE | — | Own work |
| Mermaid (diagrams only, docs) | MIT | Yes | Documentation tooling only |
| No npm packages in v0.1 runtime | — | — | Avoids license and supply-chain surface |

If a library is later introduced, its license must be recorded here before merge.

## 7. Verification log

| Check | Command / method | Result | Date |
|-------|------------------|--------|------|
| Weighted CSV scoring | `python docs/score-stack.py docs/tech-evaluation.csv` | exit 0; all decisions weighted and evidenced | 2026-10-03 |
| Architecture drivers present | Manual review of this document §1 | 8 drivers, all trace to Must reqs / constraints | 2026-10-03 |
| ADR alignment | ADRs 0001–0004 rewritten to match selected stack | Vanilla JS, localStorage, GitHub Pages, build | 2026-10-03 |
| Charter novelty constraint | docs/charter.md §3 | Stack uses only listed learnable technologies | 2026-10-03 |
| $0 cost | CON-02 + hosting rows | No paid services selected | 2026-10-03 |

## 8. Open items for later weeks

- Confirm clean-machine README path still ≤ 10 minutes after first walking skeleton (NFR-MNT-01).
- Measure NFR-PERF-01 / NFR-PERF-02 on the real 20-section fixture (spikes SP-01 / SP-02).
- Re-check GitHub Pages terms before any public demo week.
