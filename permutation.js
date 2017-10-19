/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = function(nums) {

  const collection = [];
  buildCollection(nums, [], collection);
  return collection;
};

const buildCollection = function (nums, tempList, result) {

  if (tempList.length === nums.length) {
    result.push(tempList.slice());
    return;
  } else {

    for(let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) continue;
      tempList.push(nums[i]);
      buildCollection(nums, tempList, result);
      tempList.pop();
    }
  }
};
