# RJ-Capstone — Content Creation Project

**Author:** Reggie Johnson  
**Stack (ADR 0001–0004):** Vanilla HTML/CSS/JavaScript · browser `localStorage` · GitHub Pages (static) · build, do not buy.

A single-user tool to organize a content map, draft sections, track status, save/reload locally, and (planned) assemble a capstone deliverable.

**Release candidate tag target:** `v0.9.0-rc.1`  
**Suite:** `bash script/test` → **29** tests (unit + integration + acceptance)

---

## Current milestone — Week 13: Documentation Set & the Clean-Machine Test

**Status:** {{Working / Partially working — say plainly what does not work yet}}
**Built by:** {{Your name}} · {{Course, term}}

## 1. What this is and who it is for

{{2–4 sentences: the problem, the user, the thing it replaces. A reader who stops here should be able
to decide whether to keep reading.}}

**What it does not do:** {{2–3 honest non-goals. This is the part that earns trust.}}

## 2. Demo

{{Screenshot, animated GIF, or a 60–90 second recording; for a CLI, a real terminal session. Commit the
image under `docs/img/` and use a relative path so it renders on GitHub.}}

## 3. Prerequisites

| Requirement | Version built and tested on | Check it with | What breaks without it |
|---|---|---|---|
| {{Runtime}} | {{exact version}} | `{{cmd --version}}` | {{symptom}} |
| {{Database}} | {{exact version}} | `{{cmd --version}}` | {{symptom}} |
| {{Account/key}} | n/a | see Configure | {{degraded behavior}} |

## 4. Install

```
{{clone command}}
cd {{repo-dir}}
{{dependency install command}}
```

Expected: {{the last line of successful output, or the artifact that now exists}}.
Takes about {{N}} minutes on a first run.

## 5. Configure

```
cp .env.example .env
```

| Variable | Required? | What it is | Default |
|---|---|---|---|
| `{{VAR}}` | yes | {{plain-English meaning}} | none |
| `{{VAR}}` | no | {{plain-English meaning}} | `{{default}}` |

Never commit `.env`. Placeholder values only in this file and in `.env.example`.

## 6. Run

```
{{setup / migration command}}
{{run command}}
```

Expected: {{exact success line}} — then open {{URL}} and you should see {{what}}.

**Verify it actually works:** {{one concrete action a stranger can take — create a record, run a query —
and the result they should get. This is the difference between "it started" and "it works."}}

## 7. Test

```
{{test command}}
```

Expected: {{N}} tests, {{N}} passing, {{N}} skipped, about {{N}} seconds.
Known failing/skipped tests and why: {{list, or "none"}}.

## 8. Project layout

```
{{dir}}/     {{what lives here}}
{{dir}}/     {{...}}
docs/        specification, architecture, runbook, decision records
```

## 9. Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| {{exact error text}} | {{cause}} | {{command or step}} |
| {{exact error text}} | {{cause}} | {{command or step}} |

## 10. License

{{SPDX identifier}} — see `LICENSE`.

## 11. Contact and further reading

{{How to reach you}} · Architecture: `docs/architecture.md` · Operations: `docs/runbook.md` ·
Decisions: `docs/adr/README.md` · New here? `docs/onboarding.md`

## Project board

https://github.com/users/Regdak34S/projects/1

