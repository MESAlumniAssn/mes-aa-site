import React, { useState, useEffect, useContext } from "react";
import SiteContext from "../../../context/siteContext";
import { motion } from "framer-motion";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Component imports
import UpdatePaymentStatus from "./modals/UpdatePaymentStatus";
import JobStatus from "./modals/JobStatus";

const panelVariants = {
  hoverPaymentStatus: {
    backgroundColor: "#8E6B73",
    color: "#FFFFFF",
  },
  hoverJobStatus: {
    backgroundColor: "#2978B5",
    color: "#FFFFFF",
  },
  tap: {
    y: "2px",
  },
};

const useStyles = makeStyles((theme) => {
  return {
    parentContainer: {
      height: "100%",
    },
    panelHero: {
      margin: "50px 20px",
    },
    commonTileStyle: {
      padding: 20,
      fontWeight: "bold",
      fontSize: "1rem",
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0 10px 23px rgba(0, 0, 0, 0.1)",
    },
  };
});

const AdminPanel = () => {
  const siteContext = useContext(SiteContext);
  const { fetchJobStatus } = siteContext;

  useEffect(() => {
    fetchJobStatus();
  }, []);

  const classes = useStyles();

  const [paymentStatusOpen, setPaymentStatusOpen] = useState(false);
  const [jobStatusOpen, setJobStatusOpen] = useState(false);

  return (
    <div className={classes.parentContainer}>
      <div className={classes.panelHero}>
        <Grid container align="center" spacing={6}>
          <Grid item xs={12} md={4} lg={3}>
            <motion.div
              variants={panelVariants}
              whileTap="tap"
              whileHover="hoverPaymentStatus"
              className={classes.commonTileStyle}
              style={{
                backgroundColor: "#f6e5e9",
                border: "2px solid #4a1c40",
                color: "#4a1c40",
              }}
              onClick={() => setPaymentStatusOpen(true)}
            >
              UPDATE PAYMENT STATUS
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <motion.div
              variants={panelVariants}
              whileTap="tap"
              whileHover="hoverJobStatus"
              className={classes.commonTileStyle}
              style={{
                backgroundColor: "#D8E3E7",
                border: "2px solid #126E82",
                color: "#126E82",
              }}
              onClick={() => {
                fetchJobStatus();
                setJobStatusOpen(true);
              }}
            >
              JOB STATUS
            </motion.div>
          </Grid>
        </Grid>
        <UpdatePaymentStatus
          paymentStatusOpen={paymentStatusOpen}
          setPaymentStatusOpen={setPaymentStatusOpen}
        />
        <JobStatus
          jobStatusOpen={jobStatusOpen}
          setJobStatusOpen={setJobStatusOpen}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
