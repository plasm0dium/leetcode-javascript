/**
 * @param {number[]} nums
 * @return {number}
 */

const missingNumber = function(nums) {

    const len = nums.length;
    let sum = 0;
    const expectedSum = len*(len + 1)/ 2;

    for (let i = 0; i < len; i++) {
        sum += nums[i];
    }

    return expectedSum - sum;
};
