var isPalindrome = function (string) {
  const newString = string.toLowerCase().replace(/[^a-z\d]+/gi, "");
  const mid = Math.floor(newString.length / 2);
  for (let i = 0; i < mid; i++) {
    if (newString[i] !== newString[newString.length - i - 1]) return false;
  }
  return true;
};
