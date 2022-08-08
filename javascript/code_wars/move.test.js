const move = require("./move");

test("From position 0 if dice rolls 4 should return 8", () => {
  expect(move(0, 4)).toBe(8);
});

test("From position 2 if dice rolls 6 should return 14", () => {
  expect(move(2, 6)).toBe(14);
});

test("From position 2 if dice rolls 5 should return 12", () => {
  expect(move(2, 5)).toBe(12);
});
