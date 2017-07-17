export const getCurrencyData = currency => {
  return {
    GBP: { base: 100, symbol: '£' },
    USD: { base: 100, symbol: '$' },
  }[currency]
}
