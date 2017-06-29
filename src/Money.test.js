import React from 'react'
import Money from './Money'

import { shallow } from 'enzyme'

describe('Money', () => {
  it('takes a currency, amount and formats correctly', () => {
    const wrapper = shallow(<Money minAmount={2000} currency="GBP" />)

    expect(wrapper.find('span').text()).toEqual('£20.00')
  })

  it('leaves the number unformatted if it does not know the currency', () => {
    const wrapper = shallow(<Money minAmount={2000} currency="MADEUP" />)

    expect(wrapper.find('span').text()).toEqual('2000')
  })

  it('can take two amounts and show the range', () => {
    const wrapper = shallow(<Money minAmount={2000} maxAmount={4000} currency="GBP" />)

    expect(wrapper.find('span').text()).toEqual('from £20.00 to £40.00')
  })

  it('does not use the maxAmount if it is less than or equal the min amount', () => {
    const wrapper = shallow(<Money minAmount={2000} maxAmount={1900} currency="GBP" />)

    expect(wrapper.find('span').text()).toEqual('£20.00')
  })
})


