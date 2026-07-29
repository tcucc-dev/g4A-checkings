# TCU Department Web Insight Reports

Repository untuk laporan GEO × SEO setiap departemen TCU. Deployable ke Vercel **atau** GitHub Pages.

| Path | Sub-path | Domain | Status |
|---|---|---|---|
| `itm/` | `/itm/` | itm.tcu.edu.tw | Live |
| `nc/` | `/nc/` | nc.tcu.edu.tw | Live |

## Deployment Modes

Repository ini monorepo dengan dua mode deploy.

### MODE 1 — Recommended: Single Vercel project (repository root)

Import repo ini ke Vercel dengan **Root Directory kosong** (atau `.`). Vercel akan membaca `vercel.json` di root dan menjalankan `scripts/build-vercel.mjs` yang menghasilkan satu `dist/` berisi:

- `dist/index.html` → root landing page
- `dist/404.html` → custom 404 page
- `dist/itm/` → ITM Vite app (built dengan base `/itm/`)
- `dist/nc/` → NC Vite app (built dengan base `/nc/`)

Final routes di Vercel:

- `/` → root landing
- `/itm/` → ITM dashboard
- `/nc/` → NC dashboard

**Required Vercel project settings**:

| Setting | Value |
|---|---|
| Root Directory | `.` (kosong) atau biarkan default |
| Build Command | `npm run build` (otomatis dari `vercel.json`) |
| Output Directory | `dist` (otomatis dari `vercel.json`) |
| Install Command | `npm ci --prefix itm && npm ci --prefix nc` (otomatis dari `vercel.json`) |
| Framework Preset | Other |

### MODE 2 — Separate Vercel projects per department

Buat **2 project Vercel** terpisah dari repo yang sama:

**Project 1 — ITM**

| Setting | Value |
|---|---|
| Project Name | `tcu-webinsight-itm` |
| Root Directory | `itm` |
| Framework Preset | Vite |
| Build Command | `npm run build` (otomatis dari `itm/vercel.json`) |
| Output Directory | `dist` |

**Project 2 — NC**

| Setting | Value |
|---|---|
| Project Name | `tcu-webinsight-nc` |
| Root Directory | `nc` |
| Framework Preset | Vite |
| Build Command | `npm run build` (otomatis dari `nc/vercel.json`) |
| Output Directory | `dist` |

Setiap push ke `main` di GitHub → kedua project auto-deploy.

## Local Development

### Install dependencies per department

```bash
npm ci --prefix itm
npm ci --prefix nc
```

### Run the combined build (root → dist/)

```bash
npm run build
```

Output di `dist/` siap di-serve oleh static host manapun.

### Dev mode (HMR) per department

```bash
npm run dev:itm    # http://localhost:5173
npm run dev:nc     # http://localhost:5173
```

### Preview built artifacts per department

```bash
npm run preview:itm   # serve itm/dist
npm run preview:nc    # serve nc/dist
```

## Important Notes

- `itm/vercel.json` and `nc/vercel.json` tetap ada untuk MODE 2 (separate projects) — JANGAN dihapus.
- `public/CNAME` digunakan oleh MODE GitHub Pages (legacy), tidak di-bundle ke Vercel dist.
- Vite `base` path resolution:
  - `VITE_BASE_PATH=/itm/` (atau `/nc/`) → dipakai oleh MODE 1 (root combined deploy)
  - `VERCEL=1` → base `/` (dipakai oleh MODE 2 per-department)
  - Default → `/g4A-checkings/<dept>/` (GitHub Pages legacy)

## Documentation

- Skill `dept-report-replica-confirmation` — cara replicate department baru
- Skill `dept-report-replica-content-policy` — policy structure vs content
- Skill `tcu-report-execution-discipline` — operational discipline
