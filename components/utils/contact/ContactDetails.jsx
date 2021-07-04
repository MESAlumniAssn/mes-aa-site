import React from 'react'
import Image from 'next/image'
import OfficeBearerContacts from './OfficeBearerContacts'
import Social from './Social'

import {
  associationName,
  collegeName,
  collegeAddress1,
  collegeAddress2,
  officialEmail,
  officialPhone,
} from '../../../utils/associationDetails'

// Material UI imports
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles'

// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { Typography } from '@material-ui/core'

let theme = createMuiTheme()

theme = responsiveFontSizes(theme)

const useStyles = makeStyles({
  contactHero: {
    margin: '100px 0 50px 0',
    textAlign: 'center',
  },
  heroImage: {
    transform: 'rotate(-3deg)',
    height: 300,
    width: 500,
    boxShadow: '0 12px 37px rgba(0,0,0,0.3)',

    [theme.breakpoints.down('sm')]: {
      height: 200,
      width: 300,
    },
  },
  mainContactText: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '40px',
    },
  },
})

const ContactDetails = () => {
  const classes = useStyles()
  return (
    <div style={{ padding: '0 5px' }}>
      <div className={classes.contactHero}>
        <Typography component="h1" align="center" className="styledHeading">
          <span className="mainHeading">Get in touch</span>
        </Typography>
      </div>
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <div className={classes.heroImage}>
              <Image
                src={'/images/contact/contact.png'}
                alt={'Contact main image'}
                layout="fill"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.mainContactText}>
              <Typography style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ fontSize: '1.2rem', marginRight: 7 }}
                />{' '}
                {associationName}
              </Typography>
            </div>
            <div>
              <Typography component="body2" variant="body2">
                <span>{collegeAddress1}</span> <span>{collegeAddress2}</span>
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '20px 0',
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: '1.2rem', marginRight: 7 }}
              />
              <Typography style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                {officialEmail}
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ fontSize: '1.2rem', marginRight: 7 }}
              />
              <Typography style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                {officialPhone}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <OfficeBearerContacts />
        <Social />
      </Container>
    </div>
  )
}

export default ContactDetails
