import React from 'react'
import { makeStyles } from '@material-ui/core'

const Header = () => {
    const useStyles = makeStyles(theme => ({
        header: {  
          backgroundColor: 'rgb(30,51,60)',
          textAlign: 'center',
          height: '45px',
          padding: '10px',
          color: 'white',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        },
      }));

      const classes = useStyles();

    return (
        <header className={classes.header}>
            " What's meant to be will find a way "
        </header>
    )
}

export default Header;
