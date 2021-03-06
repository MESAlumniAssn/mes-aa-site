import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { EVENT_DEFAULT } from "../../../utils/images";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  eventSummaryContainer: {
    padding: "15px",
    margin: "20px 0",
    borderLeft: "6px solid #C24914",
    boxShadow: "0 3px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      margin: "15px 0",
      padding: "20px",
    },
  },
  eventDetailsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  eventImage: {
    marginRight: 30,
    height: 150,
    width: 150,
    outline: "3px solid #F15C1C",
    outlineOffset: 3,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20,
      marginRight: 0,
    },
  },
  eventInfo: {
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
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
  nameStyle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  secondaryContentStyle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  dateStyle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  coverPhoto: {
    borderRadius: 10,
  },
  buttonStyle: {
    color: "#FFF",
    fontSize: "1rem",
    fontWeight: 700,
    fontFamily: "Nunito sans",
    backgroundColor: "#C24914",
    borderRadius: 3,
    border: "none",
    margin: 0,
    "&:hover": {
      backgroundColor: "#682C0E",
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
      <div className={classes.eventDetailsContainer}>
        <div className={classes.eventImage}>
          {event.cover_photo ? (
            <Image
              src={event.cover_photo + "/tr:w-150,h-150"}
              alt="cover_photo"
              height={150}
              width={150}
              className={classes.coverPhoto}
            />
          ) : (
            <Image
              src={EVENT_DEFAULT}
              alt="cover_photo"
              height={150}
              width={150}
              className={classes.coverPhoto}
            />
          )}
        </div>
        <div className={classes.eventInfo}>
          <div style={{ marginBottom: 20 }}>
            <span className={classes.nameStyle}>{event.name}</span>
          </div>

          <div style={{ marginBottom: 20 }}>
            <span className={classes.secondaryContentStyle}>
              Venue: <span style={{ color: "#C24914" }}>{event.venue}</span>
            </span>
          </div>

          {event && event.chief_guest && (
            <div style={{ marginBottom: 20 }}>
              <span className={classes.secondaryContentStyle}>
                Chief Guest:{" "}
                <span style={{ color: "#C24914" }}>{event.chief_guest}</span>
              </span>
            </div>
          )}

          <div className={classes.eventDateContainer}>
            <p className={classes.dateStyle}>
              Date:{" "}
              <span style={{ color: "#C24914" }}>
                {event.date}&nbsp;
                {event.date === "TODAY" && (
                  <FontAwesomeIcon
                    icon={faBullhorn}
                    style={{ marginLeft: 3 }}
                  />
                )}
              </span>
            </p>
            <p className={classes.dateStyle}>
              Time: <span style={{ color: "#C24914" }}>{event.time}</span>
            </p>
          </div>
          <div style={{ marginTop: 20 }}>
            <Button
              variant="outlined"
              className={classes.buttonStyle}
              onClick={() => router.push(`/events/${event.event_id}`)}
            >
              Details
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventSummary;
