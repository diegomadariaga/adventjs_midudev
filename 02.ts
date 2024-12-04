function createFrame(names: string[]): string {
  const longestName = names.reduce(
    (longest, name) => (name.length > longest ? name.length : longest),
    0,
  );
  const result = [];
  result.push("*" + "*".repeat(longestName + 2) + "*");
  names.forEach((name) =>
    result.push("* " + name + " ".repeat(longestName - name.length) + " *"),
  );
  result.push("*" + "*".repeat(longestName + 2) + "*");
  return result.join("\n");
}

const result = createFrame(["Hello", "World", "in", "a", "frame"]);
console.log(result);
console.log(createFrame(["midu"]));
