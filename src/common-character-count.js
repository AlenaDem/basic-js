const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Map = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (s1Map.has(s1[i])) {
      s1Map.set(s1[i], s1Map.get(s1[i]) + 1)
    }
    else {
      s1Map.set(s1[i], 1)
    }
  }

  let s2Map = new Map();
  for (let i = 0; i < s2.length; i++) {
    if (s2Map.has(s2[i])) {
      s2Map.set(s2[i], s2Map.get(s2[i]) + 1)
    }
    else {
      s2Map.set(s2[i], 1)
    }
  }

  let counter = 0;
  for (let [key, value] of s1Map) {
    if (s2Map.has(key)) {
      counter += Math.min(s2Map.get(key), value)
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
