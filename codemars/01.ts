function decodeMessage(message) {
    // Convertir el mensaje a un arreglo para facilitar la manipulación
    let arr = message.split('');

    // PASO 1: Procesar los operadores '>' y '*'
    // Se utiliza un while loop para manejar adecuadamente la modificación del arreglo
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === '>') {
            // CORRECCIÓN: Se verifica que exista un carácter a la izquierda y a la derecha
            // Esto evita errores cuando '>' está al inicio o al final del arreglo.
            if (i > 0 && i < arr.length - 1) {
                // INTERCAMBIAR: Se intercambia el carácter a la izquierda con el de la derecha.
                // Nota: El comentario original decía "elimina el actual y el anterior", lo cual era incorrecto.
                let temp = arr[i - 1];
                arr[i - 1] = arr[i + 1];
                arr[i + 1] = temp;
            }
            // Eliminar el símbolo '>' después de procesar el intercambio
            arr.splice(i, 1);
            // No se incrementa 'i' ya que el arreglo se ha reducido
            continue;
        } else if (arr[i] === '*') {
            // CORRECCIÓN: Se verifica si existe un carácter a la derecha antes de eliminar
            if (i + 1 < arr.length) {
                // Eliminar el '*' y el carácter inmediatamente a su derecha
                arr.splice(i, 2);
            } else {
                // Si '*' es el último carácter, simplemente se elimina
                arr.splice(i, 1);
            }
            // No se incrementa 'i' para ajustar la nueva posición de los caracteres
            continue;
        } else {
            i++;
        }
    }

    // PASO 2: Convertir números a letras según el mapeo
    // Se realiza en un segundo recorrido para asegurarse de que los números intercambiados también se conviertan
    for (let j = 0; j < arr.length; j++) {
        switch (arr[j]) {
            case '0': arr[j] = 'o'; break;
            case '1': arr[j] = 'i'; break;
            case '3': arr[j] = 'e'; break;
            case '4': arr[j] = 'a'; break;
            case '5': arr[j] = 's'; break;
            case '7': arr[j] = 't'; break;
        }
    }

    // PASO 3: Eliminar cualquier símbolo que no esté permitido
    // Se conservan únicamente letras (incluyendo las acentuadas), números, espacios y los signos ¿, ?, !, ¡, y la coma.
    arr = arr.filter(ch => /[a-zA-Z0-9áéíóúÁÉÍÓÚ¿?!¡, ]/.test(ch));

    return arr.join('');
}


const message = "-0>13457=="
console.log(decodeMessage(message))
