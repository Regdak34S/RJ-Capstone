
/**
 * Integration — hostile content stored as data, not executed (NFR-SEC-02 path)
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { MemoryAdapter } from "../../src/persistence/storage.js";
import { ProjectStore } from "../../src/persistence/project-store.js";

const hostile = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), "../data/hostile/project.json"), "utf8")
);

describe("integration: hostile content through store", () => {
  it("persists script-like body as plain string", () => {
    const store = new ProjectStore(new MemoryAdapter());
    store.save(hostile);
    const loaded = store.load();
    assert.equal(loaded.title, "<script>alert(1)</script>");
    assert.equal(loaded.sections[0].body, "<img src=x onerror=alert(1)>");
    // Still a string after round-trip — not stripped, not executed
    assert.equal(typeof loaded.sections[0].body, "string");
  });
});
