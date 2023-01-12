/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let firstLetter = strs[0];
  let wordLength = firstLetter.length;
  let result = "";

  for (let i = 0; i < wordLength; i++) {
    let c = firstLetter[i];
    let isSame = strs.every((item) => item[i] === c);
    if (isSame) {
      result += c;
    } else {
      break;
    }
  }

  return result;
};
