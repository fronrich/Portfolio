const jsdom = require("jsdom");
const { JSDOM } = jsdom;



/**
 * @adapted from Florian Margaine's dummy DOM solution
 * @param {*} rmlInput
 * @returns HTML element
 */
function convertRML(rmlInput) {
  // emulate webpage to use DOM
  console.assert(rmlInput !== undefined, "convertRML() - rml is undefined")
  global.document = new JSDOM(rmlInput).window.document;
  console.assert(rmlInput !== undefined, "convertRML() - rml is undefined")
  const list = document.getElementsByClassName("sound__coverArt")
  console.log(JSON.stringify(list))
}

exports.convertRML = convertRML