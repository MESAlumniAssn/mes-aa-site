import React from "react";

// Material UI imports
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  chip: {
    padding: 5,
    fontWeight: 600,
    fontSize: "0.9rem",
    letterSpacing: "0.5px",
    color: "#FFFFFF",
  },
  lifetimeChip: {
    backgroundColor: "#689f38",
  },
  annualChip: {
    backgroundColor: "#ffa726",
  },
});

const Chips = (props) => {
  const classes = useStyles();
  return (
    <Chip
      label={`${props.membershipType} Membership`}
      className={`${classes.chip} ${
        props.membershipType === "Lifetime"
          ? classes.lifetimeChip
          : classes.annualChip
      } `}
    />
  );
};

export default Chips;
