import React, { useContext, useEffect } from "react";
import SiteContext from "../../../context/siteContext";
import { motion } from "framer-motion";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  fundGridItemFund: {
    boxShadow: "0 10px 23px 5px rgba(0, 0, 0, 0.12)",
    borderRadius: "5px",
    padding: 20,
    cursor: "default",
  },
  fundGridItemHeading: { fontSize: "1.2rem", fontWeight: 800 },
  fundGridItemValue: { fontSize: "2rem", paddingTop: 10, fontWeight: 700 },
  rupeeSign: { fontSize: "1.7rem" },
});

const variants = {
  initial: {
    opacity: 0,
  },
  animate: { opacity: 1, transition: { duration: 0.7 } },
  hover: { scale: 1.06, transition: { duration: 0.2, ease: "easeInOut" } },
};

const FundStats = () => {
  const classes = useStyles();
  const siteContext = useContext(SiteContext);
  const { loading, metrics, generateMetricCounts } = siteContext;

  useEffect(() => {
    generateMetricCounts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      style={{ margin: "50px 0", textAlign: "center" }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.fundGridItemFund}
            style={{
              border: "3px solid #c449c2",
              color: "#c449c2",
              backgroundColor: "#fff5fd",
            }}
          >
            <Typography className={classes.fundGridItemHeading}>
              Total Registration Fees Collected:
            </Typography>
            <Typography className={classes.fundGridItemValue}>
              <FontAwesomeIcon
                icon={faRupeeSign}
                className={classes.rupeeSign}
              />{" "}
              {metrics.total_amount_collected}
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.fundGridItemFund}
            style={{
              border: "3px solid #233e8b",
              color: "#233e8b",
              backgroundColor: "#deedf0",
            }}
          >
            <Typography className={classes.fundGridItemHeading}>
              Total LM Fees Collected:
            </Typography>
            <Typography className={classes.fundGridItemValue}>
              <FontAwesomeIcon
                icon={faRupeeSign}
                className={classes.rupeeSign}
              />{" "}
              {metrics.total_amount_from_life_members}
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div
            variants={variants}
            whileHover="hover"
            className={classes.fundGridItemFund}
            style={{
              border: "3px solid #f21170",
              color: "#f21170",
              backgroundColor: "#fceef5",
            }}
          >
            <Typography className={classes.fundGridItemHeading}>
              Total AM Fees Collected:
            </Typography>
            <Typography className={classes.fundGridItemValue}>
              <FontAwesomeIcon
                icon={faRupeeSign}
                className={classes.rupeeSign}
              />{" "}
              {metrics.total_amount_from_annual_members}
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default FundStats;
