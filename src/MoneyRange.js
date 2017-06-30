import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Money from './Money'

class MoneyRange extends Component {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }

  render() {
    const { min, max, currency } = this.props

    return (
      <span>from <Money amount={min} currency={currency} /> to <Money amount={max} currency={currency} /></span>
    )
  }
}

export default MoneyRange

