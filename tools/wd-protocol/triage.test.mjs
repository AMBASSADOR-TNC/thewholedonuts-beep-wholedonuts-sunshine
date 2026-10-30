import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const fixtureRoot = await mkdtemp(path.join(os.tmpdir(), "wd-protocol-"));
const inputDirectory = path.join(fixtureRoot, "WD.INPUT");
const archiveDirectory = path.join(fixtureRoot, "WD.ARCHIVE", "records");
const toolDirectory = path.join(fixtureRoot, "tools", "wd-protocol");
await Promise.all([
  mkdir(inputDirectory, { recursive: true }),
  mkdir(archiveDirectory, { recursive: true }),
  mkdir(toolDirectory, { recursive: true })
]);

const sourceTool = await readFile(new URL("./triage.mjs", import.meta.url), "utf8");
await writeFile(path.join(toolDirectory, "triage.mjs"), sourceTool);
await writeFile(path.join(inputDirectory, "blocked-record.json"), JSON.stringify({
  id: "blocked-record",
  kind: "learning",
  title: "Test blocker",
  createdAt: "2026-10-30T00:00:00.000Z",
  status: "blocked",
  blocker: "Test confirms automatic archival"
}));

const result = spawnSync(process.execPath, [path.join(toolDirectory, "triage.mjs")], {
  cwd: fixtureRoot,
  encoding: "utf8"
});

assert.equal(result.status, 0, result.stderr);
assert.match(result.stdout, /Archived blocked-record/);
const archived = JSON.parse(await readFile(path.join(archiveDirectory, "blocked-record.json"), "utf8"));
assert.equal(archived.status, "blocked");
const ledger = await readFile(path.join(fixtureRoot, "WD.ARCHIVE", "ledger.jsonl"), "utf8");
assert.match(ledger, /"id":"blocked-record"/);
