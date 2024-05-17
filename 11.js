function getIndexsForPalindrome(word) {
  let result;
  let aux;
  let reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return [];
  }
  let mitad1 = word.slice(0, Math.floor(word.length / 2));
  let mitad2 = word
    .slice(Math.ceil(word.length / 2))
    .split("")
    .reverse();
  let uniquesMitad1 = [...new Set(mitad1)];
  let uniquesMitad2 = [...new Set(mitad2)];
  if (uniquesMitad1.length !== uniquesMitad2.length) {
    return null;
  }
  for (let i = 0; i < mitad1.length; i++) {
    if (mitad1[i] !== mitad2[i]) {
      aux = mitad1[i];
      mitad1[i] = mitad2[i];
      mitad2[i] = aux;
      console.log([word.indexOf(aux), word.lastIndexOf(aux)]);
      if (mitad1 === mitad2) {
        return [word.indexOf(aux), word.lastIndexOf(aux)];
      }
      return result;
    }
  }
  if (uniquesMitad1.sort().join("") !== uniquesMitad2.sort().join("")) {
    return null;
  }
  const countChars = {};
  for (let i = 0; i < word.length; i++) {
    if (countChars[word[i]]) {
      countChars[word[i]]++;
    } else {
      countChars[word[i]] = 1;
    }
  }
  return result;
}

console.log("resultado: ", getIndexsForPalindrome("anna")); // []
console.log("resultado: ", getIndexsForPalindrome("abab")); // [0, 1]
console.log("resultado: ", getIndexsForPalindrome("abac")); // null
console.log("resultado: ", getIndexsForPalindrome("aaaaaaaa")); // []
console.log("resultado: ", getIndexsForPalindrome("aaababa")); // [1, 3]
console.log("resultado: ", getIndexsForPalindrome("caababa")); // null
