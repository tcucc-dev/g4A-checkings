"""Capture baseline screenshots and section heights."""
from playwright.sync_api import sync_playwright

URL = "http://127.0.0.1:4178/nc/"
OUT = "C:/ai_auto/repo/g4A-checkings/compactness-v2"

SECTIONS = [
    "m-reports-todo",
    "stale-pages",
    "m-trends",
    "m-audience",
    "m-summary",
    "geo-top",
    "common",
    "m-decisions",
]


def measure(page, label):
    page.wait_for_timeout(800)
    body_h = page.evaluate("() => document.documentElement.scrollHeight")
    result = {"label": label, "total": body_h, "sections": {}}
    for sec_id in SECTIONS:
        # try id selector
        try:
            h = page.evaluate(
                f"() => {{const el = document.querySelector('#{sec_id}');"
                f"return el ? el.getBoundingClientRect().height : null;}}"
            )
            result["sections"][sec_id] = h
        except Exception as exc:
            result["sections"][sec_id] = f"err: {exc}"
    return result


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])

    # Desktop
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    page.goto(URL, wait_until="domcontentloaded", timeout=30_000)
    page.wait_for_timeout(2500)
    page.screenshot(path=f"{OUT}/before-desktop-full.png", full_page=True)
    desktop = measure(page, "desktop")
    print("DESKTOP:")
    print(" total:", desktop["total"])
    for k, v in desktop["sections"].items():
        print(f"  {k}: {v}")
    ctx.close()

    # Mobile (iPhone 12 size)
    ctx = browser.new_context(viewport={"width": 390, "height": 844})
    page = ctx.new_page()
    page.goto(URL, wait_until="domcontentloaded", timeout=30_000)
    page.wait_for_timeout(2500)
    page.screenshot(path=f"{OUT}/before-mobile-full.png", full_page=True)
    mobile = measure(page, "mobile")
    print("\nMOBILE:")
    print(" total:", mobile["total"])
    for k, v in mobile["sections"].items():
        print(f"  {k}: {v}")
    ctx.close()

    browser.close()

print("\nDone.")