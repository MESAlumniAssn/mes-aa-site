import React from "react";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const RegistrationPreLaunch = () => {
  const classes = useStyles();

  return <div className={classes.parentContainer}>Hi</div>;
};

export default RegistrationPreLaunch;
