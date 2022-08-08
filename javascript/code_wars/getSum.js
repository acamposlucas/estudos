function getSum(a, b) {
  if (a === b) return a;

  let count = 0;
  if (a < b) {
    for (; a <= b; a++) {
      count += a;
    }
  } else if (a > b) {
    for (; b <= a; b++) {
      count += b;
    }
  }
  return count;
}

module.exports = getSum;
