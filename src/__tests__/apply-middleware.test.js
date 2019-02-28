import applyMiddleware from '../apply-middleware'


test.only('applyMiddleware happy path with final function', () => {
  const req = { name: 'req' }
  const res = { name: 'res' }

  const mockMid1 = jest.fn()
  const mockMid2 = jest.fn()

  function mid1(req, res, next) {
    console.log('>> mid1(): req', req, ', res', res, ', next', next)
    req.mid1 = 'mid1'
    mockMid1()
    next()
  }

  function mid2(req, res, next) {
    console.log('>> mid2(): req', req, ', res', res, ', next', next)
    mockMid2()
    next()
  }

  applyMiddleware([mid1, mid2])(req, res)

  expect(mockMid1).toHaveBeenCalledTimes(1)
  expect(mockMid2).toHaveBeenCalledTimes(1)
});

test.only('applyMiddleware next with error', () => {
  const req = { name: 'req' }
  const res = { name: 'res' }

  const mockMid1 = jest.fn()
  const mockMid2 = jest.fn()

  function mid1(req, res, next) {
    console.log('>> mid1(): req', req, ', res', res, ', next', next)
    req.mid1 = 'mid1'
    mockMid1()
    next(new Error('Middleware 1 Error'))
  }

  function mid2(req, res, next) {
    console.log('>> mid2(): req', req, ', res', res, ', next', next)
    mockMid2()
    next()
  }

  expect(() => {
    applyMiddleware([mid1, mid2])(req, res)
  }).toThrowError('Middleware 1 Error')

  expect(mockMid1).toHaveBeenCalledTimes(1)
  expect(mockMid2).not.toHaveBeenCalled()
});
