const testfunc = require('../functions')

test('Should be equal', () => {
  expect(testfunc.add(5, 2)).toBe(7)
})

test('Should not be equal', () => {
  expect(testfunc.add(5, 2)).not.toBe(9)
})

test('Should not be null', () => {
  expect(testfunc.add(5, 2)).not.toBeNull()
})

test('Should be falsy', () => {
  expect(testfunc.checkValue(undefined)).toBeFalsy()
  expect(testfunc.checkValue('test')).toBeTruthy()
})

test('Should be user object', () => {
  expect(testfunc.createUser()).not.toBe({
    firstName: 'Brad',
    lastName: 'Traversy'
  })

  expect(testfunc.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  })
})

test('Should be less than', () => {
  expect(testfunc.add(100, 100)).toBeLessThanOrEqual(200)
})

// Regex
test('Should regex match', () => {
  expect('team').not.toMatch(/I/i)
})

// Arrays
test('Should be found in array', () => {
  const userNames = ['john', 'karen', 'admin']
  expect(userNames).toContain('admin')
})

// Async data
test('Should fetch user', () => {
  // Assert one expect call
  expect.assertions(1)

  return testfunc.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham')
  })
})

// Async await
test('Should test async await', async () => {
  expect.assertions(1)
  const data = await testfunc.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})
