# TCU WebInsight — Multi-Department Manager Reports

A unified collection of TCU department analytics reports with sub-path routing:

- `/` — Landing page (select department)
- `/itm` — 資訊科技與管理學系 (Information Technology and Management)
- `/nc` — 護理學院 (College of Nursing)
- Other departments to be added per request
- `/404.html` — Fallback for unknown routes

## Architecture

Each department lives in its own folder under `/<dept>` and has its own:
- `data.js` — `window.WEBINSIGHT.DATA` (main report data)
- `index.html` — entry point (shallow Vite SPA)
- `src/` — evidence reports, render code

The root `index.html` is a **landing page** listing all available departments.
Each department page loads its own department-specific `data.js`.

## Future Plans

This repo is the **collection hub**. Individual departments (e.g., `itm/`,
`nc/`) will eventually be moved into their own repositories under `tcucc-dev`:

- `tcucc-dev/itm` — 資訊科技與管理學系
- `tcucc-dev/nc` — 護理學院

The landing + routing logic will be handled at the **infrastructure level**
(e.g., via Caddy/Nginx reverse proxy with `Path:` header rewriting, or a
single Vite SPA that dispatches based on `window.location.pathname`).

For now, this repo just hosts the **ITM template** as the canonical
reference implementation. Replicas for other departments should be done
through the `dept-report-replica` skill.

## Local development

```bash
cd /c/Users/user/Documents/g4A\ checkings
npm install
npm run build
# Serve dist/ and open http://localhost:8080
```
