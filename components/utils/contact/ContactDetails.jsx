import React, { useState } from "react";
import Image from "next/image";
import { CONTACT_HEADER } from "../../../utils/images";

import {
  associationName,
  collegeName,
  collegeAddress1,
  collegeAddress2,
  officialEmail,
  officialPhone,
} from "../../../utils/associationDetails";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Component imports
import OfficeBearerContacts from "./OfficeBearerContacts";
import ContactForm from "../../forms/contact/ContactForm";
import Social from "./Social";

let theme = createMuiTheme();

theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  contactHero: {
    margin: "100px 0 50px 0",
    textAlign: "center",
  },
  heroImage: {
    transform: "rotate(-3deg)",
    height: 300,
    width: 500,
    boxShadow: "0 12px 37px rgba(0,0,0,0.3)",

    [theme.breakpoints.down("md")]: {
      height: 200,
      width: 350,
    },
  },
  mainContactContainer: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingLeft: "10px",
    },
  },
  mainContactText: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
  },
  mainContactEmailPhone: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
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
});

const ContactDetails = () => {
  const [openContactForm, setOpenContactForm] = useState(false);
  const classes = useStyles();

  return (
    <div style={{ padding: "0 5px" }}>
      <div className={classes.contactHero}>
        <Typography component="h1" align="center" className="styledHeading">
          <span className="mainHeading">Get in touch</span>
        </Typography>
      </div>
      <Container>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <div className={classes.heroImage}>
              <Image
                src={CONTACT_HEADER}
                alt="Contact main image"
                layout="fill"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.mainContactContainer}>
            <div className={classes.mainContactText}>
              <Typography style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ fontSize: "1.2rem", marginRight: 7 }}
                />{" "}
                {associationName}
              </Typography>
            </div>
            <div>
              <Typography component="body2" variant="body2">
                <span>{collegeAddress1}</span> <span>{collegeAddress2}</span>
              </Typography>
            </div>
            <div className={classes.mainContactEmailPhone}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: "1.2rem", marginRight: 7 }}
              />
              {/* <Typography style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                {officialEmail}
              </Typography> */}
              <Button
                style={{ fontWeight: "bold" }}
                onClick={() => setOpenContactForm(true)}
              >
                Email Us
              </Button>
            </div>
            <div className={classes.mainContactEmailPhone}>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ fontSize: "1.2rem", marginRight: 7 }}
              />
              <Typography style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                {officialPhone}
              </Typography>
            </div>
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
      <OfficeBearerContacts />
      <Social />
    </div>
  );
};

export default ContactDetails;
