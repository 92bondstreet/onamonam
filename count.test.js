const count = require('./count');

test('should return 0 if not word given', () => {
  expect(count('short text')).toEqual(0);
});

test('should return 0 for not found word', () => {
  expect(count('short text', 'very')).toEqual(0);
});

test('should return the count of occurrence for found word', () => {
  expect(count('short very very VERY text', 'very')).toEqual(2);
});
