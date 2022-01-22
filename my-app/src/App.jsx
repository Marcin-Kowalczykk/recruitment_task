import React from 'react'

import GlobalStyle from './styles/GlobalStyle'
import { lightTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

function App () {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <h1>Volkswagen Golf IV 1.6 TDI</h1>
    </ThemeProvider>
  )
}

export default App
