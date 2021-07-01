import React, { useEffect } from "react";
import axios from "axios";

// Component imports
import AltPaymentInfoHeadLayout from "../../components/layout/head/AltPaymentInfoHeadLayout";
import AltPaymentInfo from "../../components/utils/registration/AltPaymentInfo";
import Footer from "../../components/layout/Footer";

const paymentinfo = (props) => {
  return (
    <AltPaymentInfoHeadLayout alumniInformation={props.alumniInformation}>
      <AltPaymentInfo alumniInformation={props.alumniInformation} />
      <Footer />
    </AltPaymentInfoHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { email } = context.params;

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/id/${email}`
  );

  if (!res.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      alumniInformation: res.data,
    },
  };
};

export default paymentinfo;
