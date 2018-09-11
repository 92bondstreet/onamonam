const onamonam = require('./index');

test('should count occurrence from a given text', () => {
  const words = onamonam('very very short text');

  expect(words).toEqual({'very': 2, 'short': 1, 'text': 1});
});
