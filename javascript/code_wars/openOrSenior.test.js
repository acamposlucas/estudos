const { text } = require("stream/consumers");
const openOrSenior = require("./openOrSenior");

test("a 55 years old member with a handicap of 7 should be a senior", () => {
  expect(openOrSenior([[55, 7]])).toStrictEqual(["Open"]);
});

test("a 54 years old member with a handicap of 7 should be a open", () => {
  expect(openOrSenior([[54, 7]])).toStrictEqual(["Open"]);
});

test("a 91 years old member with a handicap of -2 should be a open", () => {
  expect(openOrSenior([[91, -2]])).toStrictEqual(["Open"]);
});

test("a 55 years old member with a handicap of 1 should be a open", () => {
  expect(openOrSenior([[55, 1]])).toStrictEqual(["Open"]);
});
