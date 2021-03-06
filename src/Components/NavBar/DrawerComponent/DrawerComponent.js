import React, { useState } from 'react'
import { Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const DrawerComponent = () => {
    const useStyles = makeStyles(theme => ({
        drawerContainer: {},
        iconButtonContainer: {
          marginLeft: 'auto',
          color: 'white',
          fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        },
        account: {
            marginRight: '30px',
            fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            },
        },
        search: {
            marginTop: '6px',
            marginRight: '30px',
            fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
            [theme.breakpoints.down('xs')]: {
                marginRight: '10px',
            },
        },
        menuIconToggle: {
          fontSize: '3rem',
        },
      }));

    const [openDrawer, setOpenDrawer] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const classes = useStyles();

    return (
        <>
        <Drawer anchor='right'
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}>
            <List>
                <ListItem button divider onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText style={{fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif'}}>
                            Courses
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem button divider onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText style={{fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif'}}> 
                            Who We Are
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem button divider onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText style={{fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif'}}>
                            What We Do
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
        <IconButton className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
            <div className={classes.search}>
                <SearchIcon />
            </div>
            <Button disableRipple aria-controls='menu' onClick={handleOpenMenu} variant='contained' color='secondary' className={classes.account}>
                Request Demo
            </Button>
            <MenuIcon className={classes.menuIconToggle}/>
        </IconButton>

        <Menu style={{marginTop: '50px'}}id='menu' onClose={handleMenuClose} anchorEl={anchorEl} open={Boolean(anchorEl)} >
            <MenuItem onClick={handleMenuClose} style={{fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif'}}>Request</MenuItem>
        </Menu>
        </>
    )
}

export default DrawerComponent
