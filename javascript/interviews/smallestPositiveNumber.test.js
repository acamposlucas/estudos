const solution = require("./smallestPositiveNumber");

test("given A = [-1, -3] it should return 1 as smallest integer", () => {
  expect(solution([-1, -3])).toBe(1);
});

test("given A = [1, 3, 6, 4, 1, 2] it should return 5 as smallest integer", () => {
  expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
});

test("given A = [2, 3, 4] it should return 1 as smallest integer", () => {
  expect(solution([2, 3, 4])).toBe(1);
});

test("given A = [1, 2, 3] it should return 4 as smallest integer", () => {
  expect(solution([1, 2, 3])).toBe(4);
});

test("given A = [1, 36, 3] it should return 2 as smallest integer", () => {
  expect(solution([1, 36, 3])).toBe(2);
});
