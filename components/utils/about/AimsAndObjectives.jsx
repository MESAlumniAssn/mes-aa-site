import React from "react";
import aims from "../../../utils/aims";

//Material UI imports
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px 0",
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
  },
  aims: {
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
}));

// const AccordionSummary = withStyles({
//   content: {
//     flexGrow: 0,
//   },
// })(MuiAccordionSummary);

const AimsAndObjectives = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Accordion
          elevation={0}
          style={{ borderRadius: 0 }}
          className={{
            root: classes.MuiAccordionroot,
          }}
        >
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                style={{ fontSize: "2rem", color: "var(--primary-color)" }}
              />
            }
            aria-label="Expand to read the aims and objectives"
            style={{ borderLeft: "solid 5px var(--secondary-color)" }}
          >
            <Typography align="center" style={{ fontWeight: "bold" }}>
              <span className="secondaryHeading">Aims & Objectives</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.hideBorder}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {aims.map((aim, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: 15,
                    }}
                  >
                    <Typography component="body2" className={classes.aims}>
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        style={{
                          marginRight: 2,
                          fontSize: "1rem",
                          color: "var(--secondary-color)",
                        }}
                      />
                      &nbsp;{aim}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default AimsAndObjectives;
