function manufacture(gifts, materials) {
  const result = [];
  const uniqueChars = new Set(...materials.split());
  gifts.forEach(element => {
    let isAllCharsPresent = true
    new Set(...element.split()).forEach(char => {
        if (!uniqueChars.has(char)) {
            isAllCharsPresent = false
            return
        }
    });
    if (isAllCharsPresent) {
        result.push(element)
    }
  });
  console.log(result);
  return result;
}

let gifts = ["tren", "oso", "pelota"];
let materials = "tronesa";

manufacture(gifts, materials); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ["juego", "puzzle"];
materials = "jlepuz";

manufacture(gifts, materials); // ["puzzle"]

gifts = ["libro", "ps5"];
materials = "psli";

manufacture(gifts, materials); // []
