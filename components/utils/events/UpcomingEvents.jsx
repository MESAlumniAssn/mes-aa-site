import React, { Fragment, useContext, useEffect } from "react";
import Image from "next/image";
import SiteContext from "../../../context/siteContext";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";

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
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const UpcomingEvents = () => {
  const classes = useStyles();

  const siteContext = useContext(SiteContext);

  const { fetchEventByStatus, loading, setLoading, upcomingEvents } =
    siteContext;

  useEffect(() => {
    setLoading();
    fetchEventByStatus("upcoming");
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
    <Fragment>
      <div className={classes.eventContainer}>
        {upcomingEvents && upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => {
            return (
              <div key={index} style={{ display: "flex", marginTop: 30 }}>
                <p className={classes.numberedBullet}>{index + 1}</p>
                <EventSummary event={event} />
              </div>
            );
          })
        ) : (
          <div style={{ paddingTop: 20, color: "#87A7B3" }}>
            New events will be visible here!
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default UpcomingEvents;
