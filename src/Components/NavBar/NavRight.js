import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Button, makeStyles, Menu, MenuItem } from '@material-ui/core'
import icon from '../../images/SignIn-Icon.png'

const useStyles = makeStyles(theme => ({
    account: {
      marginLeft: 'auto',
      marginRight: '20px',
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      '&:hover': {
        background: '#57BB71',
      },
    },
    icon: {
        marginRight: '5px',
    },
    search: {
        marginTop: '6px',
        marginRight: '20px',
    },
    signin: {
        marginTop: '6px',
        marginLeft: '5px',
        marginRight: '30px',
    },
  }));

const NavRight = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const classes = useStyles();
    return (
        <div>
            <div className="d-flex justify-content-around">
                <div className={classes.search}>
                    <SearchIcon />
                </div>
                <div className={classes.signin}>
                    <img alt="Sign-In Icon" src={icon} className={classes.icon} />
                    Sign In
                </div>
                <Button aria-controls='menu' onClick={handleOpenMenu} variant='contained' color='secondary' className={classes.account} style={{justifyContent: 'center'}}>
                    Request Demo
                </Button>

                <Menu style={{marginTop: '50px'}}id='menu' onClose={handleMenuClose} anchorEl={anchorEl} open={Boolean(anchorEl)} >
                    <MenuItem onClick={handleMenuClose} >Request</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default NavRight;
