import React from "react";
import Image from "next/image";
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
                      <Image
                        src={member.image_url}
                        alt={member.name}
                        height={245}
                        width={235}
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
                    component="p"
                    align="center"
                    gutterBottom
                    style={{
                      fontSize: "1.2rem",
                      block: "true",
                      width: "100%",
                      fontWeight: "bold",
                      padding: "10px 0",
                    }}
                  >
                    <span>{member.name}</span>
                  </Typography>
                  {member.role === "ob" && (
                    <Typography
                      component="p"
                      align="center"
                      style={{ width: "100%" }}
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
