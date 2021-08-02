import React, { useState, Fragment } from "react";
import calculateDays from "../../../utils/calculateDays";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBullhorn } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFFFFF",
    position: "absolute",
    top: 0,
    left: 0,
    padding: "25px 30px",
    zIndex: 20,
    boxShadow: "0 22px 37px rgba(0, 0, 0, 0.3)",
    opacity: 0.98,
  },
  bannerText: {
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    top: "35%",
    right: 15,
    zIndex: 30,
    fontSize: "1.5rem",
    cursor: "pointer",
  },
}));

const variants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
  },
};

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const classes = useStyles();

  let daysToRegistration;
  const registrationDate = process.env.NEXT_PUBLIC_REGISTRATION_DATE;

  daysToRegistration = calculateDays(registrationDate);

  return (
    <Fragment>
      {showBanner && (
        <motion.div className={`animateNavLogoBanner ${classes.banner}`}>
          <Typography component="p" style={{ textAlign: "center" }}>
            <div className={`subtitle ${classes.bannerText}`}>
              <FontAwesomeIcon
                icon={faBullhorn}
                style={{
                  marginRight: 15,
                  color: "#AAAAAA",
                  fontSize: "1.8rem",
                }}
              />
              {daysToRegistration > 0 ? (
                <span>
                  Dear Alumnus, registrations will be open in{" "}
                  <CountUp
                    end={daysToRegistration}
                    duration={10}
                    style={{
                      borderBottom: "5px var(--secondary-color) solid",
                      paddingBottom: "2px",
                    }}
                  />{" "}
                  {daysToRegistration === 1 ? "day" : "days"}.
                </span>
              ) : (
                "Registrations are now open"
              )}
            </div>
          </Typography>
          <FontAwesomeIcon
            icon={faTimes}
            className={`timesButtonAnimation ${classes.icon}`}
            onClick={() => setShowBanner(false)}
          />
        </motion.div>
      )}
    </Fragment>
  );
};

export default Banner;
