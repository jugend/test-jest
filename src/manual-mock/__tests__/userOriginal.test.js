import user from '../models/user'

test('original user model', () => {
  expect(user.getAuthenticated()).toEqual({ age: 26, name: 'Real Name' })
})
