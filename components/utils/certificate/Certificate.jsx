import React from "react";
import Image from "next/image";
import { LOGO } from "../../../utils/images";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0",
    fontFamily: "'Averia Serif Libre', cursive",
  },
});

const Certificate = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          width: 1056,
          height: 763,
          alignItems: "center",
          padding: "6.5rem",
          backgroundImage: "url(/images/certificate/certificate-bg.svg)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Image src={LOGO} alt="Logo" height={150} width={150} />
          <div style={{ paddingLeft: 10 }}>
            <Typography
              style={{
                fontSize: "1.9rem",
                fontWeight: 900,
                textTransform: "uppercase",
                fontFamily: "'Averia Serif Libre', cursive",
              }}
              align="center"
              gutterBottom
            >
              The MES College Alumni Association{" "}
              <span style={{ verticalAlign: "super" }}>&#174;</span>
            </Typography>
            <Typography
              style={{
                fontSize: "0.8rem",
                fontWeight: 900,
                textTransform: "uppercase",
                fontFamily: "'Averia Serif Libre', cursive",
              }}
              align="center"
              gutterBottom
            >
              Vidyasagara Prof. M.P.L Sastry Road, 15th Cross, 10th Main,
              Malleshwaram, Bengaluru - 560003
            </Typography>
          </div>
        </div>
        <Typography
          align="center"
          style={{
            fontFamily: "'Averia Serif Libre', cursive",
            fontSize: "2.7rem",
            fontWeight: 900,
            paddingTop: 5,
            textTransform: "uppercase",
          }}
        >
          Certificate of Life Membership
        </Typography>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            padding: "10px 0",
          }}
        >
          <Image
            src={"/images/certificate/divider.svg"}
            alt="Section divider"
            height={20}
            width={500}
          />
        </div>

        <Typography
          align="center"
          style={{
            fontFamily: "'Averia Serif Libre', cursive",
            fontSize: "1.7rem",
            fontWeight: 900,
            paddingTop: 10,
            textTransform: "uppercase",
          }}
          gutterBottom
        >
          Proudly presented to
        </Typography>
        <Typography
          align="center"
          style={{
            fontFamily: "'Averia Serif Libre', cursive",
            fontSize: "3.5rem",
            fontWeight: 900,
            paddingTop: 10,
            textTransform: "uppercase",
            color: "#99154e",
            margin: 0,
            padding: 0,
          }}
        >
          {props.userData.name}
        </Typography>

        <Typography
          align="center"
          style={{
            fontFamily: "'Averia Serif Libre', cursive",
            fontSize: "1.4rem",
            fontWeight: 900,
            paddingTop: 10,
            textTransform: "uppercase",
            margin: 0,
            padding: 0,
          }}
        >
          ({props.userData.membership_id})
        </Typography>

        <div
          id="signatures"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <div id="signature1" style={{ marginTop: 5 }}>
            <Image
              src={"/images/certificate/signature1.png"}
              alt="Signature of the President"
              width={300}
              height={100}
            />
            <Typography
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Averia Serif Libre', cursive",
                marginTop: -10,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
              align="center"
            >
              President
            </Typography>
          </div>

          <Typography
            align="center"
            style={{
              fontFamily: "'Averia Serif Libre', cursive",
              fontSize: "2rem",
              fontWeight: 700,
              paddingTop: 10,
              textTransform: "uppercase",
              color: "#99154e",
            }}
          >
            on
            <br /> {props.userData.membership_start_date}
          </Typography>

          <div id="signature2" style={{ marginTop: 5 }}>
            <Image
              src={"/images/certificate/signature2.svg"}
              alt="Signature of the Secretary"
              width={300}
              height={100}
            />
            <Typography
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Averia Serif Libre', cursive",
                marginTop: -10,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
              align="center"
            >
              Secretary
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
