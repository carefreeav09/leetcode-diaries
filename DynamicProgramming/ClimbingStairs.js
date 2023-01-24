// DYNAMIC PROGRAMMING.

const climbingStairs = (num) => {
  let one = 1;
  let two = 1;

  for (let i = 0; i < num - 1; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }

  return one;
};

console.log(climbingStairs(6));
