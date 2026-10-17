import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const ROUTES = [
  { path: "/", name: "home" },
  { path: "/work", name: "work" },
  { path: "/about", name: "about" },
  { path: "/lupaatbahay", name: "lupaatbahay" },
  { path: "/tara-stays", name: "tara-stays" },
  { path: "/blog", name: "blog" },
  { path: "/blog/2026-10-10-how-we-built-lupaatbahay", name: "blog-post" },
];

test.describe("lupaatbahay video", () => {
  test("autoplays muted after load, above the brief", async ({ page }) => {
    await page.goto("/lupaatbahay");
    const frame = page.locator("iframe[src*='youtube-nocookie.com/embed/xap3uTagOdw']");
    await expect(frame).toHaveCount(1);
    await expect(frame).toHaveAttribute("src", /autoplay=1/);
    await expect(frame).toHaveAttribute("src", /mute=1/);
    await expect(frame).toHaveAttribute("src", /enablejsapi=1/);

    const sound = page.getByRole("button", { name: /Tap for sound/ });
    await expect(sound).toBeVisible();
    const box = await sound.boundingBox();
    expect(box && box.height >= 44).toBe(true);
    await sound.click();
    await expect(sound).toHaveCount(0);

    const videoTop = (await page.locator("#video").boundingBox())?.y ?? Infinity;
    const briefTop = (await page.getByText("The brief").boundingBox())?.y ?? 0;
    expect(videoTop).toBeLessThan(briefTop);
  });

  test.describe("reduced motion", () => {
    test.use({ contextOptions: { reducedMotion: "reduce" } });

    test("waits for play, then plays with sound", async ({ page }) => {
      await page.goto("/lupaatbahay");
      const play = page.getByRole("button", { name: /Play video/ });
      await expect(play).toBeVisible();
      const box = await play.boundingBox();
      expect(box && box.height >= 44 && box.width >= 44).toBe(true);
      await expect(page.locator("iframe")).toHaveCount(0);

      await play.click();
      const frame = page.locator("iframe[src*='youtube-nocookie.com/embed/xap3uTagOdw']");
      await expect(frame).toHaveCount(1);
      await expect(frame).not.toHaveAttribute("src", /mute=1/);
    });
  });
});

test.describe("raceverse video", () => {
  const countPlays = () => {
    (window as unknown as { __plays: number }).__plays = 0;
    HTMLMediaElement.prototype.play = function () {
      (window as unknown as { __plays: number }).__plays += 1;
      return Promise.resolve();
    };
  };
  const plays = (page: import("@playwright/test").Page) =>
    page.evaluate(() => (window as unknown as { __plays: number }).__plays);

  test("starts muted once scrolled into view", async ({ page }) => {
    await page.addInitScript(countPlays);
    await page.goto("/raceverse");
    expect(await plays(page)).toBe(0);
    await page.locator("#video video").scrollIntoViewIfNeeded();
    await expect.poll(() => plays(page)).toBe(1);
    expect(await page.locator("#video video").evaluate((v: HTMLVideoElement) => v.muted)).toBe(
      true,
    );

    const sound = page.getByRole("button", { name: /Tap for sound/ });
    await expect(sound).toBeVisible();
    const box = await sound.boundingBox();
    expect(box && box.height >= 44).toBe(true);
    await sound.click();
    await expect(sound).toHaveCount(0);
    expect(await page.locator("#video video").evaluate((v: HTMLVideoElement) => v.muted)).toBe(
      false,
    );
  });

  test.describe("reduced motion", () => {
    test.use({ contextOptions: { reducedMotion: "reduce" } });

    test("does not autoplay", async ({ page }) => {
      await page.addInitScript(countPlays);
      await page.goto("/raceverse");
      await page.locator("#video video").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      expect(await plays(page)).toBe(0);
    });
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
