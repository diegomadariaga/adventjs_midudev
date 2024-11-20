function createMagicPotion(potions: number[], target: number): number[] {
  let result = undefined;
  for (let i = 0; i < potions.length; i++) {
    for (let j = i + 1; j < potions.length; j++) {
      console.log({ result, i: potions[i], j: potions[j] });
      if (potions[i] + potions[j] === target) {
        if ((result && result[1] > j) || !result) {
          result = [i, j];
        }
      }
    }
  }
  return result;
}

const potions = [1, 2, 3, 4]
const goal = 5

console.log(createMagicPotion(potions, goal));
