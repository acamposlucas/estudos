/* 
  Write a function that given an Array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

  For example: given A = [4, 3, 6, 4, 4, 2], the function should return 5.

  Given A = [1, 2, 3], the function should return 4.

  Given A = [-1, -3], the function should return 1.

  Write an efficient algorithm for the following assumptions:
  * N is an integer within the range [1..100,000];
  * each element of Array A is an integer within the range [-1,000,000..1,000,000]
*/

function solution(array) {
  if (!array.includes(1)) {
    return 1;
  }

  let initialNumber = array[0];

  for (let i = 0; i < array.length; i++) {
    if (initialNumber > array[i]) {
      initialNumber = array[i];
    }

    if (!array.includes(initialNumber + 1)) {
      return initialNumber + 1;
    } else {
      initialNumber++;
    }
  }
}

module.exports = solution;
