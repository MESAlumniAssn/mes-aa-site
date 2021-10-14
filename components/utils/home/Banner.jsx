import React, { useState, Fragment } from "react";
import { calculateDays } from "../../../utils/calculateDays";
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
    flexDirection: "column",
    background: "#FFFFFF",
    position: "absolute",
    top: 0,
    left: 0,
    padding: "25px 30px",
    zIndex: 20,
    boxShadow: "0 22px 37px rgba(0, 0, 0, 0.3)",
    opacity: 0.98,
    [theme.breakpoints.down("xs")]: {
      padding: "25px 15px 25px 5px",
      marginRight: 10,
      fontSize: "0.8rem",
    },
  },
  bannerText: {
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    top: "35%",
    right: 20,
    zIndex: 30,
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#9CA3AF",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      top: "10%",
      right: 10,
    },
  },
  festivalBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  festivalBannerText: {
    fontSize: "1.6rem",
    padding: "0 10px",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      textAlign: "center",
      padding: "0 5px",
    },
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

  const festivalIcon = (
    <img
      src="https://ik.imagekit.io/pwxm960evbp/MES-AA/Site_Images/Misc/25d9946e30284598.png?updatedAt=1634227283640"
      alt="Dussehra"
      height="40px"
      width="40px"
    />
  );

  return (
    <Fragment>
      {showBanner && (
        <motion.div className={`animateNavLogoBanner ${classes.banner}`}>
          <div>
            <Typography component="p" style={{ textAlign: "center" }}>
              <div className={`subtitle ${classes.bannerText}`}>
                {/* <FontAwesomeIcon
                icon={faBullhorn}
                style={{
                  marginRight: 15,
                  color: "#AAAAAA",
                  fontSize: "1.8rem",
                }}
              /> */}
                {daysToRegistration > 0 ? (
                  <span>
                    Dear Alumnus, registrations will be open in{" "}
                    <CountUp
                      end={daysToRegistration}
                      duration={5}
                      style={{
                        borderBottom: "5px var(--secondary-color) solid",
                        paddingBottom: "2px",
                      }}
                    />{" "}
                    {daysToRegistration === 1 ? "day" : "days"}.
                  </span>
                ) : (
                  "Registrations are now open 🎉"
                )}
              </div>
            </Typography>
            <FontAwesomeIcon
              icon={faTimes}
              className={`timesButtonAnimation ${classes.icon}`}
              onClick={() => setShowBanner(false)}
            />
          </div>
          <div className={classes.festivalBanner}>
            {festivalIcon}
            <Typography component="p" className={classes.festivalBannerText}>
              Wishing our alumni a very happy Dussehra!
            </Typography>
            {festivalIcon}
          </div>
        </motion.div>
      )}
    </Fragment>
  );
};

export default Banner;
