import React from 'react'

import GlobalStyle from './styles/GlobalStyle'
import { lightTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

import CarList from './components/ListElements/CarList'

function App () {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <CarList />
    </ThemeProvider>
  )
}

export default App
