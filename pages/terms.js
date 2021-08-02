import React, { useEffect } from "react";

// Component imports
import TermsHeadLayout from "../components/layout/head/TermsHeadLayout";
import Terms from "../components/utils/policies/Terms";
import Footer from "../components/layout/Footer";

const terms = () => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershiPlan");
    localStorage.removeItem("aaUser");
    localStorage.removeItem("testimonialSubmission");
  }

  return (
    <TermsHeadLayout>
      <Terms />
      <Footer />
    </TermsHeadLayout>
  );
};

export default terms;
