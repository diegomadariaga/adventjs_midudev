function decodeSantaPin(code: string): string {
    const arrayNumbers: string[] = code
        .split('][')
        .map(item => item.replace('[', '').replace(']', ''));
    const pin: string[] = [];

    for (let i = 0; i < arrayNumbers.length; i++) {
        let number = Number(arrayNumbers[i][0]);
        const plusCount = arrayNumbers[i].split('+').length - 1;
        const minusCount = arrayNumbers[i].split('-').length - 1;
        number = (number + plusCount - minusCount + 10) % 10;
        if (arrayNumbers[i].includes('<') && pin.length > 0) {
            number = Number(pin[pin.length - 1]);
            pin.push(number.toString());
            continue;
        }
        pin.push(number.toString());
    }
    const result = pin.join('').length === 4 ? pin.join('') : null;

    return result;
}

decodeSantaPin('[1++][2-][3+][<]');
// "3144"

decodeSantaPin('[9+][0-][4][<]');
// "0944"

decodeSantaPin('[1+][2-]');
// null (solo 2 dígitos)
