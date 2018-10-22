import defaultExport, { apple, strawberry } from '../fruit'

jest.mock('../fruit', () => {
  const originalModule = jest.requireActual('../fruit')
  const mockedModule = jest.genMockFromModule('../fruit')

  return Object.assign({}, mockedModule, originalModule, {
    apple: 'mocked apple',
    default: jest.fn(() =>  'mocked fruit')
  })
})

it('does a partial mock', () => {
  const defaultExportResult = defaultExport()
  expect(defaultExportResult).toBe('mocked fruit');
  expect(defaultExport).toHaveBeenCalled();

  expect(apple).toBe('mocked apple');
  expect(strawberry()).toBe('strawberry');

})
