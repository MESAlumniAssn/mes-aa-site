import React, { useState } from "react";
import contact from "../../../utils/contactDetails";

// Material UI imports
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  emailContainer: {
    marginTop: 70,
    padding: "50px 70px 100px 70px",
    backgroundColor: "rgba(200, 198, 167, 0.15)",
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
      padding: "50px 15px 80px 15px",
    },
  },
  memberEmail: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    wordBreak: "break-all",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
}));

const OfficeBearerContacts = () => {
  const classes = useStyles();

  return (
    <div style={{ position: "relative" }}>
      <div className="top-tilt">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className={classes.emailContainer}>
        <Typography
          component="h2"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          <span className="secondaryHeading">
            Contact the Committee Members
          </span>
        </Typography>

        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={6}
          style={{ paddingTop: "40px" }}
        >
          {contact.map((contact, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    borderRadius: "5px",
                    borderLeft: "5px solid var(--contact-color)",
                    padding: "15px 20px",
                    boxShadow: "0 15px 22px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <Typography
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    gutterBottom
                  >
                    {contact.designation}
                  </Typography>
                  <Divider
                    style={{ backgroundColor: "var(--contact-color)" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelopeOpen}
                      style={{ marginRight: 7, color: "var(--contact-color)" }}
                    />
                    <Typography className={classes.memberEmail}>
                      {contact.contact}
                    </Typography>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div class="wave-bottom-contact">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default OfficeBearerContacts;
