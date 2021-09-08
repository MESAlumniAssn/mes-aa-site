import React, { useState, useContext, useEffect } from "react";
import SiteContext from "../../../context/siteContext";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

// Material UI imports
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Component imports
import recaptcha from "../../../utils/recaptcha";

const currentYear = new Date().getFullYear();

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  batch: Yup.number()
    .typeError(`Batch must be valid year between 1956 and ${currentYear}`)
    .required("Batch is required")
    .min(1956, "The batch cannot be prior to 1956")
    .max(currentYear, `Batch cannot be after ${currentYear}`),
  message: Yup.string().required("Message is required"),
});

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    outline: "none",
    border: "none",
    backgroundColor: "var(--secondary-color)",
    padding: "15px 20px",
    width: "250px",
    color: "#FFF",
    fontSize: "1.1rem",
    borderRadius: "10px",
    letterSpacing: "1px",
    boxShadow: "0 13px 27px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    textTransform: "uppercase",
  },
}));

const variants = {
  tap: {
    y: "2px",
  },
};

const CreateTestimonialForm = ({
  openTestimonialForm,
  setOpenTestimonialForm,
}) => {
  const classes = useStyles();

  const [message, setMessage] = useState("");
  const siteContext = useContext(SiteContext);
  const { testimonial, createTestimonial, sendTestimonialApprovalEmail } =
    siteContext;

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(false);
        setOpenTestimonialForm(false);
      }, 10000);
    }
  }, [message]);

  useEffect(() => {
    if (testimonial) {
      const verificationUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/testimonialverification/${testimonial.hash}+${testimonial.id}`;

      const submissionDetailsFromStorage = localStorage.getItem(
        "testimonialSubmission"
      );

      sendTestimonialApprovalEmail(
        JSON.parse(submissionDetailsFromStorage).name,
        JSON.parse(submissionDetailsFromStorage).batch.toString(),
        JSON.parse(submissionDetailsFromStorage).message,
        verificationUrl
      );
    }
  }, [testimonial]);

  return (
    <div>
      <FontAwesomeIcon
        icon={faTimes}
        style={{
          position: "absolute",
          top: 10,
          right: 20,
          cursor: "pointer",
        }}
        className="timesButtonAnimation"
        onClick={() => setOpenTestimonialForm(false)}
      />
      <p
        style={{
          position: "absolute",
          top: 15,
          right: 10,
          cursor: "pointer",
        }}
      >
        ESC
      </p>
      <Formik
        initialValues={{
          name: "",
          batch: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          createTestimonial(values.name, values.batch, values.message);
          localStorage.setItem(
            "testimonialSubmission",
            JSON.stringify({
              name: values.name,
              batch: values.batch,
              message: values.message,
            })
          );
          setTimeout(() => {
            setMessage(true);
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form autoComplete="off" autoCorrect="off">
            <Typography
              component="h2"
              align="center"
              style={{ paddingBottom: 20, paddingTop: 20 }}
            >
              <span className="secondaryHeading">
                We'd love to hear from you!
              </span>
            </Typography>

            {message && (
              <div
                style={{
                  paddingBottom: 25,
                  width: "100%",
                }}
              >
                <p
                  style={{
                    background: "#b9ac92",
                    padding: "10px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    letterSpacing: "0.2px",
                    fontSize: "0.9rem",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Thanks! We have received your testimonial. Once it is reviewed
                  and approved, it will be visible on the page.
                </p>
              </div>
            )}

            <div>
              <TextField
                id="name"
                name="name"
                variant="outlined"
                label="Name*"
                inputProps={{ maxLength: 50 }}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.touched.name && !!props.errors.name}
                fullWidth
              />
            </div>
            {props.touched.name && !!props.errors.name && (
              <Typography
                style={{
                  textAlign: "left",
                  fontSize: "0.8rem",
                  paddingTop: 2,
                  paddingLeft: 2,
                }}
                color="error"
              >
                {props.errors.name}
              </Typography>
            )}

            <div style={{ marginTop: 25 }}>
              <TextField
                id="batch"
                name="batch"
                variant="outlined"
                label="Batch*"
                inputProps={{ maxLength: 4 }}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.touched.batch && !!props.errors.batch}
                fullWidth
              />
            </div>
            {props.touched.batch && !!props.errors.batch && (
              <Typography
                style={{
                  textAlign: "left",
                  fontSize: "0.8rem",
                  paddingTop: 2,
                  paddingLeft: 2,
                }}
                color="error"
              >
                {props.errors.batch}
              </Typography>
            )}

            <div style={{ marginTop: 25 }}>
              <TextField
                id="message"
                name="message"
                variant="outlined"
                label="Message*"
                multiline
                rows={5}
                inputProps={{ maxLength: 1000 }}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.touched.message && !!props.errors.message}
                fullWidth
              />
            </div>
            {props.touched.message && !!props.errors.message && (
              <Typography
                style={{
                  textAlign: "left",
                  fontSize: "0.8rem",
                  paddingTop: 2,
                  paddingLeft: 2,
                }}
                color="error"
              >
                {props.errors.message}
              </Typography>
            )}

            {recaptcha}

            <div style={{ marginTop: 40 }}>
              <motion.button
                variants={variants}
                whileTap="tap"
                type="submit"
                disabled={props.isSubmitting || message}
                className={classes.buttonStyle}
              >
                {props.isSubmitting ? (
                  <Image
                    src={"/loader.svg"}
                    alt="Loading..."
                    height={25}
                    width={25}
                  />
                ) : (
                  "Submit Testimonial"
                )}
              </motion.button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTestimonialForm;
