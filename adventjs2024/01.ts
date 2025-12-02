function prepareGifts(gifts: number[]): number[] {
  return [...new Set(gifts.sort((a, b) => a - b))];
}

const result = prepareGifts([7, 2, 2, 3, 3, 4, 5]);
console.log(result);
