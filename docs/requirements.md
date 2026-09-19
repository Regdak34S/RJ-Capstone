# Software Requirements Specification - Content Creation Project

**Author:** Reginald Johnson  
**Version:** 1.1  
**Date:** 2026-09-18  
**Status:** Draft

## 1. Purpose and Scope
This system is a small web-based Content Creation Project that helps a student organize, draft, track, revise, and assemble a capstone deliverable from scattered ideas and section drafts. It serves a single primary user who needs a clear, repeatable path from rough notes to a finished document, and it must let that user create a content map, work through guided section checklists, see progress by status, capture revision notes, and assemble completed sections into one final deliverable. Explicitly outside this release are mobile clients, login or multi-user accounts, real-time collaboration, full video/audio editing, and social-media publishing.

---

## 2. Stakeholders and Personas

## Persona 1

- **Persona Name:** Reg
- **Role:** Video content creator completing a capstone project.
- **Goals:** 
  - Keep track of section progress without losing notes.
  - Draft sections in a structured, guided way.
  - See what is finished and what still needs work.
- **Frustrations:** 
  - Scattered notes across tools.
  - Rewriting sections because he forgets what was done.
  - No clear workflow from idea > draft > final deliverable.
- **Evidence (interview, observation, personal experience):** Interview with Mike on 2026‑09‑01; personal experience organizing video projects.
- **Connected Requirements:** FR‑MAP‑01, FR‑DRAFT‑02, FR‑PROG‑03, FR‑REV‑04, FR‑ASM‑05, FR‑NAV‑06, FR‑SEC‑07, FR‑HIST‑08, FR‑SAVE‑09, FR‑LOAD‑10, FR‑VIEW‑11, FR‑CHECK‑12, FR‑FLOW‑13, FR‑WARN‑14, FR‑TAG‑15, FR‑SORT‑16, FR‑HELP‑17, FR‑SET‑18.



## Persona 2

- **Role:** Developer inheriting the repository after the original author.
- **Goals:** 
  - Understand project structure quickly.
  - Maintain and extend features without breaking core workflows.
  - Trace requirements back to evidence and rationale.
- **Frustrations:** 
  - Missing documentation.
  - Requirements that don’t map to code.
  - Features that behave differently than described.
- **Evidence (interview, observation, personal experience):** Needs identified during capstone planning and repository organization.
- **Connected Requirements:** FR‑DOC‑19, FR‑TRACE‑20, FR‑CONF‑21, FR‑TEST‑22.


## Persona 3

- **Role:** Student writing a capstone paper instead of video content.
- **Goals:** 
  - Organize sections and track progress.
  - Capture feedback and revisions.
- **Frustrations:** 
  - Losing track of drafts.
  - Confusion about what is finished.
- **Evidence (interview, observation, personal experience):** Personal experience + interview themes.
- **Connected Requirements:** FR‑MAP‑01, FR‑DRAFT‑02, FR‑PROG‑03, FR‑REV‑04, FR‑ASM‑05.

---

## 3. Definitions

| Term | Definition in this document |
|------|-----------------------------|
| Content map | The ordered list of major sections that make up one capstone project, including any dependencies between sections. |
| Section | One major part of the deliverable (for example, introduction, methods, or results) that can be drafted, reviewed, and marked complete. |
| Draft | The current editable text of a section that has been saved but is not yet marked final. |
| Status | The progress state of a section: not started, draft, in-review, or final. |
| Final assembly | The action that combines all sections marked complete into one deliverable package. |
| Maintainer | The person who inherits the repository after the original author and needs documentation and traceability to continue work. |

---

## 4. Assumptions and Dependencies

**Assumptions** (treated as true for now; detailed ownership and verification dates appear in §11):
- The chosen development environment will support the technology stack selected in Week 5.
- Free or zero-cost hosting and storage options will remain available through the semester if they are used.
- The target browsers will support the functionality required by the core workflows.

