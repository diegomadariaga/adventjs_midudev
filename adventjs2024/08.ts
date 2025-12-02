function drawRace(indices: number[], length: number): string {
    const track = '~'.repeat(length);
    let result = '';
    let spacesCounter = indices.length;

    indices.forEach((index, i) => {
        result += ' '.repeat(spacesCounter - 1);
        spacesCounter--;

        if (index === 0) {
            result += track;
        } else {
            const pos = index < 0 ? length + index : index;
            result += track.slice(0, pos) + 'r' + track.slice(pos + 1);
        }

        result += ' /' + (i + 1);
        if (i < indices.length - 1) {
            result += '\n';
        }
    });

    return result;
}

console.log(drawRace([0, 5, -3], 10));
