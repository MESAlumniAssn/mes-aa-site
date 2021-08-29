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
    padding: "50px 70px",
    backgroundColor: "rgba(200, 198, 167, 0.15)",
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
      padding: "50px 15px",
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
    <div className={classes.emailContainer}>
      <Typography
        component="h2"
        align="center"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        <span className="secondaryHeading">Contact the Committee Members</span>
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
                <Divider style={{ backgroundColor: "var(--contact-color)" }} />
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
  );
};

export default OfficeBearerContacts;
