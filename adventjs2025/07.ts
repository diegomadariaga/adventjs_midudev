/* ¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

height → la altura del árbol (número de filas).
ornament → el carácter del adorno (por ejemplo, "o" o "@").
frequency → cada cuántas posiciones de asterisco aparece el adorno.
El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.

El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

El árbol debe estar centrado y tener un tronco # de una línea al final. */

function drawTree(height: number, ornament: string, frequency: number): string {
  let tree = '';
  let position = 1; // El conteo empieza en 1

  // Bucle para cada fila del árbol
  for (let i = 1; i <= height; i++) {
    // 1. Calcular los espacios de la izquierda para centrar
    const spaces = ' '.repeat(height - i);
    
    // 2. Construir la parte de las hojas/adornos
    let rowContent = '';
    const numChars = 2 * i - 1; // Fórmula para número impar de caracteres (1, 3, 5...)

    for (let j = 0; j < numChars; j++) {
      // Si la posición actual es múltiplo de la frecuencia, ponemos adorno
      if (position % frequency === 0) {
        rowContent += ornament;
      } else {
        rowContent += '*';
      }
      position++; // Avanzamos el contador global
    }

    // Añadimos la fila completa al árbol con un salto de línea
    tree += spaces + rowContent + '\n';
  }

  // 3. Añadir el tronco
  const trunkSpaces = ' '.repeat(height - 1);
  tree += trunkSpaces + '#';

  return tree;
}

drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #