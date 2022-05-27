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
const iterationEndsAt = 100000

function testToLocaleStringPerformance() {
  console.time('toLocaleString')
  for (let i = 0; i <= iterationEndsAt; i++) {
    const inputValue = Math.random()
    const persistedValue = convertFloatToInteger(inputValue)

    const outputValue = convertIntegerToFloat(persistedValue)
    const formattedValue = Number(outputValue).toLocaleString(formatOptions.locale, {
      style: formatOptions.style,
      currency: formatOptions.currency,
      minimumFractionDigits: formatOptions.minimumFractionDigits,
      maximumFractionDigits: formatOptions.maximumFractionDigits
    })

    // console.log('inputValue ==> ', inputValue)
    // console.log('persistedValue ==> ', persistedValue)
    // console.log('outputValue ==> ', formattedValue)

    if (i === iterationEndsAt) {
      console.timeEnd('toLocaleString')
    }
  }
}

function testIntlPerformance() {
  console.time('intl')
  const formatterInstance = new Intl.NumberFormat(formatOptions.locale, {
    style: formatOptions.style,
    currency: formatOptions.currency,
    minimumFractionDigits: formatOptions.minimumFractionDigits,
    maximumFractionDigits: formatOptions.maximumFractionDigits
  })

  for (let i = 0; i <= iterationEndsAt; i++) {
    const inputValue = Math.random()
    const persistedValue = convertFloatToInteger(inputValue)

    const outputValue = convertIntegerToFloat(persistedValue)
    const formattedValue = formatterInstance.format(outputValue)

    // console.log('inputValue ==> ', inputValue)
    // console.log('persistedValue ==> ', persistedValue)
    // console.log('outputValue ==> ', formattedValue)

    if (i === iterationEndsAt) {
      console.timeEnd('intl')
    }
  }
}

testToLocaleStringPerformance()
testIntlPerformance()

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


/**
 * RESULTADOS
 */

/*
  Resultados de um teste com 10 iterações para conferir se os valores estão
  sendo convertidos corretamente por cada método

  toLocaleString:
  outputValue ==>  R$ 0,9552
  outputValue ==>  R$ 0,1705
  outputValue ==>  R$ 0,6901
  outputValue ==>  R$ 0,6129
  outputValue ==>  R$ 0,8160
  outputValue ==>  R$ 0,6137
  outputValue ==>  R$ 0,1072
  outputValue ==>  R$ 0,2052
  outputValue ==>  R$ 0,3668
  outputValue ==>  R$ 0,1099
  outputValue ==>  R$ 0,1025
  toLocaleString: 18.497ms

  Intl:
  outputValue ==>  R$ 0,8109
  outputValue ==>  R$ 0,9972
  outputValue ==>  R$ 0,9158
  outputValue ==>  R$ 0,4038
  outputValue ==>  R$ 0,2152
  outputValue ==>  R$ 0,8046
  outputValue ==>  R$ 0,5983
  outputValue ==>  R$ 0,9496
  outputValue ==>  R$ 0,1440
  outputValue ==>  R$ 0,0366
  outputValue ==>  R$ 0,5444
  intl: 1.175ms
*/

/*
  Resultados teste 1 com 100.000 iterações:
  - toLocaleString: 4.438s
  - intl: 61.819ms

  Resultados teste 2 com 100.000 iterações:
  - toLocaleString: 4.296s
  - intl: 111.065ms

  Resultados teste 3 com 100.000 iterações:
  - toLocaleString: 3.996s
  - intl: 65.894ms
*/