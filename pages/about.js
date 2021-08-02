import React, { useEffect } from "react";
import axios from "axios";

// Component imports
import AboutHeader from "../components/utils/about/AboutHeader";
import AimsAndObjectives from "../components/utils/about/AimsAndObjectives";
import Logo from "../components/utils/about/Logo";
import OfficeBearers from "../components/utils/about/OfficeBearers";
import AboutHeadLayout from "../components/layout/head/AboutHeadLayout";
import Footer from "../components/layout/Footer";

const about = (props) => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershiPlan");
    localStorage.removeItem("aaUser");
    localStorage.removeItem("testimonialSubmission");
  }

  return (
    <AboutHeadLayout>
      <AboutHeader />
      <AimsAndObjectives />
      <Logo />
      {props.committeeData && props.committeeData && (
        <OfficeBearers committeeData={props.committeeData} />
      )}
      <Footer />
    </AboutHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/committee`);

  return {
    props: {
      committeeData: res.data || null,
    },
  };
};

export default about;
