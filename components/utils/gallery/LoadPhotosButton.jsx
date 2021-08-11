import React from "react";
import { motion } from "framer-motion";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginTop: 40,
    paddingBottom: 20,
  },
  buttonStyles: {
    outline: "none",
    border: "none",
    backgroundColor: "var(--primary-color)",
    padding: "15px 20px",
    color: "#FFF",
    fontSize: "1.1rem",
    borderRadius: "10px",
    letterSpacing: "1px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    textTransform: "uppercase",
  },
}));

const variants = {
  tap: {
    y: "2px",
  },
};

const LoadPhotosButton = ({ photoLimit, setPhotoLimit }) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <motion.button
        variants={variants}
        whileTap="tap"
        className={classes.buttonStyles}
        onClick={() => setPhotoLimit(photoLimit + 10)}
      >
        Load More Photos
      </motion.button>
    </div>
  );
};

export default LoadPhotosButton;
