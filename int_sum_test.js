/**
 * Referências:
 * 
 * https://medium.com/@guillaume.viguierjust/handling-money-in-your-code-debb1e26e58c
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 * 
 */
const factors = {
  0: 1,
  1: 10,
  2: 100,
  3: 1000,
  4: 10000
}
const decimals = 4

const inputValueA = 0.1
const inputValueB = 0.2
const persistedValueA = convertFloatToInteger(inputValueA)
const persistedValueB = convertFloatToInteger(inputValueB)

const sumResult = persistedValueA + persistedValueB
const sumExpected = 0.3

const outputValue = convertIntegerToFloat(sumResult)

console.log(`CHECK CONDITION ==> ${inputValueA} + ${inputValueB} = ${sumExpected} `, outputValue === sumExpected)

/**
 * 
 * @param number 
 * @returns 
 */
function convertFloatToInteger(number) {
  return number * factors[decimals]
}

/**
 * 
 * @param number 
 * @returns 
 */
function convertIntegerToFloat(number) {
  return number / factors[decimals]
}