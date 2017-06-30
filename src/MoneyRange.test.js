import React from 'react'
import MoneyRange from './MoneyRange'
import { shallow } from 'enzyme'

describe('MoneyRange', () => {
  it('can take two amounts and show the range', () => {
    const wrapper = shallow(<MoneyRange min={2000} max={4000} currency="GBP" />)

    expect(wrapper.find('span').text()).toEqual('from <Money /> to <Money />')
    const moneyComponents = wrapper.find('Money')
    expect(moneyComponents.at(0).props()).toEqual({ amount: 2000, currency: 'GBP' })
    expect(moneyComponents.at(1).props()).toEqual({ amount: 4000, currency: 'GBP' })
  })
})
