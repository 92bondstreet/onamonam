const REGEXP = /\b(\w+){3,}\b/g;

/**
 * Extract list of words from a text
 * @param  {String} text
 * @return {Array}
 */
module.exports = text => text.match(REGEXP);
