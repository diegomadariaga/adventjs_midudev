type Shoe = {
  type: "I" | "R";
  size: number;
  foundPar?: boolean;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const result: number[] = [];
  for (let index = 0; index < shoes.length; index++) {
    const element = shoes[index];
    if (element.type === "I" && !element.foundPar) {
      // buscar el zapato derecho
      const par = shoes.slice(index + 1).find((shoe, idx) => {
        if (shoe.type === "R" && shoe.size === element.size && !shoe.foundPar) {
          shoes[index].foundPar = true;
          shoes[idx + index + 1].foundPar = true;
          return true;
        }
      });
      if (par) {
        result.push(element.size);
      }
      continue;
    }
    if (element.type === "R" && !element.foundPar) {
      // buscar el zapato izquierdo
      const par = shoes.slice(index + 1).find((shoe, idx) => {
        if (shoe.type === "I" && shoe.size === element.size && !shoe.foundPar) {
          shoes[index].foundPar = true;
          shoes[idx + index + 1].foundPar = true;
          return true;
        }
      });
      if (par) {
        result.push(element.size);
      }
    }
  }
  return result;
}

const shoes: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 41 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
