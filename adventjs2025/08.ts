function findUniqueToy(toy: string): string {
    const lowerToy = toy.toLowerCase();
    for (let i = 0; i < toy.length; i++) {
        const char = lowerToy[i];
        if (lowerToy.indexOf(char) === lowerToy.lastIndexOf(char)) {
            return toy[i];
        }
    }
    return '';
}

findUniqueToy('Gift'); // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

findUniqueToy('sS'); // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

findUniqueToy('reindeeR'); // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
findUniqueToy('AaBbCc'); // ''
findUniqueToy('abcDEF'); // 'a'
findUniqueToy('aAaAaAF'); // 'F'
findUniqueToy('sTreSS'); // 'T'
findUniqueToy('z'); // 'z'
