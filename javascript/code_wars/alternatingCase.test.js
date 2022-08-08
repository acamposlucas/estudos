const toAlternatingCase = require("./alternatingCase");

test("given string 'hello world' should return 'HELLO WORD'", () => {
  expect(toAlternatingCase("hello world")).toBe("HELLO WORLD");
});

test("given string 'HeLlO wOrLd' should return 'hElLo WoRlD", () => {
  expect(toAlternatingCase("HeLlO wOrLd")).toBe("hElLo WoRlD");
});

test("given string '123456' should return '123456'", () => {
  expect(toAlternatingCase("123456")).toBe("123456");
});
