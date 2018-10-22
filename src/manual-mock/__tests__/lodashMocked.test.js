import lodash from 'lodash'

test('if lodash is mocked', () => {
  expect(lodash.head([10, 20])).toEqual(5)
})
