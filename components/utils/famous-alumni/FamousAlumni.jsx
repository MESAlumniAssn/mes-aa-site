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

const useStyles = makeStyles({
  parentContainer: {
    height: "100%",
    padding: "0 20px 40px 20px",
  },
  famousAlumniHeader: {
    padding: "100px 0 25px 0",
    textAlign: "center",
  },
  padmaAwardeesHeader: {
    margin: "75px 0 50px 0",
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
});

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
          variant="h1"
          component="h1"
          align="center"
          style={{ paddingLeft: 20, paddingRight: 20 }}
          className="styledHeading"
        >
          The Stars of MES
        </Typography>
      </div>
      <div>
        <Typography
          style={{ fontSize: "1.5rem", fontWeight: 700 }}
          align="center"
        >
          An ever-growing compendium of our alumni who emerged as front-runners
          in their respective vocations
        </Typography>
      </div>

      <div id="padma-awardees" style={{ margin: "0 30px" }}>
        <div className={classes.padmaAwardeesHeader}>
          <Typography
            component="h2"
            variant="h2"
            style={{ paddingRight: "10px" }}
          >
            Padma Awardees
          </Typography>
          {/* <Image
            src="/images/famous-alumni/padma-award.svg"
            alt="medal"
            height={35}
            width={35}
          /> */}
        </div>

        <Container maxWidth="md">
          <Grid container spacing={10}>
            {props.famousAlumni
              .filter((record) => {
                return record.award === "Padma Shri";
              })
              .map((awardee) => {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <div className={styles.cardPadma}>
                      <div className={styles.cardContentPadma}>
                        <div classname={styles.cardFront}>
                          <div className={styles.cardFrontContent}>
                            <Image
                              src="/images/famous-alumni/padma-award2.svg"
                              alt="Award photo"
                              height={25}
                              width={25}
                            />

                            <Typography
                              style={{
                                fontSize: "1.3rem",
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
