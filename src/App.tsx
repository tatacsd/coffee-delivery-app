import { useState } from 'react'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

