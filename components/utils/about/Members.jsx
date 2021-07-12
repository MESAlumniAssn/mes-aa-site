import React from "react";
import Image from "next/image";
import { DEFAULT_MC } from "../../../utils/images";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Members = (props) => {
  return (
    <div>
      <Grid container justify="center" alignItems="center" spacing={6}>
        {props.committeeData
          .filter((role) => {
            return role.role === props.filter;
          })
          .map((member, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index} align="center">
                <div>
                  {member.image_url ? (
                    <div
                      className={`mcImageBorder ${
                        member.role === "ob"
                          ? "obImageBorderColor"
                          : "mcImageBorderColor"
                      }`}
                    >
                      <Image
                        src={member.image_url}
                        alt={member.name}
                        height={255}
                        width={245}
                        className="mcImages"
                      />
                    </div>
                  ) : (
                    <Image
                      src={DEFAULT_MC}
                      alt="Default image"
                      height={255}
                      width={245}
                      className="mcImages"
                    />
                  )}
                  <Typography
                    display="block"
                    component="subtitle"
                    align="center"
                    gutterBottom
                    style={{
                      block: "true",
                      width: "100%",
                      fontWeight: "bold",
                      padding: "10px 0",
                    }}
                  >
                    <span className="subtitle">{member.name}</span>
                  </Typography>
                  {member.role === "ob" && (
                    <Typography
                      component="subtitle"
                      align="center"
                      style={{ width: "100%" }}
                    >
                      <span className="subtitle">{member.designation}</span>
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
