function decrypt(cod:string, moves:string) {
    const code = cod.split("").map(Number);
    const dic = {
        "D": -1,
        "U": 1,
        "L": -1,
        "R": 1
    }
    const codeLength = code.length;
    let actualPosition = 0;

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        const moveValue = dic[move];
        if (move === "D" || move === "U") {
            code[actualPosition] = (code[actualPosition] + moveValue)
            if (code[actualPosition] < 0) {
                code[actualPosition] = 9;
            } else if (code[actualPosition] === 10) {
                code[actualPosition] = 0;
            }
        }
        if (move === "R" || move === "L") {
            actualPosition = (actualPosition + moveValue)
            if (actualPosition < 0) {
                actualPosition = codeLength - 1;
            } else if (actualPosition >= codeLength) {
                actualPosition = 0;
            }
        }

    }
    return code.join("");
}
console.log(decrypt("528934712834", "URDURUDRUDLLLLUUDDUDUDUDLLRRRR"));