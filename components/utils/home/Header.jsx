import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// Component imports
import Banner from "./Banner";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const variants = {
  initial: {
    x: "-100vw",
  },
  initialButton: {
    opacity: 0,
    scale: 0,
  },
  animateHeader: {
    x: 0,
    transition: { delay: 0.25, duration: 0.5 },
  },
  animateSubHeader: {
    x: 0,
    transition: { delay: 0.75, duration: 0.5 },
  },
  animateButton: {
    opacity: 1,
    scale: 1,
    transition: { delay: 1.25, duration: 0.5 },
  },
  animateEventNotification: {
    opacity: 1,
    transition: { delay: 2, duration: 0.5 },
  },
};

const Header = ({ styles }) => {
  const router = useRouter();

  return (
    <Fragment>
      <Banner />
      <div className={styles.headerContainer}>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animateHeader"
          className={styles.elementBg}
        >
          <div className={styles.heading}>
            <h1 className={styles.mainTitle}>
              The MES College Alumni Association
              <FontAwesomeIcon
                icon={faRegistered}
                className={styles.registeredIcon}
              />
            </h1>
          </div>
        </motion.div>

        <motion.h3
          variants={variants}
          initial="initial"
          animate="animateSubHeader"
          className={styles.subtitle}
        >
          We endeavour to strengthen the connect among our alumni.
        </motion.h3>

        {/* Uncomment before launch */}
        <motion.button
          variants={variants}
          initial="initialButton"
          animate="animateButton"
          type="button"
          className={styles.cta}
          onClick={() => router.push("/pricing")}
        >
          Register
        </motion.button>
      </div>
      <div className={styles.chevronContainer}>
        <Link href="#welcome-letter">
          <a>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={styles.chevronAnimate}
            />
          </a>
        </Link>
      </div>
    </Fragment>
  );
};

export default Header;
