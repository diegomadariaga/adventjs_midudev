function findNaughtyStep2(original: string, modified: string) {
  const isAddedChar = Boolean(modified.length > original.length);
  const length = isAddedChar ? modified.length : original.length;
  for (let index = 0; index < length; index++) {
    const originalChar = original[index];
    const modifiedChar = modified[index];
    if (originalChar !== modifiedChar) {
      if (isAddedChar) {
        return modified[index];
      } else {
        return original[index];
      }
    }
  }
  return "";
}
function findNaughtyStep3(original: string, modified: string): string {
  const isAddedChar = Boolean(modified.length > original.length);
  const longestString = isAddedChar ? modified : original;

  for (let index = 0; index < longestString.length; index++) {
    if (longestString.charAt(index) !== (isAddedChar ? original.charAt(index) : modified.charAt(index))) {
      return longestString.charAt(index);
    }
  }

  return "";
}
function findNaughtyStep(original: string, modified: string): string {
  const isAddedChar = Boolean(modified.length > original.length);
  const longestString = isAddedChar ? modified : original;

  return (
    longestString
      .split("")
      .find(
        (char, index) =>
          char !== (isAddedChar ? original[index] : modified[index]),
      ) || ""
  );
}
console.log(findNaughtyStep("abcd", "abcde"));
console.log(findNaughtyStep("iiiii", "iiiii"));
