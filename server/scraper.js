const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://soundcloud.com/ii_png')
  await page.waitFor(5000)
  await page.screenshot({ path: 'CONFIRM.png', fullPage: true })

  await browser.close()
  console.log(`All done, check the screenshot. ✨`)
})

// async function scrapeProduct(url) {
//   // start up browser
//   const browser = await puppeteer.launch();
//   // give us blank page to url
//   const page = await browser.newPage();
//   await page.goto(url);

//   // select by xpath and extract array
//   const [el] = await page.$x('/html/body/div[1]/div[2]/div[2]/div/div[4]/div[1]/div/div[2]/div/div[2]/ul/li[6]/div/div/div/div[1]/a');
//   const src = await el.getProperty('class');
//   const srcTxt = await src.jsonValue();

//   console.log(srcTxt);

//   browser.close();
// }

// // do the scraping
// scrapeProduct('https://soundcloud.com/ii_png');