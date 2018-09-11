const extract = require('./extract');
const count = require('./count');

module.exports = text => {
  const words = extract(text);

  return words.reduce((current, word) => {
    current[word] = count(text, word);
    return current;
  }, {});
};
