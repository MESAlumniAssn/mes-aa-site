import React, { useState } from "react";
import PropTypes from "prop-types";

// Component Imports
import AlumniStats from "./AlumniStats";
import FundStats from "./FundStats";
import AdminPanel from "./AdminPanel";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Fontawesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faRupeeSign,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";

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
      fontSize: "0.9rem",
    },
  },
}));

export default function ScrollableTabsButtonForce() {
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
        style={{ backgroundColor: "#fafafa", padding: "10px 0 0 0" }}
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
            label="Alumni"
            icon={
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: "2rem" }} />
            }
            className={classes.tabStyle}
            {...a11yProps(0)}
          />
          <Tab
            label="Funds"
            icon={
              <FontAwesomeIcon
                icon={faRupeeSign}
                style={{ fontSize: "2rem" }}
              />
            }
            className={classes.tabStyle}
            {...a11yProps(1)}
          />
          {/* <Tab
            label="Alumni Search"
            icon={
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: "2rem" }} />
            }
            className={classes.tabStyle}
            {...a11yProps(2)}
          /> */}
          <Tab
            label="Admin Panel"
            icon={
              <FontAwesomeIcon icon={faUserCog} style={{ fontSize: "2rem" }} />
            }
            className={classes.tabStyle}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AlumniStats />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FundStats />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminPanel />
      </TabPanel>
    </div>
  );
}
