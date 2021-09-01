import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  associationName,
  collegeName,
  collegeAddress1,
  collegeAddress2,
  officialEmail,
  officialPhone,
  facebookProfile,
  twitterProfile,
  instagramProfile,
} from "../../utils/associationDetails";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHeart,
  faUserSecret,
  faBookOpen,
  faCircle,
  faSitemap,
  faPencilAlt,
  faCalendarAlt,
  faBlog,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

// Component imports
import ContactForm from "../forms/contact/ContactForm";

const variants = {
  hover: {
    backgroundColor: "#DCCCC0",
    transition: { ease: "easeOut", duration: "1s" },
  },
  tap: { y: "1px" },
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(to right, rgba(214, 188, 167, 0.38), rgba(250, 193, 147, 0.57))",
    fontWeight: 600,
  },
  social: {
    display: "flex",
    width: "auto",

    [theme.breakpoints.up("sm")]: {
      // Center the grid container
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    zIndex: 99999,
  },
  modalBackground: {
    backgroundColor: "#FFF",
    padding: 30,
    width: "600px",
    position: "relative",
    textAlign: "center",
    border: "none",
    "&.Mui-focused": {
      border: "none",
      outline: "none",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
        outline: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: 20,
      width: "400px",
    },
  },
  footerMessage: {
    fontSize: "1.2rem",
    fontWeight: 600,
    paddingBottom: 30,
    [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
  },
}));

