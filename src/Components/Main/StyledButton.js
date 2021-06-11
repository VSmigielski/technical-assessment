import { Button, withStyles } from '@material-ui/core'

const StyledButton = withStyles({
    root: {
      color: 'white',
      background: '#57BB71',
      border: 0,
      height: 61,
      width: '264px',
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

export default StyledButton
