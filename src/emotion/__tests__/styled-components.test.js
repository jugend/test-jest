import React from 'react'
import { render } from 'react-testing-library'
import { BlueButton, BorderedButton } from '../styled-components'

it('should render component with css', () => {
  const { container, getByText, debug } = render(<BlueButton>Blue Button</BlueButton>)
  expect(container).toMatchSnapshot()
})

it('should render button with dynamic prop', () => {
  const { container, debug } = render(<BorderedButton borderColor='cyan'>Bordered Button</BorderedButton>)
  // debug()
  expect(container).toMatchSnapshot()
})
