/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function(nums) {

  let map = {};
  const len = nums.length;

  for (let i = 0; i < nums.length; i++) {

    if (map[nums[i]]) {
      map[nums[i]] = 'not unique';
    } else {
      map[nums[i]] = 'unique';
    }
  }

  const uniqueNum = Object.keys(map).find((item) => {
    if (map[item] === 'unique') {
      return item;
    }
  });

  return parseInt(uniqueNum);
};
