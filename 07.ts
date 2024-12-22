function fixPackages(packages: string): string {
  const splited = packages.split("");
  let countParenthesis = splited.filter((char) => char === "(").length;
  let indexLastOpenParenthesis 
  let indexFirstCloseParenthesis
  while (countParenthesis > 0) {
    for (let i = 0; i < splited.length; i++) {
        // recorrer y buscar la pareja, si sale una nueva candidata sobreescribe la anterior hasta encontrar la pareja si la encuentra voltea el contenido elimina y sigue hasta terminar 
        if (splited[i] === "("){
            indexLastOpenParenthesis = i;
        }
    }
    countParenthesis = splited.filter((char) => char === "(").length;
  }
}
const string = "(ab)(cd)(ef)";
const packages = fixPackages(string);
console.log(packages);