**Dependencies** (external items the project relies on; pinned versions and fallbacks appear in §12):
- A JavaScript runtime and any chosen web framework (exact version to be pinned in Week 5).
- Local storage or a free database service for persisting projects and drafts.
- GitHub for source control and any continuous-integration checks that are added later.

If any assumption proves false or a dependency becomes unavailable, the corresponding fallback in §11 or §12 will be applied and scope will be adjusted only within the existing cut order.

---

## 5. Functional Requirements

### FR-MAP-01
**Priority:** Must
**Requirement:** The user shall be able to create new content maps using a supported computer during development.
**Rationale:** This requirement ensures the user can organize their capstone sections before drafting begins.
**Acceptance criteria:**
- Given the user is starting a new capstone project, when they create a content map, then the system stores the new map and displays it in the project dashboard.
- Given the user attempts to create a content map without entering any section names, when they submit the map, then the system warns them that the map cannot be empty.
**Source:** Interview and personal experience with organizing video projects.


### FR-DRAFT-02
**Priority:** Must
**Requirement:** The user shall be able to draft or edit later project sections on a checklist.
**Rationale:** This requirement prevents users from losing drafted content when working across tools.
**Acceptance criteria:**
- Given a section exists in the checklist, when the user drafts or edits the section, then the system saves the updated content.
- Given the user closes the project without saving, when they reopen the section the next day, then the system shows the last saved version only.
**Source:** Personal experience with losing edits in video apps.


### FR-PROG-03
**Priority:** Must
**Requirement:** The user shall be able to make project Updates for the progress section status in review. Only this user marks the section.
**Rationale:** This requirement supports clear visibility of section status, similar to how video editors show progress stages.
**Acceptance criteria:**
- Given the project contains multiple sections, when the user updates the status of a section, then the system reflects the new status in the progress view.
- Given the project contains no sections, when the user opens the progress view, then the system displays that no sections exist.
**Source:** Interview and workflow observation.


### FR-REV-04
**Priority:** Should
**Requirement:** The user shall be able to review feedback with revision notes or version history. This user can make these reviews when revising a section of the project.
**Rationale:** This requirement mirrors how video apps track edits, versions, and feedback during revision.
**Acceptance criteria:**
- Given a section has feedback notes, when the user opens the revision panel, then the system displays all notes and version history.
- Given no revision notes exist, when the user opens the revision panel, then the system shows an empty state message.
**Source:** Persona and interview evidence about revision challenges.


### FR-ASM-05
**Priority:** Must
**Requirement:** The user shall be able to assemble all the final deliverable project sections for completion. Before presenting, all sections must be marked complete.
**Rationale:** This requirement ensures the user can combine all completed sections into a final deliverable, similar to exporting a finished video.
**Acceptance criteria:**
- Given all sections are marked complete, when the user assembles the final deliverable, then the system generates the final project file.
- Given at least one section is incomplete, when the user attempts final assembly, then the system prevents assembly and alerts the user.
**Source:** Persona and personal experience assembling final video projects.


### FR-NAV-06
**Priority:** Must
**Requirement:** The user shall be able to navigate between capstone sections using a simple sidebar or menu.
**Rationale:** Users lose time searching for where they left off; navigation reduces confusion.
**Acceptance criteria:**
- Given the user is drafting a section, when they click another section in the sidebar, then the system displays that section’s content.
- Given the user has unsaved changes, when they attempt to navigate away, then the system warns them before switching sections.
**Source:** Interview with Mike (2026‑09‑01) + personal experience.


### FR-SEC-07
**Priority:** Must
**Requirement:** The user shall be able to view each section’s status (draft, in‑review, final) at a glance.
**Rationale:** Users need a clear overview to avoid redoing completed work.
**Acceptance criteria:**
- Given a section has a saved status, when the user opens the project map, then the status appears next to the section name.
- Given a section has no status, when the user opens the project map, then the system displays “Not started.”
**Source:** Interview evidence about losing track of progress.


