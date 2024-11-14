/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indexZero = 0;
  let indexOne = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
console.log(twoSum([1, 2, 3, 4, 5, 5], 10));
