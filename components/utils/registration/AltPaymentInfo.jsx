import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Material UI imports
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  parentContainer: {
    height: '100%',
  },
  altPaymentHero: {
    margin: '100px 15px 50px 15px',
    textAlign: 'center',
  },
})

const AltPaymentInfo = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.parentContainer}>
      <div className={classes.altPaymentHero}>
        <Typography component="h1" gutterBottom>
          <span className="mainHeading">
            Hi,{' '}
            <span style={{ color: '#ff5200' }}>
              {props.alumniInformation.first_name}
            </span>
            ! You're almost there...
          </span>
        </Typography>
        <div style={{ padding: '25px 0' }}>
          <Image
            src={'/images/registration/flag.png'}
            alt="Checkered flag"
            height={200}
            width={150}
          />
        </div>

        <Typography
          style={{
            fontWeight: 600,
            paddingTop: 20,
          }}
        >
          <span className="secondaryHeading">
            Your membership id is
            <br />
            <span style={{ color: '#ff5200', fontWeight: 700 }}>
              {props.alumniInformation.membership_id}
            </span>
          </span>
        </Typography>
        <Typography
          style={{
            fontSize: '1.1rem',
            padding: '20px 0',
          }}
        >
          Please write down the membership id on the back of the cheque/DD or
          specify if paying via NEFT, IMPS or RTGS.
        </Typography>
        <Typography
          style={{
            fontSize: '1.1rem',
          }}
        >
          We have emailed our bank details to{' '}
          <span style={{ color: '#ff5200', fontWeight: 700 }}>
            {props.alumniInformation.email}
          </span>{' '}
          .Once the payment is processed, you will receive the invoice via
          email.
        </Typography>

        <Typography
          style={{
            fontSize: '1.1rem',
            paddingTop: 20,
          }}
        >
          Please <span style={{ fontWeight: 'bold' }}>do not</span> hesitate to{' '}
          <Link href="/contact">
            <a
              style={{ color: '#ff5200', textDecoration: 'none' }}
              className="styledLink"
            >
              contact us
            </a>
          </Link>{' '}
          if you have any questions.
        </Typography>
      </div>
    </div>
  )
}

export default AltPaymentInfo
