function minMax(arr) {
  const minMax = [];
  let min = arr[0];
  let max = arr[0];

  arr.length === 1 ? ((min = arr[0]), (max = arr[0])) : null;

  for (let i = 0; i < arr.length; i++) {
    min > arr[i] ? (min = arr[i]) : null;
    max < arr[i] ? (max = arr[i]) : null;
  }

  minMax.push(min, max);
  return minMax;
}

module.exports = minMax;
