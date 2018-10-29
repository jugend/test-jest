import React from 'react'
import { css, cx } from 'emotion'

const blueStyle = css`
  color: blue;
`

const styles = {
  bordered: css`
    border: 1px solid blue;
  `
}

export function BlueButton(props) {
  return (
    <button className={cx(blueStyle, styles.bordered)} data-testid="blue-button">
      {props.children}
    </button>
  )
}
