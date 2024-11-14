/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {}; // Mapa de caracteres y sus índices

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    // Si el carácter ya ha sido visto y está dentro de la ventana actual
    if (charIndexMap[currentChar] >= start) {
      start = charIndexMap[currentChar] + 1;
    }

    charIndexMap[currentChar] = i; // Actualizamos el índice del carácter
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
