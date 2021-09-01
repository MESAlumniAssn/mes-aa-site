import React from "react";
import Link from "next/link";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  listStyle: {
    listStyle: "none",
    paddingBottom: 10,
  },
  iconStyle: {
    fontSize: "0.8rem",
    color: "#F98404",
  },
});

const BlogSubmissionDetails = () => {
  const classes = useStyles();

  return (
    <div style={{ margin: "30px", marginBottom: 0 }}>
      <div style={{ textAlign: "left" }} className="counter">
        <p className="counterSection">
          Email your article to{" "}
          <Link href="mailto:contact@mesalumniassociation.com">
            <a style={{ color: "#ff5200", textDecoration: "none" }}>
              contact@mesalumniassociation.com
            </a>
          </Link>{" "}
          or use the contact form in the footer.
        </p>
        <p className="counterSection">
          Make sure to include the following -
          <ul>
            <li className={classes.listStyle}>
              <FontAwesomeIcon icon={faStar} className={classes.iconStyle} /> A
              title for your article
            </li>
            <li className={classes.listStyle}>
              <FontAwesomeIcon icon={faStar} className={classes.iconStyle} />{" "}
              Your name
            </li>
            <li className={classes.listStyle}>
              <FontAwesomeIcon icon={faStar} className={classes.iconStyle} />{" "}
              Batch
            </li>
            <li className={classes.listStyle}>
              <FontAwesomeIcon icon={faStar} className={classes.iconStyle} />{" "}
              Course
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default BlogSubmissionDetails;
