import { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SiteContext from "../../../../context/siteContext";

// Material UI imports
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

// Font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => {
  return {
    selectRoot: {
      "&:focus": {
        backgroundColor: "#fff",
      },
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:focus": {
        outline: "none",
      },
    },
    modalBackground: {
      backgroundColor: "#FFF",
      padding: 30,
      width: "600px",
      position: "relative",
      textAlign: "center",
      height: "92vh",
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
      "&:hover": {
        backgroundColor: "var(--primary-color)",
      },
    },
  };
});

const emails = [
  {
    value: "president@mesalumniassociation.com",
    label: "President",
  },
  { value: "vp@mesalumniassociation.com", label: "Vice President" },
  { value: "secretary@mesalumniassociation.com", label: "Secretary" },
  { value: "jointsecy@mesalumniassociation.com", label: "Joint Secretary" },
  { value: "treasurer@mesalumniassociation.com", label: "Treasurer" },
  { value: "mcmembers@mesalumniassociation.com", label: "MC Members Team" },
];

const validationSchema = Yup.object().shape({
  email: Yup.string().required("From email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const BulkEmail = ({ sendBulkEmails, setSendBulkEmails }) => {
  const classes = useStyles();

  const handleClose = () => {
    setSendBulkEmails(false);
    clearEmailSentNotification();
  };

  const siteContext = useContext(SiteContext);

  const {
    sendBulkEmail,
    emailSent,
    clearEmailSentNotification,
    loading,
    setLoading,
    metrics,
  } = siteContext;

  return (
    <div>
      <Modal
        className={classes.modal}
        open={sendBulkEmails}
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
          <div style={{ paddingTop: "2rem" }}>
            <Formik
              initialValues={{ email: "", subject: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                setLoading();

                setTimeout(() => {
                  sendBulkEmail(values.email, values.subject, values.message);
                  setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form autoComplete="off" autoCorrect="off">
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Typography
                      component="h1"
                      align="center"
                      style={{
                        paddingBottom: props.values.email ? 0 : "20px",
                      }}
                    >
                      <span className="secondaryHeading">Email the Alumni</span>
                    </Typography>

                    {emailSent && (
                      <Grid item xs={12}>
                        <Typography
                          component="p"
                          align="center"
                          style={{
                            padding: "10px 0",
                            fontSize: "1rem",
                            fontWeight: 800,
                            borderRadius: "10px",
                            backgroundColor: "#CEE5D0",
                            border: "2px solid #316B83",
                          }}
                        >
                          Email sent successfully!
                        </Typography>
                      </Grid>
                    )}

                    {props.values.email && (
                      <Typography
                        component="p"
                        style={{
                          padding: "20px 15px",
                          fontSize: "1rem",
                          textAlign: "left",
                        }}
                      >
                        This email will be sent from{" "}
                        <span style={{ fontWeight: 700 }}>
                          {props.values.email}
                        </span>{" "}
                        to{" "}
                        <span style={{ fontWeight: 700 }}>
                          {metrics.successful_registrations}
                        </span>{" "}
                        registered TMESCAA members.
                      </Typography>
                    )}

                    <Grid item xs={12}>
                      <TextField
                        select
                        name="email"
                        id="email"
                        label="From email*"
                        variant="outlined"
                        defaultValue=""
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        fullWidth
                        error={props.touched.email && props.errors.email}
                        style={{ textAlign: "left" }}
                      >
                        {emails.map((email) => {
                          return (
                            <MenuItem value={email.value} key={email.value}>
                              {email.label}
                            </MenuItem>
                          );
                        })}
                      </TextField>

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
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="subject"
                        name="subject"
                        variant="outlined"
                        label="Subject*"
                        onChange={props.handleChange}
                        fullWidth
                        error={props.touched.subject && props.errors.subject}
                        style={{ whiteSpace: "pre-wrap" }}
                      />

                      {props.touched.subject && props.errors.subject && (
                        <Typography
                          style={{
                            textAlign: "left",
                            fontSize: "0.8rem",
                            paddingTop: 2,
                            paddingLeft: 2,
                          }}
                          color="error"
                        >
                          {props.errors.subject}
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="message"
                        name="message"
                        variant="outlined"
                        label="Message*"
                        onChange={props.handleChange}
                        fullWidth
                        multiline
                        rows={8}
                        error={props.touched.message && props.errors.message}
                      />

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
                    </Grid>

                    <Grid item xs={12}></Grid>
                  </Grid>
                  <Button type="submit" className={classes.buttonStyle}>
                    {loading ? "Please Wait..." : "Send Email"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BulkEmail;
