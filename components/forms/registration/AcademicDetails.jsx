import React, { useEffect } from "react";

import SelectField from "../FormFields/SelectField";
import RadioGroupField from "../FormFields/RadioGroupField";
import { fromYears, toYears } from "../../../utils/years";
import { puc, degree, pg, others } from "../../../utils/courseStreams";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Component imports
import Chips from "../../utils/generic/Chips";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  radioTitle: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#c87941",
  },
});

const AcademicDetails = (props) => {
  const {
    formField: {
      fromYear,
      toYear,
      streamPuc,
      streamDegree,
      streamPg,
      streamOthers,
    },
  } = props;

  const classes = useStyles();

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

      <Grid container justify="flex-start" alignItems="center" spacing={3}>
        <Grid item>
          <Typography>
            <span className="subtitle" style={{ fontWeight: "bold" }}>
              How long did you study in MES College, Malleshwaram?
            </span>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        justify="space-evenly"
        alignItems="center"
        spacing={4}
        style={{ marginBottom: 40 }}
      >
        <Grid item xs={6}>
          <SelectField
            name={fromYear.name}
            label={fromYear.label}
            data={fromYears()}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectField
            name={toYear.name}
            label={toYear.label}
            data={toYears(props.formProps.values.fromYear)}
          />
        </Grid>
      </Grid>

      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Typography gutterBottom>
            <span className="subtitle" style={{ fontWeight: "bold" }}>
              What course(s) did you study?
            </span>
          </Typography>
          {/* <Typography variant="subtitle2" component="subtitle2" gutterBottom>
            Select{" "}
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              one
            </span>{" "}
            or{" "}
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              more
            </span>{" "}
            streams
          </Typography> */}
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography className={classes.radioTitle}>
            <FontAwesomeIcon icon={faGraduationCap} /> Pre-university
          </Typography>
          <RadioGroupField name={streamPuc.name} data={puc} />
          <br />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.radioTitle}>
            <FontAwesomeIcon icon={faGraduationCap} /> Degree
          </Typography>
          <RadioGroupField name={streamDegree.name} data={degree} />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.radioTitle}>
            <FontAwesomeIcon icon={faGraduationCap} /> Post Graduation
          </Typography>
          <RadioGroupField name={streamPg.name} data={pg} />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.radioTitle}>
            <FontAwesomeIcon icon={faGraduationCap} /> Others
          </Typography>
          <RadioGroupField name={streamOthers.name} data={others} />
        </Grid>

        {props.formProps.errors.streamOthers && (
          <Typography
            color="error"
            component="caption"
            variant="caption"
            align="center"
            style={{ marginTop: -15, paddingBottom: 10, width: "100%" }}
          >
            {props.formProps.errors.streamOthers}
          </Typography>
        )}

        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Button
              variant="contained"
              size="small"
              endIcon={
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{
                    color: "#87431d",
                    fontSize: "1rem",
                  }}
                />
              }
              style={{
                color: "#290001",
                fontWeight: 700,
                fontSize: "0.9rem",
                backgroundColor: "#fbe6d4",
              }}
              onClick={() => {
                props.formProps.setFieldValue("streamPuc", "");
                props.formProps.setFieldValue("streamDegree", "");
                props.formProps.setFieldValue("streamPg", "");
                props.formProps.setFieldValue("streamOthers", "");
              }}
            >
              Clear Course Selection
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AcademicDetails;
