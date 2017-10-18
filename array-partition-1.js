/**
 * @param {number[]} nums
 * @return {number}
 */

const arrayPairSum = function(nums) {

    const sortArray = nums.sort((a, b) => (a - b));
    let sum = 0;

    for (let i = 0, len = sortArray.length; i < len; i+=2) {
      sum += sortArray[i];
    }

    return sum;
};
