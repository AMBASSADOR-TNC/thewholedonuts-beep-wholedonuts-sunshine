import { mkdir, readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = path.resolve(import.meta.dirname, "..", "..");
const inputDirectory = path.join(root, "WD.INPUT");
const archiveDirectory = path.join(root, "WD.ARCHIVE", "records");
const ledgerPath = path.join(root, "WD.ARCHIVE", "ledger.jsonl");
const dryRun = process.argv.includes("--check");
const allowedKinds = new Set(["file", "issue", "request", "learning"]);
const allowedStatuses = new Set(["ready", "in_progress", "blocked", "complete"]);

function assertManifest(manifest, fileName) {
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    throw new Error(`${fileName}: manifest must be an object`);
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(manifest.id ?? "")) {
    throw new Error(`${fileName}: id must be lowercase kebab-case`);
  }

  if (!allowedKinds.has(manifest.kind)) {
    throw new Error(`${fileName}: kind must be file, issue, request, or learning`);
  }

  if (typeof manifest.title !== "string" || !manifest.title.trim()) {
    throw new Error(`${fileName}: title is required`);
  }

  if (Number.isNaN(Date.parse(manifest.createdAt))) {
    throw new Error(`${fileName}: createdAt must be an ISO timestamp`);
  }

  if (!allowedStatuses.has(manifest.status)) {
    throw new Error(`${fileName}: status is invalid`);
  }

  if (manifest.status === "blocked" && (typeof manifest.blocker !== "string" || !manifest.blocker.trim())) {
    throw new Error(`${fileName}: blocked records require a blocker`);
  }
}

async function loadManifests() {
  const entries = await readdir(inputDirectory, { withFileTypes: true });
  const seenIds = new Set();
  const manifests = [];

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) {
      continue;
    }

    const filePath = path.join(inputDirectory, entry.name);
    const manifest = JSON.parse(await readFile(filePath, "utf8"));
    assertManifest(manifest, entry.name);

    if (seenIds.has(manifest.id)) {
      throw new Error(`${entry.name}: duplicate id ${manifest.id}`);
    }

    seenIds.add(manifest.id);
    manifests.push({ filePath, fileName: entry.name, manifest });
  }

  return manifests;
}

async function archiveBlockedRecords() {
  const manifests = await loadManifests();
  const blocked = manifests.filter(({ manifest }) => manifest.status === "blocked");

  if (dryRun) {
    for (const { manifest } of blocked) {
      console.log(`Would archive ${manifest.id}: ${manifest.blocker.trim()}`);
    }
    console.log(`Checked ${manifests.length} manifest(s); ${blocked.length} would be archived.`);
    return;
  }

  await mkdir(archiveDirectory, { recursive: true });
  const events = [];

  for (const { filePath, fileName, manifest } of blocked) {
    const destination = path.join(archiveDirectory, fileName);

    try {
      await stat(destination);
      throw new Error(`${fileName}: archive destination already exists`);
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    await rename(filePath, destination);
    events.push(JSON.stringify({
      archivedAt: new Date().toISOString(),
      id: manifest.id,
      kind: manifest.kind,
      blocker: manifest.blocker.trim(),
      record: path.relative(root, destination).replaceAll(path.sep, "/")
    }));
    console.log(`Archived ${manifest.id}`);
  }

  if (events.length > 0) {
    await writeFile(ledgerPath, `${events.join("\n")}\n`, { flag: "a" });
  }

  console.log(`Checked ${manifests.length} manifest(s); archived ${blocked.length}.`);
}

await archiveBlockedRecords();
