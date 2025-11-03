const fs = require('fs');
const path = require('path');

function readNumbersFromFile(filePath) {
  const raw = fs.readFileSync(path.resolve(filePath), 'utf8');
  const nums = [];
  for (const line of raw.split('\n')) {
    const t = line.trim();
    if (t === '') continue;
    const n = Number(t);
    if (Number.isNaN(n)) throw new Error(`Non-numeric value: "${t}"`);
    nums.push(n);
  }
  return nums;
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

function minMax(numbers) {
  if (numbers.length === 0) return { min: null, max: null };
  let min = numbers[0], max = numbers[0];
  for (const n of numbers) {
    if (n < min) min = n;
    if (n > max) max = n;
  }
  return { min, max };
}

function average(numbers) {
  return numbers.length ? sum(numbers) / numbers.length : null;
}

function processNumbersFile(filePath) {
  const nums = readNumbersFromFile(filePath);
  return { count: nums.length, sum: sum(nums), ...minMax(nums), average: average(nums) };
}

// manual run: node src/numberProcessor.js
if (require.main === module) {
  try { console.log(`\n== data/sample-numbers.txt ==`, processNumbersFile('data/sample-numbers.txt')); }
  catch (e) { console.error('Error:', e.message); }
}

module.exports = {
  readNumbersFromFile,
  sum,
  minMax,
  average,
  processNumbersFile,
};
