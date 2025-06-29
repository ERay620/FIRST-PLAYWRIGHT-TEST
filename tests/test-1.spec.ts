import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();

  const heading = page.getByRole('heading', { name: 'IntroductionDirect link to' });
  await expect(heading).toHaveText('Introduction'); // Check if the heading has the correct text 
});