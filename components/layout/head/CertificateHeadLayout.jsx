import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const CertificateHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Certificate - {props.membershipId}</title>
      </Head>
      {props.children}
    </Fragment>
  );
};

export default CertificateHeadLayout;
