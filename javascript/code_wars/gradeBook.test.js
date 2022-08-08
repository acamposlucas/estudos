const gradeBook = require("./gradeBook");

test("Scores 95, 90, 93 should return A", () => {
  expect(gradeBook(95, 90, 93)).toBe("A");
});

test("Scores 70, 70, 100 should return B", () => {
  expect(gradeBook(70, 70, 100)).toBe("B");
});

test("Scores 60, 82, 76 should return C", () => {
  expect(gradeBook(60, 82, 76)).toBe("C");
});
test("Scores 65, 70, 59 should return D", () => {
  expect(gradeBook(65, 70, 59)).toBe("D");
});
test("Scores 44, 55, 52 should return F", () => {
  expect(gradeBook(44, 55, 52)).toBe("F");
});
