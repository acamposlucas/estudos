const DNAtoRNA = require("./DNAtoRNA");

test("given GCAT DNA should translate to GCAU RNA", () => {
  expect(DNAtoRNA("GCAT")).toBe("GCAU");
});
