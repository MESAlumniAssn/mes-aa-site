import React, { useContext } from "react";
import SiteContext from "../../../context/siteContext";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

// Material UI imports
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    margin: "100px 0 50px 0",

    display: "flex",
    justifyContent: "center",
  },
  formContainer: {
    padding: "20px 20px 30px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    boxShadow: "0 13px 27px rgba(0, 0, 0, 0.2)",
    width: 600,
    [theme.breakpoints.down("sm")]: {
      width: 500,
    },
  },
  buttonStyle: {
    outline: "none",
    border: "none",
    backgroundColor: "var(--primary-color)",
    padding: "20px 20px",

    color: "#FFF",
    fontSize: "1.1rem",
    borderRadius: "10px",
    letterSpacing: "1px",
    boxShadow: "0 13px 27px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    textTransform: "uppercase",
  },
}));

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is not valid"),
});

const variants = {
  tap: {
    y: "2px",
  },
};

const UnsubscribeFromMailingList = () => {
  const siteContext = useContext(SiteContext);

  const { emailSubscriptionStatus, unsubscribeFromMailingList, loading } =
    siteContext;

  const classes = useStyles();

  return (
    <div className={classes.parentContainer}>
      <div className={classes.formContainer}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);

            setTimeout(() => {
              unsubscribeFromMailingList(values.email);
              setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form autoComplete="off">
              <Typography component="h1" align="center">
                <span className="mainHeading">Unsubscribe</span>
              </Typography>

              {emailSubscriptionStatus && (
                <div
                  style={{
                    padding: "10px 0",
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      width: "400px",
                      background: "#b9ac92",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      letterSpacing: "0.2px",
                      margin: 0,
                    }}
                  >
                    {emailSubscriptionStatus.message}
                  </p>
                </div>
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

              <div style={{ marginTop: 40, textAlign: "center" }}>
                <motion.button
                  variants={variants}
                  whileTap="tap"
                  type="submit"
                  className={classes.buttonStyle}
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? (
                    <Image
                      src={"/loader.svg"}
                      alt="Loading..."
                      height={25}
                      width={25}
                    />
                  ) : (
                    "Unsubscribe"
                  )}
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UnsubscribeFromMailingList;
