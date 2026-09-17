## Functional Requirements


### FR-MAP-01
**Requirement:** The user shall be able to create new content maps using a supported computer during development.
**Priority:** Must - because the project cannot begin without creating a content map.
**Rationale:** This requirement ensures the user can organize their capstone sections before drafting begins.
**AC‑FR‑MAP‑01‑1:** Given the user is starting a new capstone project, when they create a content map, then the system stores the new map and displays it in the project dashboard.
**AC‑FR‑MAP-01‑2:** Given the user attempts to create a content map without entering any section names, when they submit the map, then the system warns them that the map cannot be empty.
**Source:** Interview and personal experience with organizing video projects.

---

### FR-DRAFT-02
**Requirement:** The user shall be able to draft or edit later project sections on a checklist.
**Priority:** Must - because drafting and saving work is essential for progress.
**Rationale:** This requirement prevents users from losing drafted content when working across tools.
**AC‑FR‑DRAFT‑02‑1:** Given a section exists in the checklist, when the user drafts or edits the section, then the system saves the updated content.
**AC‑FR‑DRAFT‑02‑2:** Given the user closes the project without saving, when they reopen the section the next day, then the system shows the last saved version only.
**Source:** Personal experience with losing edits in video apps.

---

### FR-PROG-03
**Requirement:** The user shall be able to make project Updates for the progress section status in review. Only this user marks the section.
**Priority:** Must.
**Rationale:** This requirement supports clear visibility of section status, similar to how video editors show progress stages.
**AC-FR-PROG-03-1:** Given the project contains multiple sections, when the user updates the status of a section, then the system reflects the new status in the progress view.
**AC-FR-PROG-03-2:** Given the project contains no sections, when the user opens the progress view, then the system displays that no sections exist.
**Source:** Interview and workflow observation.

---

### FR-REV-04
**Requirement:** The user shall be able to review feedback with revision notes or version history. This user can make these reviews when revising a section of the project.
**Priority:** Should - because revision tracking is important but not required for the first working version.
**Rationale:** This requirement mirrors how video apps track edits, versions, and feedback during revision.
**AC‑FR‑REV‑04‑1:** Given a section has feedback notes, when the user opens the revision panel, then the system displays all notes and version history.
**AC‑FR‑REV‑04‑2:** Given no revision notes exist, when the user opens the revision panel, then the system shows an empty state message.
**Source:** Persona and interview evidence about revision challenges.

---

### FR-ASM-05
**Requirement:** The user shall be able to assemble all the final deliverable project sections for completion. Before presenting, all sections must be marked complete.
**Priority:** Must
**Rationale:** This requirement ensures the user can combine all completed sections into a final deliverable, similar to exporting a finished video.
**AC‑FR‑ASM‑05‑1:** Given all sections are marked complete, when the user assembles the final deliverable, then the system generates the final project file.
**AC‑FR‑ASM‑05‑2:** Given at least one section is incomplete, when the user attempts final assembly, then the system prevents assembly and alerts the user.
**Source:** Persona and personal experience assembling final video projects.

---

### FR-NAV-06
**Requirement:** The user shall be able to navigate between capstone sections using a simple sidebar or menu.
**Priority:** Must
**Rationale:** Users lose time searching for where they left off; navigation reduces confusion.
**AC‑FR‑NAV‑06‑1:** Given the user is drafting a section, when they click another section in the sidebar, then the system displays that section’s content.
**AC‑FR‑NAV‑06‑2:** Given the user has unsaved changes, when they attempt to navigate away, then the system warns them before switching sections.
**Source:** Interview with Mike (2026‑09‑01) + personal experience.

---

### FR-SEC-07
**Requirement:** The user shall be able to view each section’s status (draft, in‑review, final) at a glance.
**Priority:** Must
**Rationale:** Users need a clear overview to avoid redoing completed work.
**AC‑FR‑SEC‑07‑1:** Given a section has a saved status, when the user opens the project map, then the status appears next to the section name.
**AC‑FR‑SEC‑07‑2:** Given a section has no status, when the user opens the project map, then the system displays “Not started.”
**Source:** Interview evidence about losing track of progress.

---

### FR-HIST-08
**Requirement:** The user shall be able to view a simple revision history for each section.
**Priority:** Should
**Rationale:** Users often forget what they changed and why.
**AC‑FR‑HIST‑08‑1:** Given revision notes exist, when the user opens the history panel, then the system displays a list of past changes.
**AC‑FR‑HIST‑08‑2:** Given no revision notes exist, when the user opens the history panel, then the system displays “No revisions yet.”
**Source:** Interview + personal experience.

---

