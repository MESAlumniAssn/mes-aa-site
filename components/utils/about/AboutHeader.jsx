import React, { useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Material UI imports
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core/styles'

// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// Component imports
import RegistrationCertificateModal from './RegistrationCertificateModal'

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    height: '100%',
  },
  aboutHero: {
    padding: '100px 0 50px 0',
    textAlign: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    margin: '10 10',
    boxShadow: theme.shadows[5],
    padding: 30,
    paddingTop: '3rem',
    paddingBottom: '2rem',
    position: 'relative',
    overflowY: 'scroll',
    height: 600,
    width: 350,
    [theme.breakpoints.up('sm')]: {
      width: 600,
    },
  },
  almaMaterText: {
    fontSize: '1.1rem',
    fontWeight: 600,
    borderLeft: 'solid 5px var(--secondary-color)',
    borderRaius: 0,
    padding: '5px 10px',
    background: '#FFFFFF',
    textTransform: 'uppercase',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.3rem',
    },
  },
  headerImageContainer: {
    boxShadow: '0 20px 35px rgba(0, 0, 0, 0.2)',
  },
}))

const AboutHeader = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openRegistrationCert, setOpenRegistrationCert] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Fragment>
      <div className={classes.parentContainer}>
        <div className={classes.aboutHero}>
          <Typography
            component="h1"
            align="center"
            className="styledHeading"
            gutterBottom
          >
            <span className="mainHeading">Get to know us better</span>
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 30,
          }}
        >
          <div className={classes.headerImageContainer}>
            <Image
              src={'/images/about/college-old.png'}
              alt={'MES College'}
              height={400}
              width={550}
            />
          </div>
          <div style={{ paddingTop: '50px' }}>
            <p className={classes.almaMaterText} onClick={handleOpen}>
              <span className="styledLink">A little about your alma mater</span>
            </p>
          </div>
        </div>

        <Container maxWidth="md">
          <Typography variant="body1" component="body1" gutterBottom>
            The word “alumnus” stems from a combination of the Latin words
            “foster” and “child.”
          </Typography>
          <Typography
            variant="body1"
            component="body1"
            display="block"
            gutterBottom
            style={{ paddingTop: 20 }}
          >
            Creating an engaged and supportive alumni network is crucial to an
            institution’s success. Their proactive engagement after graduation
            helps in the growth of the institution. As alumni are ambassadors of
            the institution, they must stay connected with the institution and
            remain updated on its progress. MES College has always maintained a
            cordial relationship with its alumni. The association’s human
            capital can contribute meaningfully to the cause of education and
            promote activities that are beneficial to the student community.
          </Typography>
          <Typography
            variant="body1"
            component="body1"
            display="block"
            gutterBottom
            style={{ paddingTop: 20 }}
          >
            MES College (accredited{' '}
            <span style={{ fontWeight: 'bold' }}>A</span> by NAAC) has been an
            institute par excellence for over 65 years. It has a galaxy of
            distinguished alumni, who with their excellence in their chosen
            field have not only bought laurels to college and the country but
            have also been recognised worldwide.
          </Typography>
          <Typography
            variant="body1"
            component="body1"
            display="block"
            gutterBottom
            style={{ paddingTop: 20 }}
          >
            The Alumni Association has been functioning informally for many
            years. The process of formalising the Association began a few years
            ago and it was finally{' '}
            <Link href="#">
              <a
                style={{
                  color: 'var(--secondary-color)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
                className="styledLink"
                onClick={() => setOpenRegistrationCert(true)}
              >
                registered on 21
                <span style={{ verticalAlign: 'super', fontSize: '0.8rem' }}>
                  st
                </span>{' '}
                June, 2021
              </a>
            </Link>
            .
          </Typography>
        </Container>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div style={{ position: 'absolute', right: 15, top: 10 }}>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={handleClose}
                  style={{ fontSize: '1.2rem', cursor: 'pointer' }}
                  className="timesButtonAnimation"
                />
              </div>
              <div style={{ position: 'absolute', right: 8, top: 30 }}>ESC</div>
              <Typography component="h2" align="center">
                <span className="secondaryHeading">Your Alma Mater</span>
              </Typography>
              <p>
                MES College of Arts, Commerce and Science was started in the
                year 1956 by Prof. B. R. Subba Rao, Sri G. A. Acharya and Sri.
                Chinnaswamy as an intermediate college offering Arts and
                Commerce streams.
              </p>
              <p>
                The Mysore Education Society was registered in 1958 and other
                like-minded people such as Prof. M. P. L. Sastry and Smt. Vimala
                Rangachar joined. The college expanded its wings by offering the
                science course at the Pre-University level and degree courses to
                provide higher education in the same institution.
              </p>
              <p>
                The college was bifurcated into MES Pre-University college and
                MES College of Arts, Commerce and Science in the year 2002.
                Nevertheless, for over six decades, the institution has provided
                quality education at an affordable cost to numerous batches of
                students and facilitated students to fulfil their academic
                aspirations. They have brought laurels to the college and also
                contributed immensely to building ‘brand MES’.
              </p>
              <p>
                The education imparted by highly qualified faculty, the learning
                resources in the college, multi-mode learning opportunities
                provided-both in co-curricular and extracurricular activities,
                have a significant mention in the success stories of the alumni.
              </p>
              <p>
                The alumni of the college believe in the quote by Winston S
                Churchill{' '}
                <em>
                  We make a living by what we get. We make a life by what we
                  give
                </em>{' '}
                and have contributed benevolently to the needs of the
                economically weaker student-sections, conducted career
                counselling sessions, participated in social-service activities
                and imparted their expertise in various fields such as music,
                dance and drama.
              </p>
            </div>
          </Fade>
        </Modal>

        <RegistrationCertificateModal
          openRegistrationCert={openRegistrationCert}
          setOpenRegistrationCert={setOpenRegistrationCert}
        />
      </div>
    </Fragment>
  )
}

export default AboutHeader
