// import scraper
const Extract = require('../scrapi/extractRML');
const Convert = require('../scrapi/convertRML');

async function main() {
  // set constants
  const outputPath = '../cache/SoundCloud'
  const url = 'https://soundcloud.com/ii_png'
  const xPath = '[class="soundList sc-list-nostyle"]'

  const rml = await Extract.extractRML(500, url, xPath, outputPath, true)
  // guarantee scraper worked
  console.assert(rml !== undefined, "soundCloudPrep() - rml is undefined")
  Convert.convertRML(rml)
}

main()

