const fs = require('fs');
const path = require('path');

function countWordsFromString(str) {
  if (!str || !str.trim()) return 0;
  const words = str.toLowerCase().match(/[a-z0-9]+(?:['-][a-z0-9]+)*/gi);
  return words ? words.length : 0;
}

function longestWordFromString(str) {
  if (!str || !str.trim()) return '';
  const words = str.toLowerCase().match(/[a-z0-9]+(?:['-][a-z0-9]+)*/gi) || [];
  let longest = '';
  for (const w of words) if (w.length > longest.length) longest = w;
  return longest;
}

function countLinesFromString(str) {
  if (str === '') return 0;
  return str.split('\n').length;
}

function readTextFile(filePath) {
  const full = path.resolve(filePath);
  return fs.readFileSync(full, 'utf8');
}

function analyzeTextFile(filePath) {
  const text = readTextFile(filePath);
  return {
    wordCount: countWordsFromString(text),
    longestWord: longestWordFromString(text),
    lineCount: countLinesFromString(text),
  };
}

// manual run: node src/textAnalyzer.js
if (require.main === module) {
  for (const f of ['data/quotes.txt', 'data/sample-text.txt']) {
    try { console.log(`\n== ${f} ==`, analyzeTextFile(f)); }
    catch (e) { console.error(`Error reading ${f}:`, e.message); }
  }
}

module.exports = {
  countWordsFromString,
  longestWordFromString,
  countLinesFromString,
  readTextFile,
  analyzeTextFile,
};
