function quickSort(arr) {
  // Caso base: Si el array tiene 1 o 0 elementos, ya está ordenado
  if (arr.length <= 1) {
    return arr;
  }

  // Elegir un pivote, aquí elegimos el último elemento
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Dividir el array en dos, en relación con el pivote
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Llamada recursiva para ordenar los subarrays y combinar los resultados
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Ejemplo de uso
const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(array)); // Salida: [1, 1, 2, 3, 6, 8, 10]
