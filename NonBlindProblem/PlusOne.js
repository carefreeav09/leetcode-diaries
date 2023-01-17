const plusOne = function (nums) {
  let length = nums.length - 1;
  if (length == 0) {
    return String(nums[0] + 1).split("");
  }
  let carryOver = 0;
  for (let i = length; i >= 0; i--) {
    if (i === length) {
      if (nums[i] + 1 === 10) {
        carryOver = 1;
        nums[i] = 0;
      } else {
        nums[i] = nums[i] + 1;
      }
    } else if (carryOver === 1) {
      if (i == 0) {
        if (nums[i] + 1 === 10) {
          nums[i] = 0;
          nums.unshift(1);
        } else {
          nums[i] = nums[i] + 1;
        }
      } else {
        if (nums[i] + 1 === 10) {
          carryOver = 1;
          nums[i] = 0;
        } else {
          nums[i] = nums[i] + 1;
          carryOver = 0;
        }
      }
    } else {
      break;
    }
  }

  return nums;
};

const plusOneShort = function (nums) {
  let number = BigInt(nums.join(""));
  let result = String(number + 1n);
  return result.split("");
};

console.log(plusOneShort([8, 9, 9, 9]));
