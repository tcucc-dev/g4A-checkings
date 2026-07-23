#!/usr/bin/env bash
# deploy.sh — Deploy tcucc-dev/g4A-checkings to GitHub Pages (Linux/macOS/WSL)
#
# Usage: ./deploy.sh [optional-dept-slug]
# Example: ./deploy.sh itm
#          ./deploy.sh     # builds all depts (itm, nc, ...)

set -euo pipefail

cd "$(dirname "$0")"

DEPT="${1:-all}"

GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo ""
echo -e "${CYAN}=========================================${NC}"
echo -e "${CYAN}  TCU WebInsight — GitHub Pages deploy${NC}"
echo -e "${CYAN}=========================================${NC}"
echo ""

STAGING="_staging"
rm -rf "$STAGING"
mkdir -p "$STAGING"

# Copy CNAME
if [ -f "public/CNAME" ]; then
    cp "public/CNAME" "$STAGING/CNAME"
    echo -e "${GREEN}→ Copied CNAME (custom domain)${NC}"
fi

# Copy root landing + 404
cp "index.html" "$STAGING/index.html"
cp "404.html" "$STAGING/404.html"
echo -e "${GREEN}→ Copied root landing + 404${NC}"

# Build depts
if [ "$DEPT" = "all" ]; then
    DEPTS=$(find . -maxdepth 1 -type d \( -name 'itm' -o -name 'nc' -o -name 'med' -o -name 'pt' \) | sed 's|^\./||')
else
    DEPTS="$DEPT"
fi

for d in $DEPTS; do
    if [ ! -f "$d/package.json" ]; then
        echo -e "${YELLOW}→ Skipping $d (no package.json)${NC}"
        continue
    fi

    echo ""
    echo -e "${CYAN}→ Building $d...${NC}"
    pushd "$d" > /dev/null

    if [ ! -d "node_modules" ]; then
        echo -e "  ${YELLOW}Installing dependencies...${NC}"
        npm ci
    fi

    npm run build

    if [ ! -f "dist/index.html" ]; then
        echo -e "${YELLOW}Build OK but dist/index.html missing for $d${NC}"
        popd > /dev/null
        continue
    fi

    popd > /dev/null

    mkdir -p "../$STAGING/$d"
    cp -r "$d/dist/." "../$STAGING/$d/"
    echo -e "${GREEN}  ✓ $d dist → staging/$d${NC}"
done

# Push to gh-pages
echo ""
echo -e "${CYAN}→ Pushing $STAGING/ to gh-pages branch...${NC}"
npx gh-pages -d "$STAGING"
rm -rf "$STAGING"

echo ""
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}  ✓ Deploy complete!${NC}"
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}  Live URL: https://tcucc-dev.github.io/g4A-checkings/${NC}"
echo -e "${GREEN}  Or with custom domain: https://report.tcu.edu.tw/${NC}"
echo ""
echo -e "${YELLOW}Note: GitHub Pages may take 1-2 minutes to update.${NC}"
echo ""
