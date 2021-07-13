import React from "react";
import Image from "next/image";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  profileImage: {
    borderRadius: "5px",
  },
  backgroundLM: {
    backgroundImage: "url(/images/card/id-background-lm.svg)",
    color: "#F2F2F2",
  },
  backgroundAM: {
    backgroundImage: "url(/images/card/id-background-am.svg)",
  },
  profileBorderAM: {
    border: "4px solid #f0a500",
  },
  profileBorderLM: {
    border: "4px solid #F2F2F2",
  },
  textColorLM: {
    color: "#F2F2F2",
  },
});

const Card = (props) => {
  const classes = useStyles();
  let courses = `${
    props.userData.course_puc !== " " ? props.userData.course_puc + "," : ""
  } ${
    props.userData.course_degree !== " "
      ? props.userData.course_degree + ","
      : ""
  } ${props.userData.course_pg !== " " ? props.userData.course_pg + "," : ""} ${
    props.userData.course_others !== " "
      ? props.userData.course_others + ","
      : ""
  }`;

  // Get rid of the trailing comma
  courses = courses.trim().slice(0, parseInt(courses.trim().length) - 1);

  return (
    <div className={classes.root}>
      <div
        style={{
          height: 672,
          width: 384,
          borderRadius: "10px",
          textAlign: "center",
        }}
        className={`${
          props.userData.membership_type == "Lifetime"
            ? classes.backgroundLM
            : classes.backgroundAM
        } `}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //justifyContent: "space-around",
            padding: "10px 5px 0 5px",
          }}
        >
          <Image
            src={"/images/card/id-card-logo.svg"}
            alt="Logo"
            height={80}
            width={80}
          />

          <Typography
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#000",
              padding: 0,
            }}
          >
            The MES College Alumni Association{" "}
            <span style={{ verticalAlign: "super" }}>&#174;</span>
          </Typography>
        </div>
        <div
          style={{
            margin: "20px 0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: 250,
              width: 250,
              borderRadius: "10px",
              padding: 3,
            }}
            className={
              props.userData.membership_type === "Lifetime"
                ? classes.profileBorderLM
                : classes.profileBorderAM
            }
          >
            <Image
              src={props.userData.profile_url + "?tr:w-250"}
              alt="User profile picture"
              width={250}
              height={250}
              className={classes.profileImage}
            />
          </div>
        </div>
        <Typography
          style={{
            fontSize: "1.5rem",
            fontWeight: 900,
            textTransform: "uppercase",
          }}
          gutterBottom
        >
          {props.userData.name}
        </Typography>
        <Typography
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          Membership ID: {props.userData.membership_id}
        </Typography>
        <Typography
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
          gutterBottom
        >
          Batch: {props.userData.batch}
        </Typography>
        <Typography
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
        >
          Course(s): {courses}
        </Typography>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              paddingTop: 20,
            }}
            align="center"
            gutterBottom
          >
            {props.userData.membership_type == "Lifetime" && (
              <FontAwesomeIcon icon={faStar} style={{ color: "#b6c9f0" }} />
            )}{" "}
            Valid{" "}
            {props.userData.membership_type == "Lifetime"
              ? "for Lifetime"
              : `up to ${props.userData.membership_end_date}`}{" "}
            {props.userData.membership_type == "Lifetime" && (
              <FontAwesomeIcon icon={faStar} style={{ color: "#b6c9f0" }} />
            )}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Card;
