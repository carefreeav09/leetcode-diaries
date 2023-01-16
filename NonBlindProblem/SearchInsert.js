var searchInsert = function (nums, target) {
  let index = nums.indexOf(target);
  if (nums[nums.length - 1] < target) return nums.length;

  if (index !== -1) {
    return index;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        return i;
      }
    }
  }
};
