/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let objectMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (objectMap[s[i]]) {
      stack.push(objectMap[s[i]]);
    } else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

// Logic

//  1. Create a object with key-value pairs.
//  2. Create a array ( stack ).
//  3. Loop through the string.
//  4. If the letter is a opening bracket, push the value of the opening bracket to the stack.
//  5. If the letter is a closing bracket, and its the last item on the stack, pop it out.
//  6. Else the string is invalid.

console.log(isValid("()[]{}"));
