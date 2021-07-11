import React, { useState, useContext, useEffect, Fragment } from "react";
import { Formik, Form } from "formik";
import SiteContext from "../../../context/siteContext";
import { useRouter } from "next/router";
import Image from "next/image";

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
  // Related to the profile pic upload
  const [files, setFiles] = useState([]);
  const [profilePicUploaded, setProfilePicUploaded] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const paymentMode = props.paymentMode.current;
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
  } = siteContext;

  const currentValidationSchema = registrationValidationSchema[activeStep];

  // Controls the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Navigate to the previous form
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (authError) {
      window.scroll({ top: 1, left: 1, behavior: "smooth" });
    }
  }, [authError]);

  // Runs once the registration is complete and we are ready for payment
  useEffect(() => {
    if (paymentOrder && isRegistered) {
      displayRazorPay();
    }
  }, [isRegistered, paymentOrder]);

  // Redirect once payment verification is complete
  useEffect(() => {
    if (paymentVerified !== null) {
      if (paymentVerified.status === null) {
        router.push(`/paymentverified/${user && user.alt_user_id}`);
      }
    }
  }, [paymentVerified]);

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

  const submitForm = (values, actions) => {
    actions.setSubmitting(true);
    var membership = "";

    if (typeof window !== "undefined") {
      membership = localStorage.getItem("mesAAMembershiPlan");
    }

    registerUser(
      values.prefix,
      values.firstName,
      values.lastName,
      values.email,
      values.mobile,
      values.birthday,
      values.address1,
      values.address2,
      values.city,
      values.state,
      values.pincode,
      values.country,
      values.fromYear,
      values.toYear,
      values.streamPuc,
      values.streamDegree,
      values.streamPg,
      values.streamOthers,
      values.vision,
      values.profession,
      values.interest,
      membership,
      "O",
      files
    );
    setTimeout(() => actions.setSubmitting(false), 3000);
  };

  const handleSubmit = (values, actions) => {
    var amount =
      localStorage.getItem("mesAAMembershiPlan") === "Lifetime"
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
      membership: localStorage.getItem("mesAAMembershiPlan"),
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("aaUser", JSON.stringify(userDetailsInStorage));
    }

    if (isLastStep) {
      submitForm(values, actions);
      createOrder(amount, "INR", "ABCD", {
        membershipType: localStorage.getItem("mesAAMembershiPlan"),
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
    const res = await loadRazorPay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) return;

    var options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount:
        localStorage.getItem("mesAAMembershiPlan") === "Lifetime"
          ? process.env.NEXT_PUBLIC_LIFE_MEMBERSHIP_AMOUNT * 100
          : process.env.NEXT_PUBLIC_ANNUAL_MEMBERSHIP_AMOUNT * 100,
      currency: "INR",
      name: "The MES College Alumni Association",
      description: `Payment for ${localStorage.getItem(
        "mesAAMembershiPlan"
      )} membership`,
      image: process.env.NEXT_PUBLIC_SITE_ICON,
      order_id: paymentOrder.id,

      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        verifyPayment(
          response.razorpay_order_id,
          response.razorpay_payment_id,
          response.razorpay_signature,
          user && user.email
        );
        // router.push("/");
      },
      prefill: {
        name:
          JSON.parse(localStorage.getItem("aaUser")).firstName +
          " " +
          JSON.parse(localStorage.getItem("aaUser")).lastName,
        email: JSON.parse(localStorage.getItem("aaUser")).email,
        contact: JSON.parse(localStorage.getItem("aaUser")).mobile,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
    // rzp1.on("payment.failed", function (response) {
    //   alert(response.error.code);
    //   alert(response.error.description);
    //   alert(response.error.source);
    //   alert(response.error.step);
    //   alert(response.error.reason);
    //   alert(response.error.metadata.order_id);
    //   alert(response.error.metadata.payment_id);
    // });
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
                              color: "#290001",
                              letterSpacing: "1px",
                            }}
                            onClick={handleBack}
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
                          >
                            {props.isSubmitting ? (
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
                    paymentMode={paymentMode}
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
