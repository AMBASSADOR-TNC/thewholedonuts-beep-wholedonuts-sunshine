# Canonical repository architecture

| Area | Purpose |
|---|---|
| `apps/public-site/` | Quiet public entry and optional local stick-figure World. |
| Curated archive directories | Preserved ecosystem pages assembled beside the public entry by `scripts/prepare-public-site.sh`. |
| `apps/landing/` | Preserved gateway prototype; not served in production. |
| `apps/web/` | Preserved earlier landing-page source; exposed only under `/landing/` by Docker. |
| `apps/merch/api/` | Express API for sponsor merchandise operations and integration webhooks. |
| `apps/merch/web/` | Next.js merch dashboard. |
| `apps/universe/` | Go ecosystem tools: domain orchestrator, funnel CLI, analytics dashboard, network and scaling orchestrators, domain config packages, and deployment workflows. |
| `backend/router/` | Domain-based routing engine — maps configured domains to services via `config/domains.yaml`. |
| `data/postgres/migrations/` | Forward-only PostgreSQL migrations for the merch API. |
| `infra/docker/` | Container build configuration and nginx config. |
| `tools/domain-funnels/` | Offline validation of inactive, sanitized configuration examples only. |
| `Dockerfile` | Multi-stage production container (public-site, merch-api, Go tools). |
| `docker-compose.yml` | Local development environment. |
| `.env.example` | Environment variable template. |
| `docs/DEPLOYMENT.md` | Production deployment guide. |
| `docs/API.md` | API reference. |

## Ecosystem overview

```
Whole Donuts canonical code repository
         ├── quiet Sunshine entry
         ├── curated ecosystem archive
         ├── merch services
         └── domain router and Go tooling
```

Domain-to-service mappings live in `backend/router/config/domains.yaml`. The gateway
router serves the public entry and curated archive; specialized routes remain
separate services.
