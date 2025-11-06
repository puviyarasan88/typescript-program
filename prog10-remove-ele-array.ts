let removeArray = (num: number[], indexToDelete: number): number[] => {
  return num.slice(0, indexToDelete).concat(num.slice(indexToDelete + 1));
};

console.log(removeArray([1, 2, 3, 4, 5, 6], 3));

//remove first element in array
let removefirstArray = (num: number[]): number[] => {
  num.shift();
  return num;
};

console.log(removefirstArray([1, 2, 3]));