### FR-HIST-08
**Priority:** Should
**Requirement:** The user shall be able to view a simple revision history for each section.
**Rationale:** Users often forget what they changed and why.
**Acceptance criteria:**
- Given revision notes exist, when the user opens the history panel, then the system displays a list of past changes.
- Given no revision notes exist, when the user opens the history panel, then the system displays “No revisions yet.”
**Source:** Interview + personal experience.


### FR-SAVE-09
**Priority:** Must
**Requirement:** The users system shall auto‑save section drafts every 30 seconds.
**Rationale:** Prevents loss of work when switching sections or closing the app.
**Acceptance criteria:**
- Given the user is typing, when 30 seconds pass, then the system saves the draft automatically.
- Given the system auto‑saves, when the user closes the app, then the latest draft is available on next open.
**Source:** Personal experience losing drafts.


### FR-LOAD-10
**Priority:** Must
**Requirement:** The user shall be able to reopen any previously saved draft.
**Rationale:** Users need continuity across work sessions.
**Acceptance criteria:**
- Given a saved draft exists, when the user opens a section, then the system loads the latest version.
- Given no saved draft exists, when the user opens a section, then the system displays a blank draft.
**Source:** Interview evidence.


### FR-VIEW-11
**Priority:** Must
**Requirement:** The user shall be able to view a full project overview showing all sections and their statuses.
**Rationale:** Helps users understand workload and remaining tasks.
**Acceptance criteria:**
- Given sections exist, when the user opens the overview, then all sections appear with their statuses.
- Given no sections exist, when the user opens the overview, then the system displays “No sections created.”
**Source:** Interview + personal workflow.


### FR-CHECK-12
**Priority:** Must
**Requirement:** The user shall be able to follow a guided checklist for each section.
**Rationale:** Reduces confusion about what belongs in each part of the capstone.
**Acceptance criteria:**
- Given a checklist exists, when the user opens a section, then the checklist appears.
- Given the user marks an item complete, when they reopen the section, then the item remains marked.
**Source:** Interview evidence about redoing steps.


### FR-FLOW-13
**Priority:** Should
**Requirement:** The user shall be able to see which sections depend on others.
**Rationale:** Helps users understand logical order and avoid writing out of sequence.
**Acceptance criteria:**
- Given dependencies exist, when the user opens the flow map, then arrows show the relationships.
- Given no dependencies exist, when the user opens the flow map, then the system displays “No dependencies.”
**Source:** Personal experience + project map design.


### FR-WARN-14
**Priority:** Should
**Requirement:** The system shall warn the user when a section is missing required elements.
**Rationale:** Prevents incomplete sections from reaching final assembly.
**Acceptance criteria:**
- Given a required element is missing, when the user attempts to mark a section “final,” then the system displays a warning.
- Given all required elements exist, when the user marks a section “final,” then the system accepts the status.
**Source:** Personal experience.


### FR-TAG-15
**Priority:** May
**Requirement:** The user shall be able to tag sections with custom labels (e.g., “research,” “needs review”).
**Rationale:** Helps organize work and highlight priorities.
**Acceptance criteria:**
- Given the user adds a tag, when they reopen the section, then the tag appears.
- Given the user removes a tag, when they reopen the section, then the tag is gone.
**Source:** Personal workflow.


### FR-SORT-16
**Priority:** May
**Requirement:** The user shall be able to sort sections by status or tag.
**Rationale:** Helps users focus on unfinished or high‑priority work.
**Acceptance criteria:**
- Given sections exist, when the user selects “Sort by status,” then the system orders them accordingly.
- Given tags exist, when the user selects “Sort by tag,” then the system groups sections by tag.
**Source:** Personal workflow.


