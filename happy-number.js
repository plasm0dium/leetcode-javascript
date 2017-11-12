/**
 * @param {number} n
 * @return {boolean}
 */

const isHappy = function (n) {

  const set = new Set();

  while (n !== 1) {
    if (set.has(n)) return false;
    set.add(n);
    n = sumDigit(n);
  }

  return true;
};

const sumDigit = function (n) {

  let sum = 0, temp;

  while (n > 0) {
    temp = n % 10;
    sum += temp * temp;
    n /= 10;
    n = Math.floor(n);
  }

  return sum;
};
