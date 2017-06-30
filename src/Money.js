import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Money extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }

  getCurrencyData(currency) {
    return {
      GBP: { base: 100, symbol: '£' },
      USD: { base: 100, symbol: '$' },
    }[this.props.currency]
  }

  formatAmount(amount, base) {
    return parseFloat(amount / base).toFixed(2)
  }

  render() {
    const currency = this.getCurrencyData()
    if (currency) {
      const { symbol, base } = currency
      const formatted = this.formatAmount(this.props.amount, base)

      return (
        <span>{symbol}{formatted}</span>
      )
    } else {
      return <span>{this.props.amount}</span>
    }
  }
}

export default Money
