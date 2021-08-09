import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";

// Component imports
// const RegistrationPage = dynamic(
//   () => import("../components/forms/registration/RegistrationPage"),
//   { ssr: false }
// );
import RegistrationPage from "../components/forms/registration/RegistrationPage";
import RegisterHeadLayout from "../components/layout/head/RegisterHeadLayout";
import Footer from "../components/layout/Footer";

const useStyles = makeStyles({
  root: {
    margin: "100px 0 50px 0",
  },
});

const Register = (props) => {
  const router = useRouter();
  const classes = useStyles();

  if (typeof window !== "undefined") {
    if (!localStorage.getItem("mesAAMembershipPlan")) {
      if (process.browser) {
        router.push("/pricing");
      }

      return <div></div>;
    }
  }

  return (
    <RegisterHeadLayout>
      <div className={classes.root}>
        <RegistrationPage paymentMode={props.paymentMode} />
      </div>
      <Footer />
    </RegisterHeadLayout>
  );
};

export default Register;
