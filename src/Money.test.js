import React from 'react'
import Money from './Money'

import { shallow } from 'enzyme'

describe('Money', () => {
  it('takes a currency, amount and formats correctly', () => {
    const wrapper = shallow(<Money amount={2000} currency="GBP" />)

    expect(wrapper.find('span').text()).toEqual('£20.00')
  })

  it('leaves the number unformatted if it does not know the currency', () => {
    const wrapper = shallow(<Money amount={2000} currency="MADEUP" />)

    expect(wrapper.find('span').text()).toEqual('2000')
  })

})


