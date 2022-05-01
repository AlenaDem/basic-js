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
    let result = arr;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === '--discard-next') {
        if (result[i+2] === '--discard-prev' || result[i+2] === '--double-prev') {
          result.splice(i+2, 1);
        }
        if (i > result.length) {
          result.splice(i, 1);
        }
        else {
          result.splice(i, 2);
        }
        
        if (i > 0) {
          i--;
        }
      }
      if (result[i] === '--discard-prev') {
        if (i > 0) {
          result.splice(i-1, 2);
          if (i > 1) {
            i--;
          }
          i--;
        }
        else {
          result.splice(i, 1);
          i--;
        }
        
      }
      if (result[i] === '--double-next') {
        if (i < result.length-1) {
          result[i] = result[i+1];
        }
        else {
          result.splice(i, 1);
        }
      }
      if (result[i] === '--double-prev') {
        if (i > 0) {
          result[i] = result[i-1];
        }
        else {
          result.splice(i, 1);
        }
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
