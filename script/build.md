#!/usr/bin/env bash
# Static app: "build" verifies required assets exist and are readable.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> build (verify static assets)"
required=(
  index.html
  src/app/main.js
  src/app/render.js
  src/app/seed.js
  src/persistence/project-store.js
  src/persistence/storage.js
  src/ui/styles.css
)

for f in "${required[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "ERROR: missing $f" >&2
    exit 1
  fi
  if [[ ! -s "$f" ]]; then
    echo "ERROR: empty file $f" >&2
    exit 1
  fi
done

echo "==> build OK (static assets present)"

