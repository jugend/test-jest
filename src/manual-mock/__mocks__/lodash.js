/**
 * Location doesn't matter can be in any __mocks__ folder child or parent
 * Contradicting with the documentation
 */
const lodash = jest.genMockFromModule('lodash')

lodash.head = arr => 5

export default lodash
