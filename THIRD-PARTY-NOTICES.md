# Third-party notices — Content Creation Project v1.0.0

**Generated:** 2026-11-23  
**Scope:** packages that ship with or are required to develop/test this repository.

## Runtime (browser)

| Component | License | Obligation |
|-----------|---------|------------|
| Author-written HTML/CSS/JS under this repo | Apache-2.0 (see LICENSE) | Preserve copyright and license notice on redistribution |
| Browser APIs (`localStorage`, DOM) | Platform terms (vendor) | None additional for this coursework use |

**npm production dependencies:** none (`package.json` has no `dependencies` block).

## Development / CI tooling

| Component | Version surface | License (typical) | Obligation for this project |
|-----------|-----------------|-------------------|------------------------------|
| Node.js | engines `>=20` | Node license mix | Tooling only; not redistributed inside the static Pages site |
| npm | ships with Node | Artistic/npm terms | Tooling only |
| GitHub Actions `ubuntu-latest` runners | CI | GitHub ToS | CI only |

Because there is **no production npm dependency tree**, there are no MIT/BSD package attribution clauses required beyond this repo’s Apache-2.0 LICENSE.

If you add a runtime library later:

1. Record its license here.  
2. Satisfy notice/copyleft obligations before release.  
3. Regenerate this file in the same PR.

## Verification

```text
$ npm ls --all 2>/dev/null || true
# empty production tree expected
```
