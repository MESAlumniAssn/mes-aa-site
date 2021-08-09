import React, { useEffect } from "react";
import ContactDetails from "../components/utils/contact/ContactDetails";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Component imports
import ContactHeadLayout from "../components/layout/head/ContactHeadLayout";
import Footer from "../components/layout/Footer";

const useStyles = makeStyles({
  contactHero: {
    margin: "100px 0 50px 0",
    textAlign: "center",
  },
});

const contact = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershipPlan");
    localStorage.removeItem("mesAAUser");
    localStorage.removeItem("testimonialSubmission");
  }

  return (
    <ContactHeadLayout>
      <ContactDetails />
      <Footer />
    </ContactHeadLayout>
  );
};

export default contact;
