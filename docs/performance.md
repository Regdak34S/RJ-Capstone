# Performance measurements — Content Creation Project

**Author:** Reggie Johnson  
**Date measured:** 2026-11-12  
**Environment:** Clean Node 20 process + browser Chrome on laptop (not a long-lived editor session). Seed: `seed/project.json` expanded to 20 synthetic sections for volume (scripted), localStorage.  
**Production-like claim:** fresh `bash script/setup` clone path; measurements outside the all-day IDE process.

## Targets (from Week 4 NFRs)

| ID | Target | Source |
|----|--------|--------|
| NFR-PERF-01 | Main project overview p95 load ≤ 2.0 s with ~20 sections, cold-ish cache | requirements.md |
| NFR-PERF-02 | Saving a section draft completes in ≤ 1.0 s under normal conditions | requirements.md |

## Method

1. **Load (NFR-PERF-01):** 20 timed runs of: clear storage → ensureSeeded with 20-section document → `render` path via store load in Node harness approximating Persistence hop; browser manual 10 loads recorded with Performance panel for UI paint. Report uses Node store+JSON parse path as lower bound and notes UI separately.
2. **Save (NFR-PERF-02):** 20 timed `ProjectStore.save` calls of a ~4 KB project document on MemoryAdapter and on localStorage in browser.
3. Statistics: sort samples; p50 = median; p95 = 95th percentile (ceil index).

## Results — initial run (2026-11-12 morning)

| Target | n | p50 | p95 | Verdict | Action |
|--------|---|-----|-----|---------|--------|
| NFR-PERF-01 load | 20 | 4 ms | 9 ms (store path) | **PASS** vs 2 s | None required for store path. Browser full paint observed &lt; 200 ms on laptop for 20 rows. |
| NFR-PERF-02 save | 20 | 1.2 ms | 3.1 ms (MemoryAdapter) | **PASS** vs 1 s | None |

Browser localStorage save (10 samples): p50 ≈ 2 ms, p95 ≈ 6 ms — still PASS.

## Re-measure after fix (DEF-004 seed shape / list render)

After expanding seed and list rendering, re-ran NFR-PERF-01 store+list build (20 samples):

| Target | p50 before | p95 before | p50 after | p95 after | Verdict |
|--------|------------|------------|-----------|-----------|---------|
| NFR-PERF-01 | 4 ms | 9 ms | 5 ms | 11 ms | Still **PASS** |

No NFR bar was lowered. Misses: none for these two targets at current data volume.

## Residual risk

LocalStorage quota and multi-MB bodies are not in the sample. If body size grows large, re-measure NFR-PERF-02 with hostile large strings (tracked as future work, not a silent pass).
[performance.md](https://github.com/user-attachments/files/34814263/performance.md)

