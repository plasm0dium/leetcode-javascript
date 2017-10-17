/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {

  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (j > nums.length) {
      j = i+1;
      i++;
    }

    j++;

    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
};
