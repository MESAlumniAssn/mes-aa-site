import React, { useState } from "react";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

// Component imports
import BlogCard from "./BlogCard";
import BlogSubmissionDetails from "./BlogSubmissionDetails";

// Font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBackground: {
    backgroundColor: "#FFF",
    padding: 30,
    width: "600px",
    position: "relative",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
      width: "400px",
    },
  },
  blogContainer: {
    margin: "100px 0 50px 0",
    textAlign: "center",
  },
  gridContainer: {
    margin: "50px 100px",
    [theme.breakpoints.down("sm")]: {
      margin: "50px 30px",
    },
  },
  articleSubmissionLabel: {
    fontSize: "0.95rem",
    cursor: "pointer",
    marginBottom: 0,
    textDecoration: "underline",
  },
  buttonStyle: {
    outline: "none",
    border: "none",
    backgroundColor: "var(--primary-color)",
    padding: "15px",
    width: "200px",
    color: "#FFF",
    fontSize: "1.1rem",
    borderRadius: "10px",
    letterSpacing: "1px",
    boxShadow: "0 13px 27px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    textTransform: "uppercase",
    marginTop: 40,
  },
}));

const BlogHeader = ({ blogs }) => {
  const [blogSubmissionDetails, setBlogSubmissionDetails] = useState(false);
  const [showBlogs, setShowBlogs] = useState(20);
  const classes = useStyles();

  const handleClose = () => {
    setBlogSubmissionDetails(false);
  };

  return (
    <div className={classes.blogContainer}>
      <Typography
        component="h1"
        className="styledHeading"
        align="center"
        gutterBottom
      >
        <span className="mainHeading">Blog</span>
      </Typography>

      <div style={{ marginTop: 30, fontSize: "1.1rem" }}>
        <Typography style={{ fontWeight: 600, paddingTop: 20 }} align="center">
          <span className="subtitle">
            A growing collection of articles submitted by our talented alumni
          </span>
        </Typography>

        <p
          className={classes.articleSubmissionLabel}
          onClick={() => setBlogSubmissionDetails(true)}
        >
          Want to submit an article?
        </p>
      </div>

      <div className={classes.gridContainer}>
        <Grid container spacing={6}>
          {blogs.slice(0, showBlogs).map((blog) => {
            return (
              <Grid item xs={12} sm={6} lg={3} key={blog.sys.id}>
                <BlogCard blog={blog} />
              </Grid>
            );
          })}
        </Grid>

        {blogs.length > showBlogs && (
          <button
            className={classes.buttonStyle}
            onClick={() => setShowBlogs(showBlogs + 20)}
          >
            Load Blogs
          </button>
        )}
      </div>
      <Modal
        className={classes.modal}
        open={blogSubmissionDetails}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.modalBackground}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              position: "absolute",
              top: 10,
              right: 20,
              cursor: "pointer",
            }}
            className="timesButtonAnimation"
            onClick={handleClose}
          />
          <div
            style={{
              position: "absolute",
              right: 10,
              top: 25,
              color: "var(--primary-color)",
            }}
            className="hideEsc"
          >
            ESC
          </div>
          <BlogSubmissionDetails />
        </div>
      </Modal>
    </div>
  );
};

export default BlogHeader;
