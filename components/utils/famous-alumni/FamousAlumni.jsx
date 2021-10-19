import React from "react";
import Image from "next/image";
import styles from "../../../styles/FamousAlumni.module.css";
import { motion } from "framer-motion";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// Component imports
import FamousALumniAccordion from "./FamousAlumniAccordion";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    height: "100%",
    padding: "0 20px 40px 20px",
  },
  famousAlumniHeader: {
    padding: "100px 0 0 0",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 75,
    },
  },
  padmaAwardeesHeader: {
    margin: "50px 0 50px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  padmaAwardeesList: {
    margin: "25px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  padmaAwardeesRecipients: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitleText: {
    fontWeight: 600,
    paddingTop: 20,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
}));

const variants = {
  animate: {
    cursor: "default",
    y: "-10px",
    transition: { duration: 0.4, ease: "easeInOut" },
    boxShadow: "0 10px 25px (0,0,0,0.1)",
  },
};

const FamousAlumni = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.parentContainer}>
      <div className={classes.famousAlumniHeader}>
        <Typography
          component="h1"
          align="center"
          style={{ paddingLeft: 20, paddingRight: 20 }}
          className="styledHeading"
        >
          <span className="mainHeading">Our Stars</span>
        </Typography>
      </div>
      <div>
        <Typography className={classes.subtitleText}>
          <span className="subtitle">
            An ever-growing compendium of our alumni who emerged as
            front-runners in their respective vocations
          </span>
        </Typography>
      </div>

      <div id="padma-awardees" style={{ margin: 0 }}>
        <div className={classes.padmaAwardeesHeader}>
          <Typography component="h2">
            <span className="secondaryHeading divStylingSecondary">
              Padma Awardees
            </span>
          </Typography>
          {/* <Image
            src="/images/famous-alumni/padma-award.svg"
            alt="medal"
            height={35}
            width={35}
          /> */}
        </div>

        <Container>
          <Grid container spacing={5}>
            {props.famousAlumni
              .filter((record) => {
                return record.award && record.award.includes("Padma");
              })
              .map((awardee, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <div className={styles.cardPadmaContainer}>
                      <div className={styles.cardPadma}>
                        <div className={styles.cardContentPadma}>
                          <div className={styles.cardFront}>
                            <div className={styles.cardFrontContent}>
                              <Image
                                src={awardee.image}
                                alt="Award photo"
                                height={200}
                                width={180}
                              />

                              <Typography
                                style={{
                                  fontSize: "1.2rem",
                                  fontWeight: 800,
                                  marginTop: 10,
                                }}
                                align="center"
                                gutterBottom
                              >
                                {awardee.name}
                              </Typography>
                            </div>
                            <div className={styles.cardFlipIcon}>
                              <Image
                                src={"/images/famous-alumni/360.svg"}
                                alt="Flip card"
                                height={25}
                                width={25}
                              />
                            </div>
                          </div>

                          <div className={styles.cardBack}>
                            <Typography
                              style={{ fontSize: "1.1rem", fontWeight: 600 }}
                              align="center"
                              gutterBottom
                            >
                              Awarded{" "}
                              <span style={{ fontWeight: 900 }}>
                                {awardee.award}
                              </span>{" "}
                              in {awardee.year} for {awardee.category}
                            </Typography>

                            {awardee.batch && (
                              <Typography
                                style={{
                                  fontSize: "0.9rem",
                                }}
                                align="center"
                                gutterBottom
                              >
                                Batch of{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  {awardee.batch}
                                </span>
                              </Typography>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </div>

      <FamousALumniAccordion famousAlumni={props.famousAlumni} />
    </div>
  );
};

export default FamousAlumni;
