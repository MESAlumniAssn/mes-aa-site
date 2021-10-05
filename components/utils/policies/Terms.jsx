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
    [theme.breakpoints.down("sm")]: {
      margin: "0 15px",
    },
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
  bulletLinkStyle: {
    color: "#FF8E01",
  },
}));

const Terms = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.termsContainer}>
        <Typography component="h1" align="center" gutterBottom>
          <span className="mainHeading">Terms of Use</span>
        </Typography>

        <div className={classes.paragraph}>
          This page defines the terms and conditions on which you may use{" "}
          <Link href="/">
            <a
              className={classes.bulletLinkStyle}
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              mesalumniassociation.com
            </a>
          </Link>{" "}
          or any of its sub-domains as a registered alumnus.
        </div>

        <div className={classes.paragraph}>
          <span style={{ fontWeight: "bold" }}>
            The MES College Alumni Association
            <span style={{ verticalAlign: "super" }}>&#174;</span>
          </span>{" "}
          will hereinafter be referred to as the "Association". An alumnus
          officially becomes a member of the Association once they have
          successfully registered. Registration is successful once the alumnus
          has provided all the required information and has successfully paid
          the membership fees. It is the assumption of the association that all
          details provided during registration are true to the best of the
          alumnus' knowledge.
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Lifetime Membership
          </Typography>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            A lifetime membership implies a permanent membership to the
            Association.
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            Membership will commence as soon as the fee is remitted to the
            Association's bank account.
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            The membership fee is paid once at the time of registration and is
            non-refundable.
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            The membership is not transferrable under any circumstances.
          </p>
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Annual Membership
          </Typography>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            An annual membership implies a membership to the Association that is
            valid for exactly one year (from the date of payment).
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            Membership will commence/renew as soon as the fee is remitted to the
            Association' bank account.
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            It is left to the discretion of the alumni whether they choose to
            extend the membership at end of their current membership term.
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            Membership fees need to be paid every year for the annual membership
            to remain active. The fee is non-refundable
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            The membership is not transferrable under any circumstances.
          </p>
          <p className={classes.membershipBullets}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={classes.bulletLinkStyle}
            />{" "}
            Annual members can upgrade to a lifetime membership at the end of a
            term. The Association may (or may not) choose to offer a discount
            for any such upgrade.
          </p>
        </div>

        <div className={classes.paragraph}>
          The Association may choose to contact an alumnus in case it requires
          any clarification/further information on any of the details furnished
          during the registration process. The Association may also contact
          members to invite them as speakers or guests for specific events.
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Inclusivity is the norm
          </Typography>
          <p className={classes.membershipBullets}>
            The Association strongly believes in the inclusivity of all its
            alumni irrespective of race, religion, caste, gender or sexual
            orientation. The Association, therefore, reserves the right to
            terminate the membership of alumni in case they are involved in
            activities (online or otherwise) that bring disrepute to any members
            of the Association or any actions that malign the image of the
            Association itself.
          </p>
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Refund policy
          </Typography>
          <p className={classes.membershipBullets}>
            The Association will not entertain requests to refund membership
            fees under any circumstances.
          </p>
        </div>

        <div className={classes.paragraph}>
          <Typography component="h2" className={classes.subHeading}>
            Terms of Use Modifications
          </Typography>
          <p className={classes.membershipBullets}>
            The Association may revise these Terms of Use for its website at any
            time without notice. By using this website you are agreeing to be
            bound by the then current version of these Terms of Use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
