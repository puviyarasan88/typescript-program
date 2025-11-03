let findMaxArray = (num: number[]): number => {
  return num.reduce((max, num) => (max > num ? max : num), 0);
};

console.log(findMaxArray([1, 2, 3, 4, 5, 21, 25]));
