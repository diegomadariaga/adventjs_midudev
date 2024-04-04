function drawGift(size, symbol) {
  let result = "#\n";
  let wide = size * 2 - 1;
  let height = size * 2 - 1;
  let spaces = wide - size;
    for (let i = 0; i < height; i++) {
        if (i < size) {
        result += " ".repeat(spaces);
        result += "#"+symbol.repeat(size);
        result += " ".repeat(spaces);
        result += "#\n";
        spaces--;
        } else {
        result += " ".repeat(wide / 2);
        result += symbol;
        result += " ".repeat(wide / 2);
        result += "\n";
        }
    }
    return result;
}

console.log(drawGift(4, "+"));
