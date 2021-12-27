import React from "react";
import Link from "next/link";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import EventGallery from "./EventGallery";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faCalendarAlt,
  faMapMarkerAlt,
  faClock,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  eventContainer: {
    margin: "150px 30px 50px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "100px 20px 50px 20px",
    },
  },
  eventDetails: {
    padding: 20,
    boxShadow: "0 5px 11px rgba(0, 0, 0, 0.1)",
    borderLeft: "6px solid var(--contact-color)",
    background: "#F9FAFB",
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
    },
  },
  eventTitle: {
    fontWeight: 600,
  },
  eventDescription: {
    fontSize: "1.1rem",
    whiteSpace: "pre-wrap",
  },

  navigationLinkContainer: {
    paddingBottom: 25,
  },
  navigationLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "var(--contact-color)",
  },
  galleryContainer: {
    margin: "0 30px",
    [theme.breakpoints.down("sm")]: { margin: "0 10px" },
  },
}));

const SelectedEventDetails = ({ event }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.eventContainer}>
        <div className={classes.navigationLinkContainer}>
          <Link href="/events">
            <a className={classes.navigationLink}>
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                style={{ fontSize: "1.5rem", marginRight: 5 }}
              />

              <span
                style={{
                  textTransform: "uppercase",
                  color: "var(--primary-color)",
                }}
                className="styledLink"
              >
                Back to Events
              </span>
            </a>
          </Link>
        </div>
        <div className={classes.eventDetails}>
          <div style={{ marginBottom: 25 }}>
            <p style={{ fontWeight: "bold", margin: 0, color: "#4B5563" }}>
              <FontAwesomeIcon icon={faCalendarAlt} /> EVENT
            </p>
            <Typography component="h1" className={classes.eventTitle}>
              <span className="tertiaryHeading">{event.name}</span>
            </Typography>
          </div>
          <div style={{ marginBottom: 25 }}>
            <p
              style={{
                fontWeight: "bold",
                margin: 0,
                color: "#4B5563",
                paddingBottom: 10,
              }}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> WHERE
            </p>
            <Typography component="p" className={classes.eventTitle}>
              {event.venue}
            </Typography>
          </div>
          <div style={{ marginBottom: 25 }}>
            <p
              style={{
                fontWeight: "bold",
                margin: 0,
                color: "#4B5563",
                paddingBottom: 10,
              }}
            >
              <FontAwesomeIcon icon={faClock} /> WHEN
            </p>
            <Typography component="p" className={classes.eventTitle}>
              {event.date} <span style={{ color: "#4B5563" }}>at</span>{" "}
              {event.time}
            </Typography>
          </div>
          <div style={{ marginBottom: 25 }}>
            <p
              style={{
                fontWeight: "bold",
                margin: 0,
                color: "#4B5563",
                paddingBottom: 10,
              }}
            >
              <FontAwesomeIcon icon={faCrown} /> CHIEF GUEST
            </p>
            <Typography component="p" className={classes.eventTitle}>
              {event.chief_guest}
            </Typography>
          </div>
          <Divider style={{ marginBottom: 25, background: "#4B5563" }} />
          <div style={{ marginBottom: 25 }}>
            <p className={classes.eventDescription}>{event.description}</p>
          </div>
        </div>
      </div>
      <div className={classes.galleryContainer}>
        <EventGallery images={event.images} />
      </div>
    </div>
  );
};

export default SelectedEventDetails;
