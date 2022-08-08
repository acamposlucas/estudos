function toAlternatingCase(string) {
  // get string
  let alternatedString = "";
  // loop => is letter lowercase or uppercase

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      alternatedString += string[i].toLowerCase();
    } else {
      alternatedString += string[i].toUpperCase();
    }
  }

  return alternatedString;

  // return result
}

module.exports = toAlternatingCase;
