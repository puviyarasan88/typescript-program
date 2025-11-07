let replaceString = (str: string): string => {
  let format: string[] = str.split("_");
  return format
    .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .join(" ");
};

console.log(replaceString("puvi_arasan_murugan"));

let revertString = (str1: string): void => {
  console.log(str1.replaceAll(" ", "_").toLowerCase());
};
revertString("Puvi Arasan Murugan");
