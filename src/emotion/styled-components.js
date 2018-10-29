import React from 'react'
import styled, { css } from 'react-emotion'

export const BlueButton = styled('button')`
  color: blue;
`

export const BorderedButton = styled.button((props) => `
  border: 1px solid ${props.borderColor}
`)

// export const BorderedButton = styled.button((props) => ({
//   border: `1px solid ${props.borderColor}`
// }))
