import { test, expect } from '@playwright/test';
import { PlaywrightInputPage } from "./Input.page";

let inputPage: PlaywrightInputPage;
test.describe("button page tests", () => {
  test.beforeEach(async ({ page }) => {
    inputPage = new PlaywrightInputPage(page);
    inputPage.goto();
  });

  test('description should be visible', async () => {
    await expect(inputPage.description).toBeVisible();
  });

  test('initially demo button should be visible', async () => {
    await expect(inputPage.demoButton).toBeVisible();
  });

  test('code should be visible on click of code button', async ({ page }) => {
    await inputPage.codeButton.click();
    const code = page.locator('pre')
    await expect(code).toBeVisible();
  });
});

