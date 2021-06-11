import React from 'react'
import { AppBar, makeStyles, Slide, Toolbar, Typography, useMediaQuery, useTheme, useScrollTrigger } from '@material-ui/core'
import DrawerComponent from './DrawerComponent/DrawerComponent'
import Header from '../Header/Header'
import NavLinks from './NavLinks'
import NavRight from './NavRight'
import NavLogo from './NavLogo'

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: '1',
        marginRight: 'auto',
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    toolBar: {
        padding: '20px',
    },
  }));

const NavBar = () => {
    const trigger = useScrollTrigger();
    
    // Breakpoints
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();

    return (
        <>
        <Slide appear={false} direction='down' in={!trigger}>
        <AppBar color='primary' elevation={0}>
                <Header/>
                <Toolbar className={classes.toolBar}>
                    <Typography>
                        <NavLogo />
                    </Typography>

                    {isMatch ? <DrawerComponent></DrawerComponent> : 
                    (<>
                    <div className={classes.container}>
                        <div class="d-flex align-content-center">
                        <NavLinks />
                        </div>
                    </div>
                    <div className={classes.rcontainer}>
                        <NavRight />
                    </div>
                    
                    </>)}

                </Toolbar>
            </AppBar>
        </Slide>

        </>
    )
}

export default NavBar
