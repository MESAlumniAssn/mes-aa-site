import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import SiteContext from "../../../context/siteContext";
import Image from "next/image";

// Material UI imports
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// Component imports
import AlertDialog from "../../utils/generic/AlertDialog";

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
  submissionError,
  setSubmissionError,
  files,
}) => {
  const [showLoader, setShowLoader] = useState(false);
  const classes = useStyles();

  const router = useRouter();

  const siteContext = useContext(SiteContext);
  const { authError, registerUser } = siteContext;

  const handleClose = () => {
    setOpen(false);
    setSubmissionError(false);
  };

  const address = `The MES College Alumni Association
  Vidyasagara Prof. M.P.L Sastry Road,
  15th Cross, 10th Main, Malleshwaram,
  Bengaluru - 560003
  `;

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
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
              right: 10,
              cursor: "pointer",
            }}
            className="timesButtonAnimation"
            onClick={handleClose}
          />
          <Typography
            style={{ fontSize: "1.1rem", paddingBottom: 20 }}
            gutterBottom
          >
            Hey,{" "}
            <span style={{ color: "#ff5200", fontWeight: "bold" }}>
              {JSON.parse(localStorage.getItem("aaUser")).firstName}
            </span>
            ! You can also pay your membership fee by{" "}
            <span style={{ fontWeight: "bold" }}>Cheque/Demand Draft</span> or{" "}
            <span style={{ fontWeight: "bold" }}>IMPS/NEFT/RTGS</span>.
          </Typography>
          <Typography
            style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              paddingTop: 10,
            }}
            gutterBottom
          >
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "3px solid #ff5200",
              }}
            >
              Cheque
            </span>{" "}
            or{" "}
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "3px solid #ff5200",
              }}
            >
              Demand Draft
            </span>{" "}
            (DD) Payments:
          </Typography>

          <div className="counter">
            <p className="counterSection">
              Draw a cheque/DD for{" "}
              <FontAwesomeIcon
                icon={faRupeeSign}
                style={{ fontSize: "0.8rem" }}
              />{" "}
              <span style={{ fontWeight: "bold" }}>
                {localStorage.getItem("mesAAMembershiPlan") === "Lifetime"
                  ? 1000
                  : 250}
              </span>{" "}
              in favour of{" "}
              <span style={{ fontWeight: "bold" }}>
                The MES College Alumni Assocation
              </span>
            </p>
            <p className="counterSection">
              Click on the <span style={{ fontWeight: 600 }}>CONFIRM</span>{" "}
              button below to generate your personal membership id
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
                    color: "#ff5200",
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
              fontSize: "1.1rem",
              fontWeight: "bold",
              paddingTop: 10,
            }}
            gutterBottom
          >
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "3px solid #ff5200",
              }}
            >
              IMPS
            </span>
            ,{" "}
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "3px solid #ff5200",
              }}
            >
              NEFT
            </span>{" "}
            or{" "}
            <span
              style={{
                paddingBottom: 1,
                borderBottom: "3px solid #ff5200",
              }}
            >
              RTGS{" "}
            </span>
            Payments:
          </Typography>

          <div className="counter" style={{ marginBottom: 40 }}>
            <p className="counterSection">
              Click on the <span style={{ fontWeight: 600 }}>CONFIRM</span>{" "}
              button below to generate your personal membership id
            </p>
            <p className="counterSection">
              All the details to perform the fund transfer will be sent to{" "}
              <span style={{ color: "#ff5200", fontWeight: 700 }}>
                {JSON.parse(localStorage.getItem("aaUser")).email}
              </span>
            </p>
            <p className="counterSection">
              Make the payment in the bank or on your bank's website and mention
              the membership id during of the payment
            </p>
          </div>

          {authError && authError && open && (
            <div style={{ margin: "20px 0" }}>
              <AlertDialog error={authError && authError} />
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              disabled={authError && authError}
              style={{
                backgroundColor: "#ff5200",
                height: "3rem",
                width: "9rem",
                color: "#FFF",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
              onClick={() => {
                registerUser(
                  JSON.parse(localStorage.getItem("aaUser")).prefix,
                  JSON.parse(localStorage.getItem("aaUser")).firstName,
                  JSON.parse(localStorage.getItem("aaUser")).lastName,
                  JSON.parse(localStorage.getItem("aaUser")).email,
                  JSON.parse(localStorage.getItem("aaUser")).mobile,
                  JSON.parse(localStorage.getItem("aaUser")).birthday,
                  JSON.parse(localStorage.getItem("aaUser")).address1,
                  JSON.parse(localStorage.getItem("aaUser")).address2,
                  JSON.parse(localStorage.getItem("aaUser")).city,
                  JSON.parse(localStorage.getItem("aaUser")).state,
                  JSON.parse(localStorage.getItem("aaUser")).pincode,
                  JSON.parse(localStorage.getItem("aaUser")).country,
                  JSON.parse(localStorage.getItem("aaUser")).fromYear,
                  JSON.parse(localStorage.getItem("aaUser")).toYear,
                  JSON.parse(localStorage.getItem("aaUser")).streamPuc,
                  JSON.parse(localStorage.getItem("aaUser")).streamDegree,
                  JSON.parse(localStorage.getItem("aaUser")).streamPg,
                  JSON.parse(localStorage.getItem("aaUser")).streamOthers,
                  JSON.parse(localStorage.getItem("aaUser")).vision,
                  JSON.parse(localStorage.getItem("aaUser")).profession,
                  JSON.parse(localStorage.getItem("aaUser")).interest,
                  JSON.parse(localStorage.getItem("aaUser")).membership,
                  "M",
                  files
                );

                if (authError) {
                  setSubmissionError(true);
                }

                if (!authError && !submissionError) {
                  setShowLoader(true);
                }

                setTimeout(() => {
                  if (!submissionError)
                    router.push(
                      `/paymentinfo/${
                        JSON.parse(localStorage.getItem("aaUser")).email
                      }`
                    );
                }, 3000);
              }}
            >
              {showLoader ? (
                <Image
                  src={"/loader.svg"}
                  alt="Loading..."
                  height={25}
                  width={25}
                />
              ) : (
                "Confirm"
              )}
            </Button>
          </div>

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
        </div>
      </Modal>
    </div>
  );
};

export default AltPaymentModal;
