/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let string = Array.from(x.toString());
  let length = string.length - 1;
  let reverse = [];
  for (let i = length; i >= 0; i--) {
    reverse[length - i] = string[i];
  }
  for (let i = 0; i < reverse.length; i++) {
    if (reverse[i] != string[i]) {
      return false;
    }
    continue;
  }

  return true;
};
