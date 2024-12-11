function inBox(box: string[]): boolean {
  for (let i = 0; i < box.length; i++) {
    const row = box[i];
    const splited = row.split("");
    if (!splited.includes("*")) {
        continue;
    }
    for (let j = 0; j < splited.length; j++) {
        if (splited[j] === "*" && i > 0 && i < box.length - 1 && j > 0 && j < splited.length - 1) {
          return true;
        }
    }
  }
  return false;
}

const resp = inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])

console.log(resp);
