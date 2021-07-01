import React from "react";
import axios from "axios";

// Component import
import CardHeadLayout from "../../components/layout/head/CardHeadLayout";
import Card from "../../components/utils/card/Card";

const IDCard = (props) => {
  return (
    <CardHeadLayout membershipId={props.userData.membership_id}>
      <Card userData={props.userData} />
    </CardHeadLayout>
  );
};

export default IDCard;

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

  return {
    props: {
      altId: id,
      userData: res.data,
    },
  };
};
