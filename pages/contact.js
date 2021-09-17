import React, { useEffect } from "react";
import ContactDetails from "../components/utils/contact/ContactDetails";

// Component imports
import ContactHeadLayout from "../components/layout/head/ContactHeadLayout";
import Footer from "../components/layout/Footer";

const contact = () => {
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
