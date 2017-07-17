import { getCurrencyData } from './currency-data'

test('for GBP it returns the right data', () => {
  expect(getCurrencyData('GBP')).toEqual({
    base: 100,
    symbol: '£',
  })
})

