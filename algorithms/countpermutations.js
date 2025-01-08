function countPermutations(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  if (pLen > sLen) return 0;
  // Contadores de frecuencia para el string chico y la primera ventana en el string largo
  const pCount = Array(26).fill(0);
  const sCount = Array(26).fill(0);
  // Inicializar los contadores para el string chico y la primera ventana
  for (let i = 0; i < pLen; i++) {
    pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  // Función para comparar los dos arrays de conteo
  function matches(a, b) {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  // Número de subcadenas que son permutaciones del string chico
  let count = 0;
  if (matches(pCount, sCount)) count++;
  // Deslizamos la ventana por el string largo
  for (let i = pLen; i < sLen; i++) {
    // Añadir el nuevo carácter en la ventana
    sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    // Remover el carácter que ya no está en la ventana
    sCount[s.charCodeAt(i - pLen) - 'a'.charCodeAt(0)]--;
    // Comparar las frecuencias en la ventana actual
    if (matches(pCount, sCount)) count++;
  }
  return count;
}
// Ejemplo de uso
const largo = 'cbaebabacd';
const chico = 'abc';
console.log(countPermutations(largo, chico)); // Salida: 2
