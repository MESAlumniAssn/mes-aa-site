import React, { useEffect } from "react";
import axios from "axios";

// Component imports
import PaymentInfoHeadLayout from "../../components/layout/head/PaymentInfoHeadLayout";
import PaymentInfo from "../../components/utils/registration/PaymentInfo";
import Footer from "../../components/layout/Footer";

const PaymentVerified = (props) => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershipPlan");
    localStorage.removeItem("testimonialSubmission");
    localStorage.removeItem("mesAATempUserToken");
  }

  return (
    <PaymentInfoHeadLayout alumniInformation={props.userData}>
      <PaymentInfo userData={props.userData} />
      <Footer />
    </PaymentInfoHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`);

  // If payment was done online, clear the renewal hash
  await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/renewal_hash/clear`, {
    id: id,
  });

  if (!res.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      alt_id: id,
      userData: res.data,
    },
  };
};

export default PaymentVerified;
