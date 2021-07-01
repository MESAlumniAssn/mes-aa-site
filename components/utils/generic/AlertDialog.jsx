import React from "react";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertDialog = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="warning">
        <span style={{ fontWeight: "bold" }}>{props.error}</span>
      </Alert>
    </div>
  );
};

export default AlertDialog;
