/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let p = s.toLowerCase();
  p = p.replace(/[^a-zA-Z0-9]/g, '');
  let indexZero = 0;
  let indexFinal = p.length - 1;

  if (p === '') {
    return true;
  } else {
    for (let i = 0; i < p.length / 2; i++) {
      if (p[indexZero] !== p[indexFinal]) {
        return false;
      }
      indexZero++;
      indexFinal--;
    }
    return true;
  }
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(''));
console.log(isPalindrome('1234567890'));
console.log(isPalindrome('12321'));
