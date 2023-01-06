const groupAnagrams = function (strs) {
  let map = new Map();

  for (const word of strs) {
    const count = new Array(26).fill(0);

    for (const ch of word) {
      count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let wordData = count.join(",");
    let _hasData = map.has(wordData);

    if (_hasData) {
      map.get(wordData).push(word);
    } else {
      map.set(wordData, [word]);
    }
  }
  return [...map.values()];
};

const groupAnagramsCheating = function (strs) {
  let map = new Map();

  for (s of strs) {
    let letters = s.split("").sort().join();
    if (map.has(letters)) {
      map.get(letters).push(s);
    } else {
      map.set(letters, [s]);
    }
  }

  return [...map.values()];
};

console.log(groupAnagramsCheating(["eat", "tea", "tan", "ate", "nat", "bat"]));
