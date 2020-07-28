const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  // start up browser
  const browser = await puppeteer.launch();
  // give us blank page to url
  const page = await browser.newPage();
  page.goto(url);

}

// do the scraping
scrapeProduct(`https://soundcloud.com/ii_png`);