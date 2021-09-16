import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// Component imports
import Gallery from "../gallery/Gallery";

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    margin: "50px 0",
    paddingTop: 25,
    paddingBottom: 10,
    backgroundColor: "var(--secondary-background)",
    borderRadius: 5,
  },
  heading: {
    paddingBottom: 25,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 10,
    },
  },
}));

const EventGallery = ({ images }) => {
  const classes = useStyles();

  return (
    <div className={classes.galleryContainer}>
      <Typography component="h3" align="center" className={classes.heading}>
        <span className="secondaryHeading">Gallery</span>
      </Typography>

      {images && images.length === 0 && (
        <div style={{ textAlign: "center", color: "#87A7B3", paddingTop: 25 }}>
          No images in gallery
        </div>
      )}

      <Gallery galleryData={images} />
    </div>
  );
};

export default EventGallery;
