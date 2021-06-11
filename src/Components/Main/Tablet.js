import React from 'react'
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import picture from '../../images/Main-pic.png'
import StyledButton from './StyledButton'

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '200px',
    },
    header2: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
        marginTop: '20px',
        fontSize: '2.7rem',
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.8rem',
        },
    },
    header3: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
        fontSize: '2.3rem',
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
        },
    },
    header5: {
        textAlign: 'center',
        color: 'black',
        paddingTop: '30px',
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '15px',
        },
        paddingBottom: '50px',
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '15px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '.95rem',
        },
    },
    button: {
        padding: '30px',
        justifyContent: 'center',
        marginBottom: '95px',
        '&:hover': {
            backgroundColor: 'white',
            color: '#57BB71',
        },
    },
    picture: {
        display: 'block',
        margin: 'auto',
        maxWidth: '51%', 
        minWidth: '30%',
        height: 'auto',
    }
  }));

const Tablet = () => {

    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <div className='d-flex flex-column'>
                <div>
                    <img alt='Learning' src={picture} className={classes.picture} />
                </div>
                <div>
                    <Typography variant='h2' className={classes.header2}>
                        Break the Barriers
                    </Typography>
                    <Typography variant='h3' className={classes.header3}>
                        of Ordinary Learning
                    </Typography>
                    <Typography variant='h5' className={classes.header5}>
                        Let's build a brighter future together
                    </Typography>
                    <Box textAlign='center'>
                    <StyledButton variant='contained' style={{justifyContent: "flex-start"}} className={classes.button}>
                        Start Learning for Free
                    </StyledButton>
                    </Box>
                </div>
            </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Tablet;
