import React, { useState, useEffect, useContext } from "react";
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
    margin: "100px 0 50px 0",
    [theme.breakpoints.down("sm")]: {
      marginTop: 75,
    },
  },
  altPaymentHero: {
    // margin: "100px 100px 50px 100px",
    // padding: "30px 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      margin: "100px 30px 50px 30px",
    },
  },
  textStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentBlock: {
    margin: "0 40px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 5px",
    },
  },
}));

const emailSentToast = () =>
  toast.dark("Email sent again", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

const AltPaymentInfo = (props) => {
  const [emailSentCount, setEmailSentCount] = useState(0);
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
      setEmailSentCount((emailSentCount) => emailSentCount + 1);
    }
  }, []);

  return (
    <div className={classes.parentContainer}>
      <div className={classes.altPaymentHero}>
        <div>
          <Typography
            component="h2"
            gutterBottom
            className={classes.textStyles}
          >
            <span className="secondaryHeading">
              {props.alumniInformation.first_name}, you're almost there...
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
            component="h2"
            style={{
              fontWeight: 600,
              paddingTop: 20,
            }}
            className={classes.textStyles}
          >
            <span className="tertiaryHeading">
              Your membership id is&nbsp;
              <span style={{ color: "#FF8E01" }}>
                {props.alumniInformation.membership_id}
              </span>
            </span>
          </Typography>

          <div className={classes.contentBlock}>
            <Typography
              style={{
                fontSize: "1.1rem",
                padding: "20px 0",
              }}
            >
              Please write down the membership id on the back of the cheque/DD
              or mention it (as a comment) if paying via NEFT, IMPS or RTGS. If
              you are paying via UPI, please mention the membership id in your
              email containing a screenshot of the transaction.
            </Typography>
            <Typography
              style={{
                fontSize: "1.1rem",
              }}
            >
              We have emailed our bank details to{" "}
              <span style={{ color: "#FF8E01", fontWeight: 700 }}>
                {props.alumniInformation.email}
              </span>
              . Once the payment is processed, you will receive the receipt via
              email. Also, the details about your{" "}
              <span style={{ color: "#FF8E01", fontWeight: 700 }}>id card</span>{" "}
              {props.alumniInformation.membership_type === "Lifetime" && (
                <span>
                  and{" "}
                  <span style={{ color: "#FF8E01", fontWeight: 700 }}>
                    membership certificate
                  </span>
                </span>
              )}{" "}
              will be communicated to you.
            </Typography>

            <Typography
              style={{
                fontSize: "1.1rem",
                paddingTop: 20,
              }}
            >
              Please <span style={{ fontWeight: "bold" }}>do not</span> hesitate
              to{" "}
              <Link href="/contact">
                <a
                  style={{ color: "#FF8E01", textDecoration: "none" }}
                  className="styledLink"
                >
                  contact us
                </a>
              </Link>{" "}
              if you have any questions.
            </Typography>
          </div>

          <div style={{ marginTop: 20 }} className={classes.textStyles}>
            <Typography
              style={{
                fontSize: "0.9rem",
                marginRight: 10,
              }}
            >
              Did not receive the email?{" "}
            </Typography>
            <Button
              variant="outlined"
              style={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "#FF8E01",
                borderColor: "currentcolor",
                padding: 1.5,
              }}
              disabled={emailSentCount >= 3}
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
                setEmailSentCount((emailSentCount) => emailSentCount + 1);
              }}
            >
              Resend
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltPaymentInfo;
