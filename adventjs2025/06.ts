type Glove = { hand: string; color: string };

function matchGloves(gloves: Glove[]): string[] {
    const pairedGlovesIDX = [];
    const pairedGloves = [];
    for (let i = 0; i < gloves.length; i++) {
        const hand = gloves[i].hand;
        const color = gloves[i].color;
        for (let j = i + 1; j < gloves.length; j++) {
            const handJ = gloves[j].hand;
            const colorJ = gloves[j].color;
            const isNotPaired =
                !pairedGlovesIDX.some(n => n === j) &&
                !pairedGlovesIDX.some(n => n === i);
            if (hand !== handJ && color === colorJ && isNotPaired) {
                pairedGloves.push(color);
                pairedGlovesIDX.push(i);
                pairedGlovesIDX.push(j);
                break;
            }
        }
    }
    console.log(pairedGloves);
    return pairedGloves;
}

const gloves = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' },
    { hand: 'L', color: 'green' },
];

matchGloves(gloves);
// ["red", "green"]

const gloves2 = [
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' },
];

matchGloves(gloves2);
// ["gold", "gold"]

const gloves3 = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' },
];

matchGloves(gloves3);
// []

const gloves4 = [
    { hand: 'L', color: 'green' },
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' },
];

matchGloves(gloves4);
// ['red', 'green']
