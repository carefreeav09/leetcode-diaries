// somedays all you gotta do is practice.

//IDEA : Idea is to generate a array of count of characters, seperated by ',', this is important. and map them respectively.

const groupAnagrams = (strs) => {
  let map = new Map();

  for (word of strs) {
    let count = new Array(26).fill(0);

    for (s of word) {
      count[s.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let key = count.join(",");

    if (map.has(key)) {
      map.get(key).push(word);
    } else {
      map.set(key, [word]);
    }
  }

  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
