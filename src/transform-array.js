const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw e;
    }

    let flags = Array(arr.length);
    flags.fill(1);
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i] === '--discard-next') {
        flags[i] = 0;
        if (i < arr.length - 1) {
          flags[i+1] = 0;
        }
      }

      else if (arr[i] === '--discard-prev') {
        flags[i] = 0;
        if (i > 0 && flags[i-1] > 0) {
          flags[i-1]--;
        }
      }

      else if (arr[i] === '--double-next') {
        flags[i] = 0;
        if (i < arr.length - 1) {
          flags[i+1]++;
        }
      }

      else if (arr[i] === '--double-prev') {
        flags[i] = 0;
        if (i > 0 && flags[i-1] > 0) {
          flags[i-1]++;
        }
      }
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < flags[i]; j++) {
          result.push(arr[i]);
        }
    }
    return result;
  }
  catch (e) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
}

module.exports = {
  transform
};
