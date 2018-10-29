import React from 'react'
import renderer from 'react-test-renderer'
import * as emotion from 'emotion'

describe('jest snapshot printer', () => {
  const divStyle = emotion.css(`
    color: red;
  `)

  const inputStyle = emotion.css(`
    background-color: blue;
  `)

  it('prints React elements', () => {
    expect(
      renderer
        .create(
          <div className={divStyle}>
            <input className={inputStyle} />
          </div>
        )
        .toJSON()
    ).toMatchSnapshot()
  })

  it('prints DOM elements', () => {
    const divElement = document.createElement('div')
    divElement.setAttribute('class', divStyle)
    const inputElement = document.createElement('input')
    inputElement.setAttribute('class', inputStyle)
    divElement.appendChild(inputElement)

    expect(divElement).toMatchSnapshot()
  })
})
