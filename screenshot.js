const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://danielcross.framer.website/', { waitUntil: 'networkidle2' });

  // Scroll to bottom to trigger lazy loading and animations
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  // Wait a bit for images and animations to finish
  await new Promise(r => setTimeout(r, 2000));
  
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: '/home/pranav/Documents/pr/reference.png', fullPage: true });
  await browser.close();
  console.log("Screenshot saved to /home/pranav/Documents/pr/reference.png");
})();
