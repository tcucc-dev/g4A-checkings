# TCU WebInsight — Multi-Department Manager Reports

A unified collection of TCU department analytics reports deployed via
GitHub Pages. Each department lives in its own folder under `/<dept>`
and can be reached via `https://report.tcu.edu.tw/<dept>` (custom domain)
or `https://tcucc-dev.github.io/g4A-checkings/<dept>` (project page).

## Structure

```
g4A-checkings/                   ← repo root
├── index.html                   ← landing page (select department)
├── 404.html                     ← SPA fallback (copy of index.html)
├── deploy.ps1                   ← Windows PowerShell deploy script
├── public/
│   └── CNAME                    ← custom domain: report.tcu.edu.tw
├── itm/                         ← 資訊科技與管理學系
│   ├── index.html               ← Vite SPA entry
│   ├── package.json
│   ├── vite.config.js           ← base: '/itm/' (subpath)
│   ├── vercel.json
│   └── src/                     ← data, evidence, app, glossary
└── nc/                          ← 護理學院 (College of Nursing)
    └── ... (same structure as itm/)
```

## Routing

The collection is hosted at the **root** of a custom domain
(`report.tcu.edu.tw`) so each department can be reached by typing the
slug directly:

- `report.tcu.edu.tw/` — landing (select department)
- `report.tcu.edu.tw/itm` — ITM report
- `report.tcu.edu.tw/nc` — NC report

This is implemented with a single static deployment of the **landing
page** at root + each department's Vite build output under its own
subfolder. The `404.html` trick (copy of `index.html`) lets Vite
handle sub-routes like `report.tcu.edu.tw/itm/section/2`.

## Why GitHub Pages + `gh-pages` branch?

GitHub Pages is **static-only** — it cannot run `npm install && npm
build` for you. The Vite build output (`dist/`) must be committed as
the *artifact* in a separate branch, conventionally named
`gh-pages`. The `main` branch stays as the source of truth (your
`.js`, `.html`, `package.json`, configs).

Workflow:

1. Edit source in `main` branch
2. Run `.\deploy.ps1` on Windows (or `bash deploy.sh` on Linux/macOS)
3. The script:
   - `npm run build` in each dept folder
   - Copies the root `index.html` → `404.html`
   - Stages all depts' `dist/` + landing into `_staging/`
   - `gh-pages -d _staging` force-pushes `_staging/` to `gh-pages`
4. GitHub Pages publishes the `gh-pages` branch

See `AI_Agent_Report/GITHUB_PAGES_VITE_SPA_BRIEF.md` for the full
technical background.

## Sub-path routing (SPA `base` setting)

Each `dept/vite.config.js` sets `base: '/<dept>/'`. This rewrites
all asset paths so the SPA can be served from a subpath
(e.g., `/itm/assets/index-abc.js`) instead of the root.

Without this, Vite would emit `<script src="/assets/index-abc.js">`
which would 404 when hosted at `report.tcu.edu.tw/itm/`.

## Setup

```bash
# First time
git clone https://github.com/tcucc-dev/g4A-checkings
cd g4A-checkings
cd itm && npm ci && cd ..
cd nc && npm ci && cd ..

# Deploy (Windows)
.\deploy.ps1

# Deploy (bash)
bash deploy.sh
```

## Custom domain `report.tcu.edu.tw`

DNS:
- `CNAME report.tcu.edu.tw → tcucc-dev.github.io`

GitHub Pages settings:
- Settings → Pages → Custom domain: `report.tcu.edu.tw`
- Enforce HTTPS: ON

The `public/CNAME` file ensures the custom domain is set on every
push (GitHub reads `CNAME` from the root of the `gh-pages` branch).

## Adding a new department

1. Copy `itm/` → `newdept/` (the Vite template scaffold)
2. Edit `newdept/src/data.js` and `newdept/src/evidence.js` with
   the new department's data (use the `dept-report-replica` skill)
3. Update `newdept/vite.config.js` → `base: '/newdept/'`
4. Add a card to root `index.html` linking to `./newdept/`
5. Run `.\deploy.ps1`

## Local development

Each department runs independently:

```bash
cd itm
npm run dev   # http://localhost:5173 (vite default)
```

For the landing:

```bash
# Just open index.html in browser, or
python -m http.server 8080  # in repo root
```
