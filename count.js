/**
 * Count a word occurrence in a given text
 * @param  {String} text
 * @param  {String} word
 * @return {Integer}
 */
module.exports = (text, word = null) => {
  const matches = text.match(new RegExp(word, 'g')) || [];

  return matches.length;
};
