function findSafestPath(dream: Array<number[]>) {
  const n = dream.length;
  const m = dream[0].length;
  const paths: number[][] = [];
  const traverse = (i: number, j: number, path: number[]) => {
    if (i >= n || j >= m) return;
    path.push(dream[i][j]);

    if (i === n - 1 && j === m - 1) {
      paths.push([...path]);
    } else {
      traverse(i + 1, j, path); // Move down
      traverse(i, j + 1, path); // Move right
    }

    path.pop();
  };

  traverse(0, 0, []);
  return Math.min(
    ...paths.map((path) => {
      return path.reduce((acc, curr) => acc + curr, 0);
    }),
  );
}

const dream = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

console.log(findSafestPath(dream));
