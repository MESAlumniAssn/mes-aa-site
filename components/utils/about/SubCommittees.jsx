import React, { useState } from "react";
import subCommittees from "../../../utils/subCommittees";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Container from "@material-ui/core/Container";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHandPointRight,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

// Component imports
import ContactForm from "../../forms/contact/ContactForm";

const useStyles = makeStyles((theme) => ({
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
  buttonStyles: {
    all: "unset",
    cursor: "pointer",
    color: "var(--secondary-color)",
    fontWeight: "bold",
    borderBottom: "3px solid",
  },
}));

const SubCommittees = () => {
  const [openContactForm, setOpenContactForm] = useState(false);
  const classes = useStyles();

  return (
    <div style={{ minHeight: 100, padding: "50px 0" }}>
      <Typography component="h2" align="center" gutterBottom>
        <span className="secondaryHeading">Our Sub-Committee's</span>
      </Typography>

      <Typography component="p" align="center" style={{ padding: "15px" }}>
        Our alumni are welcome to join one or more of our many sub-committees.{" "}
        <button
          className={classes.buttonStyles}
          onClick={() => setOpenContactForm(true)}
        >
          Contact us
        </button>{" "}
        and tell us which sub-committee(s) you would like to join. <br />
      </Typography>

      <Typography
        component="p"
        align="center"
        style={{ paddingBottom: "10px" }}
      >
        We look forward to having you onboard
        <FontAwesomeIcon
          icon={faThumbsUp}
          style={{
            color: "var(--secondary-color)",
            marginLeft: 5,
          }}
        />
      </Typography>

      <Typography
        component="p"
        align="center"
        style={{ padding: "5px", fontSize: "0.9rem", marginBottom: 40 }}
      >
        <FontAwesomeIcon
          icon={faHandPointRight}
          style={{
            color: "var(--secondary-color)",
            marginRight: 5,
          }}
        />
        Admission into a sub-committee is subject to approval and vacancy.
      </Typography>

      <Container maxWidth="lg">
        <ul>
          {subCommittees.map((subCommittee, index) => {
            return (
              <li key={index} style={{ listStyle: "none", paddingBottom: 30 }}>
                <div>
                  <Typography
                    style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    gutterBottom
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        color: "var(--secondary-color)",
                        marginRight: 5,
                      }}
                    />
                    {subCommittee.name}
                  </Typography>
                  <Typography style={{ fontSize: "1.1rem" }} gutterBottom>
                    <span
                      style={{
                        fontWeight: 600,
                        color: "var(--secondary-color)",
                      }}
                    >
                      Objective:
                    </span>{" "}
                    {subCommittee.objective}
                  </Typography>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>

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
    </div>
  );
};

export default SubCommittees;
