import React, { useState, useContext, useEffect, Fragment } from "react";
import { Formik, Form } from "formik";
import SiteContext from "../../../context/siteContext";
import { useRouter } from "next/router";
import Image from "next/image";
import { LOGO } from "../../../utils/images";
import shortId from "../../../utils/generateShortId";
import generateInvoiceNumber from "../../../utils/generateInvoiceNumber";

// Material UI Imports
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core/styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

// Component imports
import PersonalDetails from "./PersonalDetails";
import AcademicDetails from "./AcademicDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import PaymentDetails from "./PaymentDetails";
import AlertDialog from "../../utils/generic/AlertDialog";
import Terms from "../../../components/utils/generic/Terms";

// Fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

// Helpers
import registrationFormModel from "./FormModels/registrationFromModel";
import registrationInitialValues from "./FormModels/registrationInitialValues";
import registrationValidationSchema from "./FormModels/registrationValidationSchema";

// Component imports
import AltPaymentModal from "./AltPaymentModal";

const steps = ["Personal", "Academic", "Professional", "Payment"];
const { formId, formField } = registrationFormModel;
let theme = createMuiTheme();

theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  root: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      // Center the grid container
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },

    color: theme.palette.text.primary,
  },

  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.up("sm")]: {
      // Center the grid container
      padding: 30,
    },
  },
  button: {
    marginTop: 30,
    fontWeight: "bold",
  },
  registrationHero: {
    margin: "40px 0",
    textAlign: "center",
  },
});

