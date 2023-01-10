/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let string = x.toString();
  let length = string.length - 1;
  for (let i = length; i >= 0; i--) {
    if (string[length - i] != string[i]) return false;
  }

  return true;
};
