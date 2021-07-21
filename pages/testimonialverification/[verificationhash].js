import React from "react";
import axios from "axios";

// Component imports
import TestimonialVerificationHeadLayout from "../../components/layout/head/TestimonialVerificationHeadLayout";
import VerifyTestimonial from "../../components/utils/testimonials/VerifyTestimonial";
import Footer from "../../components/layout/Footer";

const TestimonialVerification = (props) => {
  return (
    <TestimonialVerificationHeadLayout result={props.result}>
      <VerifyTestimonial result={props.result} />
      <Footer />
    </TestimonialVerificationHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { verificationhash } = context.params;

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/testimonial/verify/${verificationhash}`
  );

  return {
    props: {
      result: res.data,
    },
  };
};

export default TestimonialVerification;
