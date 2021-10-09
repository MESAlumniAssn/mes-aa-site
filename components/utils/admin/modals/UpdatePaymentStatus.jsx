import React, { useEffect, useContext } from "react";
import { Formik, Form } from "formik";
import SiteContext from "../../../../context/siteContext";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Yup from "yup";
import generateInvoiceNumber from "../../../../utils/generateInvoiceNumber";

// Material UI imports
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCheckCircle,
  faTimesCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Component imports
import Chips from "../../../utils/generic/Chips";

const useStyles = makeStyles((theme) => {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalBackground: {
      backgroundColor: "#FFF",
      padding: 30,
      width: "600px",
      position: "relative",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        padding: 20,
        width: "400px",
      },
    },
  };
});

const variants = {
  tap: { y: "1px" },
};

const validationSchema = Yup.object({
  membershipId: Yup.string()
    .required("Membership id is required")
    .matches(/^MESAA-(LM|OM)-\d+-\d+$/, "Invalid Membership Id format"),
});

const UpdatePaymentStatus = ({ paymentStatusOpen, setPaymentStatusOpen }) => {
  const router = useRouter();
  const siteContext = useContext(SiteContext);
  const classes = useStyles();

  const {
    loading,
    setLoading,
    user,
    getMembershipDetails,
    updatePaymentStatus,
    paymentStatus,
    clearUserState,
    sendWelcomeEmail,
    sendPaymentReceiptEmail,
    dashboardError,
  } = siteContext;

  const handleClose = () => {
    setPaymentStatusOpen(false);
    clearUserState();
  };

  useEffect(() => {
    if (dashboardError && dashboardError) {
      localStorage.removeItem("mesAAToken");
      setTimeout(
        () => router.push(`/dashboard/${process.env.NEXT_PUBLIC_ADMIN_ID}`),
        2000
      );
    }
  }, [dashboardError]);

  return (
    <div>
      <Modal
        className={classes.modal}
        open={paymentStatusOpen}
        onClose={handleClose}
        closeAfterTransition
        disableScrollLock={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.modalBackground}>
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
          <div>
            <Formik
              initialValues={{
                membershipId: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                setLoading();
                setTimeout(() => {
                  getMembershipDetails(values.membershipId);
                  setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form autocomplete="off">
                  <Typography
                    component="h2"
                    align="center"
                    style={{ paddingBottom: 30 }}
                  >
                    <span className="secondaryHeading">
                      Update Payment Status
                    </span>
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                      id="membershipId"
                      name="membershipId"
                      variant="outlined"
                      label="Membership Id*"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.touched.membershipId && props.errors.membershipId
                      }
                      fullWidth
                    />
                    <motion.div
                      variants={variants}
                      whileTap="tap"
                      style={{
                        marginLeft: 15,
                        borderRadius: 10,
                      }}
                    >
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: "#b9ac92",
                          height: 59,
                          width: 60,
                          fontSize: "var(--button-font-size)",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faSearch}
                          style={{ fontSize: "1.3rem" }}
                        />
                      </Button>
                    </motion.div>
                  </div>
                  {props.touched.membershipId && props.errors.membershipId && (
                    <Typography
                      style={{
                        textAlign: "left",
                        fontSize: "0.8rem",
                        paddingTop: 2,
                        paddingLeft: 2,
                      }}
                      color="error"
                    >
                      {props.errors.membershipId}
                    </Typography>
                  )}
                </Form>
              )}
            </Formik>
          </div>

          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 30,
              }}
            >
              <Image
                src="/loader.svg"
                alt="Loading..."
                height={30}
                width={30}
              />
            </div>
          ) : user && user !== "That id does not exist" ? (
            <div style={{ marginTop: 25 }}>
              <Typography style={{ fontSize: "1.3rem" }}>
                Details for{" "}
                <span style={{ color: "#D49D42", fontWeight: "bold" }}>
                  {user.membership_id}
                </span>
                :
              </Typography>

              <div
                style={{
                  margin: "20px 0",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography style={{ fontWeight: 600 }}>
                  Name:{" "}
                  <span style={{ color: "#D49D42", fontWeight: 800 }}>
                    {user.name}
                  </span>
                </Typography>
                <Typography style={{ fontWeight: 600 }}>
                  Email:{" "}
                  <span style={{ color: "#D49D42", fontWeight: 800 }}>
                    {user.email}
                  </span>
                </Typography>
              </div>

              <Chips membershipType={user.membership_type} />

              <Typography
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 25,
                }}
              >
                Fee Paid:&nbsp;
                {user.payment_status ? (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ fontSize: "2rem", color: "#00917C" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    style={{
                      fontSize: "2rem",
                      color: "#F14668",
                    }}
                  />
                )}
              </Typography>

              {!user.payment_status && (
                <Button
                  variant="outlined"
                  style={{
                    marginTop: 25,
                    height: 50,
                    width: 90,
                    fontSize: "var(--button-font-size)",
                    backgroundColor: "var(--primary-color)",
                    color: "#FFFFFF",
                  }}
                  onClick={() => {
                    let invoiceNumber = generateInvoiceNumber(user.user_id);

                    updatePaymentStatus(user.user_id, user.membership_type);
                    sendWelcomeEmail(user.email, user.name);
                    sendPaymentReceiptEmail(
                      user.name,
                      user.address1,
                      user.address2,
                      user.city,
                      user.state,
                      user.pincode,
                      user.country,
                      user.email,
                      invoiceNumber,
                      user.membership_type
                    );

                    setTimeout(() => {
                      getMembershipDetails(user.membership_id);
                      clearUserState();
                    }, 3000);
                  }}
                >
                  {!paymentStatus ? (
                    "Update"
                  ) : (
                    <Image
                      src="/loader.svg"
                      alt="Loading..."
                      height={20}
                      width={20}
                    />
                  )}
                </Button>
              )}
            </div>
          ) : (
            user && (
              // Display the id does not exist message
              <Typography
                color="primary"
                style={{
                  paddingTop: 20,
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                }}
              >
                {user}
              </Typography>
            )
          )}
        </div>
      </Modal>
    </div>
  );
};

export default UpdatePaymentStatus;
