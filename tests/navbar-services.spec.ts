import { test, expect } from '@playwright/test';

test('services dropdown opens and closes reliably over time', async ({ page }) => {
  await page.goto('/');
  const servicesButton = page.getByRole('button', { name: /servicios/i });
  await expect(servicesButton).toBeVisible();

  for (let i = 0; i < 5; i++) {
    // Open using click
    await servicesButton.click();
    const menu = page.locator('#services-menu');
    await expect(menu).toBeVisible();
    // Move mouse away and click outside to close
    await page.mouse.move(5, 5);
    await page.mouse.click(5, 5);
    await expect(menu).toBeHidden();
  }

  // Open via hover
  await servicesButton.hover();
  await expect(page.locator('#services-menu')).toBeVisible();
});


