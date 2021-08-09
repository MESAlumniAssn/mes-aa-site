import React, { useState, useEffect } from "react";
// import Masonry from "react-masonry-css";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Component imports
import ImageCarousel from "./ImageCarousel";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    margin: "100px 0 50px 0",
    textAlign: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 300,
    height: 900,
    width: 1040,
    [theme.breakpoints.down("sm")]: {
      marginTop: 75,
      height: 400,
      width: 550,
    },
  },
  backdrop: {
    background: "#e1e5ea",
    opacity: 0.1,
  },
}));

const breakpoints = {
  default: 3,
  960: 1,
  600: 1,
};

const Gallery = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 3000);
  }, []);

  const handleOpen = (index) => {
    setSelectedImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.parentContainer}>
      <div style={{ paddingBottom: "30px" }}>
        <Typography component="h1" align="center" className="styledHeading">
          <span className="mainHeading">Nostalgia</span>
        </Typography>
      </div>

      {showLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 50,
          }}
        >
          <Image
            src={"/loader.svg"}
            alt="Page loading"
            height={150}
            width={150}
          />
        </div>
      ) : (
        <Container maxWidth="xl" style={{ overflow: "hidden" }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 300: 1, 600: 2, 960: 3 }}
          >
            <Masonry gutter="1">
              {props.galleryData.map((image, index) => (
                <Link href="#" key={image.fileId}>
                  <a
                    style={{
                      overflow: "hidden",
                    }}
                    onClick={() => handleOpen(index)}
                  >
                    <img
                      src={image.url + "?tr=w-401,q-80"}
                      alt={`gallery image-${image.fileId}`}
                      width="98%"
                      style={{ borderRadius: "5%", margin: 1 }}
                    />
                  </a>
                </Link>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      )}

      <Modal
        aria-label="Modal to show an enlarged image"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          className: classes.backdrop,
        }}
      >
        <Fade in={open}>
          <Container className={classes.container}>
            <ImageCarousel
              galleryData={props.galleryData}
              selectedImage={selectedImage}
              setOpen={setOpen}
            />
          </Container>
        </Fade>
      </Modal>
    </div>
  );
};

export default Gallery;
