# Bathroom Door protocol

The Bathroom Door protocol keeps active work, completed work, and operational blockers
separate without losing the trail that explains a decision.

| Location | Purpose | Counted by |
|---|---|---|
| `WD.INPUT/` | Structured work awaiting action | JSON manifest |
| `WD.OUTPUT/` | Reviewed, verified results | JSON manifest |
| `WD.ARCHIVE/records/` | Explicitly blocked work | Archive ledger event |

## Automatic blocker handling

An input manifest is automatically archived when, and only when, it has:

```json
{
  "availability": "missing",
  "status": "blocked",
  "blocker": "A specific, factual reason work cannot continue"
}
```

`availability: "verified"` is required before an item can move forward as
active work. `missing` and `unverified` are not failures to hide: they must use
the blocked form above so Bathroom Door preserves their reason, count, and
source metadata without letting them slow active programs.

Run the following command locally or in automation:

```sh
node tools/wd-protocol/triage.mjs
```

The command validates every candidate before moving it. It rejects malformed
manifests, duplicate IDs, and a blocked record without a reason. `--check`
reports the archive plan without writing it.

The GitHub workflow separately treats an issue carrying
`bathroom-door-blocker` as an archived operational item by applying
`bathroom-door-archive`. It does not close the
issue, mutate its text, or copy its untrusted contents into the repository.
That preserves a human-readable issue history while keeping it out of the
active queue. The workflow initializes these two labels on its first push to
the default branch, pull request validation run, or manual dispatch.

## Learning records

Use `kind: "learning"` for a factual creation or operations lesson. Keep
personal, private, health, financial, and credential information out of every
Bathroom Door manifest. A learning record stays counted even after archival; its archive
event records the original ID, kind, reason, and timestamp.

## Operational boundary

This protocol is a repository workflow, not an operator dashboard, task
management service, issue backup system, or automatic decision maker. It does
not collect external data, call third-party services, remove source files, or
claim that a public program capability is live.
