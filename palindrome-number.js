/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {

 if (x < 0) return false;

 let reverse = 0;
 const compare = x;

 while (x > 0) {
   reverse = reverse * 10 + x % 10;
   x = parseInt(x / 10);
 }

 return reverse === compare ? true : false;
};
