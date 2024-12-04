function maxDistance(movements: string) {
  const mv = movements.split("");
  const countLeft = mv.reduce((acc, curr) => {
    if (curr === "<") {
      acc++;
    }
    return acc;
  }, 0);
  const countRight = mv.reduce((acc, curr) => {
    if (curr === ">") {
      acc++;
    }
    return acc;
  }, 0);
  const neutral = mv.reduce((acc, curr) => {
    if (curr === "*") {
      acc++;
    }
    return acc;
  }, 0);
  if (countLeft > countRight) {
    return countLeft - countRight + neutral;
  }
  if (countRight > countLeft) {
    return countRight - countLeft + neutral;
  }
  if (countRight === countLeft) {
    return neutral;
  }
  return 0;
}

const mov = ">>*<";
const result = maxDistance(mov);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5

console.log("-----");
console.log(maxDistance("<<**>>"));
