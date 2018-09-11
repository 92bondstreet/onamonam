const REGEXP = /\b(\w+){3,}\b/g;

module.exports = text => text.match(REGEXP);
