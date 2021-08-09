import React, { useEffect } from "react";

// Component imports
import PrivacyHeadLayout from "../components/layout/head/PrivacyHeadLayout";
import Privacy from "../components/utils/policies/Privacy";
import Footer from "../components/layout/Footer";

const privacy = () => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershipPlan");
    localStorage.removeItem("mesAAUser");
    localStorage.removeItem("testimonialSubmission");
  }

  return (
    <PrivacyHeadLayout>
      <Privacy />
      <Footer />
    </PrivacyHeadLayout>
  );
};

export default privacy;
