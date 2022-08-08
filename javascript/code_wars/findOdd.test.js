const findOdd = require("./findOdd");

test("Given an array [1, 1, 1, 3, 3, 4, 4] should return 1", () => {
  expect(findOdd([1, 1, 1, 3, 3, 4, 4])).toBe(1);
});

test("Given an array [1] should return 1", () => {
  expect(findOdd([1])).toBe(1);
});

test("Given an array [1,1,1,1,1,1,10,1,1,1,1] should return 10", () => {
  expect(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toBe(10);
});
