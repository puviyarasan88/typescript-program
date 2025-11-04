let countVowel = (word: string): number =>
  (word.match(/[aeiou]/gi) || []).length;

console.log(countVowel("Puviyarasan"));
