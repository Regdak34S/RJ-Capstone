# CR-005 — Auto-save on every keystroke ("bug" report)

**Requested by:** User feedback after demo (“it doesn’t save as I type”)  
**Date opened:** 2026-11-11  
**Decider:** Reggie Johnson  
**Date decided:** 2026-11-12  

## Request

Treat missing auto-save as a bug; save on each input event.

## Three-line impact analysis

1. **Cost:** ~2 h to implement; ongoing cost in dirty-state UX and storage churn.  
2. **Blast radius:** FR-SAVE-09 explicit save, FR-NAV-06 dirty guard, performance of save path.  
3. **Risk both ways:** Accept → redefines requirement and weakens intentional Save; Reject → user must click Save (documented).

## Disposition

**REJECT**

**Reason:** Not a defect against FR-SAVE-09. Explicit save is the specified contract; auto-save was considered in Iteration 1 self-review and rejected. Demo script and README document Save.

**Communication:**  
“That behavior is intentional — drafts save when you hit Save so we can warn on unsaved navigation. Auto-save would be a new change request, not a bug fix, and I’m not taking it in this RC.”
