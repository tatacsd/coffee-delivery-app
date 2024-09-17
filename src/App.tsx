import { useState } from 'react'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <h1>Hello</h1>
      <Button />
      <Button variant="secondary" />
    </ThemeProvider>
  )
}

