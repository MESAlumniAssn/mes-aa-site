import React, { useEffect } from "react";
import axios from "axios";

// Component imports
import FamousAlumni from "../components/utils/famous-alumni/FamousAlumni";
import FamousAlumniHeadLayout from "../components/layout/head/FamousAlumniHeadLayout";
import Footer from "../components/layout/Footer";

const famousalumni = (props) => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershiPlan");
    localStorage.removeItem("aaUser");
    localStorage.removeItem("testimonialSubmission");
  }

  return (
    <FamousAlumniHeadLayout>
      <FamousAlumni famousAlumni={props.alumniList} />
      <Footer />
    </FamousAlumniHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/famous_alumni/all`
  );

  if (!res.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      alumniList: res.data,
    },
  };
};

export default famousalumni;
