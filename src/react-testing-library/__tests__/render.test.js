import React from 'react'
import { render, customRender, fireEvent } from 'test-utils'
import TestComponent from '../test-component'
// import { prettyDOM } from 'dom-testing-library'

const HelloWorld = () => <h1>Hello World</h1>

test('debug', () => {
  const { debug, container } = render(<HelloWorld />)
  expect(container).toContainHTML('<h1>Hello World</h1>')
  debug()
})

test('custom render in container', () => {
  const section = document.createElement('section')
  const { baseElement, container, debug, getByTestId } = customRender(<HelloWorld />, { container: section })

  // console.log(baseElement.innerHTML)
  // console.log(container.innerHTML)
  // console.log(getByTestId('custom-render').innerHTML)

  expect(getByTestId('custom-render')).toContainHTML('<div data-testid="custom-render">Custom: <h1>Hello World</h1></div>')
  expect(getByTestId('custom-render')).toHaveTextContent('Custom: Hello World')
  expect(container).toContainElement(section)
})

test.only('asFragment and fireEvent', () => {
  const { getByText, asFragment, debug } = render(<TestComponent />)
  const firstRender = asFragment()

  fireEvent.click(getByText(/Click to increase/))

  // const rightClick = {button: 2}
  // fireEvent.click(getByText('Submit'), rightClick)

  // This will snapshot only the difference between the first render, and the
  // state of the DOM after the click event.
  // See https://github.com/jest-community/snapshot-diff
  // expect(firstRender).toMatchDiffSnapshot(asFragment())
})

