import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SiteContext from "../../../context/siteContext";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { toast } from "react-toastify";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  countGridItemCount: {
    boxShadow: "0 10px 33px 10px rgba(0, 0, 0, 0.12)",
    borderRadius: "5px",
    padding: 25,
    height: 170,
    width: 170,
    cursor: "default",
    [theme.breakpoints.down("sm")]: {
      padding: 7,
      height: 125,
      width: 125,
    },
  },
  countGridItemHeading: {
    fontSize: "0.9rem",
    fontWeight: 800,
    letterSpacing: "0.2px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  gridItemCountValue: {
    fontSize: "2.5rem",
    fontWeight: 700,
    paddingTop: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
}));

// const PendingCountTooltip = withStyles({
//   tooltip: {
//     fontSize: "0.9rem",
//     padding: 10,
//     backgroundColor: "#f6d6ad",
//     color: "#290001",
//   },
// })(Tooltip);

const variants = {
  initial: {
    opacity: 0,
  },
  animate: { opacity: 1 },
  hover: { scale: 1.06 },
};

const sessionExpiredToast = () =>
  toast.dark("Your session has expired. Please login again.", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

const Lighthouse = () => {
  const classes = useStyles();
  const router = useRouter();

  const siteContext = useContext(SiteContext);
  const { loading, metrics, generateMetricCounts, dashboardError } =
    siteContext;

  useEffect(() => {
    generateMetricCounts();
  }, []);

  useEffect(() => {
    if (dashboardError && dashboardError) {
      localStorage.removeItem("mesAAToken");
      sessionExpiredToast();
      setTimeout(
        () => router.push(`/dashboard/${process.env.NEXT_PUBLIC_ADMIN_ID}`),
        2000
      );
    }
  }, [dashboardError]);

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
    <div>
      {metrics && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          style={{ marginTop: 50 }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
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
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.total_registrations) || 0}
                    duration={3}
                  />
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
                  Completed Registrations:
                </Typography>
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.successful_registrations) || 0}
                    duration={3}
                  />
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <motion.div
                variants={variants}
                whileHover="hover"
                className={classes.countGridItemCount}
                style={{
                  border: "3px solid #FF8E01",
                  color: "#FF8E01",
                  backgroundColor: "#f8d49d",
                  position: "relative",
                }}
              >
                <Typography className={classes.countGridItemHeading}>
                  Pending Registrations:
                </Typography>
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.pending_registrations) || 0}
                    duration={3}
                  />
                </Typography>

                {/* <div style={{ width: "100%" }}>
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
                      color: "var(--primary-color)",
                    }}
                  />
                </div>
              </PendingCountTooltip>
            </div> */}
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
                  Completed LM Registrations:
                </Typography>
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.life_members) || 0}
                    duration={3}
                  />
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
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.pending_life_members) || 0}
                    duration={3}
                  />
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
                  Completed AM Registrations:
                </Typography>
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.annual_members) || 0}
                    duration={3}
                  />
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
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.pending_annual_members) || 0}
                    duration={3}
                  />
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <motion.div
                variants={variants}
                whileHover="hover"
                className={classes.countGridItemCount}
                style={{
                  border: "3px solid #FF3D68",
                  color: "#FF3D68",
                  backgroundColor: "#FFBCBC",
                }}
              >
                <Typography className={classes.countGridItemHeading}>
                  Expired Memberships:
                </Typography>
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.expired_memberships) || 0}
                    duration={3}
                  />
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <motion.div
                variants={variants}
                whileHover="hover"
                className={classes.countGridItemCount}
                style={{
                  border: "3px solid #BBBBBB",
                  color: "#BBBBBB",
                  backgroundColor: "#082032",
                }}
              >
                <Typography className={classes.countGridItemHeading}>
                  Online Payments:
                </Typography>
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.online_payments) || 0}
                    duration={3}
                  />
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <motion.div
                variants={variants}
                whileHover="hover"
                className={classes.countGridItemCount}
                style={{
                  border: "3px solid #082032",
                  color: "#082032",
                  backgroundColor: "#BBBBBB",
                }}
              >
                <Typography className={classes.countGridItemHeading}>
                  Manual Payments:
                </Typography>
                <Typography
                  align="center"
                  className={classes.gridItemCountValue}
                >
                  <CountUp
                    end={(metrics && metrics.manual_payments) || 0}
                    duration={3}
                  />
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      )}
    </div>
  );
};

export default Lighthouse;
