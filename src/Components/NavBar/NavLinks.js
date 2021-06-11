import React, { useState } from 'react'
import { makeStyles, Tab, Tabs } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: '1',
    },
    tabsItem: {
        fontWeight: 'bold',
        color: 'black',
    },
  }));

const NavLinks = () => {
    const [value, setValue] = useState(0);

    const handleClickTab = (e, newValue) => {
        setValue(newValue);
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Tabs onChange={handleClickTab} indicatorColor='secondary' value={value} centered>
                <Tab disableRipple  label='Courses' className={classes.tabsItem}/>
                <Tab disableRipple label='Who We Are' className={classes.tabsItem}/>
                <Tab disableRipple label='What We Do' className={classes.tabsItem}/>
            </Tabs>
        </div>
    )
}

export default NavLinks;