/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) using Kadane's algorithm
const maxSubArray = function (nums) {

  let max_sum = nums[0];
  let max_so_far = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max_so_far + nums[i] < nums[i]) {
      max_so_far = nums[i];
    } else {
      max_so_far += nums[i];
    }
    if (max_so_far > max_sum) max_sum = max_so_far;
  }

  return max_sum;
};
