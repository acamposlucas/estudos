const duplicateCount = require("./countingDuplicates");

test("String 'abcde' should return 0", () => {
  expect(duplicateCount("abcde")).toBe(0);
});

test("String 'aAbBcCdDeE' should return 5", () => {
  expect(duplicateCount("aAbBcCdDeE")).toBe(5);
});

test("Empty string should return 0", () => {
  expect(duplicateCount("")).toBe(0);
});
