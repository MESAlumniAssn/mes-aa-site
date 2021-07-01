import React, { useState, useEffect } from "react";
import navLinks from "../../utils/navLinks";
import PropTypes from "prop-types";
import Image from "next/image";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";

// Component imports
import Header from "./Header";
import Footer from "./Footer";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  appBar: {
    display: "hidden",
  },
}));

const Layout = (props) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const classes = useStyles();

  const links = navLinks[props.pathname] || null;

  useEffect(() => {
    if (props.children && typeof window !== "undefined") setDomLoaded(true);
  }, []);

  return (
    <div>
      <Header links={links} pathname={props.pathname} />
      {domLoaded ? (
        <main>{props.children}</main>
      ) : (
        <div
          style={{
            background: "none",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={"/images/loaders/loader.svg"}
            alt="Loader"
            height={100}
            width={200}
          />
        </div>
      )}
    </div>
  );
};

Layout.propTypes = {
  pathname: PropTypes.string, // passed from _app.js
};

export default Layout;
