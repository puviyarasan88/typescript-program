let reverseString = (name: string): string => {
  let reverse = "";
  for (let i = name.length; i >= 0; i--) {
    reverse = reverse + name.charAt(i);
  }
  return reverse;
};

console.log(reverseString("Puvi"));

//another approach
let reverseString2 = (name: string): string => {
  return name.split("").reverse().join("");
};

console.log(reverseString("Puvi"));
