import React, { useEffect, useContext } from "react";
import SiteContext from "../../../context/siteContext";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    height: "100%",
  },
  altPaymentHero: {
    margin: "100px 100px 50px 100px",
    padding: "30px 15px",
    textAlign: "center",
    borderRadius: "1rem",
    boxShadow: "0 23px 47px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#FDF6F0",
    [theme.breakpoints.down("md")]: {
      margin: "100px 20px 50px 20px",
    },
  },
}));

const emailSentToast = () =>
  toast.dark("Email has been sent again", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

const AltPaymentInfo = (props) => {
  const classes = useStyles();
  const siteContext = useContext(SiteContext);

  const { sendManualPaymentEmail, updateManualPaymentNotificationStatus } =
    siteContext;

  useEffect(() => {
    if (
      props.alumniInformation &&
      !props.alumniInformation.manual_payment_notification
    ) {
      props.alumniInformation &&
        sendManualPaymentEmail(
          props.alumniInformation.first_name,
          props.alumniInformation.email,
          props.alumniInformation.membership_id,
          props.alumniInformation.membership_type
        );
      updateManualPaymentNotificationStatus(props.alumniInformation.email);
    }
  }, []);

  return (
    <div className={classes.parentContainer}>
      <div className={classes.altPaymentHero}>
        <Typography component="h1" gutterBottom>
          <span className="mainHeading">
            Hi,{" "}
            <span style={{ color: "#ff5200" }}>
              {props.alumniInformation.first_name}!
            </span>{" "}
            You're almost there...
          </span>
        </Typography>
        {/* <div style={{ padding: "25px 0" }}>
          <Image
            src={"/images/registration/flag.png"}
            alt="Checkered flag"
            height={200}
            width={150}
          />
        </div> */}

        <Typography
          style={{
            fontWeight: 600,
            paddingTop: 20,
          }}
        >
          <span className="secondaryHeading">
            Your membership id is
            <br />
            <span style={{ color: "#ff5200", fontWeight: 700 }}>
              {props.alumniInformation.membership_id}
            </span>
          </span>
        </Typography>
        <Typography
          style={{
            fontSize: "1.1rem",
            padding: "20px 0",
          }}
        >
          Please write down the membership id on the back of the cheque/DD or
          mention it if paying via NEFT, IMPS or RTGS.
        </Typography>
        <Typography
          style={{
            fontSize: "1.1rem",
          }}
        >
          We have emailed our bank details to{" "}
          <span style={{ color: "#ff5200", fontWeight: 700 }}>
            {props.alumniInformation.email}
          </span>{" "}
          .Once the payment is processed, you will receive the invoice via
          email.
        </Typography>

        <Typography
          style={{
            fontSize: "1.1rem",
            paddingTop: 20,
          }}
        >
          Please <span style={{ fontWeight: "bold" }}>do not</span> hesitate to{" "}
          <Link href="/contact">
            <a
              style={{ color: "#ff5200", textDecoration: "none" }}
              className="styledLink"
            >
              contact us
            </a>
          </Link>{" "}
          if you have any questions.
        </Typography>

        <Typography
          style={{
            fontSize: "0.9rem",
            paddingTop: 30,
          }}
        >
          Did not receive the email?{" "}
        </Typography>
        <Button
          style={{ fontSize: "0.8rem", fontWeight: "bold", marginTop: 10 }}
          onClick={() => {
            sendManualPaymentEmail(
              props.alumniInformation.first_name,
              props.alumniInformation.email,
              props.alumniInformation.membership_id,
              props.alumniInformation.membership_type
            );
            updateManualPaymentNotificationStatus(
              props.alumniInformation.email
            );
            emailSentToast();
          }}
        >
          Resend
        </Button>
      </div>
    </div>
  );
};

export default AltPaymentInfo;
