/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (string) {
  // thought process is to first of all form a string.
  let newString = "";
  for (let s of string) {
    if (s.match(/^[A-Za-z]*$/)) {
      newString += s.toLowerCase();
    }
  }
  if (newString.length === 0) return true;

  const halfLength = Math.floor(newString.length / 2);

  for (let i = 0; i < halfLength; i++) {
    if (newString[i] !== newString[newString.length - i - 1]) return false;
  }

  return true;
};
