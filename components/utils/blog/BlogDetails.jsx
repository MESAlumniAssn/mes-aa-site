import React from "react";
import Image from "next/image";
import { formatDate } from "../../../utils/calculateDays";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  brown,
  amber,
  orange,
  lime,
  lightGreen,
  red,
  pink,
  purple,
  indigo,
  cyan,
  teal,
  blueGrey,
} from "@material-ui/core/colors";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const colorsArray = [
  brown[50],
  amber[50],
  orange[50],
  lime[50],
  lightGreen[50],
  red[50],
  pink[50],
  purple[50],
  indigo[50],
  cyan[50],
  teal[50],
  blueGrey[50],
];

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    margin: "100px 10px 50px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 15,
      paddingRight: 15,
      margin: "100px 20px 50px 20px",
    },
  },
  navigationLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "var(--contact-color)",
    marginBottom: 25,
  },
  heading: {
    backgroundColor:
      colorsArray[Math.floor(Math.random() * colorsArray.length)],
    padding: 15,
    textAlign: "center",
    marginBottom: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  contentContainer: {
    width: 800,
    [theme.breakpoints.down("sm")]: {
      width: 350,
      padding: 10,
    },
  },
  secondaryContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",

      alignItems: "flex-start",
    },
  },
  secondaryContentLabel: {
    color: "#455a64",
  },
  secondaryContentText: {
    fontWeight: 700,
  },
  authorPostDetails: {
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      marginTop: 10,
    },
  },
}));

const BlogDetails = ({ blog }) => {
  const classes = useStyles();

  if (!blog) {
    return (
      <div className={classes.parentContainer}>
        <Image src="/loader.svg" alt="Loading..." height={50} width={50} />
      </div>
    );
  }

  return (
    <div className={classes.parentContainer}>
      <div className={classes.navigationLinkContainer}>
        <Link href="/blog">
          <a className={classes.navigationLink}>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              style={{ fontSize: "1.5rem", marginRight: 5 }}
            />

            <span
              style={{
                textTransform: "uppercase",
                color: "var(--primary-color)",
              }}
              className="styledLink"
            >
              Back
            </span>
          </a>
        </Link>
      </div>
      <div className={classes.contentContainer}>
        <Typography component="h1" className={classes.heading} gutterBottom>
          <span className="secondaryHeading">{blog.fields.title}</span>
        </Typography>

        <div className={classes.secondaryContent}>
          <div>
            <Typography
              component="p"
              className={classes.authorPostDetails}
              gutterBottom
            >
              <span className={classes.secondaryContentLabel}>Posted by:</span>{" "}
              <span className={classes.secondaryContentText}>
                {blog.fields.author}
              </span>
            </Typography>
            <Typography component="p" className={classes.authorPostDetails}>
              <span className={classes.secondaryContentLabel}>Batch:</span>{" "}
              <span className={classes.secondaryContentText}>
                {blog.fields.batch}{" "}
                {blog.fields.branch && "(" + blog.fields.branch + ")"}
              </span>
            </Typography>
          </div>
          <div>
            <Typography component="p" className={classes.authorPostDetails}>
              <span className={classes.secondaryContentLabel}>Posted:</span>{" "}
              <span className={classes.secondaryContentText}>
                {formatDate(blog.fields.datePosted)}
              </span>
            </Typography>
          </div>
        </div>

        <Divider color="secondary" />

        <div>{documentToReactComponents(blog.fields.blogContent)}</div>
      </div>
    </div>
  );
};

export default BlogDetails;
