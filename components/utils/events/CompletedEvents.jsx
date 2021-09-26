import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import SiteContext from "../../../context/siteContext";
import { motion } from "framer-motion";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

// Fontawesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Component imports
import EventSummary from "./EventSummary";

const useStyles = makeStyles((theme) => ({
  eventContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  numberedBullet: {
    fontSize: "1.5rem",
    marginRight: 10,
    backgroundColor: "#C24914",
    padding: "10px 15px",
    height: "20%",
    color: "#ffffff",
    fontWeight: "bold",
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      padding: "5px 10px",
      marginRight: 2,
    },
  },
  buttonStyle: {
    outline: "none",
    border: "none",
    backgroundColor: "var(--primary-color)",
    padding: "15px",
    width: "200px",
    color: "#FFF",
    fontSize: "var(--button-font-size)",
    borderRadius: "10px",
    letterSpacing: "1px",
    boxShadow: "0 13px 27px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    textTransform: "uppercase",
  },
}));

const CompletedEvents = () => {
  const [count, setCount] = useState(5);
  const classes = useStyles();

  const siteContext = useContext(SiteContext);

  const {
    fetchEventByStatus,
    loading,
    setLoading,
    completedEvents,
    searchEvents,
  } = siteContext;

  useEffect(() => {
    setLoading();
    fetchEventByStatus("completed");
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image src="/loader.svg" alt="Loading..." height={50} width={50} />
      </div>
    );
  }

  return (
    <div className={classes.eventContainer}>
      <TextField
        label="Search Event"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faSearch} style={{ color: "#b9ac92" }} />
            </InputAdornment>
          ),
        }}
        onChange={(e) => searchEvents(e.target.value)}
        style={{ margin: "20px 0" }}
      />
      {completedEvents && completedEvents.length > 0 ? (
        completedEvents.slice(0, count).map((event, index) => {
          return (
            <div key={index} style={{ display: "flex", marginTop: 30 }}>
              <p className={classes.numberedBullet}>{index + 1}</p>
              <EventSummary event={event} />
            </div>
          );
        })
      ) : (
        <div style={{ paddingTop: 20, color: "#87A7B3" }}>No events found</div>
      )}

      {completedEvents && completedEvents.length > count && (
        <div style={{ marginTop: 30 }}>
          <button
            className={classes.buttonStyle}
            onClick={() => setCount(count + 5)}
          >
            Load Events
          </button>
        </div>
      )}
    </div>
  );
};

export default CompletedEvents;
