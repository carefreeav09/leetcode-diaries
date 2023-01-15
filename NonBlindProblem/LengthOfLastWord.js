/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let array = s.split(" ");

  if (array.length === 0) return 0;

  let len = array.length;
  for (let i = len - 1; i >= 0; i--) {
    if (array[i].length > 0) {
      return array[i].length;
    }
  }
};
