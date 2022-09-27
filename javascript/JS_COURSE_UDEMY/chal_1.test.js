const { calculateBMI, higherBMI } = require("./chal_1");

test("given 78kg and 1.69m tall Person", () => {
  expect(calculateBMI(78, 1.61)).toBe(30.1);
});

test("given 92kg and 1.69m tall Person", () => {
  expect(calculateBMI(92, 1.69)).toBe(32.2);
});

const testArray = [
  {
    name: "John",
    mass: 78,
    height: 1.69,
  },
  {
    name: "Mark",
    mass: 92,
    height: 1.69,
  },
];

test("given testArray expect Mark to have higher BMI", () => {
  expect(higherBMI(testArray)).toBe("Mark's BMI is higher than John's!");
});
