import React from "react";
import contact from "../../../utils/contactDetails";

// Material UI imports
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

const OfficeBearerContacts = () => {
  return (
    <div style={{ margin: "100px 0" }}>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Contact the Committee Members
      </Typography>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={6}
        style={{ paddingTop: "20px" }}
      >
        {contact.map((contact) => {
          return (
            <Grid item xs={12} sm={4}>
              <div
                style={{
                  borderRadius: "5px",
                  borderLeft: "5px solid #B9AC92",
                  padding: 15,
                  boxShadow: "0 15px 22px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                }}
              >
                <Typography
                  style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  gutterBottom
                >
                  {contact.designation}
                </Typography>
                <Divider style={{ backgroundColor: "#B9AC92" }} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: 10,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    style={{ marginRight: 7, color: "#B9AC92" }}
                  />
                  <Typography style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {contact.contact}
                  </Typography>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OfficeBearerContacts;
