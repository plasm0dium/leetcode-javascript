/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

const matrixReshape = function(nums, r, c) {

    if (nums[0].length * nums.length < r * c) return nums;

    let temp = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums[i].length; j++) {

        temp.push(nums[i][j]);

        if (temp.length === c) {
          result.push(temp);
          temp = [];
        }
      }
    }

    return result;
};
