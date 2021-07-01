import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const PageNotFoundHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Page Not Found!</title>
      </Head>
      {props.children}
    </Fragment>
  );
};

export default PageNotFoundHeadLayout;
