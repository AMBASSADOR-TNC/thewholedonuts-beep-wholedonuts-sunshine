# Repository Consolidation Manifest

Goal: every repository converges on **AMBASSADOR-TNC** and is reachable from `https://wenevergonnaclose.com/`. Nothing is deleted, rewritten or force-pushed. Consolidation is by inventory, then copy-forward with history preserved, then archive on the owner's explicit approval.

## Inventory (read-only snapshot, 2026-11-02)

| Owner | Repository | Last push | Notes |
|---|---|---|---|
| table928 | (none visible) | n/a | No public repositories found. Private or deleted repos need the owner to export or grant access. |
| thewholedonuts-beep | WHOLEDONUTS.GITHUB.IO | 2026-10-14 | Review, then fold into the public site. |
| thewholedonuts-beep | -oldusername-.github.io | 2026-10-14 | Legacy name; confirm nothing unique, then archive. |
| AMBASSADOR-TNC | thewholedonuts-beep-wholedonuts-sunshine | 2026-11-03 | Canonical site and merch code. |
| AMBASSADOR-TNC | WENEVERGONNACLOSE, WENEVERGONNACLOSE-ROOT | 2026-11-03 / 2026-10-14 | Domain root content. |
| AMBASSADOR-TNC | wholedonuts-universe, WHNutz, WHOLEDONUTS.CLOUD, thenutured-chef-estore | 2026-10-30 to 2026-11-02 | Protocols, crumbs, store source. |
| AMBASSADOR-TNC | ambassador-tnc.github.io, github.com-AMBASSADOR-TNC | 2026-09-29 to 2026-10-14 | Profile sites. |
| AMBASSADOR-TNC | My-Drive, WHOLEDONUTS-IP-VAULT, thewholedonuts-IP-vault | 2026-09-28 to 2026-10-12 | Vault repos; verify contents before any move. |
| AMBASSADOR-TNC | thewholedonuts-beep, Canonical-Whole-Donuts-unified-ecosystem, https-github.com-AMBASSADOR-TNC-REPO-NAME-HERE | 2026-09-28 | Template-name repos; likely stubs. |
| AMBASSADOR-TNC | Program-Files | 2026-10-11 | Private; keep private. |

## Rules

1. Preserve history: use `git subtree` or mirror pushes, never delete or squash sources.
2. Private, medical, financial, account or key material never enters a public repo.
3. Archived or deleted repos (those already published at https://wenevergonnaclose.com) are recovered from that site or from the owner's own exports, and recorded here.
4. A repo is archived only after the owner confirms its content is copied and verified.
5. Stub pages older than two months are replaced with real pages built from the vault and crumb content, not left as placeholders.

## Next steps (owner approval required for 3 and 4)

1. Audit each repo above for files missing from the canonical repo.
2. Copy unique content forward with history.
3. Archive the emptied source repos.
4. Point brand domains to `https://wenevergonnaclose.com/` per `docs/CUTOVER.md`.
