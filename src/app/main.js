/**
 * Browser entry — walking skeleton vertical slice.
 * Hops: UI → render → ProjectStore → storage adapter (localStorage)
 */

import { ProjectStore } from "../persistence/project-store.js";
import { ensureSeeded } from "./seed.js";
import { renderProject } from "./render.js";

function boot() {
  const root = document.getElementById("app");
  if (!root) {
    console.error("Missing #app root");
    return;
  }

  try {
    const store = new ProjectStore();
    const { project, seeded } = ensureSeeded(store);
    renderProject(project, root);
    if (seeded) {
      console.info("[skeleton] seeded project into storage");
    }
    // Expose for manual console checks during demos
    window.__CCP__ = { store, project };
  } catch (err) {
    root.textContent = `Error: ${err.message || err}`;
    console.error(err);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

