import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const AdminHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>
          Admin Dashboard | The MES College College Alumni Association&reg;
        </title>
      </Head>
      {props.children}
    </Fragment>
  );
};

export default AdminHeadLayout;
