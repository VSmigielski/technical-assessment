import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { ThemeProvider } from '@material-ui/styles'
import theme from './utils/theme'
import { makeStyles } from '@material-ui/core'

const App = () => {
  const useStyles = makeStyles(theme => ({
    app: {
      
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} className={classes.app}>
      <NavBar />
    </ThemeProvider>
  )
}

export default App

