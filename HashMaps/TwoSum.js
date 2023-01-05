//given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
  let map = {}; // initiate a hashmap. hashmap is a key value pair. key is the number and value is the index.
  for (let i = 0; i < nums.length; i++) {
    // loop through the array
    let diff = target - nums[i]; // find the difference between the target and the current number
    if (map[diff] !== undefined) {
      // if the difference's index is in the hashmap
      return [map[diff], i]; // return the index of the difference and the current index
    }
    map[nums[i]] = i; // if the difference's index is not in the hashmap, add the current index to the hashmap as the key and the value is the index
  }
};

console.log(twoSum([2, 11, 15, 7], 9));
