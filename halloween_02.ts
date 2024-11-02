function battleHorde(zombies: string, humans: string) {
  const zombieArmy = zombies.split("");
  const humanArmy = humans.split("");
  let humanLeft = 0;
  let zombieLeft = 0;
  zombieArmy.forEach((element, index) => {
    const human = Number(humanArmy[index]) + humanLeft;
    const zombie = Number(element) + zombieLeft;
    if (human === zombie) {
      humanLeft = 0;
      zombieLeft = 0;
    }
    if (human > zombie) {
      humanLeft = human - zombie;
      zombieLeft = 0;
    }
    if (zombie > human) {
      zombieLeft = zombie - human;
      humanLeft = 0;
    }
  });
  if (humanLeft > 0) {
    return humanLeft + "h";
  }
  if (zombieLeft > 0) {
    return zombieLeft + "z";
  }
  return "x";
}

const zombies = "444";
const humans = "282";

console.log(battleHorde(zombies, humans));
