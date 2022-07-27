const centuryFromYear = require("./centuryFromYear");

test("Given the year 1914 it should return 20 as its century", () => {
  expect(centuryFromYear(1914)).toBe(20);
});

test("Given the year 1900 it should return 10 as its century", () => {
  expect(centuryFromYear(1900)).toBe(19);
});

test("Given the year 87 it should return 1 as its century", () => {
  expect(centuryFromYear(87)).toBe(1);
});

test("Given the year 1705 it should return 10 as its century", () => {
  expect(centuryFromYear(1705)).toBe(18);
});
