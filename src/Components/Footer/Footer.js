import React from 'react'
import { makeStyles } from '@material-ui/core'
import linkedin from '../../images/LinkedIn-Icon.png'
import facebook from '../../images/Facebook-Icon.png'
import instagram from '../../images/Instagram-Icon.png'
import footerup from '../../images/FooterUp-Icon.png'
import chat from '../../images/Chat-Icon.png'
import './Footer.css'

const Footer = () => {
    const useStyles = makeStyles(theme => ({
        instagram: {
          marginLeft: '20px',
          padding: '5px',
        },
        facebook: {
          padding: '5px',
        },
        linkedin: {
          padding: '5px',
        },
        footerup: {
            marginLeft: 'auto',
            padding: '5px',
        },
        chat: {
          marginLeft: 'auto',
          marginRight: '10px',
        },
        contact: {
          marginRight: '20px',
        }
      }));

      const classes = useStyles();

    return (
        <footer>
          <div className='d-flex'>
            <img alt='Instagram logo' src={instagram} className={classes.instagram} />
            <img alt='Facebook logo' src={facebook} className={classes.facebook} />
            <img alt='LinkedIn logo' src={linkedin} className={classes.linkedin} />
            <img alt='Footer Up Icon' src={footerup} className={classes.footerup} />
            <img alt='Chat Icon' src={chat} className={classes.chat} />
            <div className={classes.contact} >
              Contact
            </div>
          </div>      
        </footer>
    )
}

export default Footer;