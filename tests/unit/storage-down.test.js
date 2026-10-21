/**
 * Proves smoke/storage failure path: FORCE_STORAGE_DOWN makes createStorage throw.
 */
import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import { createStorage } from "../../src/persistence/storage.js";

describe("storage unavailable", () => {
  const prev = process.env.FORCE_STORAGE_DOWN;

  before(() => {
    process.env.FORCE_STORAGE_DOWN = "1";
  });

  after(() => {
    if (prev === undefined) delete process.env.FORCE_STORAGE_DOWN;
    else process.env.FORCE_STORAGE_DOWN = prev;
  });

  it("createStorage throws when FORCE_STORAGE_DOWN=1", () => {
    assert.throws(() => createStorage(), /STORAGE_UNAVAILABLE/);
  });
});
