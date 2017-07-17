import { formatAmount } from './format-currency'

test('it formats the amount to 2 dp', () => {
  expect(formatAmount(2000, 100)).toEqual('20.00')
})

test('respects the base', () => {
  expect(formatAmount(2000, 10)).toEqual('200.00')
})

test('it deals with decimal places correctly', () => {
  expect(formatAmount(2050, 100)).toEqual('20.50')
})
