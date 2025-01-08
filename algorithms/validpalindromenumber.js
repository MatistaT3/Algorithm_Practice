var isPalindrome = function (x) {
  let reversedX = 0;
  let originalX = x;
  // Si el número es negativo, no puede ser un palíndromo (por el signo).
  if (x < 0) {
    return false;
  }
  {
    // Bucle para invertir el número.
    // Se ejecuta mientras `x` no sea 0.
    for (let i = 0; x; i++) {
      // Obtener el último dígito de `x` usando el módulo (%).
      let lastDigit = x % 10;
      // Dividir `x` entre 10 para eliminar el último dígito.
      let dividedX = x / 10;
      // Redondear hacia abajo el resultado para obtener la parte entera.
      x = Math.floor(dividedX);
      // Construir el número invertido acumulando los dígitos.
      reversedX = reversedX * 10 + lastDigit;
    }
    // Comprobar si el número original es igual al número invertido.
    if (originalX === reversedX) {
      return true; // Es un palíndromo.
    } else {
      return false; // No es un palíndromo.
    }
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
