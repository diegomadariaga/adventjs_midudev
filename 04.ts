function decode(message: string) {
  const regex = /\(([^()]+)\)/g;
  let match;
  let initAt;
  let endAt;
  const replaceSubstring = (
    originalString: string,
    initAt: number,
    endAt: number,
    newText: string,
  ): string => {
    const before = originalString.substring(0, initAt);
    const after = originalString.substring(endAt + 1);
    return before + newText + after;
  };
  while (message.includes("(") && message.includes(")")) {
    while ((match = regex.exec(message)) !== null) {
      initAt = match.index;
      endAt = match.index + match[0].length - 1;
      const texto = message
        .substring(initAt + 1, endAt)
        .split("")
        .reverse()
        .join("");
      message = replaceSubstring(message, initAt, endAt, texto);
    }
  }

  return message;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
