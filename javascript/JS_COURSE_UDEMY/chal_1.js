/**
 * Calculates BMI (Body Mass Index)
 *
 * @param {number} mass in kg
 * @param {number} height in meters
 */

function calculateBMI(mass, height) {
  return +(mass / height ** 2).toFixed(1);
}

/**
 * Returns a string informing who has higher BMI
 *
 * @params {[{name: string, mass: number: height: number}]}
 */

function higherBMI(arr) {
  if (
    calculateBMI(arr[0].mass, arr[0].height) >
    calculateBMI(arr[1].mass, arr[1].height)
  ) {
    return `${arr[0].name}'s BMI is higher than ${arr[1].name}'s!`;
  } else {
    return `${arr[1].name}'s BMI is higher than ${arr[0].name}'s!`;
  }
}

module.exports = { calculateBMI, higherBMI };
