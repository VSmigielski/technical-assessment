import React from 'react'
import { Container, useMediaQuery, useTheme } from '@material-ui/core'
import Desktop from './Desktop'
import Tablet from './Tablet'

const Main = () => {
    const theme = useTheme();

    const isMedium = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container>
        {isMedium ? <Tablet></Tablet> : <Desktop></Desktop>}
        </Container>
    );
}

export default Main;
