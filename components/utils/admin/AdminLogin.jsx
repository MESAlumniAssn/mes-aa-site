import React, { useContext, useEffect, Fragment } from "react";
import SiteContext from "../../../context/siteContext";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import Image from "next/image";
import * as Yup from "yup";
import { motion } from "framer-motion";

// Material UI imports
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Component imports
import AlertDialog from "../generic/AlertDialog";

const useStyles = makeStyles((theme) => {
  return {
    containerHeading: {
      margin: "100px 25px 25px 25px",
      display: "flex",
      justifyContent: "center",
    },
    logincontainer: {
      margin: "0 50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    loginImageContainer: {
      width: 700,
      marginTop: 75,
      marginRight: 30,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    loginFormContainer: {
      display: "flex",
      flexDirection: "column",
      width: "500px",
      marginTop: 75,
      borderRadius: 20,
      padding: "30px 30px",
      boxShadow: "2px 27px 46px rgba(0, 0, 0, 0.2)",
      [theme.breakpoints.down("sm")]: {
        margin: "25px 20px 0 20px",
        width: "375px",
      },
    },
  };
});

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should have a minimum of 8 characters"),
});

const variants = {
  tap: {
    y: "2px",
  },
};

const AdminLogin = () => {
  const siteContext = useContext(SiteContext);
  const router = useRouter();
  const { loginUser, authError, isAuthenticated, token } = siteContext;

  useEffect(() => {
    if (isAuthenticated) {
      if (typeof window !== "undefined") {
        localStorage.setItem("mesAAToken", JSON.stringify(token));
      }

      setTimeout(() => router.push("/alumniassndashboard"), 2000);
    }
  }, [isAuthenticated]);

  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.containerHeading}>
        <Typography component="h1" align="center" className="styledHeading">
          <span className="mainHeading">The Admin Dashboard</span>
        </Typography>
      </div>
      <div className={classes.logincontainer}>
        <div className={classes.loginImageContainer}>
          <div
            style={{
              transform: "rotate(-5deg)",
              height: 400,
              width: 650,
              boxShadow: "0px 10px 26px rgba(210, 177, 70, 0.1)",
            }}
          >
            <Image
              src="/images/about/college-old.png"
              alt="MES college"
              height={400}
              width={650}
            />
          </div>
        </div>
        <div className={classes.loginFormContainer}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              loginUser(values.email, values.password);
              setTimeout(() => setSubmitting(false), 5000);
            }}
          >
            {(props) => (
              <Form autocomplete="off">
                <div>
                  <Typography
                    component="h2"
                    align="center"
                    style={{ paddingBottom: 20 }}
                  >
                    <span
                      style={{
                        borderBottom: "5px solid #7952B3",
                        paddingBottom: 3,
                      }}
                      className="secondaryHeading"
                    >
                      Dashboard
                    </span>{" "}
                    <span className="secondaryHeading">Login</span>
                  </Typography>
                  {authError && authError && <AlertDialog error={authError} />}

                  <div style={{ padding: "20px 0" }}>
                    <TextField
                      name="email"
                      variant="outlined"
                      label="Email*"
                      fullWidth
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={props.touched.email && props.errors.email}
                    />
                    {props.touched.email && props.errors.email && (
                      <Typography
                        color="error"
                        style={{
                          textAlign: "left",
                          fontSize: "0.8rem",
                          paddingTop: 2,
                          paddingLeft: 2,
                        }}
                      >
                        {props.errors.email}
                      </Typography>
                    )}
                  </div>

                  <div>
                    <TextField
                      name="password"
                      variant="outlined"
                      label="Password*"
                      type="password"
                      fullWidth
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={props.touched.password && props.errors.password}
                    />
                    {props.touched.password && props.errors.password && (
                      <Typography
                        color="error"
                        style={{
                          textAlign: "left",
                          fontSize: "0.8rem",
                          paddingTop: 2,
                          paddingLeft: 2,
                        }}
                      >
                        {props.errors.password}
                      </Typography>
                    )}
                  </div>

                  <motion.div
                    variants={variants}
                    whileTap="tap"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      type="submit"
                      style={{
                        margin: "30px 0",
                        width: 200,
                        height: 50,
                        fontSize: "1.1rem",
                        backgroundColor: "#7952B3",
                        fontWeight: 700,
                        color: "#FFFFFF",
                      }}
                    >
                      {props.isSubmitting && !authError ? (
                        <Image
                          src="/loader.svg"
                          alt="Loading..."
                          height={25}
                          width={25}
                        />
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </motion.div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminLogin;
