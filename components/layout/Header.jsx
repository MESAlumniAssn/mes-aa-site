import React from "react";
import PropTypes from "prop-types";

// Component imports
import Navbar from "./Navbar";

const Header = (props) => {
  return <Navbar links={props.links} pathname={props.pathname} />;
};

Header.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  links: PropTypes.array,
};

export default Header;
