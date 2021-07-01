import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const CardHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>ID Card - {props.membershipId}</title>
      </Head>
      {props.children}
    </Fragment>
  );
};

export default CardHeadLayout;
