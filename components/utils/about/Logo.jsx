import React from 'react'
import Image from 'next/image'

//Material UI imports
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered } from '@fortawesome/free-regular-svg-icons'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px 0 25px 0',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  MuiAccordionroot: {
    '&.MuiAccordion-root:before': {
      backgroundColor: 'white',
    },
  },
}))

// const AccordionSummary = withStyles({
//   content: {
//     flexGrow: 0,
//   },
// })(MuiAccordionSummary);

const AimsAndObjectives = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Accordion
          elevation={0}
          className={{
            root: classes.MuiAccordionroot,
          }}
          style={{ borderRadius: 0 }}
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                style={{ fontSize: '2rem', color: '#343434' }}
              />
            }
            aria-label="Expand to read about our logo"
            style={{ borderLeft: 'solid 5px var(--secondary-color)' }}
          >
            <Typography
              component="h3"
              align="center"
              style={{ fontWeight: 'bold', marginRight: 7 }}
            >
              <span className="secondaryHeading">Our Logo</span>
            </Typography>
            <Image src={'/logo.png'} alt={'Logo'} height={30} width={55} />
          </AccordionSummary>
          <AccordionDetails className={classes.hideBorder}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: 10,
              }}
            >
              <Image src={'/logo.png'} alt={'Logo'} width={350} height={350} />
              <Typography
                variant="body1"
                style={{ paddingTop: 10 }}
                gutterBottom
              >
                The logo of an association is a unique representation that
                communicates its ideology. The logo of The MES College Alumni
                Association
                <FontAwesomeIcon
                  icon={faRegistered}
                  style={{ verticalAlign: 'super', fontSize: '0.75rem' }}
                />
                {'  '}
                was aesthetically designed to make the first impression in
                coherence with the moto{' '}
                <span style={{ fontWeight: 'bold' }}>
                  संघे शक्ति कलौ युगे
                </span>{' '}
                (sanghe shakti kaliyuge) which signifies that in the present day
                (kali yuga), a group that has a clarity of purpose and a unified
                vision possesses tremendous power.
              </Typography>
              <Typography
                variant="body1"
                display="block"
                style={{ paddingTop: 10 }}
                gutterBottom
              >
                The book symbolises knowledge, the torch signifies alumni as
                torchbearers of the institution, the design above the torch is
                the graduation cap that a student takes pride in and thereafter
                is a former student of the institution, the green leaves
                epitomise prosperity and the human chain embodies oneness and
                harmony.
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  )
}

export default AimsAndObjectives
