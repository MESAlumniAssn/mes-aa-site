import React from "react";
import Link from "next/link";

// Material UI imports
import Typography from "@material-ui/core/Typography";

const Terms = () => {
  return (
    <div>
      <Typography style={{ fontSize: "0.8rem", lineHeight: "1.3rem" }}>
        By registering, I acknowledge that I have read and understood the{" "}
        <Link href="/terms">
          <a
            style={{ color: "#87431d", textDecoration: "none" }}
            className="styledLink"
          >
            Terms of Use
          </a>
        </Link>{" "}
        and{" "}
        <Link href="/privacy">
          <a
            style={{ color: "#87431d", textDecoration: "none" }}
            className="styledLink"
          >
            Privacy Policy
          </a>
        </Link>
        . I am also confirming that I am an alumnus of the{" "}
        <span style={{ fontWeight: 700 }}>
          MES College of Arts, Commerce and Science
        </span>
        , Malleshwaram, Bengaluru.
      </Typography>
    </div>
  );
};

export default Terms;
