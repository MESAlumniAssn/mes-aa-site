import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const RenewalHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>{props.memberName} - Renew Your Membership</title>
      </Head>
      {props.children}
    </Fragment>
  );
};

export default RenewalHeadLayout;
