import React from "react";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Component imports
import Gallery from "./Gallery";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    margin: "100px 0 50px 0",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 75,
    },
  },
}));

const GalleryHeader = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.parentContainer}>
      <div style={{ paddingBottom: "30px" }}>
        <Typography component="h1" align="center" className="styledHeading">
          <span className="mainHeading">Nostalgia</span>
        </Typography>
      </div>

      <Gallery galleryData={props.galleryData} />
    </div>
  );
};

export default GalleryHeader;
