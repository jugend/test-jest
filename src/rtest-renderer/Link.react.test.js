import React from 'react'
import Link from './Link.react'
import renderer from 'react-test-renderer'

test('Linnk changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Trigger callback
  tree.props.onMouseEnter()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onMouseLeave()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
