import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'
import { lightTheme } from './styles/theme'

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
