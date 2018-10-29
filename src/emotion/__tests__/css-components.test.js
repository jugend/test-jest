import React from 'react'
import { render } from 'react-testing-library'
import { BlueButton } from '../css-components'
import { createSerializer } from 'jest-emotion'

it('should render component with css', () => {
  const { container, getByText, debug } = render(<BlueButton color='green'>Hello World</BlueButton>)

  debug()

  expect(() => getByText('Hello World')).not.toThrow()
  // console.log('>> document styles ', document.styleSheets[2].cssRules)
  expect(container.firstChild).toMatchSnapshot()
})
