function applyMiddleware(middlewares) {
  const createChain = (chained) => {
    return (req, res, middleware) => {
      // Next function
      return (err) => {
        console.log('>> next(), err:', err)
        if (err) {
          throw err
        }
        middleware(req, res, chained)
      }
    }
  }

  return function (req, res) {
    console.log('>> start middleware', middlewares)

    // Last next function
    let chained = (err) => {
      if (err) {
        throw err
      }
      console.log('>> last next(), err:', err)
    }

    middlewares.reverse().forEach((middleware) => {
      chained = createChain(chained)(req, res, middleware)
    })

    chained()
  }
}

export default applyMiddleware
