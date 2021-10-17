import React, { useState } from "react";
import PropTypes from "prop-types";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Component imports
import UpcomingEvents from "./UpcomingEvents";
import CompletedEvents from "./CompletedEvents";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    padding: "0 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
  },
  tabStyle: {
    fontWeight: "bold",
    letterSpacing: "1px",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

export default function ScrollableTabsButtonForce({ eventsData }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "#E9E2D0", padding: "10px 0 0 0" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="tabs"
          centered
          style={{ color: "var(--primary-color)" }}
        >
          <Tab
            label="Upcoming Events"
            icon={
              <FontAwesomeIcon icon={faClock} style={{ fontSize: "2rem" }} />
            }
            className={classes.tabStyle}
            {...a11yProps(0)}
          />
          <Tab
            label="Completed Events"
            icon={
              <FontAwesomeIcon
                icon={faFlagCheckered}
                style={{ fontSize: "2rem" }}
              />
            }
            className={classes.tabStyle}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UpcomingEvents />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompletedEvents />
      </TabPanel>
    </div>
  );
}
