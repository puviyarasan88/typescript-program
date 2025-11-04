let unionType = (ele: string | number): number => {
  if (typeof ele == "string") {
    return ele.length;
  } else {
    return ele.toString().length;
  }
};

console.log(unionType("Puvi"));
console.log(unionType(1312423532));
