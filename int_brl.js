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

const formatOptions = {
  locale: 'pt-br',
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: decimals,
  maximumFractionDigits: decimals
}

const inputValue = 1000000.256
const persistedValue = convertFloatToInteger(inputValue)

const outputValue = convertIntegerToFloat(persistedValue)
const formattedValue = Number(outputValue).toLocaleString(formatOptions.locale, {
  style: formatOptions.style,
  currency: formatOptions.currency,
  minimumFractionDigits: formatOptions.minimumFractionDigits,
  maximumFractionDigits: formatOptions.maximumFractionDigits
})

console.log('inputValue ==> ', inputValue)
console.log('persistedValue ==> ', persistedValue)
console.log('outputValue ==> ', formattedValue)

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