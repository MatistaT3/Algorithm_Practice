function fillMatrix(rows, cols) {
  // Crear una matriz vacía de `rows x cols`.
  let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let sum = 0; // Inicializar la suma en 0.
      let currentNumber = 1; // Comenzar con el número 1.

      // Celdas en filas pares necesitan valores pares; filas impares necesitan valores impares.
      if (i % 2 === 0) {
        // Para filas pares, sumar hasta que la suma sea par.
        while (sum % 2 !== 0) {
          sum += currentNumber;
          currentNumber++;
        }
      } else {
        // Para filas impares, sumar hasta que la suma sea impar.
        while (sum % 2 === 0) {
          sum += currentNumber;
          currentNumber++;
        }
      }
      // Guardar la suma en la celda actual.
      matrix[i][j] = sum;
    }
  }
  return matrix;
}
// Crear una matriz de tamaño 5x5.
let result = fillMatrix(5, 5);
console.log(result);
