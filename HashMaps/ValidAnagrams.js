const validAnagramsWithMap = (s, t) => {
  if (s.length !== t.length) return false;
  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    const mS = mapS.get(s[i]);
    const mt = mapT.get(t[i]);

    mapS.set(s[i], mS ? mS + 1 : 1);
    mapT.set(t[i], mt ? mt + 1 : 1);
  }

  for (const [key, value] of mapS.entries()) {
    if (mapT.get(key) !== value) return false;
  }

  //Best
  return true;
};

var validAnagramsWithCheat = function (s, t) {
  if (s.length === t.length) {
    return s.split("").sort().join("") === t.split("").sort().join("");
  } else {
    return false;
  }
};

const validAnagramsWithObjects = function (s, t) {
  if (s.length !== t.length) return false;

  let OS = {};
  let OT = {};

  for (const i in s) {
    if (OS[s[i]]) {
      OS[s[i]] = OS[s[i]] + 1;
    } else {
      OS[s[i]] = 1;
    }

    if (OT[t[i]]) {
      OT[t[i]] = OT[t[i]] + 1;
    } else {
      OT[t[i]] = 1;
    }
  }

  for (const i in s) {
    if (OS[s[i]] !== OT[s[i]]) return false;
  }

  // 190 ms -> 11%
  // 51.1Mb -> 5.6%
  //Equally Worse algorithm.

  return true;
};

const validAnagramsWithMapOptimized = (s, t) => {
  // Thanks to santosh
  if (s.length !== t.length) return false;
  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    const key1 = s[i];
    const key2 = t[i];
    const map1Value = mapS.get(key1);
    const map2Value = mapT.get(key2);
    mapS.set(key1, map1Value ? map1Value + 1 : 1);
    mapT.set(key2, map2Value ? map2Value + 1 : 1);
  }
  for (const [key, value] of mapS.entries()) {
    if (mapT.get(key) !== value) return false;
  }

  // 194 ms -> 10%
  // 51.3Mb -> 5.6%
  //Worse algorithm.
  return true;
};

console.log(validAnagramsWithMapOptimized("anagram", "margana"));
