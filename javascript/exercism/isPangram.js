const str = "The quick brown fox jumps over the lazy dog";

const isPangram = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const regex = /\s/g; // finds all whitespaces on string
  const strLowerCase = string.toLowerCase().replace(regex, ""); // all letters are lowercase and whitespaces are deleted.

  for (let i = 0; i < alphabet.length; i++) {
    if (strLowerCase.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }

  return true;
};
