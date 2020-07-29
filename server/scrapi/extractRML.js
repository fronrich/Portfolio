const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

/**
 * scraper utility created for the collection step of data mining
 * @param {NUmber} buffer - the number of milliseconds to busy wait
 * larger numbers prevent race condtions on slower networks, but
 * also make the scraper utility run slower
 * @param {String} url - website URL
 * @param {xPath} xPath - xpath to div you want to extract
 * @param {String} outputPath - relative location to cache
 * @param {Boolean} verbose - use console.log() output 
 * @returns .rml (raw markup language) which can be converted into HTML
 * via convertRML
 */
async function extractRML(buffer, url, xPath, outputPath, verbose) {
  if(verbose) {
    console.log("ScrAPI Version 1.0.0 - Running in verbose mode");
    console.log("Launching puppeteer...");
  }
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage()
  if(verbose)
    console.log("Loading page...");
  await page.goto(url)
  await page.waitFor(buffer)
  // await page.screenshot({ path: '../cache/CONFIRM.png', fullPage: true })
  if(verbose)
    console.log("Extracting HTML snippet...");
  // get an array of music from the site
  rawHTML = await page.$eval(
    (xPath),
    element => {
      return element.innerHTML
    }
  )
  if(verbose)
    console.log(`Writing to cache at '${outputPath}.rml...'`)
  // cache the song data
  const fs = await require('fs')
  // cache in case of network failure
  await fs.writeFileSync(`${outputPath}.rml`, rawHTML)
  await browser.close()
  if(verbose)
    console.log("Done!");
  return rawHTML
}

exports.extractRML = extractRML