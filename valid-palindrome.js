/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function (s) {

  const removeNonAlpha = s.replace(/[\W]/g, '');

  for (let i = 0; i < Math.floor(removeNonAlpha.length /2); i++) {

    if (removeNonAlpha[i].toLowerCase() !== removeNonAlpha[removeNonAlpha.length - 1 - i].toLowerCase()) {
      return false;
    }
  }

  return true;
};
