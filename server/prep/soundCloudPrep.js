const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// import scraper
const Extract = require('../scribary/extractRML');
const Convert = require('../scribary/convertRML');

async function main() {
  // set constants
  const buffer = 500;
  const url = 'https://soundcloud.com/ii_png'
  const xPath = '[class="soundList sc-list-nostyle"]'
  const outputPath = '../cache/SoundCloud'

  const rml = await Extract.extractRML(buffer, url, xPath, outputPath, true)
  // guarantee scraper worked
  console.assert(rml !== undefined, "soundCloudPrep() - rml is undefined")
  const NODE_DOM = Convert.convertRML(rml, true)

  // convert to custom schema
  queryIntoSchema(NODE_DOM)
}

function queryIntoSchema(NODE_DOM) {
  // ties the parsed url to the home directory of site
  const ROOT_URL = 'https://soundcloud.com'
  // retrive url
  const urlList = NODE_DOM.querySelectorAll('a.soundTitle__title')
  console.log(urlList);
}

/*** DO NOT CODE BELOW THIS LINE ***/
// run main with node.js
main()

