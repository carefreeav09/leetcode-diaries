var removeElement = function (nums, val) {
  if (nums.length === 0) return [];
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      continue;
    } else {
      i++;
    }
  }
  return nums.length;
};
