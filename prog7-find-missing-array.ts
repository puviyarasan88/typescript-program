let findMissingArray = (num: number[], count: number): number[] => {
  let missArray: number[] = [];
  for (let index = 1; index <= count; index++) {
    if (!num.includes(index)) {
      missArray.push(index);
    }
  }
  return missArray;
};

console.log(findMissingArray([1, 3, 4], 8));
