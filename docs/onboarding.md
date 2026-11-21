# Onboarding — Content Creation Project

**Time budget:** ~10 minutes to orientation, then one first issue.

## Vocabulary

| Term | Meaning here |
|------|----------------|
| **Project document** | Single JSON object: title, sections[], schemaVersion |
| **Section** | Named unit with `status`, `body` / `draftText`, id |
| **Content map** | Ordered list of sections (FR-MAP-01) |
| **Persistence** | ProjectStore + storage adapter (localStorage or Memory) |
| **Seed** | Default document written when store is empty |
| **RC** | Release candidate tag `v0.9.0-rc.1` |

## Feature → code map

| Feature | Requirement | Primary code |
|---------|-------------|--------------|
| Add section | FR-MAP-01 | `src/app/project-service.js` → `addSection` |
| Edit draft body | FR-DRAFT-02 | `updateSectionBody` + UI textarea in `render.js` / `main.js` |
| Change status | FR-PROG-03 | `setSectionStatus` + `VALID_STATUSES` |
| Save / load | FR-SAVE-09, FR-LOAD-10 | `src/persistence/project-store.js` |
| Section list + status text | FR-VIEW-11, FR-SEC-07 | `src/app/render.js` |
| Seed on empty | skeleton path | `src/app/seed.js` + `seededProject()` |

## How work moves

1. Pick a requirement / defect / backlog item (`docs/backlog.md`, board).  
2. Branch or small commits with req IDs in messages.  
3. `bash script/test` green before merge.  
4. Update defect log / CHANGELOG if user-visible.  
5. Decisions: `docs/adr/` and change requests under `docs/change-requests/`.

## Where decisions live

- Stack and store: **ADRs 0001–0004** (`docs/adr/`)  
- Scope cuts: **CR-*** files + `docs/backlog.md`  
- Quality bar: `docs/definition-of-done.md`, `docs/test-plan.md`

## First issue (unclaimed — for a stranger)

**Title:** Implement FR-CHECK-12 checklist toggle for one section  

**Why this one:** Must-have still deferred (DEF-007 / B-02); domain patterns already exist.

**Acceptance criteria**

1. Given a section, toggling a checklist item persists `done` across reload.  
2. Unknown item id → `UNKNOWN_ITEM` (or documented equivalent).  
3. Unit or acceptance test names the criterion; `bash script/test` stays green.

**Hints:** Extend the project document shape carefully; follow `addSection` error-code style; do not use `innerHTML` for item labels.

**Out of scope for this issue:** full assemble (FR-ASM-05).
