// NOTE that you can't use import statement if you need multiple module implementation
// in the same file

describe('definite mock per test', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('uses mocked module', function() {
    jest.doMock('../fruit', () => ({
      apple: 'mocked apple',
      default: jest.fn(() => 'mocked fruit'),
      strawberry: jest.fn(() => 'mocked strawberry')
    }))

    const { apple, strawberry, default: defaultExport } = require('../fruit')

    const defaultExportResult = defaultExport(0)
    expect(defaultExportResult).toBe('mocked fruit')
    expect(defaultExport).toHaveBeenCalled()

    expect(apple).toBe('mocked apple')
    expect(strawberry()).toBe('mocked strawberry')
  })

  it('uses actual module', function() {
    jest.dontMock('../fruit')

    const { apple, strawberry, default: defaultExport } = require('../fruit')
    const defaultExportResult = defaultExport()

    expect(defaultExportResult).toBe('banana')
    expect(apple).toBe('apple')
    expect(strawberry()).toBe('strawberry')
  })
})
