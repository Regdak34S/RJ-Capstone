# Release Checklist — v1.0.0

The release engineer's checklist. Work top to bottom. Do not skip a box because you
"know" it is fine — the whole point of a checklist is that it does not care what you
know. Copy this into your repo as `docs/release-checklist.md` and check it off in the
pull request or the release notes, so the record survives you.

Print the wall-clock time next to each phase the first time you run it. That number is
what you will quote in Week 16 when someone asks how long a release takes.

---

## Phase 1 — Freeze (before you tag anything)

- [ ] Every change intended for v1.0.0 is merged to the default branch.
- [ ] CI is green on that exact commit — not on "a commit like it."
- [ ] The full test suite passes locally *and* in CI; no skipped tests added this week.
- [ ] Every open defect is either fixed or deliberately deferred **in writing**, with
      an ID, a severity, and a one-line reason.
- [ ] `docs/requirements.md` traceability: every Must-have requirement is marked
      done, or explicitly moved out of v1.0.0 scope with a note.

## Phase 2 — Configuration and secrets

- [ ] `.env.example` lists **every** variable the app reads, with a comment per
      variable: what it does, required or optional, where to get it, safe local value.
- [ ] No real secret is in the working tree: `git ls-files | xargs grep -InE '(api[_-]?key|secret|password|token)\s*[:=]'`
- [ ] No real secret is in the history either (run your secret scanner over the repo,
      not just the checkout). If one ever was: **rotate the credential first**, then
      decide whether rewriting history is worth it.
- [ ] `.env`, credential files, and local databases are in `.gitignore`.
- [ ] Every secret the deploy needs exists in the host's secret store, not in a file.

## Phase 3 — Reproducibility

- [ ] Dependencies are pinned (lock file committed, or exact versions declared).
- [ ] The documented setup path runs from a **fresh clone** with no manual steps that
      are not written down. Time it.
- [ ] The setup path runs on an environment that is **not your development machine**.
      Record where, when, and how long it took.
- [ ] `README.md` prerequisites match reality — including versions.

## Phase 4 — Version and tag

- [ ] Version number chosen and justified (semantic versioning: MAJOR.MINOR.PATCH).
- [ ] Version string updated everywhere it appears (package metadata, `--version`
      output, an about page). Grep for the old one.
- [ ] `CHANGELOG.md` has a dated `[1.0.0]` section: Added / Changed / Fixed /
      Known issues, with requirement and defect IDs.
- [ ] Annotated tag created and pushed:
      `git tag -a v1.0.0 -m "v1.0.0 — <one line>"` then `git push origin v1.0.0`
- [ ] Release published on the tag, with notes a stranger can read, and the built
      artifact attached if your project ships one.

## Phase 5 — Legal

- [ ] `LICENSE` exists at the repository root and names a real license.
- [ ] The SPDX identifier appears in `README.md` (e.g. `MIT`, `Apache-2.0`).
- [ ] Third-party licenses inventoried in `THIRD-PARTY-NOTICES.md`; every attribution
      obligation actually satisfied.
- [ ] Your institution's intellectual-property policy checked before publishing.
      This is orientation, not legal advice — ask, in writing, and keep the answer.

## Phase 6 — Deploy and verify

- [ ] Deployed from the **tag**, not from your laptop's working copy.
- [ ] Smoke test run against the deployed instance, not against localhost.
- [ ] Health/liveness check returns success; you can see logs.
- [ ] A person who is not you loaded the URL (or installed the artifact) and got
      something sensible. Write down what they said.

## Phase 7 — Rollback (rehearse it now, not during the fire)

- [ ] The previous known-good version is identified by tag: `<v0.x.y>`.
- [ ] Rollback procedure written as numbered commands in `docs/runbook.md`.
- [ ] Rollback **rehearsed once**, end to end, with the wall-clock time recorded.
- [ ] Data question answered honestly: if a migration ran, does rolling back the code
      leave the database ahead of it? Write the answer down even if it is "yes, and
      here is what to do about it."

## Phase 8 — Close the loop

- [ ] `docs/deployment.md` updated with what you actually did, not what you planned.
- [ ] Hours logged for this release, honestly.
- [ ] Handoff guide (`docs/handoff.md`) updated with anything you learned today.
- [ ] Anything you had to remember instead of read is now written down.
