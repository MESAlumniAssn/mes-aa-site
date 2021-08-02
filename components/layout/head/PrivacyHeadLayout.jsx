import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const PrivacyHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>
          Privacy Policy | The MES College College Alumni Association&reg;
        </title>
      </Head>
      {props.children}
    </Fragment>
  );
};

export default PrivacyHeadLayout;
