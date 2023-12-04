function findFirstRepeated(gifts) {
  const unicos = {};
  gifts.forEach((item, idx) => {
    if (!unicos[item]) {
      unicos[item] = {
        firstIndexAparition: idx,
      };
    } else {
      if (!unicos[item].secondeIndexAparition) {
        unicos[item].secondeIndexAparition = idx;
      }
    }
  });
  const obj = { ...unicos };
  let minor = -1;
  let aux = Infinity;
  Object.entries(obj).forEach((element) => {
    if (element[1].secondeIndexAparition <= aux) {
      minor = +element[0];
    }
    if (element[1].secondeIndexAparition) {
      aux = element[1].secondeIndexAparition;
    }
  });
  return minor;
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5