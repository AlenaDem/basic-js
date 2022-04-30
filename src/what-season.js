const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  try {
    if (!date) {
      return 'Unable to determine the time of year!';
    }

    if (Object.getOwnPropertyNames(date).length > 0)
      throw new Error()

    if (date.getMonth() > 1 && date.getMonth() < 5) {
      return 'spring';
    }
    if (date.getMonth() > 4 && date.getMonth() < 8) {
      return 'summer';
    }
    if (date.getMonth() > 7 && date.getMonth() < 11) {
      return 'autumn';
    }
    if (date.getMonth() > 10 || date.getMonth() < 2) {
      return 'winter';
    }

    return 'Unable to determine the time of year!';
  }
  catch (e) {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
