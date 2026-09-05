# Scoping Decision — Captone Content Creation Project



**Author:** Reginald Johnson ·  **Date:** 2026-09-05 ·  **Course week:** 2

---

## 1. Problem

A student trying to finish a capstone often sits down with scattered notes, half-formed ideas, and no clear path from rough thoughts to a polished, coherent document. Under deadline pressure, they jump between sections, rewrite the same parts, and lose track of what is done, wasting hours-easily 10-15 per major deliverable-on confusion instead of progress. The usual workaround is to copy old assignments or past projects as a loose template, but that leads to mismatched structure, missing sections, and content that feels forced rather than tailored to the current project. Because that workaround never shows where the gaps are or how much work remains, the student keeps guessing, overworking some parts and neglecting others, and the final result suffers in clarity and confidence.

## 2. Evidence a user exists

Interviewed rj on 2026-09-01, 30 minutes, past-tense questions only.
Full write-up in `docs/interviews/<YYYY-MM-DD>-<initials>.md`.

- "I kept rewriting the same sections because I couldn’t see what was actually finished and what was still a draft."
- "When I borrowed structure from old assignments, it never quite fit this project, so I spent more time fixing the template than writing."
- "I felt like I was guessing my way to the final document instead of following a clear, repeatable process."

<If your project has no user but you, say so here in one sentence and substitute a
competitive scan of at least three existing tools. Do not invent a user.>

## 3. Chosen scope — Must features

| # | Feature | Hours |
|---|---|---:|
| 1 | Core capstone content map (sections, dependencies, and flow) | 8 |
| 2 | Guided drafting checklist for each major section | 10 |
| 3 | Progress tracking view (draft/in-review/final per section) | 9 |
| 4 | Feedback capture and revision log for each section | 10 |
| 5 | Final assembly workflow from section drafts to one deliverable | 8 |
| | **Feature total** | 45 |
| | Walking skeleton + continuous integration | 7 |
| | Deployment + clean-machine test | 8 |
| | **Construction total** | 60 |

Plan: 60 hours. Hard ceiling: 75. My number: 60. That leaves 15 hours of slack; if I start burning into that slack, I will freeze scope and drop all “should” features before touching the must-haves.

## 4. Should features — built only if there is room

<Each with its hour cost and the week it would be built. Say plainly which one is cut
first when you fall behind.>

## 5. Out of scope — will not be built

Notifications · Mobile app version · Real-time collaboration · Integration with learning management systems · Automatic grammar correction · AI-generated content drafting · Rich analytics dashboards · Multi-user role management · Offline synchronization · Template marketplace

## 6. Accepted tradeoffs

I am deliberately keeping the progress tracking view simple, just a few states per section, rather than building a detailed workflow engine. This costs the user fine-grained control over sub-tasks and edge cases, but it keeps the system understandable and buildable within the time budget. I accepted this because the main pain is not micro-task management but seeing where the big pieces stand; I would revisit this tradeoff only if, during construction, I find myself repeatedly wanting more states or if actual use shows confusion about what each state means.

## 7. Rejected candidates

**Rejected: Automated capstone topic generator.** It failed the “user need” gate: my interview notes focused on structuring and finishing a chosen topic, not inventing one, and there was no quote asking for help picking a topic. Condition for revisiting: only if later interviews or my own experience show that topic selection is blocking progress more than content completion.

**Rejected: Deep integration with existing note-taking tools.** It failed the “scope and hours” gate; even a minimal integration with multiple tools would blow past the 75-hour ceiling and distract from the core content flow. Condition for revisiting: closed, not deferred, this belongs in a future project, not this capstone.

## 8. Hour budget, reconciled

| Weeks | Phase | Hours |
|---|---|---:|
| 1–2 | Inception | 30 |
| 3–4 | Requirements | 30 |
| 5–6 | Design | 30 |
| 7 | Planning | 15 |
| 8 | Design review + midterm | 15 |
| 9–12 | Construction + verification | 60 |
| 13 | Documentation | 15 |
| 14 | Deployment + handoff | 15 |
| 15–16 | Presentation + delivery | 30 |
| | **Total** | **240** |

My construction total of 60 hours fits inside the 60/75 line; I cut deep tool integrations and any advanced analytics features to keep construction focused on the core content map, drafting checklist, progress tracking, feedback log, and final assembly workflow.

## 9. The one hard part

The one hard part is designing the progress tracking view so that it stays simple but still reflects reality for a messy, evolving capstone. It is hard because I need to balance a small set of states with the many ways sections move forward and backward, and I must make it intuitive enough that I can trust it under deadline pressure without overbuilding a complex workflow system.

## 10. Risks and the scope-cut trigger

| Risk | Likelihood | What it costs me | Early warning sign |
|---|---|---|---|
| Underestimating construction time for the feedback log | Medium | Slips into slack and pushes should-features out | Still working on core feedback features after Week 10 |
| Losing momentum during Weeks 9–10 | High | Rushed construction and weaker verification | More than three planned work sessions skipped in a row |
| More than three planned work sessions skipped in a row | Low | Rework and broken tests | Frequent edits to the content map after Week 8 |

**Scope-cut trigger.** If the core must features are not all in a working, testable state by 2026-11-15, I will cut the export presets first, then the reflection journal view, and freeze the feature set to only what is already built and verified. Decided now, in advance, so I do not have to decide it while panicking.

---

**Signed:** Reginald Johnson, 2026-09-05
**AI use for this document:** I asked for help finishing the missing sections of my scoping decision, kept the overall structure and all project ideas as my own, and edited the wording to match my voice; this usage is recorded in `docs/ai-usage.md`assists.
