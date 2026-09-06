# Project Charter - Reginald Johnson

<!--
  Milestone 1 template. Copy this file into your repository as docs/charter.md,
  delete the HTML comments, and answer every prompt in your own words.

  This charter is written in Week 1, BEFORE you have chosen an idea. That is
  deliberate. It is a charter for YOU and for the sixteen weeks — capacity,
  constraints, non-goals, risks, and the rules you agree to work under. In
  Week 2, after the scoping decision, you add the project itself in §2 and
  re-date the file. Never delete the original text; strike it through or keep
  it in a "superseded" block. A charter with a visible history is worth more
  than a charter that has always been right.
-->

**Owner:** Reggie · **Course:** Capstone · **Started:** 2026-08-25 · **Last revised:** 2026-09-05

## 1. Purpose

<!-- Two or three sentences. Why does this capstone exist for you, and what
     will be true at the end that is not true now? Verifiable, not aspirational.
     BAD:  "To build an impressive project that shows my skills."
     GOOD: "To ship one small system that a stranger can clone, run from the
            README, and extend — and to produce the requirements, design, test,
            and handoff documents a professional team would expect alongside it." -->
The purpose of this capstone is to give me experience managing and completing a software project from the beginning through the end of the semester. By the end of the sixteen weeks, I want to have a completed project with the required documentation, testing, and repository organization so that someone else can understand what I built and how I worked on it.

## 2. Project

- **One-sentence description:** I will create a small Content Creation Project that helps a student organize, draft, track, revise, and assemble a capstone deliverable from scattered ideas and section drafts.
- **Primary user:** A student completing a capstone deliverable who needs a clear, repeatable way to move from rough ideas to a finished document.
- **The one thing it must do to be worth finishing:** It must let the primary user organize the major sections of a deliverable, work through the required sections, see their progress, and assemble the completed sections into one final deliverable. The core workflow must work reliably before optional features are added.

## 3. Capacity and constraints

| Constraint | My reality |
|---|---|
| Hours available per week | Approximately 8 hours and 50 minutes |
| Total hours budgeted | Approximately 141 hours and 20 minutes |
| Weeks that are already broken (and where those hours move) | Week 8 may be disrupted by fall break. I will move the planned work into Week 7 and complete the highest-priority tasks before the break. Week 11 may also be disrupted by other coursework, so I will move part of that week's planned work into Weeks 9 and 10. If I cannot make up the time, I will follow my cut order in §7 and cut advanced functionality first. |
| Machine (OS, RAM, disk) | Windows Laptop, 8 GB RAM, 119 GB SSD |
| Administrator rights on that machine? | yes |
| Money I will spend on this project | $0 |
| Technologies I already know well | ArcGIS Pro, MySQL, and Photoshop |
| Technologies I am willing to learn (max two) | Linux and JavaScript |
| Hard external deadlines besides this course | None currently known |

## 4. Definition of finished

<!-- Write the acceptance test for the whole semester, as something someone
     else could check without asking you a question. Three to six bullets. -->
    - The Content Creation Project's core workflow is completed and works according to the requirements decided in Week 2.
    - The required documentation has been completed and is organized in the repository.
    - The project has been tested, and the results are documented.
    - The README explains what the project is and how someone else can understand or run it.
    - The repository contains the required project files and has a clean, organized structure.

## 5. Non-goals - what I will NOT build or do

<!-- At least five. Non-goals are the only part of this charter that can stop a
     bad decision in Week 10, so make them specific enough to point at.
     BAD:  "I won't over-engineer it."
     GOOD: "I will not build a mobile client. Web only, one browser target." -->

1. I will not build multiplayer functionality.
2. I will not add a social or login system.
3. I will not make content creation a separate part of the project.
4. I will not spend a large amount of time creating complicated animations.
5. I will not keep adding features after the main project requirements have been decided.

## 6. Risks to me finishing

| # | Risk | Likelihood (L/M/H) | Impact (L/M/H) | Early warning sign | What I will do |
|---|---|---|---|---|---|
| R1 | Losing track of requirements | M | H | I realize I am working on something that is not connected to a documented requirement | I will review the requirements before starting new work and update my task board |
| R2 | Getting stuck on one feature | M | H | I keep spending time on the same feature without making enough progress | I will stop and review the task, break it into smaller steps, and move to another task if I cannot make progress |
| R3 | Difficulty estimating how long something takes | H | M | A task takes much longer than the estimate I made before starting it | I will compare my estimate with my actual time and use that information when estimating future tasks |

## 7. Working agreement

- **Sessions:** Monday–Thursday, 2:30 PM-4:00 PM; Friday, 10:05 AM-10:55 AM; Saturday–Sunday, 3:00 PM-4:00 PM.
- **Logging:** every session ends with a row in `docs/hours-log.csv`, written before I close the laptop.
- **Board:** work-in-progress limit of 2; nothing moves to Done without its stopping condition met.
- **Commits:** requirement identifier first in the subject line; one logical change per commit.
- **When I fall behind, I cut in this order:** advanced functionality first, then optional features, then extra visual polish. I will not cut the required core functionality or required course documentation.
- **AI use:** governed by `docs/ai-usage.md`; every Amber-zone use is logged the day it happens.

## 8. Signature

I have counted the cost of this work as honestly as I can today, and I accept the
schedule above.

Reginald Johnson, 2026-09-05
