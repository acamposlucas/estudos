const areaOrPerimeter = require("./areaOrPerimeter");

test("Given a polygon which its length and width is 3 it should return 9 as its area", () => {
  expect(areaOrPerimeter(3, 3)).toBe(9);
});

test("Given a polygon which its length is 3 and its width is 9 it should return 24 as its perimeter", () => {
  expect(areaOrPerimeter(3, 9)).toBe(24);
});
