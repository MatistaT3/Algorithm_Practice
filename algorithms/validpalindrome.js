var isPalindrome = function (s) {
  let p = s.toLowerCase();
  // El patrón [^a-zA-Z0-9] busca cualquier carácter que NO sea una letra o número.
  // 'g' asegura que se reemplacen todas las coincidencias en la cadena.
  p = p.replace(/[^a-zA-Z0-9]/g, '');
  // Variables para los índices inicial (inicio de la cadena) y final (final de la cadena).
  let indexZero = 0;
  let indexFinal = p.length - 1;
  // Si la cadena resultante después de la limpieza está vacía, es un palíndromo.
  if (p === '') {
    return true;
  } else {
    // Iterar sobre la mitad de la cadena para comparar los extremos.
    for (let i = 0; i < p.length / 2; i++) {
      // Compara los caracteres del inicio y del final de la cadena.
      if (p[indexZero] !== p[indexFinal]) {
        // Si no son iguales, no es un palíndromo, retorna `false`.
        return false;
      }
      // Mueve el índice inicial hacia adelante y el índice final hacia atrás.
      indexZero++;
      indexFinal--;
    }
    // Si la comparación de todos los pares opuestos es exitosa, la cadena es un palíndromo.
    return true;
  }
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(''));
console.log(isPalindrome('1234567890'));
console.log(isPalindrome('12321'));
