import { test, expect } from '@playwright/test';

test('navbar renders and theme toggle switches to light', async ({ page }) => {
  await page.goto('/');

  // Header visible
  const header = page.locator('header');
  await expect(header).toBeVisible();

  // Take screenshot dark
  await page.screenshot({ path: 'tmp/pw-dark-home.png', fullPage: true });

  // Ensure we end up in light mode (click up to 2 times)
  const toggle = page.getByRole('button', { name: /toggle theme/i });
  await toggle.scrollIntoViewIfNeeded();
  for (let i = 0; i < 2; i++) {
    const isAlreadyLight = await page.evaluate(() => document.documentElement.classList.contains('light'));
    if (isAlreadyLight) break;
    await toggle.click({ force: true });
    await page.waitForFunction(() => document.documentElement.classList.contains('light'), { timeout: 2000 }).catch(() => {});
  }

  // Expect html to have class light OR computed body background to be light-ish
  const isLight = await page.evaluate(() => {
    const html = document.documentElement;
    if (html.classList.contains('light')) return true;
    const bg = window.getComputedStyle(document.body).backgroundImage + window.getComputedStyle(document.body).backgroundColor;
    return /rgb\(248, 250, 252\)|F8FAFC|light/i.test(bg);
  });
  expect(isLight).toBeTruthy();

  // Links should be readable (not near-white on white)
  const anyLink = page.locator('header a').first();
  const color = await anyLink.evaluate((el) => getComputedStyle(el).color);
  // Ensure not pure white text
  expect(color).not.toMatch(/rgb\(255, 255, 255\)/);

  await page.screenshot({ path: 'tmp/pw-light-home.png', fullPage: true });
});


