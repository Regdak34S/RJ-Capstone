# CR-003 — Assemble Markdown export (FR-ASM-05)

**Requested by:** Requirements baseline (Must) / self  
**Date opened:** 2026-10-10 (scope) · reopened Week 12  
**Decider:** Reggie Johnson  
**Date decided:** 2026-11-13  

## Request

Implement assemble of final Markdown when sections are `final`.

## Three-line impact analysis

1. **Cost:** ~8–10 h for full AC (ordering, incomplete guard, download).  
2. **Blast radius:** New module + acceptance tests + demo script act.  
3. **Risk both ways:** Accept full now → squeezes security/perf/RC polish; Defer → Must remains gap with DEF-008.

## Disposition

**DEFER** (full assemble) with explicit gap retained.

**Destination:** backlog **B-04** · DEF-008 remains open S2.

**Reason:** RC week prioritizes integration evidence, security, performance, and change control. Assemble stays scheduled post-RC rather than a half-built export.
