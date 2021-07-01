import React, { useContext, useEffect } from "react";
import Image from "next/image";
import SiteContext from "../../../context/siteContext";
import { motion } from "framer-motion";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  countGridItemCount: {
    boxShadow: "0 10px 33px 10px rgba(0, 0, 0, 0.12)",
    borderRadius: "5px",
    padding: 25,
    height: 170,
    width: 170,
    cursor: "default",
  },
  countGridItemHeading: {
    fontSize: "0.9rem",
    fontWeight: 800,
    letterSpacing: "0.2px",
  },
  gridItemCountValue: { fontSize: "2.5rem", fontWeight: 700, paddingTop: 10 },
});

const PendingCountTooltip = withStyles({
  tooltip: {
    fontSize: "0.9rem",
    padding: 10,
    backgroundColor: "#f6d6ad",
    color: "#290001",
  },
})(Tooltip);

const variants = {
  initial: {
    opacity: 0,
  },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.06, transition: { duration: 0.2, ease: "easeInOut" } },
};

const Lighthouse = () => {
  const classes = useStyles();

  const siteContext = useContext(SiteContext);
  const { loading, metrics, generateMetricCounts } = siteContext;

  useEffect(() => {
    generateMetricCounts();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          margin: "100px 0",
        }}
      >
        <Image
          src={"/loader.svg"}
          alt={"Loading..."}
          height={100}
          width={100}
        />
      </div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      style={{ marginTop: 50 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.countGridItemCount}
            style={{
              border: "3px solid #72147e",
              color: "#72147e",
              backgroundColor: "#dbc6eb",
            }}
          >
            <Typography className={classes.countGridItemHeading}>
              Total Attempted Registrations:
            </Typography>
            <Typography align="center" className={classes.gridItemCountValue}>
              {metrics && metrics.total_registrations}
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.countGridItemCount}
            style={{
              border: "3px solid #206a5d",
              color: "#206a5d",
              backgroundColor: "#aacfcf",
            }}
          >
            <Typography className={classes.countGridItemHeading}>
              Successful Registrations:
            </Typography>
            <Typography align="center" className={classes.gridItemCountValue}>
              {metrics && metrics.successful_registrations}
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.countGridItemCount}
            style={{
              border: "3px solid #ff5200",
              color: "#ff5200",
              backgroundColor: "#f8d49d",
              position: "relative",
            }}
          >
            <Typography className={classes.countGridItemHeading}>
              Pending Registrations:
            </Typography>
            <Typography align="center" className={classes.gridItemCountValue}>
              {metrics && metrics.pending_registrations}
            </Typography>

            <div style={{ width: "100%" }}>
              <PendingCountTooltip
                title="Registration was aborted at the payment step either due to a technical issue or alumnus voluntarily did not proceed with payment"
                interactive
                leaveDelay={200}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={{
                      position: "absolute",
                      bottom: 5,
                      right: 5,
                      cursor: "pointer",
                      color: "#343434",
                    }}
                  />
                </div>
              </PendingCountTooltip>
            </div>
          </motion.div>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.countGridItemCount}
            style={{
              border: "3px solid #81b214",
              color: "#81b214",
              backgroundColor: "#dfeeea",
            }}
          >
            <Typography className={classes.countGridItemHeading}>
              Successful LM Registrations:
            </Typography>
            <Typography align="center" className={classes.gridItemCountValue}>
              {metrics && metrics.life_members}
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.countGridItemCount}
            style={{
              border: "3px solid #c06014",
              color: "#c06014",
              backgroundColor: "#ffcb91",
            }}
          >
            <Typography className={classes.countGridItemHeading}>
              Pending LM Registrations:
            </Typography>
            <Typography align="center" className={classes.gridItemCountValue}>
              {metrics && metrics.pending_life_members}
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.countGridItemCount}
            style={{
              border: "3px solid #519872",
              color: "#519872",
              backgroundColor: "#cff6cf",
            }}
          >
            <Typography className={classes.countGridItemHeading}>
              Successful AM Registrations:
            </Typography>
            <Typography align="center" className={classes.gridItemCountValue}>
              {metrics && metrics.annual_members}
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={6} sm={4} md={3} lg={2}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.countGridItemCount}
            style={{
              border: "3px solid #fd8c04",
              color: "#fd8c04",
              backgroundColor: "#f9e0ae",
            }}
          >
            <Typography className={classes.countGridItemHeading}>
              Pending AM Registrations:
            </Typography>
            <Typography align="center" className={classes.gridItemCountValue}>
              {metrics && metrics.pending_annual_members}
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Lighthouse;
