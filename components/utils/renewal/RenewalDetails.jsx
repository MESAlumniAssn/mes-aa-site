import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import SiteContext from "../../../context/siteContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import shortId from "../../../utils/generateShortId";
import { LOGO } from "../../../utils/images";
import generateInvoiceNumber from "../../../utils/generateInvoiceNumber";

// Component imports
import AltPaymentModal from "../../forms/registration/AltPaymentModal";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faBullhorn } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "100px 50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  renewalDetails: {
    marginTop: 30,
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: 320,
    },
  },
  renewalDetailsText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    paddingTop: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  upgradeNotification: {
    margin: 0,
    paddingTop: 30,
    fontSize: "1.3rem",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  renewalDetailsTextColor: {
    color: "#ff5200",
  },
  validityDates: {
    color: "rgba(255, 82, 0, 0.5)",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: 50,
  },
  buttonStyle: {
    outline: "none",
    border: "none",
    backgroundColor: "#ff5200",
    padding: "15px",
    width: "175px",
    color: "#FFF",
    fontSize: "1.2rem",
    borderRadius: "10px",
    letterSpacing: "1.1px",
    fontWeight: 800,
    boxShadow: "0 13px 27px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    textTransform: "uppercase",
    fontFamily: "Nunito Sans",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  rupeeSignStyle: {
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

const variants = {
  tap: {
    y: "2px",
  },
};

const RenewalDetails = ({ memberDetails }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const [paymentMessage, showPaymentMessage] = useState(false);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("O");
  const siteContext = useContext(SiteContext);

  const router = useRouter();

  let amount = !checked
    ? process.env.NEXT_PUBLIC_ANNUAL_MEMBERSHIP_AMOUNT
    : process.env.NEXT_PUBLIC_LIFE_MEMBERSHIP_AMOUNT;

  let membershipType = !checked ? "Annual" : "Lifetime";

  let renewalDate = new Date(memberDetails.new_renewal_date);

  var formattedDate =
    Math.abs(renewalDate.getFullYear()) +
    "-" +
    parseInt(renewalDate.getMonth() + 1) +
    "-" +
    renewalDate.getDate();

  let certificate =
    membershipType === "Lifetime"
      ? memberDetails && memberDetails.membership_certificate_url
      : null;

  const {
    createOrder,
    paymentOrder,
    verifyPayment,
    paymentVerified,
    renewalProcessed,
    updateRenewal,
    sendPaymentReceiptEmail,
  } = siteContext;

  useEffect(() => {
    if (paymentOrder) {
      displayRazorPay();
    }
  }, [paymentOrder]);

  useEffect(() => {
    if (paymentVerified !== null) {
      // Razorpay passes a null status for verified/successful payments
      if (paymentVerified.status === null) {
        updateRenewal(
          memberDetails.email,
          membershipType,
          parseInt(amount),
          formattedDate,
          certificate,
          mode // Payment Mode
        );
      }
    }
  }, [paymentVerified]);

  useEffect(() => {
    if (renewalProcessed) {
      if (mode === "O") {
        let invoiceNumber = generateInvoiceNumber(memberDetails.id);

        sendPaymentReceiptEmail(
          memberDetails.name,
          memberDetails.address1,
          memberDetails.address2,
          memberDetails.city,
          memberDetails.state,
          memberDetails.pincode,
          memberDetails.country,
          memberDetails.email,
          invoiceNumber,
          membershipType,
          formattedDate
        );
        router.push(`/paymentverified/${memberDetails.alt_user_id}`);
      }
    }
  }, [renewalProcessed]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handlePayment = () => {
    createOrder(parseInt(amount * 100), "INR", shortId(), {
      membershipType: membershipType,
    });
  };

  const displayRazorPay = async () => {
    showPaymentMessage(false);
    const res = await loadRazorPay(
      process.env.NEXT_PUBLIC_RAZORPAY_CHECKOUT_URL
    );

    if (!res) return;

    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount:
        membershipType === "Lifetime"
          ? process.env.NEXT_PUBLIC_LIFE_MEMBERSHIP_AMOUNT * 100
          : process.env.NEXT_PUBLIC_ANNUAL_MEMBERSHIP_AMOUNT * 100,
      currency: "INR",
      name: "The MES College Alumni Association",
      description: `Payment for ${membershipType} membership`,
      image: LOGO,
      order_id: paymentOrder.id,

      handler: function (response) {
        verifyPayment(
          response.razorpay_order_id,
          response.razorpay_payment_id,
          response.razorpay_signature,
          memberDetails.email
        );
      },
      prefill: {
        name: memberDetails.name,
        email: memberDetails.email,
        contact: memberDetails.mobile,
      },
      notes: {
        address: "The MES College Alumni Association",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };

  const loadRazorPay = (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  return (
    <div className={classes.root}>
      <Typography
        component="h1"
        align="center"
        className="styledHeading"
        gutterBottom
      >
        <span className="mainHeading">Membership Renewal</span>
      </Typography>

      <Typography
        component="p"
        align="center"
        className={classes.upgradeNotification}
      >
        <FontAwesomeIcon icon={faBullhorn} style={{ marginRight: 10 }} />
        Tired of annual renewals? Upgrade to a{" "}
        <span
          className="divStylingSecondary"
          style={{ borderColor: "rgba(255, 82, 0, 0.5)" }}
        >
          Lifetime
        </span>{" "}
        membership today!
      </Typography>

      <div className={classes.renewalDetails}>
        <div className={classes.renewalDetailsText}>
          Member Name:{" "}
          <span className={classes.renewalDetailsTextColor}>
            {memberDetails.name}
          </span>
        </div>
        <div className={classes.renewalDetailsText}>
          Member Email:{" "}
          <span className={classes.renewalDetailsTextColor}>
            {memberDetails.email}
          </span>
        </div>
        <div className={classes.renewalDetailsText} style={{ display: "flex" }}>
          Membership Id:
          <span
            className={classes.renewalDetailsTextColor}
            style={{ marginLeft: 4 }}
          >
            {!checked ? (
              memberDetails.membership_id
            ) : (
              <span style={{ display: "flex", alignItems: "center" }}>
                {memberDetails.membership_id_after_upgrade}{" "}
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--primary-color)",
                    marginLeft: 4,
                  }}
                >
                  (updated)
                </span>
              </span>
            )}
          </span>
        </div>
        <div className={classes.renewalDetailsText}>
          Current Membership Status:{" "}
          {memberDetails.days_until_expiry > 0 ? (
            <span className={classes.renewalDetailsTextColor}>
              Valid up to{" "}
              <span
                className="divStylingSecondary"
                style={{ borderColor: "rgba(255, 82, 0, 0.5)" }}
              >
                {memberDetails.current_membership_valid_up_to}
              </span>
            </span>
          ) : (
            <span style={{ color: "#FF3D68" }}>EXPIRED</span>
          )}
        </div>
        <div className={classes.renewalDetailsText}>
          Validity After Renewal:{" "}
          {!checked ? (
            <span className={classes.renewalDetailsTextColor}>
              Up to{" "}
              <span
                className="divStylingSecondary"
                style={{ borderColor: "rgba(255, 82, 0, 0.5)" }}
              >
                {memberDetails.new_renewal_date}
              </span>
            </span>
          ) : (
            <span className={classes.renewalDetailsTextColor}>Lifetime</span>
          )}
        </div>

        <div
          className={classes.renewalDetailsText}
          style={{ display: "flex", alignItems: "center" }}
        >
          <span style={{ marginRight: 10 }}>Upgrade to Lifetime?</span>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
            style={{ margin: 0 }}
          />
          <span style={{ fontSize: "1rem", marginLeft: -3 }}>
            Yes {checked && "😊"}
          </span>{" "}
        </div>

        <div className={classes.renewalDetailsText}>
          Renewal Amount:{" "}
          <span className={classes.renewalDetailsTextColor}>
            <FontAwesomeIcon
              icon={faRupeeSign}
              className={classes.rupeeSignStyle}
            />{" "}
            {amount}
          </span>
        </div>

        <div className={classes.buttonContainer}>
          <motion.button
            variants={variants}
            whileTap="tap"
            disabled={paymentMessage}
            className={classes.buttonStyle}
            onClick={() => {
              showPaymentMessage(true);
              handlePayment();
            }}
          >
            {paymentMessage ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <span style={{ marginRight: 5, fontSize: "0.9rem" }}>
                  Please wait
                </span>
                <Image
                  src={"/loader.svg"}
                  alt="Loading..."
                  height={25}
                  width={25}
                />
              </div>
            ) : (
              "Renew"
            )}
          </motion.button>
        </div>

        {paymentMessage && (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "30px 30px 0 30px",
              padding: 5,
              fontSize: "0.9rem",
              textAlign: "center",
              color: "#87431d",
            }}
          >
            <p style={{ margin: 0 }}>
              Redirecting you to payment. Please do not refresh the page
              <span className="blinkingDotAnimation">. . .</span>
            </p>
          </span>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 32,
          }}
        >
          <Button
            style={{
              color: "#87431d",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "1px",
            }}
            className="styledLink"
            onClick={() => setOpen(true)}
          >
            See alternate payment option
          </Button>
        </div>

        <AltPaymentModal
          open={open}
          setOpen={setOpen}
          memberDetails={memberDetails}
          membershipType={membershipType}
          formattedDate={formattedDate}
          setMode={setMode}
        />
      </div>
    </div>
  );
};

export default RenewalDetails;
