/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {

    let low = 0;
    let high = s.length - 1;

    while (high >= low) {
      if (s[low] !== s[high]) {
        return isPalindrome(s, low + 1, high) || isPalindrome(s, low, high - 1);
      }

      low++;
      high--;
    }

    return true;
};

const isPalindrome = function (str, low, high) {

  while (high > low) {
    if (str[low] !== str[high]) return false;
    low++;
    high--;
  }

  return true;
};
