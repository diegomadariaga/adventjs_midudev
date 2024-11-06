function findTheKiller(whisper: string, suspects: string[]) {
  const result = [];
  for (let i = 0; i < suspects.length; i++) {
    if (
      whisper.length > suspects[i].length &&
      whisper[whisper.length - 1] !== "$"
    ) {
      continue;
    }
    const suspect = suspects[i];
    const suspectArray = suspect.split("");
    const whisperArray = whisper.split("");
    for (let j = 0; j < whisperArray.length; j++) {
      console.log({
        wletter: whisperArray[j],
        suspectLetter: suspectArray[j],
        suspect,
        whisper,
      });
      if (
        (whisperArray[j].toLocaleLowerCase() ===
          suspectArray[j].toLocaleLowerCase() ||
          whisperArray[j] === "~") &&
        j === whisperArray.length - 1
      ) {
        result.push(suspect);
      }
      if (whisperArray[j] === "~" && j !== whisperArray.length - 1) {
        continue;
      }
      if (
        whisperArray[j].toLocaleLowerCase() !==
        suspectArray[j].toLocaleLowerCase()
      ) {
        break;
      }
    }
  }
  if (result.length === 0) {
    return "";
  }
  if (result.length === 1) {
    return result[0];
  }
  if (result.length > 1) {
    return result.join(",");
  }
}

const whisper = "~r~dd~";
const suspects = ["Freddy", "Freddier", "Fredderic"];

//console.log(findTheKiller(whisper, suspects));
console.log(
  findTheKiller("~~~~~y$", ["Chucky", "Tiffany", "Freddy", "Mickey"]),
);
