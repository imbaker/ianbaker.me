import { test, expect } from "@playwright/test";

test("home page loads successfully", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  expect(await page.title()).toBe("Concerts");
});

test("setlist can be expanded and collapsed", async ({ page }) => {
  await page.goto("/");

  const button = page.locator("[data-setlist-toggle]").first();

  await expect(button).toHaveText("View setlist");
  await expect(button).toHaveAttribute("aria-expanded", "false");

  await button.click();

  await expect(button).toHaveText("Hide setlist");
  await expect(button).toHaveAttribute("aria-expanded", "true");

  const setlistId = await button.getAttribute("aria-controls");
  const setlist = page.locator(`#${setlistId}`);

  await expect
    .poll(async () => {
      return await setlist.evaluate((el) => el.clientHeight);
    })
    .toBeGreaterThan(0);

  await button.click();

  await expect(button).toHaveText("View setlist");
  await expect(button).toHaveAttribute("aria-expanded", "false");

  await expect
    .poll(async () => {
      return await setlist.evaluate((el) => el.clientHeight);
    })
    .toBe(0);
});

test("theme toggle switches between light and dark", async ({ page }) => {
  await page.goto("/");

  const html = page.locator("html");
  const button = page.locator("#theme-toggle");

  // Initial state
  const isDark = async () =>
    html.evaluate((el) => el.classList.contains("dark"));

  await expect.poll(isDark).toBe(false);

  await button.click();

  await expect.poll(isDark).toBe(true);
  await expect(button).toHaveAttribute("aria-label", "Switch to light mode");

  await button.click();

  await expect.poll(isDark).toBe(false);
  await expect(button).toHaveAttribute("aria-label", "Switch to dark mode");
});

test("page has no CSP violations", async ({ page }) => {
  const errors: string[] = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(msg.text());
    }
  });

  await page.goto("/");

  expect(
    errors.filter(
      (e) =>
        e.includes("Content Security Policy") ||
        e.includes("Refused to execute"),
    ),
  ).toEqual([]);
});
