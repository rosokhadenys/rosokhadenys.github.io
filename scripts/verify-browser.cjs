// Run with PLAYWRIGHT_MODULE pointing to an available Playwright installation.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.goto(process.env.PREVIEW_URL || 'http://localhost:3000');
  await page.waitForLoadState('networkidle');
  for (const width of [1440, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const id of ['about', 'experience', 'projects', 'automation', 'skills', 'contact']) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
    }
    const size = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, viewport: innerWidth }));
    assert(size.scroll <= size.viewport, `Page overflow at ${width}: ${JSON.stringify(size)}`);
    await page.screenshot({ path: `browser-${width}.png`, fullPage: true });
    await page.locator('#automation').scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.locator('#automation').screenshot({ path: `workflow-${width}.png` });
    assert.equal(await page.locator('.connection-track').count(), 8);
    if (width <= 390) {
      const boxes = await page.locator('.workflow-node').evaluateAll(nodes => nodes.map(n => { const r = n.getBoundingClientRect(); return { top:r.top, bottom:r.bottom }; }));
      assert(boxes.every((b, i) => i === 0 || b.top > boxes[i-1].bottom), 'Mobile nodes must form an ordered vertical flow');
      await page.locator('.experience-toggle').first().click();
      await page.waitForTimeout(350);
      assert(await page.locator('#experience-1-details').isVisible());
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await page.locator('.experience-toggle').first().click();
    }
    console.log(`Layout ${width}px: no page overflow; connections verified`);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  const roles = page.locator('.experience-toggle');
  for (let i = 0; i < 3; i++) { await roles.nth(i).click(); await page.waitForTimeout(350); assert.equal(await page.locator('.experience-toggle[aria-expanded="true"]').count(), 1); assert(await page.locator(`#experience-${i+1}-details`).isVisible()); }
  await roles.nth(2).click();
  for (const button of await page.locator('.capability button').all()) { await button.click(); assert.equal(await button.getAttribute('aria-expanded'), 'true'); await button.click(); }
  for (const button of await page.locator('.case-toggle').all()) { await button.click(); assert.equal(await button.getAttribute('aria-expanded'), 'true'); await button.click(); }
  const nodes = page.locator('.workflow-node');
  await nodes.nth(3).click(); assert(await page.locator('.workflow-detail-heading h3').textContent() === 'ChatGPT');
  await page.getByRole('button', { name: 'Play Workflow', exact: true }).click();
  assert.equal(await nodes.nth(0).getAttribute('aria-pressed'), 'true', 'New playback starts at 01 after manual selection');
  await page.waitForTimeout(150);
  const pulse = page.locator('.connection-pulse');
  assert.equal(await pulse.count(), 1);
  assert.match(await pulse.evaluate(el => getComputedStyle(el).strokeDasharray), /0\.16/, 'Traveling pulse should occupy only part of the path');
  const offset = await pulse.evaluate(el => getComputedStyle(el).strokeDashoffset);
  await page.waitForTimeout(200);
  assert.notEqual(await pulse.evaluate(el => getComputedStyle(el).strokeDashoffset), offset, 'Beam must travel');
  await nodes.nth(6).click();
  assert.equal(await pulse.count(), 0, 'Manual selection stops playback');
  assert.equal(await page.locator('.connection-track.relevant').count(), 2);
  await page.getByRole('button', { name: 'Restart workflow' }).click();
  await page.waitForTimeout(1250);
  await page.getByRole('button', { name: 'Pause', exact: true }).click();
  const paused = await page.locator('.workflow-node[aria-pressed="true"]').textContent();
  await page.waitForTimeout(1200);
  assert.equal(await page.locator('.workflow-node[aria-pressed="true"]').textContent(), paused);
  await page.getByRole('button', { name: 'Play Workflow', exact: true }).click();
  await page.waitForTimeout(8800);
  assert.equal(await nodes.nth(8).getAttribute('aria-pressed'), 'true');
  assert(await page.getByRole('button', { name: 'Play Workflow', exact: true }).isVisible());
  await nodes.nth(2).focus(); await page.keyboard.press('Enter'); assert.equal(await nodes.nth(2).getAttribute('aria-pressed'), 'true');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0,0)); await page.waitForTimeout(400);
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Experience' }).click();
  assert.equal(new URL(page.url()).hash, '#experience');
  await page.evaluate(() => window.scrollTo(0,0)); await page.waitForTimeout(400);
  await page.getByRole('button', { name: 'Open menu' }).click(); await page.keyboard.press('Escape');
  assert.equal(await page.getByRole('button', { name: 'Open menu' }).getAttribute('aria-expanded'), 'false');
  for (const link of await page.locator('a[href^="#"]').all()) { const href = await link.getAttribute('href'); assert(await page.locator(href).count(), `Missing target ${href}`); }
  await page.emulateMedia({ reducedMotion: 'reduce' }); await page.reload();
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  await page.locator('.experience-toggle').first().focus(); await page.keyboard.press('Enter');
  assert.equal(await page.locator('.experience-toggle').first().getAttribute('aria-expanded'), 'true');
  await page.locator('.workflow-node').nth(6).click();
  assert.equal(await page.locator('.workflow-detail-heading h3').textContent(), 'Human Approval');
  await page.getByRole('button', { name: 'Restart workflow' }).click();
  await page.waitForTimeout(1250);
  assert.equal(await page.locator('.connection-pulse').count(), 0);
  assert.equal(await page.locator('.workflow-node').nth(1).getAttribute('aria-pressed'), 'true');
  await page.getByRole('button', { name: 'Pause', exact: true }).click();
  assert.deepEqual(errors, []);
  console.log('PASS: accordions, capabilities, case studies, workflow select/play/pause/restart/completion, keyboard, mobile menu, anchors, reduced motion, console');
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
