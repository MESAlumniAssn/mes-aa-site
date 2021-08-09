import React, { useEffect } from "react";

// Component imports
import UnsubscribeHeadLayout from "../components/layout/head/UnsubscribeHeadLayout";
import UnsubscribeFromMailingList from "../components/utils/unsubscribe/UnsubscribeFromMailingList";
import Footer from "../components/layout/Footer";

const unsubscribe = () => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershipPlan");
    localStorage.removeItem("mesAAUser");
    localStorage.removeItem("testimonialSubmission");
  }

  return (
    <UnsubscribeHeadLayout>
      <UnsubscribeFromMailingList />
      <Footer />
    </UnsubscribeHeadLayout>
  );
};

export default unsubscribe;
