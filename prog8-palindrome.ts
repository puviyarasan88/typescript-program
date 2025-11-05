let isPalindrome = (name: string): boolean => {
  let reverseString = name.split("").reverse().join("");
  return name === reverseString ? true : false;
};

console.log(isPalindrome("MadaM"));
console.log(isPalindrome("PuviivuP"));
