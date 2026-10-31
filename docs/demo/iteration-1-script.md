# Demo script — Iteration 1

**Target length:** ~5 minutes  
**Seed:** `seed/project.json` (loaded via `ensureSeeded` into localStorage)  
**Requirements closed:** FR-VIEW-11, FR-SEC-07, FR-MAP-01, FR-DRAFT-02, FR-PROG-03, FR-SAVE-09, FR-LOAD-10 (thin+core)

## Pre-flight

```bash
# optional reset for a clean demo
# In browser console: localStorage.removeItem('ccp:project:v1'); location.reload()
bash script/setup
bash script/start
# open http://127.0.0.1:8080/
```

## Script

**0:00**  
“Content Creation Project, iteration one. Closed: view sections with status, add a section, edit a draft, change status, and save so it survives reload. Starting from the committed seed — Introduction (draft) and Methods (not_started).”

**0:40**  
Point at the section list. Introduction shows `draft`, Methods shows `not_started`. That is FR-VIEW-11 and FR-SEC-07.

**1:10**  
Click **Introduction**. Draft panel opens with the seeded body text. Change one sentence in the textarea. Save button shows `Save*`. Click **Save**. Banner shows saved timestamp. FR-DRAFT-02 + FR-SAVE-09.

**2:00**  
Change **Status** to `in_review`. Banner confirms. List row updates to `Introduction — in_review`. FR-PROG-03.

**2:30**  
**Add section** name `Results` → Add. New row appears `Results — not_started`. FR-MAP-01.

**3:00**  
**Failure path:** clear the add-section field and submit (or type spaces). Banner shows `EMPTY_SECTION_NAME`. That is why the empty-name criterion exists.

**3:25**  
Reload the page. Introduction still `in_review`, Results still present, draft body still there. FR-LOAD-10 / NFR-REL-02.

**3:50**  
Terminal: `bash script/test` — all unit tests green (store + project-service).

**4:10**  
“Not done: checklist (FR-CHECK-12), assemble Markdown (FR-ASM-05), dirty-nav force flag (FR-NAV-06 full), revision history (FR-HIST-08). Scheduled Weeks 11–12. Should-haves cut first if time slips.”

**4:40**  
Stop talking.

## Fallback

Screen recording of this script on seeded data, saved before the live session.
[iteration-1-script.md](https://github.com/user-attachments/files/34227152/iteration-1-script.md)

