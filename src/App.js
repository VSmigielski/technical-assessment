import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { ThemeProvider } from '@material-ui/styles'
import theme from './utils/theme'
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from '@material-ui/core'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import './utils/fonts.css'

const font = "'Montserrat', sans-serif"; 

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className='App' style={{fontFamily: font}}>
      <NavBar />
      <Main />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App

