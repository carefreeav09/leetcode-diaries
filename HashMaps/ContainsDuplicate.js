var containsDuplicateWithMap = function (nums) {
  let map = new Map();

  for (const n in nums) {
    if (map.has(nums[n])) {
      return true;
    } else {
      map.set(nums[n], true);
    }
  }

  return false;
};

let containsDuplicateWithSet = function (nums) {
  let set = new Set(nums);

  return set.size === nums.length;
};

const containsDuplicateBaseJS = function (nums) {
  let hash = {};
  for (const i of nums) {
    if (hash[i]) {
      return true;
    } else {
      hash[i] = true;
    }
  }
  return false;
};
