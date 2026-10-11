import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const ROUTES = [
  { path: "/", name: "home" },
  { path: "/work", name: "work" },
  { path: "/about", name: "about" },
  { path: "/lupaatbahay", name: "lupaatbahay" },
  { path: "/tara-stays", name: "tara-stays" },
  { path: "/indexwise/", name: "indexwise" },
  { path: "/blog", name: "blog" },
  { path: "/blog/2026-10-10-how-we-built-lupaatbahay", name: "blog-post" },
];

test.describe("lupaatbahay video", () => {
  test("loads no YouTube frame until play is pressed", async ({ page }) => {
    await page.goto("/lupaatbahay", { waitUntil: "domcontentloaded" });
    const play = page.getByRole("button", { name: /Play video/ });
    await expect(play).toBeVisible();
    const box = await play.boundingBox();
    expect(box && box.height >= 44 && box.width >= 44).toBe(true);
    await expect(page.locator("iframe")).toHaveCount(0);

    await play.click();
    await expect(page.locator("iframe[src*='youtube-nocookie.com/embed/xap3uTagOdw']")).toHaveCount(
      1,
    );
  });
});

// Ensure screenshots folder exists
const screenshotsDir = path.join(process.cwd(), "tests", "screenshots");
if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });

for (const route of ROUTES) {
  test.describe(`${route.name} page`, () => {
    test("no horizontal overflow", async ({ page }) => {
      // domcontentloaded avoids hanging on slow/failing external image loads
      await page.goto(route.path, { waitUntil: "domcontentloaded" });

      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(overflow, `Horizontal overflow on ${route.path}`).toBe(false);
    });

    test("page title is set", async ({ page }) => {
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      await expect(page).toHaveTitle(/.+/);
    });

    test("screenshot", async ({ page, viewport }, testInfo) => {
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      // Give images a short window to load without hard-blocking on them
      await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {});

      const w = viewport?.width ?? 375;
      const projectName = testInfo.project.name;
      const screenshotPath = path.join(screenshotsDir, `${route.name}-${projectName}-${w}px.png`);

      await page.screenshot({ path: screenshotPath, fullPage: true });
    });
  });
}
