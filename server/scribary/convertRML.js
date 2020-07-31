const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Extra = require('./verboseHeader')

/**
 * wrap rml in JSDOM to emulate client-side use
 * @param {String} rmlInput - html/xml agnostic rml code
 * @param {Boolean} verbose - use console.log() output 
 * @returns NODE_DOM - holds HTML code and can be 
 * parsed like a client-side DOM
 */
function convertRML(rmlInput, verbose) {
  if(verbose) {
    console.log(Extra.verboseHeader('1.0.0', 'convertRML'))
    console.log("Checking input format...")
  }
  // assert that rml is defined
  console.assert(rmlInput !== undefined, "convertRML() - rml is undefined")
  if(verbose)
    console.log("Embedding in JSDOM...")
  // emulate webpage to use DOM
  const DOM_WRAPPER = (`
    <!DOCTYPE html>
    <body>
      ${rmlInput}
    </body>
  `)
  const dom = new JSDOM(DOM_WRAPPER)
  const NODE_DOM = dom.window.document
  if(verbose)
    console.log("Done! Returned as 'window.document' Object.\n")
  return NODE_DOM;
}

exports.convertRML = convertRML