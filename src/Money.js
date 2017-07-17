import React from 'react';
import PropTypes from 'prop-types'
import { formatAmount } from './format-currency'
import { getCurrencyData } from './currency-data'

const Money = ({ currency, amount }) => {
  const currencyData = getCurrencyData(currency)
  if (currencyData) {
    const { symbol, base } = currencyData
    const formatted = formatAmount(amount, base)

    return (
      <span>{symbol}{formatted}</span>
    )
  } else {
    return <span>{amount}</span>
  }

}

Money.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}

export default Money
