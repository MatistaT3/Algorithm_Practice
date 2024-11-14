/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let contador = 0;
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    if (nums[r] === val) {
      r--;
      contador++;
    } else if (nums[l] === val) {
      nums[l++] = nums[r--];
      contador++;
    } else {
      l++;
    }
  }
  return nums.length - contador;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
