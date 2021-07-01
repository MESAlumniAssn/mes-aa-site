import React from "react";
import Link from "next/link";
import Image from "next/image";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const theme = createMuiTheme();

const useStyles = makeStyles({
  socialIconsContainer: {
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
});

const Social = () => {
  const classes = useStyles();
  return (
    <div style={{ margin: "100px 0" }}>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Feeling Social?
      </Typography>
      <Typography
        align="center"
        gutterBottom
        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
      >
        Connect with us
      </Typography>
      <div className={classes.socialIconsContainer}>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={1}
          style={{ paddingTop: 30 }}
        >
          <Grid item xs={3} align="center">
            <Link href="https://facebook.com" passHref={true}>
              <a target="_blank">
                <Image
                  src={"/images/social/facebook.svg"}
                  alt="Facebook"
                  height={60}
                  width={60}
                />
              </a>
            </Link>
          </Grid>

          <Grid item xs={3} align="center">
            <Link href="https://twitter.com" passHref={true}>
              <a target="_blank">
                <Image
                  src={"/images/social/twitter.svg"}
                  alt="Twitter"
                  height={60}
                  width={60}
                />
              </a>
            </Link>
          </Grid>
          <Grid item xs={3} align="center">
            <Link href="https://instagram.com" passHref={true}>
              <a target="_blank">
                <Image
                  src={"/images/social/instagram.svg"}
                  alt="Instagram"
                  height={60}
                  width={60}
                />
              </a>
            </Link>
          </Grid>
          <Grid item xs={3} align="center">
            <Link href="https://youtube.com" passHref={true}>
              <a target="_blank">
                <Image
                  src={"/images/social/youtube.svg"}
                  alt="Youtube"
                  height={60}
                  width={60}
                />
              </a>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Social;
