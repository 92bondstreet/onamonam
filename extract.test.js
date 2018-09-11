const extract = require('./extract');

test('should extract words from a given text', () => {
  const words = extract('short text');

  expect(words).toEqual(['short', 'text']);
});

test('should extract only words with at leasyt 3 characters', () => {
  const words = extract('a short text with at least 3');

  expect(words).toEqual(['short', 'text', 'with', 'least']);
});
