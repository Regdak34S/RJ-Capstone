/**
 * Storage adapters for Persistence.
 * Browser: LocalStorageAdapter (real data store per ADR 0002).
 * Node/tests: MemoryAdapter (same contract, no browser).
 */

export class LocalStorageAdapter {
  constructor(store = globalThis.localStorage) {
    if (!store) {
      throw new Error("STORAGE_UNAVAILABLE: localStorage is not available");
    }
    this.store = store;
  }

  getItem(key) {
    return this.store.getItem(key);
  }

  setItem(key, value) {
    this.store.setItem(key, value);
  }

  removeItem(key) {
    this.store.removeItem(key);
  }
}

/** In-memory Map used by Node unit tests and CI (same interface). */
export class MemoryAdapter {
  constructor() {
    this.map = new Map();
  }

  getItem(key) {
    return this.map.has(key) ? this.map.get(key) : null;
  }

  setItem(key, value) {
    this.map.set(key, String(value));
  }

  removeItem(key) {
    this.map.delete(key);
  }
}

/**
 * Factory: prefers localStorage when present; otherwise MemoryAdapter.
 * FORCE_STORAGE_DOWN=1 simulates an unavailable store (smoke failure path).
 */
export function createStorage() {
  if (typeof process !== "undefined" && process.env && process.env.FORCE_STORAGE_DOWN === "1") {
    throw new Error("STORAGE_UNAVAILABLE: forced down for smoke/red test");
  }
  if (typeof globalThis !== "undefined" && globalThis.localStorage) {
    return new LocalStorageAdapter(globalThis.localStorage);
  }
  return new MemoryAdapter();
}
