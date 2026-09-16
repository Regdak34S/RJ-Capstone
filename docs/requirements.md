## Functional Requirements


### FR-MAP-01
**Requirement:** Jayden shall be able to create new content maps using a Capstone-supported computer during development.
**Priority:** Must - because the project cannot begin without creating a content map.
**Rationale:** This requirement ensures the user can organize their capstone sections before drafting begins.
**Acceptance Criteria:** 
- Given the user is starting a new capstone project, when they create a content map, then the system stores the new map and displays it in the project dashboard.
- Given the user attempts to create a content map without entering any section names, when they submit the map, then the system warns them that the map cannot be empty.
**Source:** Interview and personal experience with organizing video projects.

---

### FR-DRAFT-02
**Requirement:** Daniel shall be able to draft or edit later project sections on a checklist, and the next day the user opens a section. 
**Priority:** Must - because drafting and saving work is essential for progress.
**Rationale:** This requirement prevents users from losing drafted content when working across tools like Vont, CapCut, and Canva.
**Acceptance Criteria:** 
- Given a section exists in the checklist, when the user drafts or edits the section, then the system saves the updated content.
- Given the user closes the project without saving, when they reopen the section the next day, then the system shows the last saved version only.
**Source:** Personal experience with losing edits in video apps.

---

### FR-PROG-03
**Requirement:** Bryson shall be able to make project Updates for the progress section status in review. Only this user marks the section.
**Priority:** Must.
**Rationale:** This requirement supports clear visibility of section status, similar to how video editors show progress stages.
**Acceptance Criteria:** Users' acceptance criteria are already valid.
**Source:** Interview and workflow observation.

---

### FR-REV-04
**Requirement:** Aisha shall be able to add or review other users' feedback with Revision notes or version history on paper. Only this user can make these notes when revising a section of the project.
**Priority:** Should - because revision tracking is important but not required for the first working version.
**Rationale:** This requirement mirrors how video apps track edits, versions, and feedback during revision.
**Acceptance Criteria:** 
- Given a section has feedback notes, when the user opens the revision panel, then the system displays all notes and version history.
- Given no revision notes exist, when the user opens the revision panel, then the system shows an empty state message.
**Source:** Persona and interview evidence about revision challenges.

---

### FR-ASM-05
**Requirement:** Victor shall be able to assemble all the final deliverable project sections for completion. Before presenting, all sections must be marked complete.
**Priority:** Must
**Rationale:** no revision notes This requirement ensures the user can combine all completed sections into a final deliverable, similar to exporting a finished video.
**Acceptance Criteria:** 
- Given all sections are marked complete, when the user assembles the final deliverable, then the system generates the final project file.
- Given at least one section is incomplete, when the user attempts final assembly, then the system prevents assembly and alerts the user.
**Source:** Persona and personal experience assembling final video projects.

---

### AC-FR-PROG-03-1
Given the project contains multiple sections.
When the user updates the status of a section
Then the system reflects the new status in the progress view

### AC-FR-PROG-03-2
Given the project contains no sections.
When the user opens the progress view
Then the system displays that no sections exist

---

## Persona

**Persona Name:** Reg
**Role:** Video Designer
**Goals:** Set Video Presentation Before Week 15
**Frustrations:** Using multiple programs can make the process confusing and difficult to manage.
**Evidence (interview, observation, personal experience):** Creating video content can take a lot of time, especially when planning, editing, and organizing everything. Video creators often have to use multiple tools for recording, editing, audio, and organizing their content.
**Connected Requirements:** The project should make it easier to manage different parts of a video, such as scripts, audio, visuals, and editing.

Reg’s workflow shows that managing multiple tools (Vont, CapCut, Canva) makes organization difficult, which directly influences requirements related to mapping, drafting, tracking, revising, and assembling project sections.

---

## Out of Scope (the Won't-Have List)

| Not building | Why not | Revisit when |
|---|---|---|
| Mobile app | The first release is focused on the web version and the core workflow. | Revisit after the web version is complete and tested. |
| Social or multiplayer features | Collaboration is outside the core content-creation workflow. | Revisit if a future version needs multiple users working together. |
| Login/account system | Accounts are not necessary for the core capstone workflow. | Revisit if multiple-user access becomes necessary. |
| Full video/audio editor | Building a professional editing system would make the project too large. | Revisit if the core workflow is complete and there is enough remaining capacity. |
| Social-media publishing | Publishing directly to outside platforms is not part of organizing and assembling the capstone deliverable. | Revisit if the core project is complete and publishing becomes a documented user need. |
