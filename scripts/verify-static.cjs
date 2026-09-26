// PLAYWRIGHT_MODULE points to an existing Playwright installation.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const url = process.env.PREVIEW_URL || 'http://localhost:3000';
    for (const width of [1440, 1024, 768, 390, 320]) {
      const page = await browser.newPage({ viewport: { width, height: 844 }, reducedMotion: 'reduce' });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
      page.on('response', r => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
      await page.goto(url); await page.waitForLoadState('networkidle');
      await page.locator('.hero-portrait img').evaluate(img => img.decode());
      assert.equal(await page.locator('.hero-portrait img').evaluate(img => img.naturalWidth), 1073);
      assert(!(await page.locator('img').first().getAttribute('src')).includes('_next/image'));
      const favicon = await page.locator('link[rel="icon"]').getAttribute('href');
      assert.equal((await page.request.get(new URL(favicon, url).href)).status(), 200);
      if (width <= 390) {
        await page.getByRole('button', { name: 'Open menu', exact: true }).click();
        await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Experience' }).click();
      } else await page.getByRole('link', { name: 'View Experience' }).click();
      await page.locator('.experience-toggle').first().click();
      assert.equal(await page.locator('.experience-toggle').first().getAttribute('aria-expanded'), 'true');
      for (const button of await page.locator('.case-toggle').all()) { await button.click(); assert.equal(await button.getAttribute('aria-expanded'), 'true'); }
      await page.locator('.workflow-node').nth(3).click();
      assert.equal(await page.locator('.workflow-detail-heading h3').textContent(), 'ChatGPT');
      await page.getByRole('button', { name: 'Play Workflow', exact: true }).click();
      await page.waitForTimeout(1200);
      assert.equal(await page.locator('.workflow-node').nth(1).getAttribute('aria-pressed'), 'true');
      await page.getByRole('button', { name: 'Pause', exact: true }).click();
      for (const [name, href] of [['Email','mailto:rosokha.denys@gmail.com'],['LinkedIn','https://www.linkedin.com/in/denys-rosokha-pm/'],['WhatsApp','https://wa.me/4916095470041']]) {
        assert.equal(await page.locator('#contact a').filter({ hasText: name }).getAttribute('href'), href);
      }
      assert(await page.locator('#contact button').isDisabled());
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      for (const href of await page.locator('a[href^="#"]').evaluateAll(es => es.map(e => e.getAttribute('href')))) assert(await page.locator(href).count());
      // Fresh navigation checks the default launcher placement independently of scroll focus.
      await page.goto(url); await page.waitForLoadState('networkidle');
      const launcher = page.locator('.contact-launcher');
      await launcher.click(); assert.equal(await launcher.getAttribute('aria-expanded'), 'true');
      assert.equal(await page.locator('.floating-contact-options a').count(), 3);
      await page.keyboard.press('Escape');
      const box = await launcher.boundingBox();
      await page.mouse.move(box.x + 20, box.y + 20); await page.mouse.down();
      await page.mouse.move(35, 400, { steps: 8 }); await page.mouse.up();
      await page.waitForTimeout(100);
      assert.equal(await page.locator('.floating-contact').getAttribute('data-side'), 'left');
      assert.equal(await launcher.getAttribute('aria-expanded'), 'false');
      assert.deepEqual(errors, []);
      console.log(`${width}px: static assets, navigation, disclosures, workflow, contacts, launcher, overflow, console PASS`);
      await page.close();
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
