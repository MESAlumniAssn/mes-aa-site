import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SiteContext from "../../../context/siteContext";
import {
  collegeAddress1,
  collegeAddress2,
  officialPhone,
  officialEmail,
} from "../../../utils/associationDetails";

// Material UI imports
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// Component import
import ManualPaymentConfirmButton from "./ManualPaymentConfirmButton";
import ManualRenewalPaymentConfirmationButton from "../../utils/renewal/ManualRenewalPaymentConfirmationButton";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faTimes } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    containerStyle: {
      width: "600px",
      height: "80%",
      backgroundColor: "#fff",
      padding: "2rem 3rem",
      overflowY: "scroll",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "80%",
        width: "450px",
        margin: "0 10px",
      },
    },
  };
});

const AddressTooltip = withStyles({
  tooltip: {
    fontSize: "0.9rem",
    padding: 10,
    backgroundColor: "#f6d6ad",
    color: "#290001",
  },
})(Tooltip);

const AltPaymentModal = ({
  open,
  setOpen,
  files,
  mode,
  setMode,
  memberDetails, // For renewals only
  membershipType, // For renewals only
  formattedDate, // For renewals only
}) => {
  const [showLoader, setShowLoader] = useState(false);
  // const [submissionError, setSubmissionError] = useState(false);

  const classes = useStyles();

  const router = useRouter();

  const siteContext = useContext(SiteContext);
  const { isRegistered } = siteContext;

  useEffect(() => {
    setTimeout(() => {
      if (isRegistered && mode === "M")
        router.push(
          `/paymentinfo/${JSON.parse(localStorage.getItem("mesAAUser")).email}`
        );
    }, 1000);
  }, [isRegistered]);

  const handleClose = () => {
    setOpen(false);
    // setSubmissionError(false);
  };

  const address = collegeAddress1 + " " + collegeAddress2;

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableScrollLock={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.containerStyle}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              position: "absolute",
              top: 10,
              right: 20,
              cursor: "pointer",
            }}
            className="timesButtonAnimation"
            onClick={handleClose}
          />
          <div
            style={{
              position: "absolute",
              right: 10,
              top: 25,
              color: "var(--primary-color)",
            }}
            className="hideEsc"
          >
            ESC
          </div>

          <Typography
            style={{ fontSize: "1.1rem", paddingBottom: 20 }}
            gutterBottom
          >
            Hey,{" "}
            <span style={{ color: "#FF8E01", fontWeight: "bold" }}>
              {localStorage.getItem("mesAAUser")
                ? JSON.parse(localStorage.getItem("mesAAUser")).firstName
                : "there"}
            </span>
            ! You can also pay your membership fee by{" "}
            <span style={{ fontWeight: "bold" }}>Cheque/Demand Draft</span> or{" "}
            <span style={{ fontWeight: "bold" }}>IMPS/NEFT/RTGS</span>.
          </Typography>
          <Typography
            style={{
              fontWeight: "bold",
              paddingTop: 10,
              lineHeight: "2rem",
            }}
            className="subtitle"
            gutterBottom
          >
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "2px solid #FF8E01",
              }}
            >
              Cheque
            </span>{" "}
            or{" "}
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "2px solid #FF8E01",
              }}
            >
              Demand Draft
            </span>{" "}
            (DD) Payments:
          </Typography>

          <div className="counter">
            <p className="counterSection">
              Click on the <span style={{ fontWeight: 600 }}>CONFIRM</span>{" "}
              button below to generate your personal membership id
            </p>
            <p className="counterSection">
              Draw a cheque/DD for{" "}
              <FontAwesomeIcon
                icon={faRupeeSign}
                style={{ fontSize: "0.8rem" }}
              />{" "}
              <span style={{ fontWeight: "bold" }}>
                {localStorage.getItem("mesAAMembershipPlan") === "Lifetime"
                  ? 1000
                  : 250}
              </span>{" "}
              in favour of{" "}
              <span style={{ fontWeight: "bold" }}>
                The MES College Alumni Association
              </span>
            </p>
            <p className="counterSection">
              Write down your membership id on the back of your cheque/DD
            </p>
            <p className="counterSection">
              Hand over the cheque/DD in person at the college or mail it to the{" "}
              <AddressTooltip title={address} interactive leaveDelay={200}>
                <span
                  style={{
                    textDecoration: "underline",
                    color: "#FF8E01",
                    cursor: "pointer",
                  }}
                >
                  college address
                </span>
              </AddressTooltip>
            </p>
          </div>

          <Typography
            style={{
              fontWeight: "bold",
              paddingTop: 10,
              lineHeight: "2rem",
            }}
            className="subtitle"
            gutterBottom
          >
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "2px solid #FF8E01",
              }}
            >
              IMPS
            </span>
            ,{" "}
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "2px solid #FF8E01",
              }}
            >
              NEFT
            </span>{" "}
            or{" "}
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "2px solid #FF8E01",
              }}
            >
              RTGS{" "}
            </span>
            Payments:
          </Typography>

          <div className="counter">
            <p className="counterSection">
              Click on the <span style={{ fontWeight: 600 }}>CONFIRM</span>{" "}
              button below to generate your personal membership id
            </p>
            <p className="counterSection">
              All the details to perform the fund transfer will be sent to{" "}
              <span style={{ color: "#FF8E01", fontWeight: 700 }}>
                {localStorage.getItem("mesAAUser")
                  ? JSON.parse(localStorage.getItem("mesAAUser")).email
                  : "your registered email"}
              </span>
            </p>
            <p className="counterSection">
              Make the payment in the bank or on your bank's website and mention
              the membership id during of the payment
            </p>
          </div>

          <Typography
            style={{
              fontWeight: "bold",
              paddingTop: 10,
              lineHeight: "2rem",
            }}
            className="subtitle"
            gutterBottom
          >
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "2px solid #FF8E01",
              }}
            >
              UPI
            </span>{" "}
            Payments
          </Typography>

          <div className="counter" style={{ marginBottom: 40 }}>
            <p className="counterSection">
              Click on the <span style={{ fontWeight: 600 }}>CONFIRM</span>{" "}
              button below to generate your personal membership id
            </p>
            <p className="counterSection" style={{ display: "inline" }}>
              Use our mobile number (
              <span style={{ fontWeight: "bold", color: "#FF8E01" }}>
                {officialPhone}
              </span>
              ) and pay via UPI using either
              <span style={{ fontWeight: 700, marginLeft: 3 }}>
                Google Pay{" "}
              </span>
              <img
                src="/images/registration/googlepay.svg"
                alt="Google pay"
                height={25}
                width={25}
                style={{
                  marginLeft: 3,
                  marginRight: 3,
                  verticalAlign: "middle",
                }}
              />{" "}
              or{" "}
              <span style={{ fontWeight: 700, marginLeft: 3 }}>Phone Pe</span>{" "}
              <img
                src="/images/registration/phonepe.svg"
                alt="Phone Pe"
                height={25}
                width={25}
                style={{ marginLeft: 3, verticalAlign: "middle" }}
              />
            </p>
            <p className="counterSection">
              Send an email to{" "}
              <span style={{ fontWeight: "bold", color: "#FF8E01" }}>
                {officialEmail}
              </span>{" "}
              with a screenshot of the transaction and mention your membership
              id in the email
            </p>
          </div>

          {router.pathname === "/register" && (
            <ManualPaymentConfirmButton
              showLoader={showLoader}
              setShowLoader={setShowLoader}
              // setSubmissionError={setSubmissionError}
              setMode={setMode}
              files={files}
            />
          )}

          {router.pathname.includes("/renewal") && (
            <ManualRenewalPaymentConfirmationButton
              memberDetails={memberDetails}
              membershipType={membershipType}
              formattedDate={formattedDate}
              setMode={setMode}
            />
          )}

          {!showLoader && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 20,
              }}
            >
              <span
                style={{ cursor: "pointer" }}
                className="styledLink"
                onClick={handleClose}
              >
                Take me back to online payment
              </span>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default AltPaymentModal;
