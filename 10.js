function createChristmasTree(ornaments, height) {
  let ornamentIdx = 0;
  let text = "";
  for (let i = 1; i <= height; i++) {
    text = text + " ".repeat(height - i);
    for (let j = 0; j < i; j++) {
      let separator = i === 0 ? "" : " ";
      text = text + separator + ornaments[ornamentIdx];
      ornamentIdx = ornamentIdx === ornaments.length - 1 ? 0 : ornamentIdx + 1;
    }
    text = text + "\n";
  }
  let arr = text.split("\n");

  arr = arr.map((item) => {
    let cadena = item.substring(1);
    return cadena;
  });
  console.log(arr);
  text = arr.join("\n");
  text = text + " ".repeat(height-1) + "|" + "\n";
  return text;
}
console.log(createChristmasTree("x", 3));
console.log(createChristmasTree("123", 4));
