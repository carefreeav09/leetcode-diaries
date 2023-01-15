var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

//This is shit solution because i misunderstood the question.
var longProcess = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] === "_") {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      } else if (nums[j] === nums[j + 1]) {
        nums[j + 1] = "_";
      } else {
      }
    }
  }
  return nums.filter((item) => item !== "_").length;
};

console.log(removeDuplicates([1, 1, 2]));
