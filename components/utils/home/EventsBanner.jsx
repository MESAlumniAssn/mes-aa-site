import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faChevronCircleRight,
  faTimes,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundImage: "url('/images/landing/pattern.svg')",
    paddingTop: 20,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 99,
    boxShadow: "2px 15px 33px rgba(0, 0, 0, 0.4)",
  },
  events: {},
}));

const variants = {
  initial: {
    y: "100vh",
  },
  animate: {
    y: 0,
    transition: {
      delay: 5,
      duration: 2,
      type: "tween",
    },
  },
  exit: {
    y: "100vh",
    transition: { duration: 1 },
  },
};

const EventsBanner = ({ events }) => {
  const [showBanner, setShowBanner] = useState(true);
  const classes = useStyles();

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {showBanner &&
          JSON.parse(sessionStorage.getItem("aa__preferences"))["banner"] && (
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={classes.bannerContainer}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="timesButtonAnimation"
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
                onClick={() => {
                  setShowBanner(false);
                  sessionStorage.setItem(
                    "aa__preferences",
                    JSON.stringify({ banner: false })
                  );
                }}
              />
              <div>
                <Typography align="center" component="h3">
                  <span className="tertiaryHeading">
                    <FontAwesomeIcon
                      icon={faBullhorn}
                      style={{
                        color: "var(--secondary-color)",
                      }}
                    />{" "}
                    Upcoming Event Alert
                    {events.length && events.length === 1 ? null : "s"}
                  </span>
                </Typography>

                <Typography
                  align="center"
                  component="p"
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {events.map((event) => {
                    return (
                      <div style={{ fontSize: "1.2rem", marginBottom: 30 }}>
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          style={{
                            marginRight: 5,
                            color: "var(--secondary-color)",
                          }}
                        />
                        {event.name} on{" "}
                        <span style={{ fontWeight: "bold" }}>{event.date}</span>
                        <Link href={`/events/${event.event_id}`}>
                          <a>
                            <FontAwesomeIcon
                              icon={faChevronCircleRight}
                              style={{
                                marginLeft: 10,
                                fontSize: "1.5rem",
                                color: "var(--secondary-color)",
                              }}
                            />
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </Typography>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default EventsBanner;
