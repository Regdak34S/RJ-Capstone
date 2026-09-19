# Definition of Done

**Adopted:** 2026-09-14 · **Revised:** - 2026-09-18

An item is Done when all of the following are true:

- [ ] It traces to a requirement ID in `docs/requirements.md` (or a new requirement was added and the matrix updated).
- [ ] Every acceptance criterion for that requirement has been checked by running it.
- [ ] No secret, key, token, or real user data was added to the repository.
- [ ] Error paths produce a message that names what failed.
- [ ] New user-facing surfaces are keyboard-operable and pass the contrast check.
- [ ] Any behavior change a stranger needs to know is reflected in README or docs.
- [ ] Any AI use on this item is recorded in `docs/ai-usage.md`.
- [ ] Time spent is written to the hours log the same day.
- [ ] The item was demonstrated end-to-end from a clean state.

## Note on template cuts
I removed the automated-test and CI-pipeline items because the project does not yet have a full CI suite; those will be added when the test infrastructure exists. I also removed the CHANGELOG requirement until the first releaseable version exists.
