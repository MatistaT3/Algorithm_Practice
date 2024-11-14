var longestCommonPrefix = function (strs) {
  let prefix = ''; // Inicializa el prefijo como una cadena vacía.

  // Recorre cada posición de carácter en la primera cadena del array.
  for (let charPointer = 0; charPointer < strs[0].length; charPointer++) {
    let currentChar = strs[0][charPointer]; // Obtiene el carácter actual de la primera cadena.

    // Recorre todas las cadenas en el array.
    for (let i = 0; i < strs.length; i++) {
      // Verifica si la cadena actual tiene el carácter en la posición charPointer.
      // O si el carácter en esa posición no coincide con currentChar.
      if (strs[i][charPointer] !== currentChar) {
        return prefix; // Si no coincide, retorna el prefijo acumulado hasta el momento.
      }
    }
    // Si todas las cadenas tienen el mismo carácter en la posición charPointer,
    // se agrega ese carácter al prefijo.
    prefix = prefix + currentChar;
  }
  // Si se recorrió toda la primera cadena y todos los caracteres coincidieron,
  // se retorna el prefijo completo.
  return prefix;
};
