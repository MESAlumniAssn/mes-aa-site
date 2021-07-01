import React, { Fragment, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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
          <a style={{ margin: "20px 0 10px 0" }} className="animateNavLogo">
            <Image
              src={"/logo.png"}
              alt={"Brand icon"}
              height={170}
              width={190}
            />
          </a>
        </Link>
      </div>

      <List>
        {props.links &&
          props.links.map((link, index) => (
            <div className={classes.drawerItem}>
              <ListItemLink href={link.url} key={index}>
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
          position: "fixed",
          bottom: 20,
          right: 10,
          fontSize: "1.75rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 250,
        }}
      >
        <Link href="https://facebook.com" passHref={true}>
          <a style={{ marginRight: 25 }}>
            <Image
              src={"/images/social/facebook.svg"}
              alt="Facebook"
              height={35}
              width={35}
            />
          </a>
        </Link>
        <Link href="https://twitter.com" passHref={true}>
          <a style={{ marginRight: 25 }}>
            <Image
              src={"/images/social/twitter.svg"}
              alt="Twitter"
              height={35}
              width={35}
            />
          </a>
        </Link>{" "}
        <Link href="https://instagram.com" passHref={true}>
          <a style={{ marginRight: 25 }}>
            <Image
              src={"/images/social/instagram.svg"}
              alt="Instagram"
              height={35}
              width={35}
            />
          </a>
        </Link>{" "}
        <Link href="https://youtube.com" passHref={true}>
          <a style={{ marginRight: 25 }}>
            <Image
              src={"/images/social/youtube.svg"}
              alt="Youtube"
              height={35}
              width={35}
            />
          </a>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <Fragment key={anchor}>
          <Button
            aria-label="Navigation Menu"
            style={{
              position: "absolute",
              backgroundColor: "#EFEFEF",
              borderRadius: "50%",
              height: 50,
              width: 50,
              top: 15,
              left: 10,
              opacity: 0.6,
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            {/* Couldn't get Font Awesome to work with MUI in any other way */}
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
            </SvgIcon>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
