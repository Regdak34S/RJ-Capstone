# ADR 0004 — Build versus buy for core capability

- **Status:** Accepted
- **Date:** 2026-10-03
- **Decider:** Reginald Johnson (Student Architect)
- **Requirements affected:** FR-MAP-01, FR-DRAFT-02, FR-PROG-03, FR-ASM-05, FR-SAVE-09, FR-LOAD-10, CON-02, NFR-MNT-01
- **Related ADRs:** 0001, 0002, 0003

## Context

The core capability is a single-user content map + draft editor + status board + checklist + assembly workflow that persists in the browser. No real-time collaboration, no AI content generation, and no third-party SaaS are in the Must scope for v0.1. The charter and scoping decision already excluded multi-user features and paid services. The question is whether any non-trivial piece should be bought (library or service) rather than built with plain browser APIs.

## Options considered

| Option | Weighted score / rationale | The detail that decided it |
| ------------------------------- | -------------: | --------------------------------------------------------------- |
| Build with vanilla browser APIs | Preferred | Full control, zero cost, matches learning budget, no vendor lock-in |
| Buy a rich-text / editor library (e.g. Quill, TipTap) | Not selected for v0.1 | Adds dependency size and learning cost for a feature that plain textarea + Markdown export can satisfy |
| Buy a backend or BaaS | Rejected | Contradicts single-user localStorage decision and $0 budget |

## Decision

We will **build** the core capability with plain HTML, CSS, and JavaScript against the browser Web Storage API. No paid or heavy third-party runtime dependency is introduced in v0.1. Optional future assist features (if any) must sit behind a single interface with a kill switch (see architecture §10).

## Consequences

**Positive**

- CON-02 and NFR-MNT-01 remain satisfied: no API keys, no account, no node_modules required to run.
- All Must functional requirements map onto components owned in this repository.
- Fallback path is trivial: open the static files offline.

**Negative**

- Richer editing (live preview, complex formatting) would take more custom code than a library.
- Accessibility and keyboard behaviour (NFR-ACC-01, NFR-ACC-02) must be implemented and tested manually.
- Accepted because the scoped user need is structured drafting and status tracking, not a full WYSIWYG suite.

## Revisit trigger

If a Must requirement is added that cannot be met with native form controls and Markdown assembly (for example, collaborative editing or AI-assisted generation as a Must), reopen this ADR and evaluate a narrowly scoped library or free-tier service behind an adapter.

## Verification

| Claim in this ADR | Source | Checked on |
| ------------------------------------------ | ------------------------------------------- | ---------- |
| Core FRs require no third-party runtime | docs/architecture.md §10, docs/requirements.md | 2026-10-03 |
| $0 and single-user scope | docs/charter.md, docs/scoping-decision.md | 2026-10-03 |
| Out-of-scope items exclude collaboration / AI drafting | docs/scoping-decision.md §5 | 2026-10-03 |

