# Defect Report & Defect Log — templates

---

## The seven required fields

1. **ID and one-line title** — `DEF-014 — Expiry warning misses items expiring today`
2. **Environment** — build/commit, OS, runtime or browser, which data set
3. **Steps to reproduce** — numbered, minimal, starting from a known state
4. **Expected vs. actual** — both stated, in that order, in the observable world
5. **Evidence** — failing test name, log excerpt, screenshot path, request/response
6. **Severity and priority** — assigned *separately*, each with a one-line reason
7. **Traceability and status** — requirement ID, test case ID, status, owner, resolution

---

## Defect report block

```
ID:          DEF-014
Title:       Expiry warning misses items expiring today
Reported:    2026-11-06 by <you>
Environment: commit a1b2c3d, macOS 15, Node runtime <version>, seed data set `small`
Requirement: FR-07 (FR-07-AC2)   Test case: TC-021

Steps to reproduce:
  1. Load the `small` seed data set.
  2. Add item "milk" with expiry date = today's date.
  3. Open the dashboard.

Expected: "milk" appears in the "Expiring soon" panel (FR-07-AC2: items expiring
          within 3 days, inclusive of today, are listed).
Actual:   "Expiring soon" panel is empty. "milk" appears only under "All items".

Evidence: TC-021 fails; log line `expiry_window: start=2026-11-07 end=2026-11-09`
          shows the window starts tomorrow.

Severity: S2 — a Must requirement is not met; the feature's whole point is the
          warning, and a user relying on it loses food.
Priority: P1 — it is on the demo path and the fix looks like a one-line off-by-one.

Status:   Fixed — commit e4f5a6b. Regression test: TC-021b (expiry == today).
Owner:    <you>
```

---

## Severity ladder (how bad is it, in the product)

| Code | Meaning | Test |
|---|---|---|
| S1 | Data loss, security exposure, or the system will not run | Would you stop a release for it? Yes. |
| S2 | A Must requirement is not met; no acceptable workaround | Yes, unless documented and accepted. |
| S3 | A requirement is partly met, or there is a real workaround | No — but it is written down. |
| S4 | Cosmetic, wording, or a Could-priority gap | No. |

## Priority ladder (when do we fix it, given the calendar)

| Code | Meaning |
|---|---|
| P1 | Fix now — next thing you touch |
| P2 | Fix this iteration |
| P3 | Fix if hours remain; otherwise ship it as a known defect |
| P4 | Will not fix — recorded, with the reason |

Severity is a fact about the product. Priority is a decision about your remaining
hours. They are set by different people in industry, and by the same person wearing
two different hats here — write down which hat you were wearing.

---

## Defect log table (paste into `docs/defect-log.md`)

| ID | Title | Req | Sev | Pri | Found by | Status | Fix commit | Regression test |
|---|---|---|---|---|---|---|---|---|
| DEF-001 |  |  |  |  |  |  |  |  |
