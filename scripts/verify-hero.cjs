const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({channel:'chrome',headless:true});
 try {
  const page = await browser.newPage(); const errors=[];
  page.on('pageerror', e=>errors.push(e.message));
  page.on('console', m=>{if(m.type()==='error')errors.push(m.text())});
  for(const width of [1440,1024,768,390,320]){
   await page.setViewportSize({width,height:1000});
   await page.goto('http://localhost:3000');
   await page.waitForLoadState('networkidle');
   await page.locator('.hero-portrait img').evaluate(img=>img.decode());
   await page.waitForTimeout(750);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow ${width}`);
   const portrait=await page.locator('.hero-portrait img').evaluate(img=>({natural:img.naturalWidth,width:img.clientWidth,height:img.clientHeight,src:img.currentSrc}));
   assert(portrait.natural>0);assert(Math.abs(portrait.width/portrait.height-1073/1466)<.01);
   assert(await page.getByRole('heading',{level:1}).isVisible());
   assert.equal(await page.locator('.hero-micro, .hero-poster .tags, .hero-poster ul, .hero-poster .hero-bottom').count(),0);
   assert.equal(await page.locator('.poster-labels').count(),1);
   if(width===1440){
    const center=await page.evaluate(()=>{const h=document.querySelector('.hero-poster').getBoundingClientRect();const p=document.querySelector('.hero-portrait').getBoundingClientRect();return (p.left+p.width/2-h.left)/h.width;});
    assert(center>=.70 && center<=.735, 'Desktop portrait must sit center-right');
   }
   const obscuresFace=await page.evaluate(()=>{
    const image=document.querySelector('.hero-portrait img').getBoundingClientRect();
    const face={left:image.left+image.width*.23,right:image.left+image.width*.77,top:image.top+image.height*.18,bottom:image.top+image.height*.52};
    const walker=document.createTreeWalker(document.querySelector('h1'),NodeFilter.SHOW_TEXT);
    let node;while(node=walker.nextNode()){const range=document.createRange();range.selectNodeContents(node);for(const r of range.getClientRects()){if(r.left<face.right&&r.right>face.left&&r.top<face.bottom&&r.bottom>face.top)return true;}}
    return false;
   });
   assert.equal(obscuresFace,false,'Headline must not cover central facial features');
   assert(portrait.src.includes('editorial-portrait-v2'));
   assert.equal(await page.locator('.hero-poster h1').innerText(),'Project Manager\ntransitioning into IT.');
   await page.screenshot({path:`hero-${width}.png`});
   console.log(width,JSON.stringify(portrait));
  }
  await page.emulateMedia({reducedMotion:'reduce'});await page.reload();await page.waitForLoadState('networkidle');
  assert.equal(await page.locator('.hero-portrait').evaluate(el=>getComputedStyle(el).opacity),'1');
  await page.locator('.hero-actions a').click();assert.equal(new URL(page.url()).hash,'#experience');
  assert.deepEqual(errors,[]);console.log('PASS hero responsive, image loading/proportions, reduced motion, CTA, console');
 } finally {await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
