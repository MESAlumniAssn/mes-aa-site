import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const TestimonialVerificationHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>{props.result}</title>
      </Head>
      {props.children}
    </Fragment>
  );
};

export default TestimonialVerificationHeadLayout;
