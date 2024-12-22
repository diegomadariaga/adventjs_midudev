function drawRace(indices: number[], length: number): string {
    const track = '~'.repeat(length);
    let result = '';
    let spacesCounter = indices.length
    indices.forEach((index, i) => {
        result += ' '.repeat(spacesCounter-1)
        spacesCounter--;
        if (index === 0) {
            result += track;
        }
        // if index is negative or positive replace the character at that index with the "r"
        else if (index < 0) {
            result +=
                track.slice(0, length + index) +
                'r' +
                track.slice(length + index + 1);
        } else {
            result += track.slice(0, index) + 'r' + track.slice(index + 1);
        }
        result += ' /' + (i + 1) + '\n';
        if (i === 0) {
            result = '' + result;
        }
        if (i === indices.length - 1) {
            // elimina el ultimo salto de linea
            result = result.slice(0, result.length - 1);
        }
    });
    return result;
}

console.log(drawRace([0, 5, -3], 10));
