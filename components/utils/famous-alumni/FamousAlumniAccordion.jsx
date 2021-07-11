import React from "react";
import Image from "next/image";
import styles from "../../../styles/FamousAlumni.module.css";

// Material UI imports
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
  },
  starsList: {
    margin: "100px 0 70px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  accordionHeading: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
}));

const variants = {
  animate: {
    cursor: "default",
    scale: 1.05,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const FamousAlumniAccordion = (props) => {
  const classes = useStyles();

  var groupedCategory = props.famousAlumni.reduce((acc, obj) => {
    let categoryKey = obj["category"];

    (acc[categoryKey]
      ? acc[categoryKey]
      : (acc[categoryKey] = null || [])
    ).push(obj);
    return acc;
  }, {});

  // Object.keys(groupedCategory).map((item, index) => {
  //   console.log(groupedCategory[item]);
  // });

  // const getEmoji = (category) => {
  //   switch (category) {
  //     case "Sports":
  //       return <span>&#9917;</span>;
  //     case "Music & Arts":
  //       return <span>&#127925;</span>;
  //     case "Business":
  //       return <span>&#128200;</span>;
  //     case "Politics":
  //       return <span>&#128499;</span>;
  //     case "Defence":
  //       return <span>&#127941;</span>;
  //     case "Academics":
  //       return <span>&#127891;</span>;
  //     case "Science & Technology":
  //       return <span>&#128300;</span>;
  //     case "Science & Engineering":
  //       return <span>&#128208;</span>;
  //     default:
  //       return <span>&#11088;</span>;
  //   }
  // };

  return (
    <div style={{ margin: "0 0 50px 0" }}>
      <div className={classes.starsList}>
        <Typography component="h2" align="center">
          <span className="secondaryHeading divStylingSecondary">
            Stars by Discipline
          </span>
        </Typography>
      </div>

      <Container maxWidth="md">
        {Object.keys(groupedCategory).map((item, index) => {
          return (
            <Accordion
              key={index}
              elevation={0}
              className={{
                root: classes.MuiAccordionroot,
              }}
              style={{
                boxShadow: "0 20px 31px rgba(0, 0, 0, 0.1)",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <FontAwesomeIcon
                    icon={faChevronCircleDown}
                    style={{
                      color: "var(--primary-color)",
                    }}
                  />
                }
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    padding: 10,
                  }}
                  className={classes.accordionHeading}
                >
                  {item}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  spacing={5}
                  style={{
                    backgroundColor: "rgba(253, 239, 220, 0.1)",
                    paddingBottom: 20,
                  }}
                  align="center"
                >
                  {groupedCategory[item].map((alumnus, index) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <div className={styles.cardOther}>
                          <div className={styles.cardContentOther}>
                            <div className={styles.cardFront}>
                              <div className={styles.cardFrontContent}>
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{
                                    fontSize: "1.5rem",
                                    color: "#ffc996",
                                    marginBottom: 10,
                                    marginTop: -5,
                                  }}
                                />
                                <Typography
                                  align="center"
                                  style={{
                                    fontSize: "1.3rem",
                                    fontWeight: 900,
                                  }}
                                >
                                  {alumnus.name}
                                </Typography>

                                {alumnus.batch && (
                                  <Typography
                                    align="center"
                                    style={{
                                      fontSize: "0.8rem",
                                      fontWeight: 600,
                                    }}
                                  >
                                    Batch of{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                      {alumnus.batch}
                                    </span>
                                  </Typography>
                                )}
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
                                gutterBottom
                              >
                                {alumnus.description}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </div>
  );
};

export default FamousAlumniAccordion;