const RegistrationPage = (props) => {
  const [files, setFiles] = useState([]);
  const [profilePicUploaded, setProfilePicUploaded] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [paymentMessage, showPaymentMessage] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [mode, setMode] = useState("O");
  const router = useRouter();

  const isLastStep = activeStep === steps.length - 1;

  const classes = useStyles();

  const siteContext = useContext(SiteContext);
  const {
    authError,
    registerUser,
    createOrder,
    paymentOrder,
    paymentVerified,
    isRegistered,
    verifyPayment,
    user,
    deleteTempUser,
    sendWelcomeEmail,
    sendPaymentReceiptEmail,
  } = siteContext;

  const currentValidationSchema = registrationValidationSchema[activeStep];

  // Controls the modal
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    user && localStorage.setItem("mesAATempUserToken", user.alt_user_id);
  }, [user]);

  // Navigate to the previous form
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (authError) {
      showPaymentMessage(false);
      window.scroll({ top: 1, left: 1, behavior: "smooth" });
    }
  }, [authError]);

  // Runs once the registration is complete and we are ready for payment
  useEffect(() => {
    if (!authError && paymentOrder) {
      displayRazorPay();
    }
  }, [paymentOrder, authError]);

  // Redirect once payment verification is complete
  useEffect(() => {
    if (paymentVerified !== null) {
      // Razorpay passes a null status for verified/successful payments
      if (paymentVerified.status === null) {
        registerUser(
          JSON.parse(localStorage.getItem("mesAAUser")).prefix,
          JSON.parse(localStorage.getItem("mesAAUser")).firstName,
          JSON.parse(localStorage.getItem("mesAAUser")).lastName,
          JSON.parse(localStorage.getItem("mesAAUser")).email,
          JSON.parse(localStorage.getItem("mesAAUser")).mobile,
          JSON.parse(localStorage.getItem("mesAAUser")).birthday,
          JSON.parse(localStorage.getItem("mesAAUser")).address1,
          JSON.parse(localStorage.getItem("mesAAUser")).address2,
          JSON.parse(localStorage.getItem("mesAAUser")).city,
          JSON.parse(localStorage.getItem("mesAAUser")).state,
          JSON.parse(localStorage.getItem("mesAAUser")).pincode,
          JSON.parse(localStorage.getItem("mesAAUser")).country,
          JSON.parse(localStorage.getItem("mesAAUser")).fromYear,
          JSON.parse(localStorage.getItem("mesAAUser")).toYear,
          JSON.parse(localStorage.getItem("mesAAUser")).streamPuc,
          JSON.parse(localStorage.getItem("mesAAUser")).streamDegree,
          JSON.parse(localStorage.getItem("mesAAUser")).streamPg,
          JSON.parse(localStorage.getItem("mesAAUser")).streamOthers,
          JSON.parse(localStorage.getItem("mesAAUser")).vision,
          JSON.parse(localStorage.getItem("mesAAUser")).profession,
          JSON.parse(localStorage.getItem("mesAAUser")).interest,
          JSON.parse(localStorage.getItem("mesAAUser")).membership,
          "O",
          true,
          files
        );
      }
    }
  }, [paymentVerified]);

  useEffect(() => {
    if (user && mode === "O") {
      let invoiceNumber = generateInvoiceNumber(user.id);
      let fullName =
        user.prefix + ". " + user.first_name + " " + user.last_name;

      sendWelcomeEmail(user.email, user.first_name);
      sendPaymentReceiptEmail(
        fullName,
        user.address1,
        user.address2,
        user.city,
        user.state,
        user.pincode,
        user.country,
        user.email,
        invoiceNumber,
        user.membership_type,
        null
      );
      router.push(`/paymentverified/${user && user.alt_user_id}`);
    }
  }, [isRegistered]);

  const renderStep = (step, props) => {
    switch (step) {
      case 0:
        return (
          <PersonalDetails
            formField={formField}
            files={files}
            setFiles={setFiles}
            profilePicUploaded={profilePicUploaded}
            setProfilePicUploaded={setProfilePicUploaded}
          />
        );

      case 1:
        return <AcademicDetails formField={formField} formProps={props} />;
      case 2:
        return <ProfessionalDetails formField={formField} />;
      case 3:
        return <PaymentDetails />;
      default:
        return <div>Not Found</div>;
    }
  };

  // const submitForm = (values, actions) => {
  //   actions.setSubmitting(true);
  //   var membership = "";

  //   if (typeof window !== "undefined") {
  //     membership = localStorage.getItem("mesAAMembershipPlan");
  //   }

  //   registerUser(
  //     values.prefix,
  //     values.firstName,
  //     values.lastName,
  //     values.email,
  //     values.mobile,
  //     values.birthday,
  //     values.address1,
  //     values.address2,
  //     values.city,
  //     values.state,
  //     values.pincode,
  //     values.country,
  //     values.fromYear,
  //     values.toYear,
  //     values.streamPuc,
  //     values.streamDegree,
  //     values.streamPg,
  //     values.streamOthers,
  //     values.vision,
  //     values.profession,
  //     values.interest,
  //     membership,
  //     "O",
  //     true,
  //     files
  //   );
  //   setTimeout(() => actions.setSubmitting(false), 3000);
  // };

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    var amount =
      localStorage.getItem("mesAAMembershipPlan") === "Lifetime"
        ? process.env.NEXT_PUBLIC_LIFE_MEMBERSHIP_AMOUNT * 100
        : process.env.NEXT_PUBLIC_ANNUAL_MEMBERSHIP_AMOUNT * 100;

    // Store all the form data in local storage
    const userDetailsInStorage = {
      prefix: values.prefix,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      mobile: values.mobile,
      birthday: values.birthday,
      address1: values.address1,
      address2: values.address2,
      city: values.city,
      state: values.state,
      pincode: values.pincode,
      country: values.country,
      fromYear: values.fromYear,
      toYear: values.toYear,
      streamPuc: values.streamPuc,
      streamDegree: values.streamDegree,
      streamPg: values.streamPg,
      streamOthers: values.streamOthers,
      vision: values.vision,
      profession: values.profession,
      interest: values.interest,
      membership: localStorage.getItem("mesAAMembershipPlan"),
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("mesAAUser", JSON.stringify(userDetailsInStorage));
    }

    if (isLastStep) {
      // submitForm(values, actions);
      actions.setSubmitting(false);
      createOrder(parseInt(amount), "INR", shortId(), {
        membershipType: localStorage.getItem("mesAAMembershipPlan"),
      });
    } else {
      // Validation for the profile pic
      if (activeStep === 0) {
        if (files.length === 0) {
          actions.setSubmitting(false);
          setProfilePicUploaded(false);
          return;
        }
      }

      // Validation for the courses
      if (activeStep === 1) {
        if (
          values.streamPuc === "" &&
          values.streamDegree === "" &&
          values.streamPg === "" &&
          values.streamOthers === ""
        ) {
          actions.setSubmitting(false);
          actions.setFieldError(
            "streamOthers",
            "Please select at least one stream in any of the courses"
          );
          return;
        }
      }

      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
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
        localStorage.getItem("mesAAMembershipPlan") === "Lifetime"
          ? process.env.NEXT_PUBLIC_LIFE_MEMBERSHIP_AMOUNT * 100
          : process.env.NEXT_PUBLIC_ANNUAL_MEMBERSHIP_AMOUNT * 100,
      currency: "INR",
      name: "The MES College Alumni Association",
      description: `Payment for ${localStorage.getItem(
        "mesAAMembershipPlan"
      )} membership`,
      image: LOGO,
      order_id: paymentOrder.id,

      handler: function (response) {
        verifyPayment(
          response.razorpay_order_id,
          response.razorpay_payment_id,
          response.razorpay_signature,
          JSON.parse(localStorage.getItem("mesAAUser")).email
        );
      },
      modal: {
        ondismiss: function () {
          deleteTempUser(localStorage.getItem("mesAATempUserToken"));
        },
      },
      prefill: {
        name:
          JSON.parse(localStorage.getItem("mesAAUser")).firstName +
          " " +
          JSON.parse(localStorage.getItem("mesAAUser")).lastName,
        email: JSON.parse(localStorage.getItem("mesAAUser")).email,
        contact: JSON.parse(localStorage.getItem("mesAAUser")).mobile,
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
    <Fragment>
      <div className={classes.registrationHero}>
        <Typography component="h1" className="styledHeading" gutterBottom>
          <span className="mainHeading">Join</span>
        </Typography>
        <Typography
          style={{ fontWeight: 700, padding: "20px 5px 0 5px" }}
          align="center"
        >
          <span className="secondaryHeading">
            Sign up and become a member today
          </span>
        </Typography>
      </div>

      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            return (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <div>Registration successful</div>
        ) : (
          <Formik
            initialValues={registrationInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <div>
                <Form id={formId} noValidate autoComplete="off">
                  <Box boxShadow={10} className={classes.container}>
                    {authError && authError && !open && (
                      <div style={{ marginBottom: "20px" }}>
                        <AlertDialog error={authError && authError} />
                      </div>
                    )}
                    {renderStep(activeStep, props)}
                    <div style={{ paddingTop: 20 }}>
                      <Terms />
                    </div>
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      className={classes.button}
                      spacing={3}
                    >
                      <Grid item>
                        {activeStep !== 0 && (
                          <Button
                            variant="contained"
                            style={{
                              width: "9rem",
                              padding: "10px",
                              fontSize: "1rem",
                              fontWeight: 900,
                              backgroundColor: "#fecb89",
                              color: "var(--primary-color)",
                              letterSpacing: "1px",
                            }}
                            onClick={handleBack}
                            disabled={props.isSubmitting}
                            startIcon={
                              <NavigateBeforeIcon
                                style={{ fontSize: "2rem" }}
                              />
                            }
                          >
                            Back
                          </Button>
                        )}
                      </Grid>

                      <Grid item>
                        {
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={props.isSubmitting}
                            style={{
                              width: isLastStep ? "12rem" : "9rem",
                              padding: "10px",
                              fontSize: "1rem",
                              fontWeight: 900,
                              backgroundColor: "#b9ac92",
                              color: "var(--primary-color)",
                              letterSpacing: "1px",
                            }}
                            endIcon={
                              <NavigateNextIcon style={{ fontSize: "2rem" }} />
                            }
                            onClick={() => {
                              isLastStep && showPaymentMessage(true);
                            }}
                          >
                            {props.isSubmitting && !authError ? (
                              <Image
                                src={"/loader.svg"}
                                alt="Loading..."
                                height={25}
                                width={25}
                              />
                            ) : isLastStep ? (
                              "Pay Online"
                            ) : (
                              "Next"
                            )}
                          </Button>
                        }
                      </Grid>
                    </Grid>

                    {isLastStep && paymentMessage && (
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
                          Redirecting you to payment. Please do not refresh the
                          page
                          <span className="blinkingDotAnimation">. . .</span>
                        </p>
                      </span>
                    )}

                    {isLastStep && (
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
                          disabled={props.isSubmitting}
                          onClick={handleOpen}
                        >
                          See alternate payment option
                        </Button>
                      </div>
                    )}
                  </Box>

                  {/* The modal for alternate payment */}
                  <AltPaymentModal
                    open={open}
                    setOpen={setOpen}
                    submissionError={submissionError}
                    setSubmissionError={setSubmissionError}
                    files={files}
                    mode={mode}
                    setMode={setMode}
                  />
                </Form>
              </div>
            )}
          </Formik>
        )}
      </div>
    </Fragment>
  );
};

export default RegistrationPage;