### FR-HELP-17
**Priority:** May
**Requirement:** The user shall be able to open a help panel explaining each feature.
**Rationale:** Reduces confusion for new users and future maintainers.
**Acceptance criteria:**
- Given the user clicks “Help,” when the panel opens, then the system displays explanations for core features.
- Given the user closes the panel, when they return to the main screen, then the help panel is hidden.
**Source:** Maintainer needs + personal experience.


### FR-SET-18
**Priority:** May
**Requirement:** The user shall be able to adjust basic settings (theme, autosave interval).
**Rationale:** Supports accessibility and user preference.
**Acceptance criteria:**
- Given the user changes a setting, when they reopen the app, then the setting persists.
- Given the user resets settings, when they confirm, then all settings return to default.
**Source:** Personal experience.


### FR-DOC-19
**Priority:** May
**Requirement:** The next maintainer shall be able to access documentation describing project structure and features.
**Rationale:** Maintainers need clarity to avoid breaking workflows.
**Acceptance criteria:**
- Given documentation exists, when the maintainer opens /docs, then the structure overview is present.
- Given documentation is missing, when the maintainer opens /docs, then the system displays a placeholder.
**Source:** Maintainer persona.


### FR-TRACE-20
**Priority:** Must
**Requirement:** The next maintainer shall be able to trace each requirement to its implementation.
**Rationale:** Ensures maintainability and prevents regressions.
**Acceptance criteria:**
- Given a requirement ID exists, when the maintainer searches the repo, then at least one reference appears in code or docs.
- Given a requirement is removed, when the maintainer checks the trace table, then the requirement is marked deprecated.
**Source:** Maintainer persona.


### FR-CONF-21
**Priority:** Should
**Requirement:** The system shall include a configuration file for environment‑specific settings.
**Rationale:** Maintainers need a predictable place to adjust settings.
**Acceptance criteria:**
- Given the maintainer opens the config file, when they edit a value, then the system uses the new value..
- Given the config file is missing, when the system starts, then it uses default settings.
**Source:** Maintainer persona.


### FR-TEST-22
**Priority:** Should
**Requirement:** The system shall include a basic test suite for core features.
**Rationale:** Maintainers need confidence when modifying code.
**Acceptance criteria:**
- Given tests exist, when the maintainer runs the test suite, then core features are validated.
- Given a test fails, when the maintainer checks logs, then the failing feature is identified.
**Source:** Maintainer persona.

---

## 6. Non-Functional Requirements

**Performance**
**NFR-PERF-01** - Main project overview loads in ≤ 2 s (cold cache, project with 20 sections, laptop browser DevTools, 10 loads, record p95).
**NFR-PERF-02** - Saving a section draft completes in ≤ 1 s under normal conditions (same machine, 10 saves).

**Reliability**
**NFR-REL-01** - Core workflow (create project → add sections → draft → save → change status → view revision → assemble) produces zero unhandled errors.
**NFR-REL-02** - A saved draft remains available after closing and reopening the application (ties to FR-SAVE-09 / FR-LOAD-10).

**Security**
**NFR-SEC-01** - No passwords, API keys, access tokens, or other secrets shall appear in any commit in the repository.
**NFR-SEC-02** - User-entered section content shall never be executed as application code.
**NFR-SEC-03** - Configuration files that contain environment-specific settings shall not contain secrets committed to the repo.

**Privacy**
**NFR-PRIV-01** - Data inventory (see table below) is maintained and every listed element can be deleted by the user deleting the project / local data.


| Data element | Why needed | Where stored | Retention | How user deletes it |
|------|---------|--------|--------|--------|
| Project title| Identify project | Local storage / browser (or chosen DB) | Until user deletes project | Delete project action |
| Section names | Organize work | Same | Same | Delete section / project |
| Section drafts | Core content | Same | Same | Delete section / project |
| Section status | Progress tracking | Same | Same |Delete section / project |
| Revision notes | Track changes | Same | Same | Delete section / project |
| Feedback notes | Support revisions | Same | Same | Delete section / project |


