import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 2,
  retries: 0,
  timeout: 60000,
  reporter: "list",
  webServer: {
    command: "npm run preview",
    port: 4173,
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
  use: {
    baseURL: "http://localhost:4173",
    navigationTimeout: 30000,
  },
  projects: [
    {
      name: "mobile",
      use: { viewport: { width: 375, height: 812 } },
    },
    {
      name: "tablet",
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: "desktop",
      use: { viewport: { width: 1440, height: 900 } },
    },
  ],
});
