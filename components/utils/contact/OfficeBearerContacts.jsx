import React from 'react'
import contact from '../../../utils/contactDetails'

// Material UI imports
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

// Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  memberEmail: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
}))

const OfficeBearerContacts = () => {
  const classes = useStyles()
  return (
    <div style={{ margin: '70px 0' }}>
      <Typography
        component="h2"
        align="center"
        gutterBottom
        style={{ fontWeight: 'bold' }}
      >
        <span className="secondaryHeading">Contact the Committee Members</span>
      </Typography>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={6}
        style={{ paddingTop: '20px' }}
      >
        {contact.map((contact) => {
          return (
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  borderRadius: '5px',
                  borderLeft: '5px solid #B9AC92',
                  padding: '15px 20px',
                  boxShadow: '0 15px 22px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
                  gutterBottom
                >
                  {contact.designation}
                </Typography>
                <Divider style={{ backgroundColor: '#B9AC92' }} />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: 10,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    style={{ marginRight: 5, color: '#B9AC92' }}
                  />
                  <Typography className={classes.memberEmail}>
                    {contact.contact}
                  </Typography>
                </div>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default OfficeBearerContacts
