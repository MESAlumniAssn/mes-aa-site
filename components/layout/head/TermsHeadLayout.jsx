import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const TermsHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>
          Terms of Use | The MES College College Alumni Association&reg;
        </title>
      </Head>
      {props.children}
    </Fragment>
  );
};

export default TermsHeadLayout;
