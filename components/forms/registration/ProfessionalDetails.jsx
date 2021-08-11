import React, { useEffect } from "react";

import InputField from "../FormFields/InputField";
import SelectField from "../FormFields/SelectField";
import industryList from "../../../utils/industries";
import Chips from "../../utils/generic/Chips";

// Material UI imports
import Grid from "@material-ui/core/Grid";

const ProfessionalDetails = (props) => {
  const {
    formField: { profession, interest, vision },
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
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <SelectField
            name={profession.name}
            label={profession.label}
            data={industryList}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <InputField
            name={interest.name}
            label={interest.label}
            fullWidth
            multiline
            rows={4}
            helperText={
              "You can list you hobbies or anything you do outside of your professional life like charity work, association with NGO's or non-profit's etc..."
            }
          />
        </Grid>

        <Grid item xs={12}>
          <InputField
            name={vision.name}
            label={vision.label}
            fullWidth
            multiline
            rows={4}
            helperText={
              "This is your association. Tell us what you would like to get out of it."
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfessionalDetails;
