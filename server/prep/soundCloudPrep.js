const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// import scraper
const Extract = require('../scribary/extractRML');
const Convert = require('../scribary/convertRML');

async function main(exportPath) {
  // set constants
  const BUFFER = 50;
  const MAX_FRAMES = 20
  const url = 'https://soundcloud.com/ii_png'
  const xPath = '[class="soundList sc-list-nostyle"]'
  const outputPath = '../cache/SoundCloud'

  // cget rml
  const rml = await Extract.extractRML(
    BUFFER, 
    MAX_FRAMES, 
    url, 
    xPath, 
    outputPath, 
    true
  )
  // guarantee scraper worked
  console.assert(rml !== undefined, "soundCloudPrep() - rml is undefined")
  const NODE_DOM = await Convert.convertRML(rml, true)

  // convert to custom schema
  const MUSIC_JSON = await queryIntoSchema(NODE_DOM)

  // export json to database

  await exportJSON(MUSIC_JSON, exportPath)
}

function queryIntoSchema(NODE_DOM) {
  // retrive url
  const songList = NODE_DOM.querySelectorAll('li.soundList__item')
  return generateJSON(songList)
}

// generates a string in JSON format
// saves computation time by removing need for
// JSON.parse() and JSON.stringify()
function generateJSON(songList) {
  // ties the parsed url to the home directory of site
  const ROOT_URL = 'https://soundcloud.com'
  let list = '[\n'
  
  // iternate through NodeList and add elements to JSON
  songList.forEach((soundObject, index) => {
    // trailing comma
    const trailingComma = index == (songList.length - 1) 
      ? '' 
      : ','
    // read url and title
    const titleDiv = soundObject.querySelector('a.soundTitle__title')
    const url = ROOT_URL + titleDiv.getAttribute('href')
    const title = titleDiv.querySelector('span').textContent
    // get image cdn
    const image = parseImage(
      soundObject
      .querySelector('a.sound__coverArt')
      .querySelector('span')
      .getAttribute('style')
    )
    // add string
    list += (
      `      {
        "title" : "${title}",
        "url" : "${url}",
        "image" : "${image}"
      }${trailingComma}\n`
    )
  })

  list += ']'
  return list
}

// parse image from inline css
function parseImage(css) {
  const URL_INDEX = 7
  // only keep 'url'
  const image = css
    .split(' ')[URL_INDEX]
    .split('"')[1]
  return image
}

// export JSON
function exportJSON(jsonString, outputPath) {
  const fs = require('fs')
  // export to client-side database
  fs.writeFileSync(`${outputPath}.json`, jsonString)
}

/*** DO NOT CODE BELOW THIS LINE ***/
// run main with node.js
main('../../client/src/database/music')

