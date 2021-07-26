import React, { useState } from "react";
import { motion } from "framer-motion";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Component imports
import UpdatePaymentStatus from "./modals/UpdatePaymentStatus";

const panelVariants = {
  hoverPaymentStatus: {
    backgroundColor: "#8E6B73",
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
  };
});

const AdminPanel = () => {
  const classes = useStyles();

  const [paymentStatusOpen, setPaymentStatusOpen] = useState(false);

  return (
    <div className={classes.parentContainer}>
      <div className={classes.panelHero}>
        <Grid container align="center">
          <Grid item xs={12} md={4} lg={3}>
            <motion.div
              variants={panelVariants}
              whileTap="tap"
              whileHover="hoverPaymentStatus"
              style={{
                padding: 20,
                backgroundColor: "#f6e5e9",
                border: "2px solid #4a1c40",
                color: "#4a1c40",
                fontWeight: "bold",
                fontSize: "1.2rem",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 10px 23px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => setPaymentStatusOpen(true)}
            >
              PAYMENT STATUS
            </motion.div>
          </Grid>
        </Grid>
        <UpdatePaymentStatus
          paymentStatusOpen={paymentStatusOpen}
          setPaymentStatusOpen={setPaymentStatusOpen}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
