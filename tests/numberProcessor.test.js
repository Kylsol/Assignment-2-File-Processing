const { sum, minMax, average } = require('../src/numberProcessor');

test('sum of numbers', () => {
  expect(sum([1, 2, 3, 4])).toBe(10);
});

test('min and max', () => {
  expect(minMax([5, 1, 10, -2, 9])).toEqual({ min: -2, max: 10 });
});

test('average normal', () => {
  expect(average([2, 3, 4])).toBe(3);
});

test('average and minMax on empty arrays', () => {
  expect(average([])).toBeNull();
  expect(minMax([])).toEqual({ min: null, max: null });
});
