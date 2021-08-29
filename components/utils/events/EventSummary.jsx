import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  eventSummaryContainer: {
    width: 700,
    padding: "10px 15px",
    margin: "20px 0",
    borderLeft: "6px solid var(--contact-color)",
    boxShadow: "0 3px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      margin: "15px 0",
      width: 325,
    },
  },
  eventDateContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "0.9rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  nameStyle: { fontSize: "1.2rem", fontWeight: "bold" },
  secondaryContentStyle: {
    fontSize: "1rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem",
    },
  },
  dateStyle: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem",
    },
  },

  buttonStyle: {
    color: "#FFF",
    fontSize: "0.9rem",
    fontWeight: 700,
    fontFamily: "Nunito sans",
    backgroundColor: "#D79771",
    borderRadius: 3,
    margin: 0,
    "&:hover": {
      backgroundColor: "#753422",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  },
}));

const variants = {
  hover: {
    scale: 1.01,
    transition: {
      ease: "easeInOut",
    },
  },
};

const EventSummary = ({ event }) => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <motion.div
      variants={variants}
      whileHover="hover"
      className={classes.eventSummaryContainer}
    >
      <div>
        <div style={{ marginBottom: 20 }}>
          <span className={classes.nameStyle}>{event.name}</span>
        </div>

        <div style={{ marginBottom: 20 }}>
          <span className={classes.secondaryContentStyle}>
            Venue: <span style={{ color: "#D79771" }}>{event.venue}</span>
          </span>
        </div>

        {event && event.chief_guest && (
          <div style={{ marginBottom: 20 }}>
            <span className={classes.secondaryContentStyle}>
              Chief Guest:{" "}
              <span style={{ color: "#D79771" }}>{event.chief_guest}</span>
            </span>
          </div>
        )}

        <div className={classes.eventDateContainer}>
          <p className={classes.dateStyle}>
            Date: <span style={{ color: "#D79771" }}>{event.date}</span>
          </p>
          <p className={classes.dateStyle}>
            Time: <span style={{ color: "#D79771" }}>{event.time}</span>
          </p>

          <Button
            variant="outlined"
            className={classes.buttonStyle}
            onClick={() => router.push(`/events/${event.event_id}`)}
          >
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventSummary;
