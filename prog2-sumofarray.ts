let sumOfArray = (num: number[]): number => {
  return num.reduce((total, element) => total + element, 0);
};

console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7]));
