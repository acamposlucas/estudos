function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let oddValue = [];

    arr.forEach((num) => {
      if (num === value) {
        oddValue.push(num);
      }
    });

    if (oddValue.length % 2 > 0) {
      return oddValue[0];
    }
  }
}

module.exports = findOdd;
