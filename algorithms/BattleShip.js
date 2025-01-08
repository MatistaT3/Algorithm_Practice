function countBattleships(board) {
  const rows = board.length; // Número de filas del tablero
  const cols = board[0].length; // Número de columnas del tablero
  let count = 0; // Contador de barcos encontrados

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Verificar si la celda actual es parte de un barco
      if (board[i][j] === 'X') {
        // Verificar si es el inicio de un nuevo barco
        const noShipAbove = i === 0 || board[i - 1][j] !== 'X'; // No hay barco arriba
        const noShipToLeft = j === 0 || board[i][j - 1] !== 'X'; // No hay barco a la izquierda

        if (noShipAbove && noShipToLeft) {
          count++; // Nuevo barco encontrado
        }
      }
    }
  }

  return count; // Retorna el número total de barcos
}

// Ejemplo
const board = [
  ['X', '-', '-', 'X'],
  ['-', '-', '-', 'X'],
  ['-', '-', '-', 'X'],
  ['-', '-', '-', '-'],
];

console.log(countBattleships(board)); // Output: 2
