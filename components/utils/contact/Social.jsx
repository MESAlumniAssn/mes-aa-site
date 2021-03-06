import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FACEBOOK_LOGO,
  TWITTER_LOGO,
  INSTAGRAM_LOGO,
} from "../../../utils/images";
import {
  facebookProfile,
  twitterProfile,
  instagramProfile,
} from "../../../utils/associationDetails";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

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
    <div style={{ margin: "50px 0" }}>
      <Typography
        component="h2"
        align="center"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        <span className="secondaryHeading">Feeling Social?</span>
      </Typography>
      <Typography align="center" gutterBottom style={{ fontWeight: "bold" }}>
        <span className="subtitle">Connect with us</span>
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
            <Link href={facebookProfile} passHref={true}>
              <a target="_blank" rel="noopener">
                <Image
                  src={FACEBOOK_LOGO}
                  alt="Facebook"
                  height={50}
                  width={50}
                />
              </a>
            </Link>
          </Grid>

          <Grid item xs={3} align="center">
            <Link href={twitterProfile} passHref={true}>
              <a target="_blank" rel="noopener">
                <Image
                  src={TWITTER_LOGO}
                  alt="Twitter"
                  height={50}
                  width={50}
                />
              </a>
            </Link>
          </Grid>
          <Grid item xs={3} align="center">
            <Link href={instagramProfile} passHref={true}>
              <a target="_blank" rel="noopener">
                <Image
                  src={INSTAGRAM_LOGO}
                  alt="Instagram"
                  height={50}
                  width={50}
                />
              </a>
            </Link>
          </Grid>
          {/* <Grid item xs={3} align="center">
            <Link href="https://youtube.com" passHref={true}>
              <a target="_blank">
                <Image
                  src={"/images/social/youtube.svg"}
                  alt="Youtube"
                  height={50}
                  width={50}
                />
              </a>
            </Link>
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
};

export default Social;
