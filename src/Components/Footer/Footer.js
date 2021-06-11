import React from 'react'
import { makeStyles } from '@material-ui/core'

const Footer = () => {
    const useStyles = makeStyles(theme => ({
        footer: {  
          backgroundColor: 'rgb(30,51,60)',
          textAlign: 'center',
          padding: '10px',
          color: 'white',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        },
      }));

      const classes = useStyles();

    return (
        <footer className={classes.footer}>
            " What's meant to be will find a way "
        </footer>
    )
}

export default Footer;