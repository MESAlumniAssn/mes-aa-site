import React, { useState, useContext } from "react";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Component imports
import Tabs from "./Tabs";

const useStyles = makeStyles((theme) => ({
  eventsHero: {
    margin: "100px 0 30px 0",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
  },
}));

const EventsHeader = ({ eventsData }) => {
  const classes = useStyles();

  return (
    <div className={classes.eventsHero}>
      <div style={{ textAlign: "center" }}>
        <Typography
          component="h1"
          className="styledHeading"
          justify="center"
          gutterBottom
        >
          <span className="mainHeading">Events Calendar</span>
        </Typography>
      </div>

      <div style={{ margin: "40px 0" }}>
        <Tabs />
      </div>
    </div>
  );
};

export default EventsHeader;
