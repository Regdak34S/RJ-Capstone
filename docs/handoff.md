# Handoff Guide — <Project Name>



Audience: the engineer who inherits this project and **cannot ask you a question.**

---

## 0. Thirty-second orientation

- **What it is:** <one sentence a non-specialist understands>
- **Who uses it:** <the real users, not "anyone">
- **Status as of <date>:** <shipped / prototype / paused>, version <v1.0.0>
- **Deployed at:** <URL, or "not deployed — runs locally; see docs/deployment.md">
- **Start here:** `README.md` to run it, `docs/architecture.md` to understand it,
  this file to take it over.

## 1. Day one — get it running (target: under 30 minutes)

| Step | Command | Expected result | If it fails |
|---|---|---|---|
| 1 | `<clone command>` | <n> files | — |
| 2 | `<setup command>` | ends with `<exact success line>` | <the one likely cause> |
| 3 | `<config step>` | `.env` filled from `.env.example` | see §3 for who owns each key |
| 4 | `<run command>` | <exact output or URL> | see `docs/runbook.md` §<n> |
| 5 | `<smoke test command>` | <n> tests pass in <n>s | — |

## 2. Week one — a ramp that ends in a merged change

1. **Read** `docs/architecture.md` (20 min) and the ADR index in `docs/adr/`.
2. **Trace one request** end to end: <name the path, e.g. "scan a barcode">.
   Files in order: <file> → <file> → <file>.
3. **Fix the starter issue:** <#issue> — small, real, has acceptance criteria, and
   touches <n> files. It is labeled `good-first-issue` on purpose.
4. **Ship it:** branch, test, open a pull request, watch CI, merge, tag if needed.

## 3. Accounts, keys, and who pays for what

| Thing | Where it lives | Currently owned by | Cost | Rotation / transfer step |
|---|---|---|---|---|
| Source repository | <host/org/repo> | <name> | <free tier> | Transfer ownership, then re-add CI secrets |
| Deploy target | <host> | <name> | <amount / period> | <exact step> |
| Database | <host> | <name> | <amount / period> | Backups: <where, how often, restore command> |
| `<THIRD_PARTY_API_KEY>` | host secret store + `.env` | <name> | <plan> | Revoke old key AFTER the new one is live |
| `<MODEL_API_KEY>` | host secret store | <name> | usage-based | See §6 |

> Every row with a person's name in it is a liability. Before this project is
> truly handed off, every one of those names must change.

## 4. Landmines — things that will bite you

<At least five. Each: what looks broken, what is actually happening, what to do.>

1. **<Symptom>.** Actually: <cause>. Do: <fix>. (Tracked as <#issue>.)
2. …

## 5. Known defects and deferred work

Pull the live list from the issue tracker; this is the shape of it as of <date>.

| ID | Severity | Summary | Why it is still open |
|---|---|---|---|
| DEF-0xx | <sev> | <one line> | <deliberate deferral, with the reason> |

## 6. AI dependencies (delete only if there are none)

- **Where the system calls a model:** <feature> → <file:function>
- **Model pinned to:** `<provider>:<exact model/version string>`, set via `<ENV VAR>`
- **Prompts live in:** <path> — they are code; change them through review.
- **Behavior you must NOT assume is stable:** <what drifts if the model changes>
- **If the model is retired or the key is revoked:** <the documented fallback —
  ideally the feature degrades and the rest of the app keeps working>
- **Cost owner and budget alarm:** <name>, <threshold>, <where the alert goes>
- **Evaluation to re-run after any model change:** <command / fixture set>

## 7. What only I know (bus-factor register)

| Knowledge | Consequence if lost | Now written down at |
|---|---|---|
| <the thing> | <what breaks> | <file + section> |

## 8. If nobody picks this up

<What happens to the deployment, the data, and the accounts. Who archives the
repo, when, and what the deprecation notice in `README.md` should say.>

---

**Maintainer of record:** <name> · **Handoff date:** <date> · **This file last verified against a real run on:** <date>
