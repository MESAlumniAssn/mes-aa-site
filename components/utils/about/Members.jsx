import React from "react";
import { DEFAULT_MC } from "../../../utils/images";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Members = (props) => {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        {props.committeeData
          .filter((role) => {
            return role.role === props.filter;
          })
          .map((member, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} align="center">
                <div style={{ paddingBottom: 40 }}>
                  {member.image_url ? (
                    <div
                      className={`mcImageBorder ${
                        member.role === "ob"
                          ? "obImageBorderColor"
                          : "mcImageBorderColor"
                      }`}
                    >
                      <img
                        src={member.image_url + "/tr:w-250"}
                        alt={member.name}
                        height="250px"
                        width="250px"
                        className="mcImages"
                      />
                    </div>
                  ) : (
                    <img
                      src={DEFAULT_MC + "/tr:w-250"}
                      alt="Default image"
                      height="250px"
                      width="250px"
                      className="mcImages"
                    />
                  )}
                  <Typography
                    display="block"
                    component="p"
                    align="center"
                    style={{
                      fontSize: "1.2rem",
                      block: "true",
                      width: "100%",
                      fontWeight: "bold",
                      padding: "20px 0 0 0",
                    }}
                  >
                    <span>{member.name}</span>
                  </Typography>
                  {member.role === "ob" && (
                    <Typography
                      component="p"
                      align="center"
                      style={{ width: "100%", margin: 0 }}
                    >
                      <span>{member.designation}</span>
                    </Typography>
                  )}
                </div>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Members;
