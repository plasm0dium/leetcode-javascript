/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const getSum = function(a, b) {

  // Interate till there is no carry
  while (b !== 0) {
    // carry now contains common set bits of a and b
    const carry = a & b;
    // Sum of bits of a and b where at least one of the bits is not set
    a ^= b;
    // Carry is shifted by one so that adding it to a gives the required sum
    b = carry << 1;
  }

  return a;
};
