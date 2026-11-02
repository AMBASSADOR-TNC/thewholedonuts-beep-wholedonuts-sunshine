# Whole Donuts Sunshine

Canonical code repository for the Whole Donuts LLC ecosystem. It consolidates the public Sunshine entry, curated ecosystem archive, merch platform, Go tooling, infrastructure, and domain routing while keeping public participation credential-free.

## Repository layout

| Area | Purpose |
|---|---|
| `apps/public-site/` | Quiet public entry and optional local stick-figure World. |
| `brain/`, `counter*/`, `dashboard/`, `effort/`, `entry/`, `movement-engine/`, `protocol-engine/`, `table*/`, `vault/` | Curated ecosystem archive assembled into the public artifact. |
| `apps/merch/api/` | Express API for sponsor merchandise operations and integration webhooks (Shopify, Printful). |
| `apps/merch/web/` | Next.js merch dashboard for managing orders, sponsors, and referrals. |
| `apps/universe/` | Go ecosystem tools: domain orchestrator, funnel CLI, analytics dashboard, network and scaling orchestrators, domain config packages, and deployment workflows. |
| `apps/web/` | Preserved earlier landing-page source, served only under `/landing/` by Docker. |
| `apps/landing/` | Preserved gateway prototype; not a production serving target. |
| `data/postgres/migrations/` | Forward-only PostgreSQL migrations for the merch API. |
| `infra/docker/` | Container build configuration and nginx config. |
| `tools/domain-funnels/` | Offline validation of inactive, sanitized configuration examples only. |
| `Dockerfile` | Multi-stage production container build. |
| `docker-compose.yml` | Local development environment (public site, merch API, Postgres). |
| `.env.example` | Environment variable template — copy to `.env` for local dev. |

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for full layout details,
[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the production launch guide,
[docs/API.md](docs/API.md) for API documentation, and
[docs/CUTOVER.md](docs/CUTOVER.md) for external launch requirements.

Configured brand domains resolve through `backend/router/config/domains.yaml`.
The gateway router serves the public entry and curated archive from this repository.
