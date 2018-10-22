const user = jest.genMockFromModule('../user')

user.getAuthenticated = () => ({
  age: 62,
  name: 'Mock Name'
})

export default user
