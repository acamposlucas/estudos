const smash = require("./sentenceSmash");

test("Given an empty array should return an empty string", () => {
  expect(smash([])).toBe("");
});

test("Given an array of words it should return a string forming a sentence", () => {
  expect(smash(["hello", "world", "this", "is", "javascript"])).toBe(
    "hello world this is javascript"
  );
});
