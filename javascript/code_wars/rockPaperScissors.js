function rockPaperScissors(p1, p2) {
  if (p1 === p2) return "Draw!";
  let winner;
  if (
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    winner = 1;
  } else {
    winner = 2;
  }

  return `Player ${winner} wins!`;
}

module.exports = rockPaperScissors;
