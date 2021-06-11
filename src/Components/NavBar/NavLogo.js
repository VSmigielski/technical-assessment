import React from 'react'
import logo from '../../images/kids-galaxy-logo.png'
import { makeStyles } from '@material-ui/core'

const NavLogo = () => {
    const useStyles = makeStyles(theme => ({
        logo: {
            marginLeft: '20px',
        },
    }));

    const classes = useStyles();
    return (
        <div>
            <img alt="Kids Galaxy logo" src={logo} className={classes.logo}/>
        </div>
    )
}

export default NavLogo
