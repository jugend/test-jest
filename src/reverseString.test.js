const reverseString = require('./reverseString')

const initDatabase = () => console.log('>> init database')
const closeDatabase = () => console.log('>> close database')

describe('Test Group', function() {
  beforeEach(() => {
    initDatabase()
  })

  afterEach(() => {
    closeDatabase()
  })

  test('Function should exist', () => {
    expect(reverseString).toBeDefined()
  })

  test('String should reverse', () => {
    expect(reverseString('hello')).toBe('olleh')
  })
})
