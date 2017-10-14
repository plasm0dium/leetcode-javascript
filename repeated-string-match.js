/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

const repeatedStringMatch = function (A, B) {

    let count = 1;
    let inputA = A;

    while (inputA.length < B.length) {
      inputA = inputA.concat(A);
      count++;
    }

    if (inputA.indexOf(B) !== -1) {

      return count;
    }

    if (inputA.concat(A).indexOf(B) !== -1) {

      return ++count;
    }

    return -1;
};
