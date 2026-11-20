# The Clean-Machine Test — Protocol and Observer Log


## Rules

1. **A clean machine.** A fresh container, a fresh cloud development environment, a classmate's laptop, or
   a new user account on your own machine. Nothing your project installed is already there.
2. **A real tester who is not you.** Someone who has never run this project.
3. **You are silent.** You may watch. You may not speak, point, type, or "just fix that one thing."
   The moment you help, the test is over and the result is void.
4. **The docs are the only input.** The tester gets the repository URL and nothing else. No verbal setup,
   no Discord message, no "oh you also need to…".
5. **The clock runs** from the moment the tester opens the repository to the moment they complete the
   acceptance action in section 3. Stop the clock at 60 minutes and record the failure.
6. **Every stumble gets logged**, including the ones that are the tester's fault. Especially those.

## 1. Run header

| Field | Value |
|---|---|
| Date | |
| Tester name | |
| Tester's background | (e.g. "CS senior, has never used this stack") |
| Machine / OS / architecture | |
| Environment type | fresh container / cloud dev environment / borrowed laptop / new user account |
| Repository URL and commit SHA | |
| Observer (you) | |

## 2. Stopwatch

| Checkpoint | Target | Actual | Notes |
|---|---|---|---|
| Repository opened | 0:00 | | |
| Prerequisites installed / confirmed | 0:05 | | |
| Dependencies installed | 0:08 | | |
| Configuration complete (`.env` filled) | 0:11 | | |
| Application running | 0:13 | | |
| **Acceptance action completed** | **0:15** | | |
| Test suite run and green | 0:20 | | |

## 3. The acceptance action

The single, concrete thing that proves the system works — not that it started. Write it before the run.

> Acceptance action: {{e.g. "Add one item with an expiry date, then see it appear in the
> Expiring Soon list."}}

Result: PASS / FAIL. If FAIL, at which checkpoint did it stop?

## 4. Friction log

One row per stumble. Write the tester's exact words when you can.

| # | Time | What the tester did or said | Root cause in the docs | Severity (blocker / slow / cosmetic) |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

Severity definitions: **blocker** = could not proceed without help; **slow** = proceeded but lost time or
guessed; **cosmetic** = noticed something wrong that did not cost time.

## 5. Fixes applied

| Friction # | Document changed | Change made | Commit |
|---|---|---|---|
| | | | |

## 6. Re-run

After fixing, run the test again — a second clean environment, ideally a second tester.

| Field | Value |
|---|---|
| Date of re-run | |
| Tester | |
| Time to acceptance action | |
| Remaining blockers | |

## 7. Signed statement

> On {{date}}, {{tester name}} cloned this repository onto {{machine}} and, using only the documentation
> in this repository, reached {{the acceptance action}} in {{N}} minutes without assistance from the author.

Anything you cannot honestly write in that sentence, you have not yet earned.
