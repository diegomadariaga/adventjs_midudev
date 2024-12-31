function fixPackages(packages: string): string {
    const splited = packages.split('');
    if (splited.filter(char => char === '(').length === 0 && splited.filter(char => char === ')').length === 0) {
        return packages;
    }
    let countParenthesis = splited.filter(char => char === '(').length;
    let indexLastOpenParenthesis;
    let indexFirstCloseParenthesis;
    let result = '';
    while (countParenthesis > 0) {
        for (let i = 0; i < splited.length; i++) {
            // recorrer y buscar la pareja, si sale una nueva candidata sobreescribe la anterior hasta encontrar la pareja si la encuentra voltea el contenido elimina y sigue hasta terminar
            if (splited[i] === '(') {
                indexLastOpenParenthesis = i;
            }
            // si hay una pareja, elimina los parentesis  y invierte el contenido entre los parencecis, luego actualiza el countParenthesis
            if (splited[i] === ')' && indexLastOpenParenthesis !== undefined) {
                indexFirstCloseParenthesis = i;
                const content = splited
                    .slice(
                        indexLastOpenParenthesis + 1,
                        indexFirstCloseParenthesis,
                    )
                    .reverse()
                    .join('');
                splited.splice(
                    indexLastOpenParenthesis,
                    indexFirstCloseParenthesis - indexLastOpenParenthesis + 1,
                    ...content.split(''),
                );
                result = splited.join('');
                break;
            }
        }
        countParenthesis = splited.filter(char => char === '(').length;
        if (countParenthesis === 0 && indexFirstCloseParenthesis !== undefined) {
            break;
        }
        if (countParenthesis > 0 && splited.filter(char => char === ')').length === 0) { 
           break;
        }
    }
    return result;
}
const string = 'abcd';
const packages = fixPackages(string);
console.log(packages);
