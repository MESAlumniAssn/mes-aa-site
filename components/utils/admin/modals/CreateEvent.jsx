import React, { useEffect, useContext } from "react";
import { Formik, Form } from "formik";
import SiteContext from "../../../../context/siteContext";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { toast } from "react-toastify";

// Material UI imports
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
      height: "90vh",
      overflowY: "scroll",
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
      width: "225px",
      color: "#FFF",
      fontSize: "1.1rem",
      borderRadius: "10px",
      letterSpacing: "1px",
      boxShadow: "0 13px 27px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
      textTransform: "uppercase",
    },
  };
});

const variants = {
  tap: { y: "1px" },
};

let d = new Date();
let year = d.getFullYear();
let month = parseInt(d.getMonth() + 1);
let day = d.getDate();

day = day < 10 ? "0" + day.toString() : day;
month = month < 10 ? "0" + month.toString() : month;

const today = (year + "-" + month + "-" + day).toString();

const validationSchema = Yup.object({
  name: Yup.string().required("Event name required"),
  description: Yup.string().required("Event description is required"),
  venue: Yup.string().required("Event venue is required"),
  eventDate: Yup.date()
    .required("Date of event is required")
    .min(today, "Date is in the past"),
  eventTime: Yup.string()
    .required("Time of event is required")
    .matches(
      /^([1-9]|1[0-2]):(\d{2})\s([aA]|[pP])[mM]$/,
      "Invalid time format (ex: 6:30 PM)"
    ),
});

const sessionExpiredToast = () =>
  toast.dark("Your session has expired. Please login again.", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

const CreateEvent = ({ createEventOpen, setCreateEventOpen }) => {
  const siteContext = useContext(SiteContext);
  const classes = useStyles();
  const router = useRouter();

  const {
    createNewEvent,
    eventCreated,
    sendEventsNotificationEmail,
    dashboardError,
  } = siteContext;

  useEffect(() => {
    if (eventCreated) router.push("/events");
  }, [eventCreated]);

  useEffect(() => {
    if (dashboardError && dashboardError) {
      localStorage.removeItem("mesAAToken");
      sessionExpiredToast();
      setTimeout(
        () => router.push(`/dashboard/${process.env.NEXT_PUBLIC_ADMIN_ID}`),
        2000
      );
    }
  }, [dashboardError]);

  const handleClose = () => {
    setCreateEventOpen(false);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={createEventOpen}
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
                name: "",
                description: "",
                venue: "",
                chiefGuest: "",
                eventDate: "",
                eventTime: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                createNewEvent(
                  values.name,
                  values.description,
                  values.venue,
                  values.chiefGuest,
                  values.eventDate,
                  values.eventTime
                );
                sendEventsNotificationEmail(
                  values.name,
                  values.eventDate,
                  values.eventTime,
                  values.venue,
                  values.chiefGuest
                );
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
                    <span className="secondaryHeading">Post an Event</span>
                  </Typography>
                  {/* {message && (
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
                  )} */}
                  <div>
                    <TextField
                      id="name"
                      name="name"
                      variant="outlined"
                      label="Name*"
                      inputProps={{ maxLength: 200 }}
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
                      id="description"
                      name="description"
                      variant="outlined"
                      label="Description*"
                      multiline
                      rows={5}
                      inputProps={{ maxLength: 1000 }}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.touched.description && props.errors.description
                      }
                      fullWidth
                    />
                  </div>
                  {props.touched.description && props.errors.description && (
                    <Typography
                      style={{
                        textAlign: "left",
                        fontSize: "0.8rem",
                        paddingTop: 2,
                        paddingLeft: 2,
                      }}
                      color="error"
                    >
                      {props.errors.description}
                    </Typography>
                  )}

                  <div style={{ marginTop: 25 }}>
                    <TextField
                      id="venue"
                      name="venue"
                      variant="outlined"
                      label="Venue*"
                      inputProps={{ maxLength: 50 }}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={props.touched.venue && props.errors.venue}
                      fullWidth
                    />
                  </div>
                  {props.touched.venue && props.errors.venue && (
                    <Typography
                      style={{
                        textAlign: "left",
                        fontSize: "0.8rem",
                        paddingTop: 2,
                        paddingLeft: 2,
                      }}
                      color="error"
                    >
                      {props.errors.venue}
                    </Typography>
                  )}

                  <div style={{ marginTop: 25 }}>
                    <TextField
                      id="chiefGuest"
                      name="chiefGuest"
                      variant="outlined"
                      label="Chief Guest"
                      inputProps={{ maxLength: 50 }}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.touched.chiefGuest && props.errors.chiefGuest
                      }
                      fullWidth
                    />
                  </div>
                  {props.touched.chiefGuest && props.errors.chiefGuest && (
                    <Typography
                      style={{
                        textAlign: "left",
                        fontSize: "0.8rem",
                        paddingTop: 2,
                        paddingLeft: 2,
                      }}
                      color="error"
                    >
                      {props.errors.chiefGuest}
                    </Typography>
                  )}

                  <div style={{ marginTop: 25 }}>
                    <Grid container justify="space-around">
                      <Grid item>
                        <TextField
                          name="eventDate"
                          label="Event Date"
                          type="date"
                          variant="outlined"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.touched.eventDate && props.errors.eventDate
                          }
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {props.touched.eventDate && props.errors.eventDate && (
                          <Typography
                            style={{
                              textAlign: "left",
                              fontSize: "0.8rem",
                              paddingTop: 2,
                              paddingLeft: 2,
                            }}
                            color="error"
                          >
                            {props.errors.eventDate}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item>
                        <TextField
                          id="eventTime"
                          name="eventTime"
                          variant="outlined"
                          label="Event Time*"
                          inputProps={{ maxLength: 10 }}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          error={
                            props.touched.eventTime && props.errors.eventTime
                          }
                          style={{ width: 150 }}
                        />

                        {props.touched.eventTime && props.errors.eventTime && (
                          <Typography
                            style={{
                              textAlign: "left",
                              fontSize: "0.8rem",
                              paddingTop: 2,
                              paddingLeft: 2,
                            }}
                            color="error"
                          >
                            {props.errors.eventTime}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </div>
                  <div style={{ marginTop: 40 }}>
                    <motion.button
                      variants={variants}
                      whileTap="tap"
                      type="submit"
                      disabled={props.isSubmitting}
                      className={classes.buttonStyle}
                    >
                      {props.isSubmitting ? (
                        <Image
                          src="/loader.svg"
                          alt="Loading..."
                          height={20}
                          width={20}
                        />
                      ) : (
                        "CREATE EVENT"
                      )}
                    </motion.button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateEvent;
