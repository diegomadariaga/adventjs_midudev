function drawGift(size: number, symbol: string): string {
    if (size < 2) {
        return '';
    }
    let result = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                result += symbol;
            } else {
                result += ' ';
            }
        }
        i !== size - 1 && (result += '\n');
    }
    return result;
}
const g1 = drawGift(4, '*')
console.log(g1)
const g2 = drawGift(3, '#')
console.log(g2)

const g3 = drawGift(2, '-')
console.log(g3)

const g4 = drawGift(1, '+')
console.log(g4)
