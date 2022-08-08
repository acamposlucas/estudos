const rockPaperScissors = require("./rockPaperScissors");

test("p1 wins with paper", () => {
  expect(rockPaperScissors("paper", "rock")).toBe("Player 1 wins!");
});

test("p1 wins with rock", () => {
  expect(rockPaperScissors("rock", "scissors")).toBe("Player 1 wins!");
});

test("p1 wins with scissors", () => {
  expect(rockPaperScissors("scissors", "paper")).toBe("Player 1 wins!");
});

test("p2 wins with rock", () => {
  expect(rockPaperScissors("paper", "scissors")).toBe("Player 2 wins!");
});

test("p2 wins with scissors", () => {
  expect(rockPaperScissors("rock", "paper")).toBe("Player 2 wins!");
});

test("p2 wins with scissors", () => {
  expect(rockPaperScissors("scissors", "rock")).toBe("Player 2 wins!");
});

test("p1 and p2 play the same thing", () => {
  expect(rockPaperScissors("rock", "rock")).toBe("Draw!");
});

test("p1 and p2 play the same thing", () => {
  expect(rockPaperScissors("paper", "paper")).toBe("Draw!");
});

test("p1 and p2 play the same thing", () => {
  expect(rockPaperScissors("scissors", "scissors")).toBe("Draw!");
});
