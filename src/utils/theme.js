import { createMuiTheme } from '@material-ui/core' 
import './fonts.css'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#B8D2C2'
        },
        secondary: {
            main: '#FF5A5A'
        },
        type: 'dark',
        background: {
            paper: '#57BB71',
            default: '#B8D2C2',
        },
        typography: {
            fontFamily: `"Montserrat", sans-serif`,
        },
    }
})

export default theme;