import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Money extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
    minAmount: PropTypes.number.isRequired,
    maxAmount: PropTypes.number,
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
      const formatted = this.formatAmount(this.props.minAmount, base)

      if (this.props.maxAmount && this.props.maxAmount > this.props.minAmount) {
        const formattedMax = this.formatAmount(this.props.maxAmount, base)

        return (
          <span>from {symbol}{formatted} to {symbol}{formattedMax}</span>
        )
      }

      return (
        <span>{symbol}{formatted}</span>
      )
    } else {
      return <span>{this.props.minAmount}</span>
    }
  }
}

export default Money
