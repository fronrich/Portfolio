/**
 * header for verbose mode
 * @param {String} version - Major.Minor.Patch
 * @param {*} func - name of the function
 * @returns the header
 */
function verboseHeader(version, func) {
  return (
    `Scribary - A node.js Web Scraping Library\n` + 
    `${func} Version ${version} - Running in verbose mode`
  )
}

exports.verboseHeader = verboseHeader