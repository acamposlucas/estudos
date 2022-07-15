const hoopCount = require("./hoopCount");

test("given 10 hoops show message 'Great, now move on to tricks'", () => {
  expect(hoopCount(10)).toBe("Great, now move on to tricks");
});

test("given 7 hoops show message 'Keep at it until you get it'", () => {
  expect(hoopCount(7)).toBe("Keep at it until you get it");
});
