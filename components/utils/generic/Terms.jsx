import React from "react";
import Link from "next/link";

// Material UI imports
import Typography from "@material-ui/core/Typography";

const Terms = () => {
  return (
    <div>
      <Typography style={{ fontSize: "0.8rem", lineHeight: "1.3rem" }}>
        By registering, you acknowledge that you have read and understood our{" "}
        <Link href="/terms">
          <a
            style={{ color: "#87431d", textDecoration: "none" }}
            className="styledLink"
          >
            Terms of Use
          </a>
        </Link>{" "}
        and{" "}
        <Link href="/terms">
          <a
            style={{ color: "#87431d", textDecoration: "none" }}
            className="styledLink"
          >
            Privacy Policy
          </a>
        </Link>
        . You are also confirming that you are an alumnus of the{" "}
        <span style={{ fontWeight: 700 }}>
          MES College of Arts, Commerce and Science
        </span>
        , Malleshwaram, Bengaluru.
      </Typography>
    </div>
  );
};

export default Terms;
