# Whole Donuts ecosystem launch guide

## Public launch surface

This repository is the canonical Whole Donuts LLC code home. Sunshine remains the
quiet public entry and optional stick-figure companion. The deployment artifact also
contains the curated ecosystem archive preserved in the repository root.

The companion has no accounts, forms, analytics, trackers, remote scripts, checkout,
storefront link, or automatic publication path. Figure customization stays in the
visitor's browser unless the visitor explicitly places it in an invitation URL.

## Route behavior

`backend/router/config/domains.yaml` is an offline mapping, not evidence that a
domain is registered, pointed at this router, or ready to launch. When the router is
deliberately deployed for a configured brand domain, browser requests redirect only
to `https://wenevergonnaclose.com/`. It has no canonical-domain mapping.

## Included and excluded material

| Area | Launch disposition |
|---|---|
| `apps/public-site/` | Included: quiet Sunshine entry and optional World. |
| Curated archive directories | Included through `scripts/prepare-public-site.sh`. |
| `backend/router/` | Included: public entry, archive, and configured service routing. |
| `apps/landing/` | Excluded: preserved prototype, not a production route. |
| `apps/web/` | Preserved under `/landing/` in the Docker image only. |
| `apps/merch/` | Excluded: separately operated code; no public storefront or checkout is linked. |
| `apps/universe/` and `tools/domain-funnels/` | Excluded: operational tooling, not a Sunshine public destination. |
| `apps/public-site/templates/` | Excluded from navigation: no confirmed public destination or separate provenance review. |

Do not add content, assets, or links from an excluded area until its rights,
provenance, and destination are independently confirmed.

## Deployment boundary

The production workflow validates service code, assembles `apps/public-site/` with
the curated archive, and performs the repository's only Pages deployment. Keep
custom-domain changes outside the repository until DNS ownership and rollback are
confirmed.

## Contribution boundary

Public contributions are submitted only as GitHub pull requests. Contributors must
share original or authorized material and avoid private, identifying, financial,
health, legal, emergency, or harmful content. A pull request never guarantees
publication or any other outcome.
