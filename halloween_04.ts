function findTheKiller(whisper: string, suspects: string[]) {
  const result: Array<{ nombreSospechoso: string; concatenacion: string }> = [];
  for (let i = 0; i < suspects.length; i++) {
    const suspect = suspects[i];
    const suspectArray = suspect.split("");
    const whisperArray = whisper.split("");
    result.push({ nombreSospechoso: suspect, concatenacion: "" });
    // si whisper termina con $ y el suspect tiene mas letras que el whisper continue
    if (
      whisperArray[whisperArray.length - 1] === "$" &&
      suspect === "" && whisperArray.length === 1
    ) {
      return "";
    }

    if (
      whisperArray[whisperArray.length - 1] === "$" &&
      suspectArray.length > whisperArray.length - 1
    ) {
      continue;
    }
    for (let j = 0; j < whisperArray.length; j++) {
      if (whisperArray[j] === "$") {
        continue;
      }
      if (
        whisperArray[j] === "~" ||
        (suspectArray[j] && whisperArray[j].toLowerCase() === suspectArray[j].toLowerCase())
      ) {
        result[i].concatenacion += whisperArray[j];
      } else {
        result[i].concatenacion = "";
        break;
      }
    }
    if (result[i].concatenacion !== whisper.replace("$", "")) {
      result.push({ nombreSospechoso: suspect, concatenacion: "" });
    }
  }
  if (result.length === 0) {
    return "";
  }
  if (result.length === 1) {
    return result[0].nombreSospechoso;
  }
  if (result.length > 1) {
    // elimina los que tienen concatenacion vacia y une con , todos los nombreSospechoso
    return result
      .filter((r) => r.concatenacion !== "")
      .map((r) => r.nombreSospechoso)
      .join(",");
  }
}

const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

findTheKiller(whisper, suspects); // -> 'Dracula'
console.log(findTheKiller(whisper, suspects));

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']
console.log(findTheKiller(whisper2, suspects2)); // -> 'Freddy,Freddier,Fredderic'


const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper3, suspects3); // -> ''
console.log("this",findTheKiller(whisper3, suspects3));

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']
console.log(findTheKiller(whisper4, suspects4)); 

findTheKiller(whisper4, suspects4); // -> ''