const Footer = () => {
  const [openContactForm, setOpenContactForm] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 0 0 0",
        }}
      >
        {" "}
        <div style={{ marginBottom: 20 }}>
          <Image src="/logo.png" alt="Logo" height={150} width={150} />
        </div>
        <Typography
          style={{ fontSize: "1.3rem", fontWeight: 700 }}
          align="center"
          gutterBottom
        >
          &copy; {new Date().getFullYear()} - {associationName}
        </Typography>
        <Typography
          style={{ fontSize: "1.1rem", fontWeight: 700 }}
          align="center"
          gutterBottom
        >
          All rights reserved
        </Typography>
      </Container>

      <Container maxWidth="md" style={{ marginTop: 50, marginBottom: 50 }}>
        <Typography align="center" gutterBottom style={{ marginBottom: 25 }}>
          <span className="tertiaryHeading">Quick Links</span>
        </Typography>
        <Grid container justify="center" alignItems="flex-start" spacing={5}>
          <Grid item>
            <div style={{ marginBottom: 15 }}>
              <FontAwesomeIcon icon={faUserSecret} style={{ marginRight: 5 }} />
              <Link href="/privacy">
                <a
                  style={{ fontSize: "1.1rem", textDecoration: "none" }}
                  className="styledLink"
                >
                  Privacy Policy
                </a>
              </Link>
            </div>
            <div style={{ marginBottom: 15 }}>
              <FontAwesomeIcon icon={faBookOpen} style={{ marginRight: 5 }} />
              <Link href="/terms">
                <a
                  style={{ fontSize: "1.1rem", textDecoration: "none" }}
                  className="styledLink"
                >
                  Terms of Use
                </a>
              </Link>
            </div>
            <div>
              <FontAwesomeIcon icon={faSitemap} style={{ marginRight: 5 }} />
              <Link href="/sitemap.xml">
                <a
                  style={{ fontSize: "1.1rem", textDecoration: "none" }}
                  className="styledLink"
                >
                  Sitemap
                </a>
              </Link>
            </div>
          </Grid>
          <Grid item>
            <div style={{ marginBottom: 15 }}>
              <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 5 }} />
              <Link href="/about">
                <a
                  style={{ fontSize: "1.1rem", textDecoration: "none" }}
                  className="styledLink"
                >
                  More About Us
                </a>
              </Link>
            </div>
            <div style={{ marginBottom: 15 }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 5 }} />
              <Link href="/contact">
                <a
                  style={{ fontSize: "1.1rem", textDecoration: "none" }}
                  className="styledLink"
                >
                  Contact Us
                </a>
              </Link>
            </div>
            <div style={{ marginBottom: 15 }}>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ marginRight: 5 }}
              />
              <Link href="/events">
                <a
                  style={{ fontSize: "1.1rem", textDecoration: "none" }}
                  className="styledLink"
                >
                  Events
                </a>
              </Link>
            </div>
            <div>
              <FontAwesomeIcon icon={faBlog} style={{ marginRight: 5 }} />
              <Link href="/blog">
                <a
                  style={{ fontSize: "1.1rem", textDecoration: "none" }}
                  className="styledLink"
                >
                  Blog
                </a>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        maxWidth="md"
      >
        <Typography
          style={{ fontSize: "1.3rem", fontWeight: 700 }}
          align="center"
          gutterBottom
        >
          {collegeName}
        </Typography>
        <Typography
          style={{ fontSize: "1rem", fontWeight: 600 }}
          align="center"
          gutterBottom
        >
          <span>{collegeAddress1}</span> <span>{collegeAddress2}</span>
        </Typography>
      </Container>

      <Container maxWidth="md" style={{ paddingTop: 12 }}>
        <Grid container justify="center" alignItems="center" spacing={1}>
          <Grid item xs={12} align="center">
            <Typography style={{ fontSize: "1.1rem", fontWeight: 600 }}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "5px" }}
              />{" "}
              {officialEmail}{" "}
              <motion.button
                variants={variants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  fontWeight: "bold",
                  width: 20,
                  height: 20,
                  backgroundColor: "inherit",
                  border: "none",
                  boxShadow: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                onClick={() => setOpenContactForm(true)}
              >
                <FontAwesomeIcon icon={faPencilAlt} />
              </motion.button>
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography style={{ fontSize: "1.1rem", fontWeight: 600 }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />{" "}
              {officialPhone}
            </Typography>
          </Grid>
        </Grid>

        <div>
          <Modal
            className={classes.modal}
            open={openContactForm}
            onClose={() => setOpenContactForm(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openContactForm}>
              <div className={classes.modalBackground}>
                <ContactForm
                  openContactForm={openContactForm}
                  setOpenContactForm={setOpenContactForm}
                />
              </div>
            </Fade>
          </Modal>
        </div>
      </Container>

      {/* <Container maxWidth="md" style={{ marginTop: 50 }}>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <FontAwesomeIcon icon={faUserSecret} style={{ marginRight: 5 }} />
          <Link href="/privacy">
            <a
              style={{ fontSize: "1rem", textDecoration: "none" }}
              className="styledLink"
            >
              Privacy Policy
            </a>
          </Link>
          <FontAwesomeIcon
            icon={faCircle}
            style={{ fontSize: 6, margin: "0 10px" }}
          />
          <FontAwesomeIcon icon={faBookOpen} style={{ marginRight: 5 }} />
          <Link href="/terms">
            <a
              style={{ fontSize: "1rem", textDecoration: "none" }}
              className="styledLink"
            >
              Terms of Use
            </a>
          </Link>
          <FontAwesomeIcon
            icon={faCircle}
            style={{ fontSize: 6, margin: "0 10px" }}
          />
          <FontAwesomeIcon icon={faSitemap} style={{ marginRight: 5 }} />
          <Link href="/sitemap.xml">
            <a
              style={{ fontSize: "1rem", textDecoration: "none" }}
              className="styledLink"
            >
              Sitemap
            </a>
          </Link>
        </Grid>
      </Container> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 0 0 0",
        }}
      >
        <Typography
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            display: "flex",
            justifyContent: "center",
          }}
          gutterBottom
        >
          Connect with us
        </Typography>
        <div style={{ paddingTop: 10, paddingBottom: 40 }}>
          <Link href={facebookProfile} passHref={true}>
            <a style={{ marginRight: 15 }}>
              <Image
                src={"/images/social/facebook.svg"}
                alt="Facebook"
                height={40}
                width={40}
              />
            </a>
          </Link>

          <Link href={twitterProfile} passHref={true}>
            <a style={{ marginRight: 15 }}>
              <Image
                src={"/images/social/twitter.svg"}
                alt="Twitter"
                height={40}
                width={40}
              />
            </a>
          </Link>

          <Link href={instagramProfile} passHref={true}>
            <a style={{ marginRight: 15 }}>
              <Image
                src={"/images/social/instagram.svg"}
                alt="Instagram"
                height={40}
                width={40}
              />
            </a>
          </Link>

          <Link href="https://youtube.com" passHref={true}>
            <a style={{ marginRight: 15 }}>
              <Image
                src={"/images/social/youtube.svg"}
                alt="YouTube"
                height={40}
                width={40}
              />
            </a>
          </Link>
        </div>
      </div>
      <Typography
        style={{ fontSize: "1.2rem", fontWeight: 600, paddingBottom: 30 }}
        align="center"
      >
        Built with <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />{" "}
        for the alumni by the alumni
      </Typography>
    </div>
  );
};

export default Footer;
