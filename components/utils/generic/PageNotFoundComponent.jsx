import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    width: 120,
    padding: "10px 0",
    borderRadius: 20,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "0.8rem",
    fontWeight: "bold",
    fontFamily: "Nunito Sans",
    color: "#FFF",
    border: "none",
    cursor: "pointer",
    letterSpacing: 1,
    boxShadow: "0 4px 8px rgba(106, 73, 43, 0.5)",
  },
}));

const variants = {
  tap: {
    y: "2px",
  },
};

const PageNotFoundComponent = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 10px",
      }}
    >
      <Typography
        component="h1"
        style={{ fontSize: "4rem", fontWeight: "bold" }}
      >
        OOPS!
      </Typography>
      <Image
        src="/images/404/404.svg"
        alt="Page not found"
        height={300}
        width={600}
      />
      <Typography
        align="center"
        style={{ margin: 10, fontWeight: "bold", fontSize: "1.5rem" }}
      >
        We did not find that page
      </Typography>
      <Typography align="center" style={{ margin: 5, fontSize: "1.2rem" }}>
        Perhaps you could try one of these pages instead?
      </Typography>

      <Container maxWidth="sm" style={{ marginTop: 20 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={6}>
          <Grid item xs={6} lg={3} align="center">
            <motion.button
              variants={variants}
              whileTap="tap"
              className={classes.buttonStyle}
              style={{ backgroundColor: "#9E7777" }}
              onClick={() => router.push("/")}
            >
              Home
            </motion.button>
          </Grid>
          <Grid item xs={6} lg={3} align="center">
            <motion.button
              variants={variants}
              whileTap="tap"
              className={classes.buttonStyle}
              style={{ backgroundColor: "#91684A" }}
              onClick={() => router.push("/pricing")}
            >
              Membership
            </motion.button>
          </Grid>
          <Grid item xs={6} lg={3} align="center">
            <motion.button
              variants={variants}
              whileTap="tap"
              className={classes.buttonStyle}
              style={{ backgroundColor: "#A0937D" }}
              onClick={() => router.push("/events")}
            >
              Events
            </motion.button>
          </Grid>
          <Grid item xs={6} lg={3} align="center">
            <motion.button
              variants={variants}
              whileTap="tap"
              className={classes.buttonStyle}
              style={{ backgroundColor: "#897853" }}
              onClick={() => router.push("/blog")}
            >
              Blog
            </motion.button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PageNotFoundComponent;
