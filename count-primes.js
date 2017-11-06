/**
 * @param {number} n
 * @return {number}
 */

const countPrimes = function(n) {

    let count = 0;

    for (let i = 0; i < n; i++) {
      if (isPrime(i)) {
        count++;
      }
    }

    return count;
};

const isPrime = function (num) {

  if (num < 2) return false;

  let checkPrime = true;

  for (let i = 2; i*i <= num; i++) {
    if (num % i === 0) {
      checkPrime = false;
      break;
    }
  }

  return checkPrime;
}

/**
 * @param {number} n
 * @return {number}
 */

// Clean solution
const countPrimes = function(n) {

   let notPrime = new Array(n);
   let count = 0;

   for (var i = 2; i < n; i++) {
       if (notPrime[i] === undefined) {
           count++;

           for (var j = i; i * j < n; j++) {
               notPrime[i*j] = 'prime number';
           }
       }
   }

   return count;
};
