import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", headline: "Herzlich Willkommen im LUMI!" },
  { path: "/team", headline: "Das LUMI Team" },
  { path: "/verein", headline: "Der Verein" },
  { path: "/impressum", content: "Angaben gemäß § 5 TMG" },
  { path: "/kontakt", headline: "Der Weg zu uns" },
  { path: "/tagesablauf", headline: "Der Tag im LUMI" },
  { path: "/stellenangebote", headline: "Unsere Stellenangebote" },
];

for (const page of pages) {
  test(`page ${page.path} loads without errors`, async ({ page: p }) => {
    const consoleErrors: string[] = [];
    p.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    const response = await p.goto(page.path);
    expect(response?.status()).toBe(200);

    if ("headline" in page && page.headline) {
      await expect(p.getByRole("heading", { name: page.headline })).toBeVisible();
    } else if ("content" in page && page.content) {
      await expect(p.getByText(page.content)).toBeVisible();
    }

    expect(consoleErrors).toHaveLength(0);
  });
}

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  const navLinks = [
    { href: "/tagesablauf", headline: "Der Tag im LUMI" },
    { href: "/kontakt", headline: "Der Weg zu uns" },
    { href: "/team", headline: "Das LUMI Team" },
    { href: "/verein", headline: "Der Verein" },
  ];

  for (const link of navLinks) {
    test(`navigation link to ${link.href} works`, async ({ page }) => {
      await page.getByRole("link", { name: link.headline }).click();
      await expect(page).toHaveURL(new RegExp(link.href));
      await expect(page.getByRole("heading", { name: link.headline })).toBeVisible();
    });
  }

  test("footer links work", async ({ page }) => {
    await page.getByRole("link", { name: "Impressum & Datenschutz" }).click();
    await expect(page).toHaveURL(/impressum/);
  });

  test("logo link returns to home", async ({ page }) => {
    await page.goto("/team");
    await page.locator("nav").getByRole("link").first().click();
    await expect(page).toHaveURL("/");
  });
});
