import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import CheckboxWithLabel from './CheckboxWithLabel'

test('changes after click', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />)

  expect(checkbox.text()).toEqual('Off')

  checkbox.find('input').simulate('change')

  expect(checkbox.text()).toEqual('On')
})
