/**
 * @param {number} n
 * @return {boolean}
 */

// O(logb(n))
const isPowerOfThree = function(n) {

  if (n <= 0) return false;

  while (n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
};


// O(1)

const isPowerOfThree = function(n) {

  if (n <= 0) return false;

  const maxPowerOfThree = 1162261467;

  return maxPowerOfThree % n === 0;
};
