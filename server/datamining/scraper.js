const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function extractHTML(url, xPath, outputName) {
  console.log("Launching puppeteer...");
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage()
  console.log("Loading page...");
  await page.goto(url)
  await page.waitFor(5000)
  // await page.screenshot({ path: '../cache/CONFIRM.png', fullPage: true })
  console.log("Extracting HTML snippet...");
  // get an array of music from the site
  rawHTML = await page.$eval(
    (xPath),
    element => {
      return element.innerHTML
    }
  )
  console.log(`Writing to cache at 'cache/${outputName}.html...'`);
  // cache the song data
  const fs = await require('fs')
  // cache in case of network failure
  await fs.writeFileSync(`../cache/${outputName}.html`, rawHTML)
  await browser.close()
  console.log("Done!");
  // // await console.log(rawHTML);
  return rawHTML
}

module.exports = extractHTML;