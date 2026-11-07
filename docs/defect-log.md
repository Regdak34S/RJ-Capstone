[defect-log.md](https://github.com/user-attachments/files/34529422/defect-log.md)
# Defect Log — Milestone 11

**Project:** Content Creation Project  
**Author:** Reggie Johnson  
**Last updated:** 2026-11-07  

Severity: S1 blocker · S2 major · S3 minor · S4 cosmetic  
Priority: P1 fix now · P2 this iteration · P3 backlog · P4 optional  

Each report includes the seven fields: ID, Title, Steps, Expected, Actual, Severity/Priority (with reasons), Resolution.

---

## DEF-001

| Field | Content |
|-------|---------|
| **ID** | DEF-001 |
| **Title** | Empty section name was accepted before validation |
| **Steps to reproduce** | 1. Call `addSection(project, "   ")` 2. Observe result |
| **Expected** | Reject with `EMPTY_SECTION_NAME` |
| **Actual** | (pre-fix) whitespace-only names could create sections |
| **Severity** | S2 — corrupts map with useless rows |
| **Priority** | P1 — blocks FR-MAP-01 AC |
| **Severity reason** | User-visible bad data in primary workflow |
| **Priority reason** | Must AC failing; fix before claim Done |
| **Resolution** | **Fixed** — `createSection` trims and throws. Regression: `tests/acceptance/must-requirements.test.js` → `AC-MAP-01-2` |

---

## DEF-002

| Field | Content |
|-------|---------|
| **ID** | DEF-002 |
| **Title** | Unknown section id returned vague error on draft update |
| **Steps** | `updateSectionBody(project, "nope", "x")` |
| **Expected** | Stable code `UNKNOWN_SECTION` |
| **Actual** | Generic throw without code field in early draft |
| **Severity** | S3 |
| **Priority** | P2 |
| **Severity reason** | Incorrect API contract, not data loss |
| **Priority reason** | Needed for acceptance naming |
| **Resolution** | **Fixed** — `err.code = "UNKNOWN_SECTION"`. Regression: `AC-DRAFT-02-2` |

---

## DEF-003

| Field | Content |
|-------|---------|
| **ID** | DEF-003 |
| **Title** | Invalid status string not rejected |
| **Steps** | `setSectionStatus(p, id, "shipped")` |
| **Expected** | `INVALID_STATUS` |
| **Actual** | Status written through in pre-validation sketch |
| **Severity** | S2 |
| **Priority** | P1 |
| **Severity reason** | Breaks FR-PROG-03 vocabulary invariant |
| **Priority reason** | Must criterion |
| **Resolution** | **Fixed** — `VALID_STATUSES` guard. Regression: `AC-PROG-03-2` |

---

## DEF-004

| Field | Content |
|-------|---------|
| **ID** | DEF-004 |
| **Title** | Seeded project had only one section; demo script expected Methods |
| **Steps** | Load seed; count sections |
| **Expected** | Introduction + Methods per demo script |
| **Actual** | Skeleton single-row seed |
| **Severity** | S3 |
| **Priority** | P2 |
| **Severity reason** | Demo mismatch, not runtime crash |
| **Priority reason** | Iteration 1 demo credibility |
| **Resolution** | **Fixed** — `seededProject()` and `seed/project.json` include Methods. Regression: store test expects length 2 |

---

## DEF-005

| Field | Content |
|-------|---------|
| **ID** | DEF-005 |
| **Title** | Full page re-render drops textarea caret while typing |
| **Steps** | Select section; type mid-word in draft |
| **Expected** | Caret stays at edit point |
| **Actual** | Caret jumps to end after each paint |
| **Severity** | S3 |
| **Priority** | P2 |
| **Severity reason** | Usability friction on primary edit path |
| **Priority reason** | Not blocker for AC truth; tracked for Week 12 |
| **Resolution** | **Open** — partial mitigation (focus end). Full in-place update deferred. Workaround: type then pause. |

---

## DEF-006

| Field | Content |
|-------|---------|
| **ID** | DEF-006 |
| **Title** | FR-NAV-06 force-navigation not fully implemented |
| **Steps** | Edit draft; click another section without save |
| **Expected** | Documented force flag or confirm to discard |
| **Actual** | Banner `UNSAVED_CHANGES` only; no force path |
| **Severity** | S2 |
| **Priority** | P2 |
| **Severity reason** | Must FR only partially met |
| **Priority reason** | Gap visible in matrix; schedule Week 11–12 |
| **Resolution** | **Open** — domain keeps body on status change (partial). UI force path not done. |

---

## DEF-007

| Field | Content |
|-------|---------|
| **ID** | DEF-007 |
| **Title** | FR-CHECK-12 checklist not implemented |
| **Steps** | Attempt to toggle checklist item on a section |
| **Expected** | Persist done flag per AC |
| **Actual** | No checklist UI or service API |
| **Severity** | S2 |
| **Priority** | P3 |
| **Severity reason** | Must FR unimplemented (product gap) |
| **Priority reason** | Scheduled after core editor; not silent |
| **Resolution** | **Open** — gap in traceability; no false green tests |

---

## DEF-008

| Field | Content |
|-------|---------|
| **ID** | DEF-008 |
| **Title** | FR-ASM-05 assemble Markdown not implemented |
| **Steps** | Request assemble when all sections final |
| **Expected** | Markdown output or `INCOMPLETE_SECTIONS` |
| **Actual** | No assemble function |
| **Severity** | S2 |
| **Priority** | P3 |
| **Severity reason** | Must FR missing |
| **Priority reason** | Week 12 plan |
| **Resolution** | **Open** — matrix gap |

---

## DEF-009

| Field | Content |
|-------|---------|
| **ID** | DEF-009 |
| **Title** | Corrupt JSON in storage surfaces generic error |
| **Steps** | Write invalid JSON to storage key; call load |
| **Expected** | Named `CORRUPT_DOCUMENT` |
| **Actual** | Now throws CORRUPT_DOCUMENT (after fix) |
| **Severity** | S3 |
| **Priority** | P2 |
| **Severity reason** | Operator clarity |
| **Priority reason** | Regression safety |
| **Resolution** | **Fixed** — unit test `throws CORRUPT_DOCUMENT on invalid JSON` |

---

## DEF-010

| Field | Content |
|-------|---------|
| **ID** | DEF-010 |
| **Title** | styles.css filename mismatch broke CI build historically |
| **Steps** | Run `bash script/build` with file named `styles` |
| **Expected** | Build OK |
| **Actual** | Missing `styles.css` |
| **Severity** | S1 (at the time) |
| **Priority** | P1 |
| **Severity reason** | Pipeline red; ship blocked |
| **Priority reason** | Immediate |
| **Resolution** | **Fixed** — file renamed; build lists `src/ui/styles.css`. Regression: `script/build` required-files check |

---

## Summary

| Status | Count |
|--------|-------|
| Fixed | 6 |
| Open | 4 (DEF-005, 006, 007, 008) |
| S1 open | 0 |
| S2 open | 3 (NAV partial, CHECK, ASM) |

