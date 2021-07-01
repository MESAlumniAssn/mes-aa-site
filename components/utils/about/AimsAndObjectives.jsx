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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
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
                style={{ fontSize: "2rem", color: "#343434" }}
              />
            }
            aria-label="Expand to read the aims and objectives"
            style={{ borderLeft: "solid 5px var(--secondary-color)" }}
          >
            <Typography
              variant="h3"
              component="h3"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Our Aims & Objectives
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.hideBorder}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {aims.map((aim) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: 15,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      style={{ marginRight: 8, fontSize: "20px" }}
                    />
                    <Typography variant="body1">{aim}</Typography>
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
