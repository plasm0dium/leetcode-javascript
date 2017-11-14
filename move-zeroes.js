/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = function(nums) {

  let nonZeroCount = 0;
  const inputLength = nums.length;

  for (let i = 0; i < inputLength; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroCount++] = nums[i];
    }
  }

  for (let i = nonZeroCount; i < inputLength; i++) {
    nums[i] = 0;
  }

  return nums;
};
