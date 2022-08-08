/* It should sort only odd numbers leaving even ones in its original position */

function sortArray(array) {
  // verificar quais numeros da array sao ímpares
  const odds = array.filter((num) => num % 2).sort((a, b) => a - b);

  return array.map((num) => (num % 2 ? odds.shift() : num));
}

module.exports = sortArray;
