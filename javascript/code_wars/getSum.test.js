const getSum = require("./getSum");

test("Given 0, -1 it should return -1", () => {
  expect(getSum(0, -1)).toBe(-1);
});

test("Given 1, 1 it should return 1", () => {
  expect(getSum(1, 1)).toBe(1);
});

test("Given 3, 5 it should return 1", () => {
  expect(getSum(3, 5)).toBe(12);
});
