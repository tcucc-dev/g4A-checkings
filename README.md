# TCU Department Web Insight Reports (v3)

Static site serving department-level analytics for `*.tcu.edu.tw` websites.

**v3 is a complete rewrite** — replaces the old Vite + ESM build chain with plain HTML/CSS/JS. No build step, no node_modules, no minifier bugs.

## Architecture

```
g4A-checkings/
├── index.html             ← landing page (auto-loads dept stats from each data.json)
├── _shared/
│   ├── report.css         ← single CSS file (all depts)
│   └── report.js          ← single JS file (fetches data.json, renders report)
├── itm/   index.html  data.json
├── nc/    index.html  data.json
├── www/   index.html  data.json
├── freshman/  index.html  data.json
├── legacy/                  ← OLD Vite+ESM source (kept for analytics_refresh.py)
└── vercel.json            ← static deploy, no build command
```

## How to add a new dept

1. Create folder `/<dept>/` with `index.html` (copy from `itm/index.html`) and `data.json`
2. Update `index.html` with the new dept name + domain
3. Add a card on the landing page (`index.html`)
4. Done — that's it.

## How to refresh data

The legacy `analytics_refresh.py` script can still be used. Either:
- Modify it to also write `data.json` for each dept
- Or run a manual extract: each `legacy/<dept>/src/generated-report-data.js` exports `window.WEBINSIGHT.REPORT_DATA` that can be transformed to `data.json`

## Deployment

Vercel auto-deploys from `main` branch. `vercel.json` has no build command — pure static.

## Pages

| URL | Status |
|---|---|
| `/` | Landing |
| `/itm/` | 資訊科技與管理系 (itm.tcu.edu.tw) |
| `/nc/` | 護理系 (nc.tcu.edu.tw) |
| `/www/` | 慈濟大學中文版首頁 (www.tcu.edu.tw) |
| `/freshman/` | 新生入學 (freshman.tcu.edu.tw) |

Source: https://github.com/tcucc-dev/g4A-checkings
