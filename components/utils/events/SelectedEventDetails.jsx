import React from "react";
import Link from "next/link";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import EventGallery from "./EventGallery";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  eventContainer: {
    margin: "150px 0 50px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  eventDetails: {
    padding: 20,
    boxShadow: "0 5px 11px rgba(0, 0, 0, 0.1)",
    borderLeft: "6px solid var(--contact-color)",
    width: 800,
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },
  eventTitle: {
    fontWeight: 600,
    whiteSpace: "pre-wrap",
    display: "block",
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
            <p style={{ fontWeight: "bold", margin: 0, color: "#87A7B3" }}>
              EVENT
            </p>
            <Typography component="h1" className={classes.eventTitle}>
              <span className="secondaryHeading">{event.name}</span>
            </Typography>
          </div>
          <div style={{ marginBottom: 25 }}>
            <p
              style={{
                fontWeight: "bold",
                margin: 0,
                color: "#87A7B3",
                paddingBottom: 10,
              }}
            >
              WHERE
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
                color: "#87A7B3",
                paddingBottom: 10,
              }}
            >
              WHEN
            </p>
            <Typography component="p" className={classes.eventTitle}>
              {event.date} <span style={{ color: "#87A7B3" }}>at</span>{" "}
              {event.time}
            </Typography>
          </div>
          <Divider style={{ marginBottom: 25 }} />
          <div style={{ marginBottom: 25 }}>
            <p className={classes.eventTitle}>{event.description}</p>
          </div>
        </div>
      </div>
      <div style={{ margin: "0 30px" }}>
        <EventGallery images={event.images} />
      </div>
    </div>
  );
};

export default SelectedEventDetails;
