const x = 1;
const y = 3;
const expected = 0.3333;
const operationResponse = x/y;

console.log(`${operationResponse.toPrecision(4)} is equal ${expected}`, numberEquals(operationResponse, expected))

/**
 * @param number refers to the input number you want to check
 * @param expectedToBe refers to expected value that you want to match
 * 
 * About solution:
 * https://gauravkk22.medium.com/why-0-1-0-2-0-3-is-false-in-js-mystery-unsolved-with-solution-4f7db2755f18#:~:text=With%20decimal%20fractions%2C%20this%20floating,0.2%20%3D%3D%3D%200.3%20yields%20false.
 *
 * JS Number.EPILSON documentation
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
 */
function numberEquals(number, expectedToBe) {
  const equal = (Math.abs(number - expectedToBe) < Number.EPSILON);
  return equal
}

