#!/usr/bin/env python3
"""Verified-requirement coverage from docs/traceability.csv"""
import csv
from pathlib import Path

path = Path(__file__).resolve().parents[1] / "docs" / "traceability.csv"
rows = list(csv.DictReader(path.open())
)
total = len(rows)
verified = sum(1 for r in rows if r["status"] == "pass")
must_rows = [r for r in rows if r["moscow"] == "Must"]
must_total = len(must_rows)
must_verified = sum(1 for r in must_rows if r["status"] == "pass")
print(f"total_requirements_rows\t{total}")
print(f"verified\t{verified}")
print(f"verified_requirement_coverage\t{verified/total:.1%}")
print(f"must_rows\t{must_total}")
print(f"must_verified\t{must_verified}")
print(f"verified_Must_coverage\t{must_verified/must_total:.1%}")
gaps = [r for r in rows if r["status"] == "gap"]
print(f"gaps\t{len(gaps)}")
for g in gaps:
    print(f"  GAP {g['requirement_id']} {g['criterion_id']}")
