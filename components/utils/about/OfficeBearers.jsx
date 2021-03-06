import React from "react";
import Members from "./Members";

// Material UI imports
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "50px 0 0 0",
    backgroundImage: "url(/images/about/pattern1.svg)",
    position: "relative",
    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%)",
    zIndex: 50,
  },
  mcHeadingStyle: {
    borderBottom: "5px solid var(--secondary-color)",
    paddingBottom: 1,
    [theme.breakpoints.down("sm")]: {
      borderBottom: "none",
    },
  },
}));

const OfficeBearers = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth="xl" style={{ padding: "50px 0" }}>
        <Typography component="h2" align="center" gutterBottom>
          <span className="secondaryHeading">
            Say hello to the Management Committee
          </span>{" "}
          {/* <img
            src="/images/about/wave.svg"
            alt="Waving hand"
            className="wavingHandAnimation"
            width="40px"
          /> */}
        </Typography>
        <Typography
          component="h3"
          align="center"
          gutterBottom
          style={{
            fontWeight: "bold",
            margin: "50px 0 50px 0",
          }}
        >
          <span className="tertiaryHeading">Office Bearers</span>
        </Typography>
        <Members committeeData={props.committeeData} filter={"ob"} />

        <Typography
          component="h3"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold", margin: "50px 0" }}
        >
          <span className="tertiaryHeading">Management Committee Members</span>
        </Typography>
        <Members committeeData={props.committeeData} filter={"mc"} />
      </Container>
    </div>
  );
};

export default OfficeBearers;
