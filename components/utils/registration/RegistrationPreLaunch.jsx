import React from "react";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { calculateDays } from "../../../utils/calculateDays";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 15px",
  },
}));

const RegistrationPreLaunch = () => {
  const classes = useStyles();

  let daysToRegistration;
  const registrationDate = process.env.NEXT_PUBLIC_REGISTRATION_DATE;

  daysToRegistration = calculateDays(registrationDate);

  return (
    <div className={classes.parentContainer}>
      <Typography component="h1" gutterBottom align="center">
        <span className="mainHeading">
          Registration starts in {daysToRegistration}{" "}
          {daysToRegistration === 1 ? "day" : "days"}!
        </span>
      </Typography>
      <Typography component="p" style={{ marginTop: 10, fontSize: "1.5rem" }}>
        We can't wait either 😊
      </Typography>
    </div>
  );
};

export default RegistrationPreLaunch;
