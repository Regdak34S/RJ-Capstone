# Definition of Done

**Adopted:** 2026-09-14 · **Revised:** 2026-10-30 (Iteration 1)

An item is **Done** only when **all** of the following are true:

1. It traces to a requirement ID in `docs/requirements.md` (or a new requirement was added and the matrix updated).
2. Every acceptance criterion for that requirement has been checked by running it (not only by reading the code).
3. Automated checks that cover the change are green locally and in CI (`bash script/test`, workflow `ci`).
4. No secret, key, token, or real user data was added to the repository.
5. Error paths produce a message that names what failed (e.g. `UNKNOWN_SECTION`, `INVALID_STATUS`).
6. New user-facing surfaces are keyboard-operable.
7. Any behavior a stranger needs is reflected in README or the demo script.
8. Any AI use on this item is recorded in `docs/ai-usage.md` the same session.
9. Time spent is written to `docs/hours-log.csv` the same day.
10. The item was demonstrated end-to-end from a clean/seeded state.

## Gate rule

No board card moves to **Done** with a failing check above. Partial work stays **In progress** or returns to **Ready**.

## Iteration 1 application

| Slice | Req | DoD applied |
|-------|-----|-------------|
| Section list + status text | FR-VIEW-11, FR-SEC-07 | Yes — smoke + UI |
| Add section | FR-MAP-01 | Yes — unit + UI |
| Draft body edit + save | FR-DRAFT-02, FR-SAVE-09 | Yes — unit + UI |
| Status change | FR-PROG-03 | Yes — unit + UI |
