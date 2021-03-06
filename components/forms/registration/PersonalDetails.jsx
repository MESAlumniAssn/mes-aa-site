import "date-fns";
import React, { useState, useEffect, useContext } from "react";
import SiteContext from "../../../context/siteContext";
import DateFnsUtils from "@date-io/date-fns";
import InputField from "../FormFields/InputField";
import SelectField from "../FormFields/SelectField";
import countryList from "../../../utils/countries";
import Chips from "../../utils/generic/Chips";
import ProfileUploader from "../../utils/generic/ProfileUploader";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTimes, faStar } from "@fortawesome/free-solid-svg-icons";

const prefixes = [
  {
    value: "Mrs",
    label: "Mrs",
  },
  {
    value: "Ms",
    label: "Ms",
  },
  {
    value: "Mr",
    label: "Mr",
  },
  {
    value: "Mx",
    label: "Mx",
  },
  {
    value: "Dr",
    label: "Dr",
  },
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    margin: "0 10",
    boxShadow: theme.shadows[5],
    padding: 20,
    paddingTop: "3.5rem",
    position: "relative",
    height: 650,
    width: 500,
    [theme.breakpoints.down("sm")]: {
      height: 575,
      width: 400,
    },
  },
  profilePicValidationBorder: {
    border: "3px solid #f21170",
  },
  profilePicUploaded: {
    color: "#689f38",
  },
  profilePicNotUploaded: {
    color: "#f21170",
  },
  profilePicOnLoad: {
    color: "var(--primary-color)",
  },
}));

const ProfilePicTooltip = withStyles({
  tooltip: { fontSize: "0.8rem", backgroundColor: "#dbcbbd", color: "#290001" },
})(Tooltip);

const PersonalDetails = (props) => {
  const [open, setOpen] = useState(false);
  const siteContext = useContext(SiteContext);

  const classes = useStyles();

  const { checkForExistingEmail } = siteContext;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    formField: {
      prefix,
      firstName,
      lastName,
      email,
      address1,
      address2,
      city,
      state,
      country,
      pincode,
      mobile,
      birthday,
    },
  } = props;

  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1.5rem",
        }}
      >
        <Chips
          membershipType={
            typeof window !== "undefined" &&
            localStorage.getItem("mesAAMembershipPlan")
          }
        />
      </div>

      <Grid id="prefix" container justify="space-between" alignItems="center">
        <Grid item xs={6} style={{ marginBottom: 24 }}>
          <SelectField
            name={prefix.name}
            label={prefix.label}
            data={prefixes}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right", marginBottom: 20 }}>
          {!props.profilePicUploaded && (
            <Typography
              color="error"
              style={{ fontSize: "0.8rem", paddingBottom: 5 }}
            >
              Photo is required
            </Typography>
          )}
          <Button
            variant="contained"
            size="large"
            disableElevation
            style={{
              borderRadius: "50%",
              padding: 20,
              marginRight: 8,
              fontSize: "var(--button-font-size)",
            }}
            className={
              !props.profilePicUploaded && classes.profilePicValidationBorder
            }
            onClick={handleOpen}
          >
            <FontAwesomeIcon
              icon={faCamera}
              style={{ fontSize: "1.75rem" }}
              className={
                props.files.length !== 0
                  ? classes.profilePicUploaded // icon - green
                  : !props.profilePicUploaded // button - border - pink
                  ? classes.profilePicNotUploaded // icon - pink
                  : classes.profilePicOnLoad // icon - gray
              }
            />
          </Button>
        </Grid>
      </Grid>
      <Grid id="name" container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={firstName.name}
            label={firstName.label}
            length={50}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={lastName.name}
            label={lastName.label}
            length={50}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <InputField
            name={email.name}
            label={email.label}
            length={50}
            fullWidth
            onInput={(e) => checkForExistingEmail(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputField
            name={mobile.name}
            label={mobile.label}
            length={15}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputField
            name={birthday.name}
            label={birthday.label}
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <InputField
            name={address1.name}
            label={address1.label}
            length={100}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <InputField
            name={address2.name}
            label={address2.label}
            length={100}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputField
            name={city.name}
            label={city.label}
            length={50}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={state.name}
            label={state.label}
            length={50}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <InputField
            name={pincode.name}
            label={pincode.label}
            length={15}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countryList}
            fullWidth
          />
        </Grid>
      </Grid>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableScrollLock={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div style={{ position: "absolute", right: 20, top: 10 }}>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={handleClose}
                style={{ fontSize: "1.2rem", cursor: "pointer" }}
                className="timesButtonAnimation"
              />
            </div>

            <div
              style={{ position: "absolute", right: 13, top: 30 }}
              className="hideEsc"
            >
              ESC
            </div>
            <Typography component="h3" align="center" gutterBottom>
              <span className="secondaryHeading">Upload your recent photo</span>
            </Typography>

            <div style={{ width: "100%", margin: "15px 10px 0 10px" }}>
              {/* <ProfilePicTooltip
                title="This photo will be used while generating your membership identification card."
                interactive
                leaveDelay={200}
              >
                <Typography
                  component="subtitle2"
                  variant="subtitle2"
                  align="center"
                  style={{
                    borderBottom: "2px solid",
                    paddingBottom: 1,
                    cursor: "pointer",
                  }}
                  gutterBottom
                >
                  Why do we require your photo?
                </Typography>
              </ProfilePicTooltip> */}
              <p style={{ margin: 0, fontSize: "0.9rem", paddingBottom: 5 }}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#c87941" }} />{" "}
                This photo will be used while generating your membership
                identification card.
              </p>

              <p style={{ margin: 0, fontSize: "0.9rem", paddingBottom: 5 }}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#c87941" }} />{" "}
                Please make sure the photo contains a close up of your face.
              </p>
            </div>
            <ProfileUploader
              files={props.files}
              setFiles={props.setFiles}
              setProfilePicUploaded={props.setProfilePicUploaded}
              setOpen={setOpen}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PersonalDetails;
