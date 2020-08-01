const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// import scraper
const Extract = require('../scribary/extractRML');
const Convert = require('../scribary/convertRML');

async function main() {
  // set constants
  const buffer = 50;
  const url = 'https://soundcloud.com/ii_png'
  const xPath = '[class="soundList sc-list-nostyle"]'
  const outputPath = '../cache/SoundCloud'

  const rml = await Extract.extractRML(buffer, 20, url, xPath, outputPath, true)
  // guarantee scraper worked
  console.assert(rml !== undefined, "soundCloudPrep() - rml is undefined")
  const NODE_DOM = Convert.convertRML(rml, true)

  // convert to custom schema
  queryIntoSchema(NODE_DOM)
}

function queryIntoSchema(NODE_DOM) {
  // retrive url
  const songList = NODE_DOM.querySelectorAll('li.soundList__item')
  generateJSON(songList)
}

function generateJSON(songList) {
  // ties the parsed url to the home directory of site
  const ROOT_URL = 'https://soundcloud.com'
  let list = []
  
  // iternate through NodeList and add elements to JSON
  songList.forEach((soundObject, index) => {
    // read url and title
    const titleDiv = soundObject.querySelector('a.soundTitle__title')
    const url = ROOT_URL + titleDiv.getAttribute('href')
    const title = titleDiv.querySelector('span').textContent

    // read image

    console.log(url);
    console.log(title);

    // read 
  })
}

/*** DO NOT CODE BELOW THIS LINE ***/
// run main with node.js
main()

