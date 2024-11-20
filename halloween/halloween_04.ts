function findTheKiller(whisper: string, suspects: string[]): string {
  const result: Array<{ nombreSospechoso: string; concatenacion: string }> = [];

  for (const suspect of suspects) {
    const suspectArray = suspect.split("");
    const whisperArray = whisper.split("");
    let concatenacion = "";

    if (whisperArray[whisperArray.length - 1] === "$" && suspectArray.length > whisperArray.length - 1) {
      continue;
    }

    for (let j = 0; j < whisperArray.length; j++) {
      if (whisperArray[j] === "$") {
        break;
      }
      if (whisperArray[j] === "~" || (suspectArray[j] && whisperArray[j].toLowerCase() === suspectArray[j].toLowerCase())) {
        concatenacion += whisperArray[j];
      } else {
        concatenacion = "";
        break;
      }
    }

    if (concatenacion === whisper.replace("$", "")) {
      result.push({ nombreSospechoso: suspect, concatenacion });
    }
  }

  if (result.length === 0) {
    return "";
  }
  if (result.length === 1) {
    return result[0].nombreSospechoso;
  }
  return result.filter(r => r.concatenacion !== "").map(r => r.nombreSospechoso).join(",");
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

