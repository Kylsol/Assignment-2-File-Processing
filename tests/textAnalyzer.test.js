const {
  countWordsFromString,
  longestWordFromString,
  countLinesFromString,
} = require('../src/textAnalyzer');

test('counts total words (punctuation, apostrophes, hyphens)', () => {
  const s = "Hello, world! It's me—well-being.";
  expect(countWordsFromString(s)).toBe(5);
});

test('finds longest word (ties return first)', () => {
  const s = "small medium well-being medium";
  expect(longestWordFromString(s)).toBe('well-being');
});

test('counts lines including last line without newline', () => {
  expect(countLinesFromString('a\nb\nc')).toBe(3);
});

test('handles empty/whitespace-only strings', () => {
  expect(countWordsFromString('   \t')).toBe(0);
  expect(longestWordFromString('')).toBe('');
  expect(countLinesFromString('')).toBe(0);
});
