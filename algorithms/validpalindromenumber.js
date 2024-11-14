/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  reversedX = 0;
  originalX = x;
  if (x < 0) {
    return false;
  }
  {
    for (let i = 0; x; i++) {
      lastDigit = x % 10;
      dividedX = x / 10;
      x = Math.floor(dividedX);
      reversedX = reversedX * 10 + lastDigit;
    }
    if (originalX === reversedX) {
      return true;
    }
    {
      return false;
    }
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
