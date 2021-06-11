import React from 'react'
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import picture from '../../images/Main-pic.png'
import StyledButton from './StyledButton';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '200px',
    },
    header2: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
        marginTop: '110px',
        fontSize: '3.5rem',
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    header3: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
        fontSize: '3rem',
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    header5: {
        textAlign: 'center',
        color: 'black',
        paddingTop: '30px',
        paddingBottom: '50px',
        fontSize: '1.8rem',
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    button: {
        padding: '30px',
        justifyContent: 'center',
        fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
        '&:hover': {
            backgroundColor: 'white',
            color: '#57BB71',
        }
    }
  }));

const Desktop = () => {

    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container spacing={9}>
                <Grid item md={6}>
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
                </Grid>
                <Grid item md={6}>
                    <img alt='Learning' src={picture} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Desktop;
