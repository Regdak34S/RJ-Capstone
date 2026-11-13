# CR-002 — Shared multi-user project sync

**Requested by:** Advisor comment (shared shopping-list analogy → shared draft)  
**Date opened:** 2026-11-09  
**Decider:** Reggie Johnson  
**Date decided:** 2026-11-12  

## Request

Allow two users to collaborate on the same project document (sync beyond one browser profile).

## Three-line impact analysis

1. **Cost:** ≥ 25 h (auth, conflict model, backend or CRDT, security review rewrite).  
2. **Blast radius:** Architecture ADRs 0001–0003; all Persistence assumptions; security checklist auth/z rows.  
3. **Risk both ways:** Accept → replaces the project; Reject → remains single-user local tool as specified.

## Disposition

**DEFER**

**Destination:** `docs/backlog.md` item **B-01**, estimate ~25 h, needs new ADRs before acceptance criteria freeze.

**Reason:** Conflicts with baselined single-user localStorage scope. Not a small feature add.
