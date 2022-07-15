function DNAtoRNA(dna) {
  // get each dna letter
  const letters = dna.split("");
  // check if has letter 'T'
  const rnaArr = letters.map((letter) =>
    letter === "T" ? (letter = "U") : letter
  );
  const rna = rnaArr.join("");
  // return rna
  return rna;
}

module.exports = DNAtoRNA;
