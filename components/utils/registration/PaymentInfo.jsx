import React from "react";
import Image from "next/image";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    margin: "100px 0 50px 0",
  },
  paymentInfoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      margin: "100px 20px 50px 20px",
    },
  },
  textStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PaymentInfo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.parentContainer}>
      <div className={classes.paymentInfoContainer}>
        <div>
          <Typography
            component="h1"
            gutterBottom
            className={classes.textStyles}
          >
            <span className="secondaryHeading">
              Thank you for registering, {props.userData.name}!
            </span>
          </Typography>

          <div style={{ margin: "20px 0" }} className={classes.textStyles}>
            <Image
              src="/images/registration/check.gif"
              alt="Registration successful"
              height={150}
              width={150}
            />
          </div>

          <Typography component="h2" className={classes.textStyles}>
            <span className="tertiaryHeading">
              Your membership id is{" "}
              <span style={{ color: "#ff5200" }}>
                {props.userData.membership_id}
              </span>
            </span>
          </Typography>

          <Typography
            component="p"
            style={{
              padding: "20px 0",
              textAlign: "center",
            }}
          >
            Your payment receipt and membership details will be emailed to&nbsp;
            <span style={{ color: "#ff5200", fontWeight: 700 }}>
              {props.userData.email}
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