### FR-SAVE-09
**Requirement:** The users system shall auto‑save section drafts every 30 seconds.
**Priority:** Must
**Rationale:** Prevents loss of work when switching sections or closing the app.
**AC‑FR‑SAVE‑09‑1:** Given the user is typing, when 30 seconds pass, then the system saves the draft automatically.
**AC‑FR‑SAVE‑09‑2:** Given the system auto‑saves, when the user closes the app, then the latest draft is available on next open.
**Source:** Personal experience losing drafts.

---

### FR-LOAD-10
**Requirement:** The user shall be able to reopen any previously saved draft.
**Priority:** Must
**Rationale:** Users need continuity across work sessions.
**AC‑FR‑LOAD‑10‑1:** Given a saved draft exists, when the user opens a section, then the system loads the latest version.
**AC‑FR‑LOAD‑10‑2:** Given no saved draft exists, when the user opens a section, then the system displays a blank draft.
**Source:** Interview evidence.

---

### FR-VIEW-11
**Requirement:** The user shall be able to view a full project overview showing all sections and their statuses.
**Priority:** Must
**Rationale:** Helps users understand workload and remaining tasks.
**AC‑FR‑VIEW‑11‑1:** Given sections exist, when the user opens the overview, then all sections appear with their statuses.
**AC‑FR‑VIEW‑11‑2:** Given no sections exist, when the user opens the overview, then the system displays “No sections created.”
**Source:** Interview + personal workflow.

---

### FR-CHECK-12
**Requirement:** The user shall be able to follow a guided checklist for each section.
**Priority:** Must
**Rationale:** Reduces confusion about what belongs in each part of the capstone.
**AC‑FR‑CHECK‑12‑1:** Given a checklist exists, when the user opens a section, then the checklist appears.
**AC‑FR‑CHECK‑12‑2:** Given the user marks an item complete, when they reopen the section, then the item remains marked.
**Source:** Interview evidence about redoing steps.

---

### FR-FLOW-13
**Requirement:** The user shall be able to see which sections depend on others.
**Priority:** Should
**Rationale:** Helps users understand logical order and avoid writing out of sequence.
**AC‑FR‑FLOW‑13‑1:** Given dependencies exist, when the user opens the flow map, then arrows show the relationships.
**AC‑FR‑FLOW‑13‑2:** Given no dependencies exist, when the user opens the flow map, then the system displays “No dependencies.”
**Source:** Personal experience + project map design.

---

### FR-WARN-14
**Requirement:** The system shall warn the user when a section is missing required elements.
**Priority:** Should
**Rationale:** Prevents incomplete sections from reaching final assembly.
**AC‑FR‑WARN‑14‑1:** Given a required element is missing, when the user attempts to mark a section “final,” then the system displays a warning.
**AC‑FR‑WARN‑14‑2:** Given all required elements exist, when the user marks a section “final,” then the system accepts the status.
**Source:** Personal experience.

---

### FR-TAG-15
**Requirement:** The user shall be able to tag sections with custom labels (e.g., “research,” “needs review”).
**Priority:** May
**Rationale:** Helps organize work and highlight priorities.
**AC‑FR‑TAG‑15‑1:** Given the user adds a tag, when they reopen the section, then the tag appears.
**AC‑FR‑TAG‑15‑2:** Given the user removes a tag, when they reopen the section, then the tag is gone.
**Source:** Personal workflow.

---

### FR-SORT-16
**Requirement:** The user shall be able to sort sections by status or tag.
**Priority:** May
**Rationale:** Helps users focus on unfinished or high‑priority work.
**AC‑FR‑SORT-16‑1:** Given sections exist, when the user selects “Sort by status,” then the system orders them accordingly.
**AC‑FR‑SORT-16‑2:** Given tags exist, when the user selects “Sort by tag,” then the system groups sections by tag.
**Source:** Personal workflow.

---

### FR-HELP-17
**Requirement:** The user shall be able to open a help panel explaining each feature.
**Priority:** May
**Rationale:** Reduces confusion for new users and future maintainers.
**AC‑FR‑HELP-17‑1:** Given the user clicks “Help,” when the panel opens, then the system displays explanations for core features.
**AC‑FR‑HELP-17‑2:** Given the user closes the panel, when they return to the main screen, then the help panel is hidden.
**Source:** Maintainer needs + personal experience.

---

### FR-SET-18
**Requirement:** The user shall be able to adjust basic settings (theme, autosave interval).
**Priority:** May
**Rationale:** Supports accessibility and user preference.
**AC‑FR‑SET-18‑1:** Given the user changes a setting, when they reopen the app, then the setting persists.
**AC‑FR‑SET-18‑2:** Given the user resets settings, when they confirm, then all settings return to default.
**Source:** Personal experience.

---

## Maintainer-Focused Requirements

