# Changelog

All notable changes to this project are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/). Versioning: Semantic Versioning.

## Change table (Week 8 baseline → RC)

| CR | Title | Disposition | Date | Destination |
|----|-------|-------------|------|-------------|
| CR-001 | Mobile / responsive redesign | REJECT | 2026-11-12 | — (capacity) |
| CR-002 | Shared multi-user project sync | DEFER | 2026-11-12 | backlog B-01 |
| CR-003 | Export assemble Markdown (FR-ASM-05) | ACCEPT (partial path) | 2026-11-13 | this RC thin export stub deferred full |
| CR-004 | Checklist per section (FR-CHECK-12) | DEFER | 2026-11-12 | backlog B-02 |
| CR-005 | "Bug": auto-save every keystroke | REJECT | 2026-11-12 | — (conflicts FR-SAVE-09 explicit save) |

---

## [Unreleased]

## [1.0.0] - 2026-11-23

### Added
- Deployable release packaging: `docs/deployment.md`, `docs/handoff.md`, `THIRD-PARTY-NOTICES.md`, release checklist.
- Annotated release intent **v1.0.0** (tag to be pushed from this tree).
- Handoff day-one path, landmines, bus-factor register, good-first-issue pointer (FR-CHECK-12).

### Changed
- README and configuration contract (`.env.example`) aligned to v1.0.0 single setup path (`bash script/setup`).
- `package.json` version set to `1.0.0`.

### Fixed
- Documentation gaps called out in Week 13 clean-machine author path (README milestone tables, smoke HTTP wording).

### Known issues
- **DEF-005 (S3)** — caret jump on full re-render while typing. Workaround: pause; planned in-place edit.
- **DEF-006 (S2)** — FR-NAV-06 force-nav incomplete. Workaround: Save before switching sections.
- **DEF-007 (S2)** — FR-CHECK-12 checklist not implemented (good-first-issue).
- **DEF-008 (S2)** — FR-ASM-05 assemble Markdown not implemented. Workaround: manual copy.



## [0.9.0-rc.1] - 2026-11-13

### Added
- Iteration 1 vertical slices: section list + status (FR-VIEW-11, FR-SEC-07), add section (FR-MAP-01), draft body (FR-DRAFT-02), status change (FR-PROG-03), save/load (FR-SAVE-09, FR-LOAD-10).
- Milestone 11 verification package: test plan, traceability matrix, unit/integration/acceptance suites, defect log, quality memo.
- Committed seed data (`seed/project.json`) and happy/boundary/hostile test fixtures.
- Storage unavailable failure path (`FORCE_STORAGE_DOWN` / `STORAGE_UNAVAILABLE`) for CI red proof and degradation demo (NFR-REL path).

### Changed
- Seeded project includes Introduction + Methods for demo realism.
- `script/test` runs unit + integration + acceptance in one command.

### Fixed
- Empty section name accepted (DEF-001) — now `EMPTY_SECTION_NAME`.
- Unknown section / invalid status lacked stable codes (DEF-002, DEF-003).
- Single-section seed vs demo script (DEF-004).
- Corrupt JSON load messaging (DEF-009).
- Missing `styles.css` breaking CI build (DEF-010).

### Security
- No runtime third-party packages with known Critical/High advisories in the dependency tree (static app; Node used for tooling only). See `docs/security-review.md`.
- Hostile script-like content stored as plain text, not executed (NFR-SEC-02; integration test).

### Known issues
- **DEF-005 (S3)** — full re-render drops caret mid-edit. Workaround: pause briefly or edit offline. Planned: in-place textarea update (0.9.1 / Week 13).
- **DEF-006 (S2)** — FR-NAV-06 force-navigation incomplete (banner only). Workaround: Save before switching sections. Planned: backlog B-03.
- **DEF-007 (S2)** — FR-CHECK-12 checklist not implemented. Workaround: track completeness via status field. Planned: backlog B-02 / CR-004.
- **DEF-008 (S2)** — FR-ASM-05 full assemble Markdown not implemented. Workaround: copy section text manually. Planned: backlog B-04.

## [0.1.0-skeleton] - 2026-10-21

### Added
- Walking skeleton: UI → Persistence → storage; seeded Introduction row.
- Scripts + CI: install → lint → test → build → smoke.
[CHANGELOG.md](https://github.com/user-attachments/files/34813967/CHANGELOG.md)