**Accessibility**
**NFR-ACC-01** - Every interactive control is reachable and operable by keyboard alone with a visible focus indicator (manual walkthrough of the three core workflows, mouse unplugged).
**NFR-ACC-02** - Body text meets ≥ 4.5:1 contrast ratio against its background (contrast checker on all text/background pairs).

**Usability**
**NFR-USE-01** - A first-time user completes the primary project-creation + first-section workflow without assistance in ≤ 5 minutes (two observed sessions).

**Maintainability**
**NFR-MNT-01** - A clean clone of the repository can be configured and launched using only the README in ≤ 10 minutes (clean-machine timed test).

**Portability**
**NFR-PORT-01** - The three core workflows function on the two most recent major versions of Chrome and Firefox (manual smoke test).

---

## 7. Out of Scope (the Won't-Have List)
| Not building | Why not | Revisit when |
|---|---|---|
| Mobile app | The first release is focused on the web version and the core workflow. | Revisit after the web version is complete and tested. |
| Social or multiplayer features | Collaboration is outside the core content-creation workflow. | Revisit if a future version needs multiple users working together. |
| Login/account system | Accounts are not necessary for the core capstone workflow. | Revisit if multiple-user access becomes necessary. |
| Full video/audio editor | Building a professional editing system would make the project too large. | Revisit if the core workflow is complete and there is enough remaining capacity. |

---

## 8. Open Questions
None

---

## 9. Document Change Log
| Date | Version | Change | Reason |
|------|---------|--------|--------|
| 2026-09-13 | 1.0 | Functional requirements, personas, out-of-scope | Milestone 3 |
| 2026-09-18 | 1.1 | Added NFRs, constraints, assumptions, dependencies, obligations | Milestone 4 |

---

## 10. Constraints
| ID | Constraint | Where it comes from | What it rules out |
|------|---------|--------|--------|
| CON-01 | ≈ 8 h 50 min available per week | Personal capacity | Large features that cannot fit the weekly budget |
| CON-02 | $0 project spending | Budget decision | "Paid hosting, paid APIs, paid fonts/icons" |
| CON-03 | "Windows laptop, 8 GB RAM, 119 GB SSD" | Hardware reality | Heavy desktop apps or very large local datasets |
| CON-04 | 16-week course deadline | Course | Scope creep past the hard ceiling of 75 construction hours |
| CON-05 | Web-focused (no mobile) | Charter non-goals | Native mobile clients |

---

## 11. Assumptions

| ID | Assumption | Owner | Verify by | If false |
|------|---------|--------|--------|-------|
| ASM-01 | Chosen development environment will support the selected stack | Me | Week 5 | Switch to a different supported stack |
| ASM-02 | Free hosting option (if any) remains available through semester | Me | Week 5 | Host locally only |
| ASM-03 | Target browsers support required functionality | Me | Week 5 / first smoke test | Drop unsupported browser from NFR-PORT-01 |

---

## 12. Dependencies

| ID | Dependency | Version / plan pinned | Failure mode | Fallback |
|------|---------|--------|--------|-------|
| DEP-01 | JavaScript runtime / chosen framework | (pin exact version in Week 5) | Breaking change / removal | Stay on last known good version or switch |
| DEP-02 | Local storage or chosen free DB | (pin in Week 5) | Quota exceeded / service shutdown | Pure in-memory + export/import |
| DEP-03 | GitHub (repo + Actions if used) | Current free tier | Outage / policy change | Local git + manual evidence |

---

## 13. Obligations

| Obligation | Primary source (URL) | Date checked | What it requires of me |
|------|---------|--------|--------|
| Project license (MIT) | https://opensource.org/licenses/MIT | 2026-09-18 | LICENSE file at root; copyright notice retained |
| (Add any library/framework you actually use once chosen in Week 5) | Primary LICENSE file of that package | Week 4/5 | Attribution if required |
