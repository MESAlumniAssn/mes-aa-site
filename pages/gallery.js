import React, { useEffect } from "react";
import axios from "axios";

// Component imports
import Gallery from "../components/utils/gallery/Gallery";
import Footer from "../components/layout/Footer";
import GalleryHeadLayout from "../components/layout/head/GalleryHeadLayout";

const gallery = (props) => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershipPlan");
    localStorage.removeItem("mesAAUser");
    localStorage.removeItem("testimonialSubmission");
  }

  return (
    <GalleryHeadLayout>
      <Gallery galleryData={props.galleryData} />
      <div style={{ marginTop: 30 }}>
        <Footer />
      </div>
    </GalleryHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/gallery/images/all`
  );

  if (!res.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      galleryData: res.data,
    },
  };
};

export default gallery;
