/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findErrorNums = function(nums) {

  const map = {};
  let missing = null, dup = null;

  for (let i = 0; i < nums.length; i++) {

    if (map[nums[i]] !== undefined) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let j = 1; j < nums.length + 1; j++) {

    if (map[j] === undefined) {
      missing = j;
    }

    if (map[nums[j]] === 2) {
      dup = nums[j];
    }
  }

  return [dup, missing];
};
