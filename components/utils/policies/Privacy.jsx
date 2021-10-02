import React from "react";
import Link from "next/link";

// MaterialUI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Fontawesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "100px 0 50px 0",
    [theme.breakpoints.down("sm")]: {
      marginTop: 75,
    },
  },
  termsContainer: {
    borderRadius: "10px",
    boxShadow: "0 5px 12px rgba(0, 0, 0, 0.2)",
    margin: "0 30px",
    padding: "15px 25px",
  },
  paragraph: {
    marginTop: 20,
  },
  subHeading: {
    paddingBottom: 10,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  membershipBullets: {
    margin: 0,
    paddingBottom: 5,
  },
  paragraphText: {
    margin: 0,
  },
  bulletLinkStyle: {
    color: "#FF8E01",
  },
  bulletPrimaryText: {
    fontWeight: "bold",
  },
}));

const Privacy = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.termsContainer}>
        <Typography component="h1" align="center" gutterBottom>
          <span className="mainHeading">Privacy Policy</span>
        </Typography>

        <div className={classes.paragraph}>
          We are always committed to taking your privacy very seriously. This
          commitment begins with a least-privilege philosophy. We collect a
          significant amount of information at the time of registration, but we
          assure our alumni that all of this information is required. Please
          continue to read on to understand why we collect certain information.
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Information Sharing
          </Typography>
          <p className={classes.paragraphText}>
            Your information is safe and private with us. It will never be
            shared (or sold) with anyone unless required by law.
          </p>
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Why do we make some information mandatory?
          </Typography>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            <span className={classes.bulletPrimaryText}>Photo</span> - to
            generate your membership identity card. In special cases, your photo
            may also be used on other pages of{" "}
            <Link href="/">
              <a
                className={classes.bulletLinkStyle}
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                mesalumniassociation.com
              </a>
            </Link>{" "}
            . For instance, to highlight your achievements.
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            <span className={classes.bulletPrimaryText}>
              Address/Phone Number
            </span>{" "}
            - sending physical correspondence. Contact alumni about
            charing/participating in events
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            <span className={classes.bulletPrimaryText}>
              Professional Information
            </span>{" "}
            - to reach out to alumni based on their vocation to utilize their
            expertise in talks/events related to their profession
          </p>
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Payments
          </Typography>
          <p className={classes.paragraphText}>
            We do not store your payment related details like your credit card
            number or UPI id. We use Razorpay as our payment gateway. Please
            read{" "}
            <Link href="https://razorpay.com/privacy/" passHref={true}>
              <a
                target="_blank"
                className={classes.bulletLinkStyle}
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Razorpay's privacy policy
              </a>
            </Link>{" "}
            to understand how they handle your data.
          </p>
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Emails
          </Typography>
          <p className={classes.paragraphText}>
            Although we use{" "}
            <span
              className={classes.bulletLinkStyle}
              style={{ fontWeight: "bold" }}
            >
              SendGrid
            </span>{" "}
            as our cloud email provider, your email address is not currently
            shared with them.
          </p>
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Have questions or concerns?
          </Typography>
          <p className={classes.paragraphText}>
            If you have further concerns or questions, please contact us at{" "}
            <Link
              href="mailto:contact@mesalumniassociation.com"
              passHref={true}
            >
              <a
                target="_blank"
                className={classes.bulletLinkStyle}
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                contact@mesalumniassociation.com
              </a>
            </Link>{" "}
            or use the contact form in the footer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
