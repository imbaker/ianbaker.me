import { test, expect } from "@playwright/test";

test("home page loads successfully", async ({ page }) => {
  const response = await page.goto("http://localhost:4321");
  expect(response?.status()).toBe(200);
  expect(await page.title()).toBe("Concerts");
});
