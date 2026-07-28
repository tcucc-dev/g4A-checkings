# TCU Department Web Insight Reports

Monorepo berisi laporan GEO × SEO untuk setiap department TCU. Deploy via [Vercel](https://vercel.com).

## Departments

| Path | URL (Vercel) | Domain | Status |
|---|---|---|---|
| `itm/` | `<itm-project>.vercel.app` | itm.tcu.edu.tw | Live |
| `nc/` | `<nc-project>.vercel.app` | nc.tcu.edu.tw | Live |

## Vercel Setup (multi-project)

Repository ini monorepo, jadi setup **2 project Vercel** terpisah di repo `tcucc-dev/g4A-checkings`:

### Project 1 — ITM
- **Project Name**: `tcu-webinsight-itm`
- **Root Directory**: `itm`
- **Framework Preset**: Vite
- **Build Command**: `npm run build` (auto)
- **Output Directory**: `dist` (auto)
- **Domain**: itm.tcu.edu.tw (custom)

### Project 2 — NC
- **Project Name**: `tcu-webinsight-nc`
- **Root Directory**: `nc`
- **Framework Preset**: Vite
- **Build Command**: `npm run build` (auto)
- **Output Directory**: `dist` (auto)
- **Domain**: nc.tcu.edu.tw (custom)

## Auto-Deploy

Setiap push ke branch `main` di GitHub akan otomatis trigger Vercel deploy untuk **kedua project**.

## Local Development

```bash
# Install all workspaces
npm install

# Build all
npm run build

# Build specific
npm run build:itm
npm run build:nc

# Preview specific
npm run preview:itm   # http://localhost:4173
npm run preview:nc    # http://localhost:4174

# Dev mode (HMR)
npm run dev:itm
npm run dev:nc
```

## Documentation

- Skill `dept-report-replica-confirmation` — cara replicate department baru
- Skill `dept-report-replica-content-policy` — policy structure vs content
- Skill `tcu-report-execution-discipline` — operational discipline
