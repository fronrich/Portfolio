const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

let songs;

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://soundcloud.com/ii_png')
  await page.waitFor(1000)
  await page.screenshot({ path: 'CONFIRM.png', fullPage: true })

  // get an array of music from the site
  songs = await page.$eval(
    ('[class="soundList sc-list-nostyle"]'),
    element => {
      return element.innerHTML
    }
  )

  // for each song

  console.log(songs);
  await browser.close()
  console.log(`All done, check the screenshot. ✨`)
})