import React from "react";
import Image from "next/image";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Members = (props) => {
  return (
    <div>
      <Grid container justify="center" alignItems="center" spacing={8}>
        {props.committeeData
          .filter((role) => {
            return role.role === props.filter;
          })
          .map((member, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index} align="center">
                <div style={{}}>
                  {member.image_url ? (
                    <div className="mcImageBorder">
                      <Image
                        src={member.image_url}
                        alt={member.name}
                        height={185}
                        width={175}
                        className="mcImages"
                      />
                    </div>
                  ) : (
                    <Image
                      src={process.env.NEXT_PUBLIC_DEFAULT_IMAGE_URL}
                      alt={member.name}
                      height={175}
                      width={165}
                      className="mcImages"
                    />
                  )}
                  <Typography
                    display="block"
                    variant="subtitle"
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
                    {member.name}
                  </Typography>
                  {member.role === "ob" && (
                    <Typography
                      variant="subtitle"
                      component="subtitle"
                      align="center"
                      style={{ width: "100%" }}
                    >
                      {member.designation}
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
