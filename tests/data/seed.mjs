/** Reproducible test-data generator. Fixed seed shape — no personal data. */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)));
const families = {
  happy: {
    schemaVersion: 1,
    id: "proj_happy",
    title: "Happy Path Capstone",
    sections: [
      { id: "sec_a", name: "Introduction", status: "draft", body: "Happy draft body.", checklist: [] },
      { id: "sec_b", name: "Methods", status: "not_started", body: "", checklist: [] },
    ],
  },
  boundary: {
    schemaVersion: 1,
    id: "proj_boundary",
    title: "X",
    sections: [
      { id: "sec_one_char", name: "A", status: "not_started", body: "", checklist: [] },
      {
        id: "sec_long",
        name: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-edge-80chars!!",
        status: "draft",
        body: "",
        checklist: [],
      },
    ],
  },
  hostile: {
    schemaVersion: 1,
    id: "proj_hostile",
    title: "<script>alert(1)</script>",
    sections: [
      { id: "sec_xss", name: "';';", status: "draft", body: "<img src=x onerror=alert(1)>", checklist: [] },
      { id: "sec_empty_name_attempt", name: "Valid", status: "final", body: "", checklist: [] },
    ],
  },
};

for (const [name, doc] of Object.entries(families)) {
  const dir = join(root, name);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "project.json"), JSON.stringify(doc, null, 2) + "\n");
}
console.log("seeded happy / boundary / hostile under tests/data/");
