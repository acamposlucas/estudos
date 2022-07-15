const cockroachSpeed = require("./cockroachSpeed");

test("given cockroach runs at 1.08 kmph return 30 cm per second", () => {
  expect(cockroachSpeed(1.08)).toBe(30);
});
