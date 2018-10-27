// test-utils.js
import React from 'react'
// Best Practice: To override and add additional helper methods
import { render } from 'react-testing-library'
// import {ThemeProvider} from 'my-ui-lib'
// import {TranslationProvider} from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'

export const customRender = (node, ...options) => {
  return render(
    // <ThemeProvider theme="light">
    //   <TranslationProvider messages={defaultStrings}>
    <div data-testid="custom-render">Custom: {node}</div>,
    //   </TranslationProvider>
    // </ThemeProvider>,
    ...options,
  )
}

// re-export everything
export * from 'react-testing-library'

// override render method
// export { customRender as render }
