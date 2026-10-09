# AI Usage Log 

**Owner:** Reggie Johnson  
**Policy set:** August 25, 2026  
**Last entry:** October 9, 2026

## Policy

**Spine rule.** The human stays in the loop where the judgment lives. AI accelerates; I decide, I verify, and I am accountable for everything in this repository.

**The line I do not cross.** I will not delegate a judgment I cannot defend. If I cannot explain a decision in this repository in my own words, under questioning, without the tool in front of me, it does not go in.

### Tools I have decided to use

| Tool / product | Model or version, as best I can name it | What I will use it for | What I will never use it for |
| --- | --- | --- | --- |
| ChatGPT | GPT-5.6 Luna | Suggesting approaches for code and helping with project planning | I will not submit AI-generated decisions, reflections, or personal charter sections as my own without doing the required thinking and verification. |

### Zones

| Zone | Covers | What I owe |
| --- | --- | --- |
| Green (assistive) | Error-message explanation, reformatting, grammar, boilerplate I fully understand, rubber-ducking a design I already drafted | Nothing; work normally |
| Amber (generative) | Proposed approaches, scaffolded code I keep, generated tests, proposed architecture, documentation prose | One row in the table below, the day it happens |
| Red (prohibited) | Generated decision records, memos, or reflections submitted as mine; a choice I cannot defend; another person's private data or a classmate's unsubmitted work; code I cannot explain | Do not |

### Disclosure

Every Amber-zone use appears below. Generated code that survives into `src/` carries a comment naming the date of the log entry that covers it. Nothing in `docs/adr/`, the memos, or the reflections is generated text.

## Entries

| Date | Tool / model | What I asked | What I kept | What I changed | How I verified |
| --- | --- | --- | --- | --- | --- |
| August 25, 2026 | ChatGPT / GPT-5.6 Luna | Helped identify missing Week 1 repository requirements and organize the setup based on the course instructions. | The repository structure and planning checklist ideas. | I supplied my own schedule, non-goals, risks, and other personal constraints. | I compared the result against the assignment requirements and will review each. I independently reviewed the repository file before submitting it. |
| August 29, 2026 | ChatGPT / GPT-5.6 Luna | Asked for suggestions on how to construct the Week 1 project board with the required columns, WIP limit, cards, estimates, hats, and stopping conditions. | I reviewed the suggested board organization and decided to use it. | I created and arranged the board myself and made sure the cards matched the assignment requirements. | I compared the board against the Milestone 1 requirements and checked that it had five columns, a WIP limit of 2, and at least six cards. |
| September 13, 2026 | ChatGPT / GPT-5.6 Luna | Reviewed the Week 3 repository against the provided checklist and identified missing/inconsistent files and sections. | Structural fixes, consistency checks, and placeholders that clearly mark information I must supply myself. | I did not use AI to invent interview answers, quotes, actual hours, dependency-test results, or personal project decisions. | I will replace all placeholders with my actual records and verify the repository against the Week 3 requirements before submission. |
| September 14, 2026 | ChatGPT / GPT-5.6 Luna | Reviewed Week 4 checklist and enumerated candidate NFRs across the eight categories with metric/threshold/condition/method. | Candidate NFR list and category distribution that I reviewed. | I chose the final set of 13 NFRs myself, rejected any multi-user security requirement that conflicted with the out-of-scope “no login/account system,” and wrote the actual thresholds and measurement methods. | Compared each NFR against the assignment rules (12+ NFRs, ≥6 categories, measurable) and against my own project scope. |
| September 15, 2026 | ChatGPT / GPT-5.6 Luna | Asked for help structuring constraints, assumptions, dependencies, obligations, and the privacy data inventory. | Table formats and reminder of required fields (owner/verify-by/consequence, primary-source URL, etc.). | I supplied the actual constraints from the charter, wrote the assumptions and dependencies myself, and verified the MIT license at the primary source. | Checked each entry against the nfr-template.md requirements and the project’s real capacity/budget/out-of-scope list. |
| September 16–26, 2026 | ChatGPT / GPT-5.6 Luna | Reviewed the incomplete traceability matrix and Definition of Done template; asked for structure of replacement rows and checklist items for Week 4-5. | Matrix column reminders and Definition of Done honesty-rule guidance. | I replaced every PantryPilot sample row with my own 22 FRs + NFRs, removed the deliberate duplicate, wrote the DoD items I will actually enforce, and updated README links myself. | Ran `python docs/check-traceability.py docs/traceability-matrix.csv` and verified the matrix and DoD against the assignment checklist. |
| October 8–9, 2026 | Grok (xAI) | Asked for help turning the Week 6 architecture and requirements into a Week 7 WBS structure, risk register phrasing, and checklist of required plan sections. | Task decomposition ideas, risk cause→event→consequence wording, and reminder of capacity vs effort arithmetic. | **All O / M / P hour figures are mine.** I rejected any AI-suggested durations. I chose the calibration factor (1.15), buffer rate, capacity losses, scope cuts, and every risk score/trigger/response. I wrote the burn-down numbers and scope-decision sentence. | Compared plan.md against Milestone 7 rubric (25+ tasks, 6+ WPs, three-point E, capacity, buffer, burn-down, scope decision). Confirmed the risk register has 8 risks across categories with triggers and funded responses. |
