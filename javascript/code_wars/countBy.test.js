const countBy = require("./countBy");

test("given 2 and 5 returns an array of the first 5 multiples of 2", () => {
  expect(countBy(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
});
