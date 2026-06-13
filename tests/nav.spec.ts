import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.describe("mobile (375px)", () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test("hamburger button is visible, desktop links are hidden", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
      // Desktop nav ul should not be visible at this width
      await expect(page.locator("header nav ul").first()).not.toBeVisible();
    });

    test("menu opens on hamburger click", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await page.getByRole("button", { name: "Menu" }).click();
      // Mobile drawer is a ul.grid rendered conditionally when open
      const drawer = page.locator("header ul.grid");
      await expect(drawer).toBeVisible();
      // Scope link assertions to the drawer to avoid matching footer/hero links
      await expect(drawer.getByRole("link", { name: "Services", exact: true })).toBeVisible();
      await expect(drawer.getByRole("link", { name: "Work", exact: true })).toBeVisible();
      await expect(drawer.getByRole("link", { name: "About", exact: true })).toBeVisible();
      await expect(drawer.getByRole("link", { name: "Blog", exact: true })).toBeVisible();
    });

    test("menu closes when button clicked again", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      const toggleBtn = page.getByRole("button", { name: "Menu" });
      const drawer = page.locator("header ul.grid");
      // Open
      await toggleBtn.click();
      await expect(drawer).toBeVisible();
      // Close — button aria-label stays "Menu" but toggling closes the drawer
      await toggleBtn.click();
      await expect(drawer).not.toBeVisible();
    });
  });

  test.describe("desktop (1440px)", () => {
    test.use({ viewport: { width: 1440, height: 900 } });

    test("hamburger button is hidden", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await expect(page.getByRole("button", { name: "Menu" })).not.toBeVisible();
    });

    test("desktop nav links are visible", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      // Scope to the desktop nav ul (hidden md:flex — visible at 1440px)
      const desktopNav = page.locator("header nav ul").first();
      await expect(desktopNav.getByRole("link", { name: "Services", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "Work", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "About", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "Blog", exact: true })).toBeVisible();
    });

    test("Start a Project CTA is visible", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await expect(page.getByRole("link", { name: /Start a Project/i }).first()).toBeVisible();
    });
  });

  test.describe("page links work", () => {
    test("Work link navigates to /work", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.locator("header nav ul").first().getByRole("link", { name: "Work", exact: true }).click();
      await expect(page).toHaveURL(/\/work/);
    });

    test("About link navigates to /about", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.locator("header nav ul").first().getByRole("link", { name: "About", exact: true }).click();
      await expect(page).toHaveURL(/\/about/);
    });

    test("Blog link navigates to /blog", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.locator("header nav ul").first().getByRole("link", { name: "Blog", exact: true }).click();
      await expect(page).toHaveURL(/\/blog/);
    });
  });
});
