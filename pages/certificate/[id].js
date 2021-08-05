import React from "react";
import axios from "axios";

// Component imports
import CertificateHeadLayout from "../../components/layout/head/CertificateHeadLayout";
import Certificate from "../../components/utils/certificate/Certificate";

const LMCertificate = (props) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershiPlan");
    localStorage.removeItem("mesAAUser");
    localStorage.removeItem("testimonialSubmission");
  }

  return (
    <CertificateHeadLayout membershipId={props.userData.membership_id}>
      <Certificate userData={props.userData} />
    </CertificateHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/card_details/${id}`
  );

  if (!res.data) {
    return {
      notFound: true,
    };
  }

  if (res.data && res.data.membership_type === "Annual") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      altId: id,
      userData: res.data,
    },
  };
};

export default LMCertificate;
