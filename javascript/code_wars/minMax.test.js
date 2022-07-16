const minMax = require("./minMax");

test("Given an array [1] it should return 1 and 1 as lowest and highest numbers", () => {
  expect(minMax([1])).toStrictEqual([1, 1]);
});

test("Given an array of numbers [1,2,3,4,5] it should return 1 and 5 as lowest and highest numbers", () => {
  expect(minMax([1, 2, 3, 4, 5])).toStrictEqual([1, 5]);
});

test("Given an array of numbers [7, 8] it should return 7 and 8 as lowest and highest numbers", () => {
  expect(minMax([7, 8])).toStrictEqual([7, 8]);
});

test("Given an array of numbers [-1, 9] it should return -1 and 9 as lowest and highest numbers", () => {
  expect(minMax([-1, 9])).toStrictEqual([-1, 9]);
});
