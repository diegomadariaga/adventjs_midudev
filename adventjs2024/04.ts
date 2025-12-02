function createXmasTree(height: number, ornament: string): string {
    let tree= ""
    for (let i = 1; i <= height; i++) {
      tree +=
        "_".repeat(height - i) +
        ornament.repeat(i) + ornament.repeat(i - 1) +
        "_".repeat(height - i) +
        "\n";
    }
    tree += "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n";
    tree += "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "";
    return tree;
  }

const res = createXmasTree(4, "*");
console.log(res);
