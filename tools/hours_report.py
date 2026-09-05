#!/usr/bin/env python3
import csv
import sys

path = sys.argv[1] if len(sys.argv) > 1 else "docs/hours-log.csv"

with open(path, newline="", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))

total = sum(float(row["hours"]) for row in rows if row.get("hours"))
print(f"Sessions: {len(rows)}")
print(f"Total hours: {total:.2f}")
