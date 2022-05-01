const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  if (options.repeatTimes > 0) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result += str;
      if (options.additionRepeatTimes > 0) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (options.addition !== undefined) {
            result += options.addition;
          }
          if (options.additionSeparator && j < options.additionRepeatTimes - 1) {
            result += options.additionSeparator;
          }
          else if (!options.additionSeparator && j < options.additionRepeatTimes - 1) {
            result += '|';
          }
        }
      }
      else if (!options.additionRepeatTimes) {
        if (options.addition !== undefined) {
          result += options.addition;
        }
      }
      if (options.separator && i < options.repeatTimes - 1) {
        result += options.separator;
      }
      else if (!options.separator && i < options.repeatTimes - 1) {
        result += '+';
      }
    }
  }

  else if (!options.repeatTimes) {
    result += str;
    if (options.additionRepeatTimes > 0) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (options.addition) {
          result += options.addition;
        }
        if (options.additionSeparator && j < options.additionRepeatTimes - 1) {
          result += options.additionSeparator;
        }
        else if (!options.additionSeparator && j < options.additionRepeatTimes - 1) {
          result += '|';
        }
      }
    }
    else if (!options.additionRepeatTimes) {
      if (options.addition) {
        result += options.addition;
      }
    }
  }
  return result;
}


module.exports = {
  repeater
};
