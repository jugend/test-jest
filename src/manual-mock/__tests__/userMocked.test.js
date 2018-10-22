import user from '../models/user'

jest.mock('../models/user')

test('if user is mocked', () => {
  expect(user.getAuthenticated()).toEqual({ age: 62, name: 'Mock Name' })
})
