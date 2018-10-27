import React, { Component } from 'react'

export default class TestComponent extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    const { count } = this.state
    return (
      <button onClick={() => this.setState({ count: count + 1 })}>
        Click to increase: {count}
      </button>
    )
  }
}
