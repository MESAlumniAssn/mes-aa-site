import React, { useEffect } from "react";
import Image from "next/image";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    textAlign: "center",
  },
  paymentInfoContainer: {
    margin: "100px 0 50px 0",
  },
}));

const PaymentInfo = (props) => {
  const classes = useStyles();

  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  return (
    <div className={classes.parentContainer}>
      <div className={classes.paymentInfoContainer}>
        <Typography component="h1">
          <span className="mainHeading">
            Thank you for registering,{" "}
            <span style={{ color: "#ff5200" }}>{props.userData.name}</span>!
          </span>
        </Typography>

        <div style={{ margin: "20px 0" }}>
          <Image
            src="/images/registration/check.gif"
            alt="Registration successful"
            height={175}
            width={175}
          />
        </div>

        <Typography component="h2">
          <span className="secondaryHeading">
            Your membership id is{" "}
            <span style={{ color: "#ff5200" }}>
              {props.userData.membership_id}
            </span>
          </span>
        </Typography>

        <Typography
          component="p"
          style={{
            fontSize: "1.1rem",
            padding: "20px 0",
          }}
        >
          Your payment receipt and membership details will be emailed to{" "}
          <span style={{ color: "#ff5200" }}>{props.userData.email}</span>
        </Typography>
      </div>
    </div>
  );
};

export default PaymentInfo;