### FR-DOC-19
**Requirement:** The next maintainer shall be able to access documentation describing project structure and features.
**Priority:** May
**Rationale:** Maintainers need clarity to avoid breaking workflows.
**AC‑FR‑DOC-19‑1:** Given documentation exists, when the maintainer opens /docs, then the structure overview is present.
**AC‑FR‑DOC-19‑2:** Given documentation is missing, when the maintainer opens /docs, then the system displays a placeholder.
**Source:** Maintainer persona.

---

### FR-TRACE-20
**Requirement:** The next maintainer shall be able to trace each requirement to its implementation.
**Priority:** Must
**Rationale:** Ensures maintainability and prevents regressions.
**AC‑FR‑TRACE-20‑1:** Given a requirement ID exists, when the maintainer searches the repo, then at least one reference appears in code or docs.
**AC‑FR‑TRACE-20‑2:** Given a requirement is removed, when the maintainer checks the trace table, then the requirement is marked deprecated.
**Source:** Maintainer persona.

---

### FR-CONF-21
**Requirement:** The system shall include a configuration file for environment‑specific settings.
**Priority:** Should
**Rationale:** Maintainers need a predictable place to adjust settings.
**AC‑FR‑CONF-21‑1:** Given the maintainer opens the config file, when they edit a value, then the system uses the new value..
**AC‑FR‑CONF-21‑2:** Given the config file is missing, when the system starts, then it uses default settings.
**Source:** Maintainer persona.

---

### FR-TEST-22
**Requirement:** The system shall include a basic test suite for core features.
**Priority:** Should
**Rationale:** Maintainers need confidence when modifying code.
**AC‑FR‑TEST-22‑1:** Given tests exist, when the maintainer runs the test suite, then core features are validated.
**AC‑FR‑TEST-22‑2:** Given a test fails, when the maintainer checks logs, then the failing feature is identified.
**Source:** Maintainer persona.

---

## Persona 1

**Persona Name:** Reg
**Role:** Video content creator completing a capstone project.
**Goals:** 
- Keep track of section progress without losing notes.
- Draft sections in a structured, guided way.
- See what is finished and what still needs work.
**Frustrations:** 
- Scattered notes across tools.
- Rewriting sections because he forgets what was done.
- No clear workflow from idea > draft > final deliverable.
**Evidence (interview, observation, personal experience):** Interview with Mike on 2026‑09‑01; personal experience organizing video projects.
**Connected Requirements:** FR‑MAP‑01, FR‑DRAFT‑02, FR‑PROG‑03, FR‑REV‑04, FR‑ASM‑05, FR‑NAV‑06, FR‑SEC‑07, FR‑HIST‑08, FR‑SAVE‑09, FR‑LOAD‑10, FR‑VIEW‑11, FR‑CHECK‑12, FR‑FLOW‑13, FR‑WARN‑14, FR‑TAG‑15, FR‑SORT‑16, FR‑HELP‑17, FR‑SET‑18.

Reg’s workflow shows that managing multiple tools (Vont, CapCut, Canva) makes organization difficult, which directly influences requirements related to mapping, drafting, tracking, revising, and assembling project sections.

---

## Persona 2

**Role:** Developer inheriting the repository after the original author.
**Goals:** 
- Understand project structure quickly.
- Maintain and extend features without breaking core workflows.
- Trace requirements back to evidence and rationale.
**Frustrations:** 
- Missing documentation.
- Requirements that don’t map to code.
- Features that behave differently than described.
**Evidence (interview, observation, personal experience):** Needs identified during capstone planning and repository organization.
**Connected Requirements:** FR‑DOC‑19, FR‑TRACE‑20, FR‑CONF‑21, FR‑TEST‑22.

---

## Persona 3

**Role:** Student writing a capstone paper instead of video content.
**Goals:** 
- Organize sections and track progress.
- Capture feedback and revisions.
**Frustrations:** 
- Losing track of drafts.
- Confusion about what is finished.
**Evidence (interview, observation, personal experience):** Personal experience + interview themes.
**Connected Requirements:** FR‑MAP‑01, FR‑DRAFT‑02, FR‑PROG‑03, FR‑REV‑04, FR‑ASM‑05.

---

## Out of Scope (the Won't-Have List)

| Not building | Why not | Revisit when |
|---|---|---|
| Mobile app | The first release is focused on the web version and the core workflow. | Revisit after the web version is complete and tested. |
| Social or multiplayer features | Collaboration is outside the core content-creation workflow. | Revisit if a future version needs multiple users working together. |
| Login/account system | Accounts are not necessary for the core capstone workflow. | Revisit if multiple-user access becomes necessary. |
| Full video/audio editor | Building a professional editing system would make the project too large. | Revisit if the core workflow is complete and there is enough remaining capacity. |
| Social-media publishing | Publishing directly to outside platforms is not part of organizing and assembling the capstone deliverable. | Revisit if the core project is complete and publishing becomes a documented user need. |
