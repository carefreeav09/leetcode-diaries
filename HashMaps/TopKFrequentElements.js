var topKFrequent = function (nums, k) {
  let map = new Map();
  for (n of nums) {
    let mapN = map.get(n);
    map.set(n, mapN ? mapN + 1 : 1);
  }
  const frequencyArray = new Array(map.size);
  for (const [key, value] of map.entries()) {
    if (frequencyArray[value]) {
      frequencyArray[value] = [...frequencyArray[value], key];
    } else {
      frequencyArray[value] = [key];
    }
  }
  const result = [];
  for (let i = frequencyArray.length - 1; i >= 0; i--) {
    if (frequencyArray[i]) {
      for (n of frequencyArray[i]) {
        if (result.length < k) {
          result.push(n);
        }
      }
    }
  }

  return result;
};

console.log(topKFrequent([1, 2], 2), "answer");
