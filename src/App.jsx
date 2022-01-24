import React from 'react'

import GlobalStyle from './styles/GlobalStyle'
import { lightTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

import CarTable from './components/CarTable'

function App () {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <CarTable />
    </ThemeProvider>
  )
}

export default App
