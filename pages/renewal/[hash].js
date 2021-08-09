import React from "react";
import axios from "axios";

// Component imports
import RenewalHeadLayout from "../../components/layout/head/RenewalHeadLayout";
import RenewalDetails from "../../components/utils/renewal/RenewalDetails";
import Footer from "../../components/layout/Footer";

const renewal = (props) => {
  return (
    <RenewalHeadLayout memberName={props.renewalDetails.name}>
      <RenewalDetails memberDetails={props.renewalDetails} />
      <Footer />
    </RenewalHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { hash } = context.params;

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/renewal_details/${hash}`
  );

  if (!res.data) return { notFound: true };

  return {
    props: {
      renewalDetails: res.data,
    },
  };
};

export default renewal;
