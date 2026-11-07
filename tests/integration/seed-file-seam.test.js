/**
 * Integration — file-system seam: committed seed/project.json is readable & valid
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

describe("integration: seed file seam", () => {
  it("seed/project.json exists and parses", () => {
    const path = join(root, "seed/project.json");
    assert.equal(existsSync(path), true);
    const doc = JSON.parse(readFileSync(path, "utf8"));
    assert.equal(doc.schemaVersion, 1);
    assert.ok(Array.isArray(doc.sections));
    assert.ok(doc.sections.some((s) => s.name === "Introduction"));
  });
});
