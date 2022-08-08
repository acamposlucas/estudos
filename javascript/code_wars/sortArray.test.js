const sortArray = require("./sortArray");

test("Given Array [7, 1] it should return [1, 7]", () => {
  expect(sortArray([7, 1])).toStrictEqual([1, 7]);
});

test("Given Array [5, 8, 6, 3, 4] it should return [3, 8, 6, 5, 4]", () => {
  expect(sortArray([5, 8, 6, 3, 4])).toStrictEqual([3, 8, 6, 5, 4]);
});

test("Given Array [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] it should return [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]", () => {
  expect(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toStrictEqual([
    1, 8, 3, 6, 5, 4, 7, 2, 9, 0,
  ]);
});
