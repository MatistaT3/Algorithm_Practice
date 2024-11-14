var isValid = function (s) {
  let stack = []; // Inicializamos una pila vacía
  let pares = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (pares[currentChar]) {
      // Si es un paréntesis de apertura, lo apilamos
      stack.push(currentChar);
    } else {
      // Si es un paréntesis de cierre, comprobamos si coincide con el último abierto
      let lastOpen = stack.pop();
      if (pares[lastOpen] !== currentChar) {
        // Si no coinciden, la cadena no es válida
        return false;
      }
    }
  }
  // Si la pila está vacía al final, todos los paréntesis se cerraron correctamente
  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
