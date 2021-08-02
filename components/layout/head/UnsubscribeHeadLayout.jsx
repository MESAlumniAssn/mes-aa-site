import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const UnsubscribeHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>
          Unsubscribe From Our Mailing List | The MES College College Alumni
          Association&reg;
        </title>
      </Head>
      {props.children}
    </Fragment>
  );
};

export default UnsubscribeHeadLayout;
