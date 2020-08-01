// const puppeteer = require('puppeteer-extra')
const puppeteer = require('puppeteer')
const Extra = require('./verboseHeader')

// add stealth plugin and use defaults (all evasion techniques)
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())

/**
 * scraper utility created for the collection step of data mining
 * @param {Number} buffer - the number of milliseconds to busy wait
 * larger numbers prevent race condtions on slower networks, but
 * also make the scraper utility run slower
 * @param {Number} frameLimit - The number of frames to render
 * if a site is larger than the 3000px in height increasing the number
 * of frames is suggested
 * @param {String} url - website URL
 * @param {xPath} xPath - xpath to div you want to extract
 * @param {String} outputPath - relative location to cache
 * @param {Boolean} verbose - use console.log() output 
 * @returns .rml (raw markup language) which can be converted into HTML
 * via convertRML
 */
async function extractRML(buffer, frameLimit, url, xPath, outputPath, verbose) {
  if(verbose) {
    console.log(Extra.verboseHeader('1.2.2', 'extractRML'))
    console.log("Launching puppeteer...");
  }
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.setViewport({ width: 1366, height: 3000})
  if(verbose)
    console.log("Loading page...");
  await page.goto(url)
  // await page.waitForNavigation({
  //   waitUntil: 'networkidle0',
  // });
  await autoScroll(page, buffer, frameLimit, verbose);
  await page.screenshot({ path: '../cache/CONFIRM.png', fullPage: true })
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
    console.log("Done! Promise returned as rml.\n");
  return rawHTML
}

async function autoScroll(page, buffer, scrollLimit, verbose) {
  let iteration = 0
  const FRAME_SIZE = 1

  // scroll
  try {
    while(iteration < scrollLimit) {
      if(verbose) {
        console.log(`At frame ${iteration}`)
      }
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
      await page.waitForFunction(`document.body.scrollHeight > ${FRAME_SIZE * iteration}`)
      
      await page.waitFor(buffer)
      await iteration++
    }
  } catch (error) {
    if(verbose)
    console.log(`Done after ${iteration} frames!`)
  }
}

exports.extractRML = extractRML