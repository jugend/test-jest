const reverseString = require('./reverseString')

const initDatabase = () => {}
const closeDatabase = () => {}

describe('Test Group', () => {
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
