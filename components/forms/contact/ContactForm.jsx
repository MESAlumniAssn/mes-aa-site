import React, { useState, useEffect, useContext } from "react";
import SiteContext from "../../../context/siteContext";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//Material UI imports
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => {
  return {
    modalBackground: {
      backgroundColor: "#FFF",
      padding: 30,
      width: "600px",
      position: "relative",
      textAlign: "center",
      border: "none",
      "&.Mui-focused": {
        border: "none",
        outline: "none",
      },
      [theme.breakpoints.down("sm")]: {
        padding: 20,
        width: "400px",
      },
    },
    buttonStyle: {
      outline: "none",
      border: "none",
      backgroundColor: "var(--primary-color)",
      padding: "15px 20px",
      width: "150px",
      color: "#FFF",
      fontSize: "1.1rem",
      borderRadius: "10px",
      letterSpacing: "1px",
      boxShadow: "0 13px 27px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
    },
  };
});

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").trim(),
  email: Yup.string()
    .required("Email is required")
    .email("Email is not valid")
    .trim(),
  message: Yup.string().required("Message is required").trim(),
});

const variants = {
  tap: {
    y: "2px",
  },
};

const ContactForm = ({ openContactForm, setOpenContactForm }) => {
  const [message, showMessage] = useState(false);
  const siteContext = useContext(SiteContext);
  const classes = useStyles();

  const { sendContactEmail } = siteContext;

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        showMessage(false);
        setOpenContactForm(false);
      }, 2500);
    }
  }, [message]);

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
        onClick={() => setOpenContactForm(false)}
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
      <div>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            sendContactEmail(values.email, values.name, values.message);
            showMessage(true);
            setTimeout(() => setSubmitting(false), 2000);
          }}
        >
          {(props) => (
            <Form autoComplete="off" autoCorrect="off">
              <Typography
                component="h1"
                align="center"
                style={{ paddingBottom: 20 }}
              >
                <span className="mainHeading">Write to us</span>
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
                      padding: "10px 0",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      letterSpacing: "0.2px",
                      margin: 0,
                    }}
                  >
                    Thanks! We will be in touch.
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
                  error={props.touched.name && props.errors.name}
                  fullWidth
                />
              </div>
              {props.touched.name && props.errors.name && (
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
                  id="email"
                  name="email"
                  variant="outlined"
                  label="Email*"
                  inputProps={{ maxLength: 50 }}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.touched.email && props.errors.email}
                  fullWidth
                />
              </div>
              {props.touched.email && props.errors.email && (
                <Typography
                  style={{
                    textAlign: "left",
                    fontSize: "0.8rem",
                    paddingTop: 2,
                    paddingLeft: 2,
                  }}
                  color="error"
                >
                  {props.errors.email}
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
                  error={props.touched.message && props.errors.message}
                  fullWidth
                />
              </div>
              {props.touched.message && props.errors.message && (
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

              <div style={{ marginTop: 40 }}>
                <motion.button
                  variants={variants}
                  whileTap="tap"
                  type="submit"
                  className={classes.buttonStyle}
                >
                  SEND
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
