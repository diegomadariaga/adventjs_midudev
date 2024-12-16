function fixPackages(packages: string): string {
  const splited = packages.split("");
  let indexLastOpenParenthesis = splited.findLastIndex((char) => char === "(");
  let indexFirstCloseParenthesis = splited.findIndex((char) => char === ")");
  let countParenthesis = splited.filter((char) => char === "(").length;
  while (
    indexLastOpenParenthesis !== -1 &&
    indexFirstCloseParenthesis !== -1 &&
    countParenthesis > 0
  ) {
    const subArray = splited.slice(
      indexLastOpenParenthesis,
      indexFirstCloseParenthesis + 1,
    );
    const reversed = subArray.reverse();
    // insert reversed array into the original array
    splited.splice(indexLastOpenParenthesis, reversed.length, ...reversed);
    // remove parenthesis symbols from the array
    splited.splice(indexLastOpenParenthesis, 1);
    splited.splice(indexFirstCloseParenthesis - 1, 1);
    // update indexes
    indexLastOpenParenthesis = splited.findLastIndex((char) => char === "(");
    indexFirstCloseParenthesis = splited.findIndex((char) => char === ")");
    countParenthesis = splited.filter((char) => char === "(").length;
  }
  return splited.join("");
}
const string = "(ab)(cd)(ef)";
const packages = fixPackages(string);
console.log(packages); 
