function cyberReindeer(road: string, time: number): string[] {
  const result = [];
  let arrayChars = road.split("");
  let contadorBarrera = 5;
  let indexS = arrayChars.indexOf('S'); // Encuentra la posición inicial de 'S'

  for (let timePassed = 0; timePassed < time; timePassed++) {
    if (contadorBarrera === 0) {
      arrayChars = arrayChars.map((char) => {
        if (char === "|") {
          return "*";
        }
        return char;
      });
      indexS = arrayChars.indexOf('S');
    }

    if (arrayChars[indexS + 1] === "|") {
      contadorBarrera--;
    } else {
      arrayChars[indexS] = arrayChars[indexS + 1];
      arrayChars[indexS + 1] = 'S';
      indexS++;
    }
    result.push(arrayChars.join(""));
  }

  console.log(result);
  return result;
}

const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
