import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Material UI imports
import Grid from '@material-ui/core/Grid'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {
  associationName,
  collegeName,
  collegeAddress1,
  collegeAddress2,
  officialEmail,
  officialPhone,
} from '../../utils/associationDetails'

// Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-regular-svg-icons'
import {
  faEnvelope,
  faPhone,
  faHeart,
  faUserSecret,
  faBookOpen,
  faCircle,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons'

let theme = createMuiTheme()

const useStyles = makeStyles({
  root: {
    backgroundImage:
      'linear-gradient(to right, rgba(214, 188, 167, 0.38), rgba(250, 193, 147, 0.57))',
    fontWeight: 600,
  },
  social: {
    display: 'flex',
    width: 'auto',

    [theme.breakpoints.up('sm')]: {
      // Center the grid container
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container
        maxWidth="md"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px 0',
        }}
      >
        <Typography
          style={{ fontSize: '1.3rem', fontWeight: 700 }}
          align="center"
          gutterBottom
        >
          &copy; {new Date().getFullYear()} - {associationName}
        </Typography>
        <Typography
          style={{ fontSize: '1.1rem', fontWeight: 700 }}
          align="center"
          gutterBottom
        >
          All rights reserved
        </Typography>
      </Container>

      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        maxWidth="md"
      >
        <Typography
          style={{ fontSize: '1.3rem', fontWeight: 700 }}
          align="center"
          gutterBottom
        >
          {collegeName}
        </Typography>
        <Typography
          style={{ fontSize: '1rem', fontWeight: 600 }}
          align="center"
          gutterBottom
        >
          <span>{collegeAddress1}</span> <span>{collegeAddress2}</span>
        </Typography>
      </Container>

      <Container maxWidth="md" style={{ paddingTop: 12 }}>
        <Grid container justify="center" alignItems="center" spacing={1}>
          <Grid item xs={12} align="center">
            <Typography style={{ fontSize: '1.1rem', fontWeight: 600 }}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: '5px' }}
              />{' '}
              {officialEmail}
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography style={{ fontSize: '1.1rem', fontWeight: 600 }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />{' '}
              {officialPhone}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" style={{ marginTop: 50 }}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <FontAwesomeIcon icon={faUserSecret} style={{ marginRight: 5 }} />
          <Link href="/privacy">
            <a
              style={{ fontSize: '1rem', textDecoration: 'none' }}
              className="styledLink"
            >
              Privacy Policy
            </a>
          </Link>
          <FontAwesomeIcon
            icon={faCircle}
            style={{ fontSize: 6, margin: '0 10px' }}
          />
          <FontAwesomeIcon icon={faBookOpen} style={{ marginRight: 5 }} />
          <Link href="/privacy">
            <a
              style={{ fontSize: '1rem', textDecoration: 'none' }}
              className="styledLink"
            >
              Terms of Use
            </a>
          </Link>
          <FontAwesomeIcon
            icon={faCircle}
            style={{ fontSize: 6, margin: '0 10px' }}
          />
          <FontAwesomeIcon icon={faSitemap} style={{ marginRight: 5 }} />
          <Link href="/privacy">
            <a
              style={{ fontSize: '1rem', textDecoration: 'none' }}
              className="styledLink"
            >
              Sitemap
            </a>
          </Link>
        </Grid>
      </Container>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px 0 0 0',
        }}
      >
        <Typography
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            display: 'flex',
            justifyContent: 'center',
          }}
          gutterBottom
        >
          Connect with us
        </Typography>
        <div style={{ paddingTop: 10, paddingBottom: 40 }}>
          <Link href="https://facebook.com" passHref={true}>
            <a style={{ marginRight: 15 }}>
              <Image
                src={'/images/social/facebook.svg'}
                alt="Facebook"
                height={40}
                width={40}
              />
            </a>
          </Link>

          <Link href="https://twitter.com" passHref={true}>
            <a style={{ marginRight: 15 }}>
              <Image
                src={'/images/social/twitter.svg'}
                alt="Twitter"
                height={40}
                width={40}
              />
            </a>
          </Link>

          <Link href="https://instagram.com" passHref={true}>
            <a style={{ marginRight: 15 }}>
              <Image
                src={'/images/social/instagram.svg'}
                alt="Instagram"
                height={40}
                width={40}
              />
            </a>
          </Link>

          <Link href="https://youtube.com" passHref={true}>
            <a style={{ marginRight: 15 }}>
              <Image
                src={'/images/social/youtube.svg'}
                alt="Youtube"
                height={40}
                width={40}
              />
            </a>
          </Link>
        </div>
      </div>
      <Typography
        style={{ fontSize: '1.2rem', fontWeight: 600, paddingBottom: 30 }}
        align="center"
      >
        Made with <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />{' '}
        for the alumni by the alumni
      </Typography>
    </div>
  )
}

export default Footer
