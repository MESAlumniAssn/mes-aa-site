import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  facebookProfile,
  twitterProfile,
  instagramProfile,
} from "../../utils/associationDetails";
import { LOGO } from "../../utils/images";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
  drawerItem: {
    color: "#290001",
  },
});

const variants = {
  tap: "2px",
};

export default function Navbar(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const ListItemLink = (props) => {
    return <ListItem button component="a" {...props} />;
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <Link href="/">
          <a className="animateNavLogoBanner">
            <Image
              src={LOGO + "?tr=w-200"}
              alt="Brand icon"
              height={180}
              width={200}
            />
          </a>
        </Link>
      </div>

      <List>
        {props.links &&
          props.links.map((link, index) => (
            <div key={index} className={classes.drawerItem}>
              <ListItemLink href={link.url}>
                <ListItemIcon style={{ color: "#b9ac92" }}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.path} />
              </ListItemLink>
            </div>
          ))}
      </List>

      <div
        style={{
          width: "100%",
          fontSize: "1.75rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        <Link href={facebookProfile} passHref={true}>
          <a style={{ marginRight: 25 }}>
            <Image
              src={"/images/social/facebook.svg"}
              alt="Facebook"
              height={35}
              width={35}
            />
          </a>
        </Link>
        <Link href={twitterProfile} passHref={true}>
          <a style={{ marginRight: 25 }}>
            <Image
              src={"/images/social/twitter.svg"}
              alt="Twitter"
              height={35}
              width={35}
            />
          </a>
        </Link>{" "}
        <Link href={instagramProfile} passHref={true}>
          <a style={{ marginRight: 25 }}>
            <Image
              src={"/images/social/instagram.svg"}
              alt="Instagram"
              height={35}
              width={35}
            />
          </a>
        </Link>{" "}
        {/* <Link href="https://youtube.com" passHref={true}>
          <a style={{ marginRight: 25 }}>
            <Image
              src={"/images/social/youtube.svg"}
              alt="Youtube"
              height={35}
              width={35}
            />
          </a>
        </Link> */}
      </div>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <div key={anchor}>
          <button
            aria-label="Navigation Menu"
            style={{
              display: "flex",
              justifyContents: "center",
              alignItems: "center",
              position: "absolute",
              backgroundColor: "#EFEFEF",
              color: "var(--primary-color)",
              borderRadius: "50%",
              fontSize: "1.5rem",
              padding: 10,
              top: 15,
              left: 15,
              opacity: 0.6,
              border: "none",
              cursor: "pointer",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            {/* Couldn't get Font Awesome to work with MUI in any other way
            <SvgIcon>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="stream"
                className="svg-inline--fa fa-stream fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
                ></path>
              </svg>
            </SvgIcon> */}
            <FontAwesomeIcon icon={faStream} />
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
}
