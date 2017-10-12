/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function (nums) {

    if (nums.length < 2) return nums.length;

    let count = 0;

    for(let i = 0; i < nums.length; i++) {

        if (nums[i] !== nums[i+1]) {
          nums[count] = nums[i];
          count++;
        }
    }

    return count;
};
