import React from 'react'
import Members from './Members'

// Material UI imports
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper } from '@fortawesome/free-solid-svg-icons'

const OfficeBearers = (props) => {
  return (
    <div style={{ margin: '70px 0 50px 0' }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          align="center"
          gutterBottom
          style={{ fontWeight: 'bold' }}
        >
          <span className="secondaryHeading">
            Say hello to the Management Committee
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
            fontWeight: 'bold',
            margin: '50px 0 50px 0',
          }}
        >
          <span className="secondaryHeading">Office Bearers</span>
        </Typography>
        <Members committeeData={props.committeeData} filter={'ob'} />

        <Typography
          component="h3"
          align="center"
          gutterBottom
          style={{ fontWeight: 'bold', margin: '50px 0' }}
        >
          <span className="secondaryHeading">Management Committee Members</span>
        </Typography>
        <Members committeeData={props.committeeData} filter={'mc'} />
      </Container>
    </div>
  )
}

export default OfficeBearers
