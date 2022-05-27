const formatOptions = {
  locale: 'en-US',
  style: 'currency',
  currency: 'USD'
}
const factors = {
  0: 1,
  1: 10,
  2: 100,
  3: 1000,
  4: 10000
}
const decimals = 4

const inputValue = 1000000.256
const persistedValue = convertFloatToInteger(inputValue)

const outputValue = convertIntegerToFloat(persistedValue)
const formattedValue = Number(outputValue).toLocaleString(formatOptions.locale, {
  style: formatOptions.style,
  currency: formatOptions.currency,
})

console.log('inputValue ==> ', inputValue)
console.log('persistedValue ==> ', persistedValue)
console.log('outputValue ==> ', formattedValue)

function convertFloatToInteger(number) {
  return number * factors[decimals]
}

function convertIntegerToFloat(number) {
  return number / factors[decimals]
}