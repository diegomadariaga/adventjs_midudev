function findSafestPath(dream: Array<number[]>) {
  const n = dream.length;
  const m = dream[0].length;
  const deep = n + m - 1;

  return 0;
}

const dream = [
  [0, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 1, 3],
  [0, 0, 0, 2],
];

console.log(findSafestPath(dream));
