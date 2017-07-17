export const formatAmount = (amount, base) => {
  return parseFloat(amount / base).toFixed(2)
}
