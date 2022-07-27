const getAge = require("./getAge");

test("Given an answer '4 years old' it should return 4 as little girl's age", () => {
  expect(getAge("4 years old")).toBe(4);
});
