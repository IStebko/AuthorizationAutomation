import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "functional-tests",
  fullyParallel: true,
  workers: 1,
  reporter: "html",
  timeout: 60000,
  use: {
    trace: "on-first-retry",
    headless: true,
  },
  projects: [
    {
      name: "chromium",
      use: {
        baseURL: "https://opensource-demo.orangehrmlive.com/",
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});
