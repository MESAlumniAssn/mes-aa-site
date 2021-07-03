import React from 'react'
import Members from './Members'

// Material UI imports
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper } from '@fortawesome/free-solid-svg-icons'

const OfficeBearers = (props) => {
  return (
    <div style={{ margin: '50px 0 50px 0' }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          align="center"
          gutterBottom
          style={{ fontWeight: 'bold' }}
        >
          <span className="secondaryHeading">
            Say Hello to the Management Committee
          </span>{' '}
          {/* <img
            src="/images/about/wave.svg"
            alt="Waving hand"
            className="wavingHandAnimation"
            width="40px"
          /> */}
        </Typography>
        <Typography
          component="h3"
          align="center"
          gutterBottom
          style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            margin: '50px 0 50px 0',
          }}
        >
          Office Bearers
        </Typography>
        <Members committeeData={props.committeeData} filter={'ob'} />

        <Typography
          component="h3"
          align="center"
          gutterBottom
          style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '50px 0' }}
        >
          Management Committee Members
        </Typography>
        <Members committeeData={props.committeeData} filter={'mc'} />
      </Container>
    </div>
  )
}

export default OfficeBearers
