# Whole Donuts Sunshine

This directory contains the quiet Sunshine entry and optional local World. During
deployment, `scripts/prepare-public-site.sh` combines it with the repository's
curated ecosystem archive.

## Public behavior

- The landing page provides only local interactive navigation and voluntary native sharing.
- It has no accounts, analytics, tracking, forms, remote scripts, or data-collection path.
- The browser can retain an optional figure customization locally; it is never sent by the site. A visitor can explicitly include it in an invitation URL.
- No storefront, payment checkout, or other unverified destination is represented here.

## GitHub Pages

The production workflow assembles and uploads the complete public artifact after a
`main`-branch change. Custom-domain configuration is intentionally external; see
[the cutover guide](../../docs/CUTOVER.md).
