# deploy.ps1 — Deploy tcucc-dev/g4A-checkings to GitHub Pages
#
# Usage: .\deploy.ps1 [optional-dept-slug]
# Example: .\deploy.ps1 itm     # builds only itm/
#          .\deploy.ps1         # builds all depts (itm, nc, ...)
#
# What it does:
# 1. For each dept folder: npm ci (if needed) + npm run build → dept/dist/
# 2. Copy each dept/dist/index.html → dept/dist/404.html (SPA fallback)
# 3. Build root landing into staging dir
# 4. gh-pages -d staging  — push to gh-pages branch
# 5. Done — live at https://tcucc-dev.github.io/g4A-checkings/

param(
    [string]$Dept = "all"
)

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  TCU WebInsight — GitHub Pages deploy" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Stage all dists into a single tmp dir
$staging = "_staging"
if (Test-Path $staging) { Remove-Item -Recurse -Force $staging }
New-Item -ItemType Directory -Path $staging | Out-Null

# Copy CNAME
if (Test-Path "public/CNAME") {
    Copy-Item -Path "public/CNAME" -Destination "$staging/CNAME"
    Write-Host "→ Copied CNAME (custom domain)" -ForegroundColor Green
}

# Copy root landing + 404
Copy-Item -Path "index.html" -Destination "$staging/index.html"
Copy-Item -Path "404.html" -Destination "$staging/404.html"
Write-Host "→ Copied root landing + 404" -ForegroundColor Green

# Build depts
$depts = @()
if ($Dept -eq "all") {
    foreach ($d in (Get-ChildItem -Directory | Where-Object { $_.Name -notin @('_staging', 'public', 'node_modules', '.git') })) {
        $depts += $d.Name
    }
} else {
    $depts += $Dept
}

foreach ($d in $depts) {
    if (-not (Test-Path $d/package.json")) {
        Write-Host "→ Skipping $d (no package.json)" -ForegroundColor Yellow
        continue
    }

    Write-Host ""
    Write-Host "→ Building $d..." -ForegroundColor Cyan
    Push-Location $d

    if (-not (Test-Path "node_modules")) {
        Write-Host "  Installing dependencies..." -ForegroundColor Yellow
        npm ci
        if ($LASTEXITCODE -ne 0) { throw "$d npm ci failed" }
    }

    npm run build
    if ($LASTEXITCODE -ne 0) { throw "$d build failed" }

    if (-not (Test-Path "dist/index.html")) {
        throw "$d build OK but dist/index.html missing"
    }

    # Copy dept dist into staging/<dept>
    $dest = "../$staging/$d"
    if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }
    Copy-Item -Recurse -Path "dist/*" -Destination $dest
    Write-Host "  ✓ $d dist → staging/$d" -ForegroundColor Green

    Pop-Location
}

# Push to gh-pages
Write-Host ""
Write-Host "→ Pushing $staging/ to gh-pages branch..." -ForegroundColor Cyan
npx.cmd gh-pages -d $staging
if ($LASTEXITCODE -ne 0) { throw "gh-pages push failed" }

# Cleanup
Remove-Item -Recurse -Force $staging

Write-Host ""
Write-Host "=========================================" -ForegroundColor Green
Write-Host "  ✓ Deploy complete!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host "  Live URL: https://tcucc-dev.github.io/g4A-checkings/" -ForegroundColor Green
Write-Host "  Or with custom domain: https://report.tcu.edu.tw/" -ForegroundColor Green
Write-Host ""
Write-Host "Note: GitHub Pages may take 1-2 minutes to update." -ForegroundColor Yellow
Write-Host ""
