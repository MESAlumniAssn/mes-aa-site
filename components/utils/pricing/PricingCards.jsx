import React from "react";
import { useRouter } from "next/router";
import { planValues, lifetime, annual } from "../../../utils/pricingPlans";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import CardContent from "@material-ui/core/CardContent";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

// Font-awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

let theme = createMuiTheme();

const useStyles = makeStyles({
  cards: {
    margin: "50px 0 50px 0",
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      // Center the grid container

      width: 800,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  pricingHero: {
    margin: "100px 0 50px 0",
    textAlign: "center",
  },
  card: {
    padding: 30,
  },
  cardHeader: {
    height: 100,
    display: "grid",
    placeItems: "center",
  },
});

const Pricing = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.pricingHero}>
      <div>
        <Typography component="h1" align="center" className="styledHeading">
          <span className="mainHeading">Membership plans</span>
        </Typography>
        {/* <Typography component="h3" variant="h3" align="center" gutterBottom>
          Choose your plan and register
        </Typography> */}
      </div>
      <div className={classes.cards}>
        <Grid container justify="center" alignItems="center" spacing={5}>
          <Grid item xs={12} sm={6}>
            <Card
              className="pricingCard"
              style={{
                color: "var(--primary-color)",
                minHeight: 575,
              }}
              raised
            >
              <CardContent className="pricingCardActionArea">
                <div
                  className={classes.cardHeader}
                  style={{ backgroundColor: "#ffe05d" }}
                >
                  <Typography component="h2">
                    <span className="secondaryHeading">Lifetime</span>
                  </Typography>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px 0 10px 0",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faRupeeSign}
                    style={{
                      fontSize: "1.5rem",
                      marginRight: "5px",
                    }}
                  />
                  <Typography
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {planValues.lifetimeMembershipCost}
                  </Typography>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    margin: "10px 0 20px 0",
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                    onClick={() => {
                      localStorage.setItem("mesAAMembershiPlan", "Lifetime");
                      router.push("/register");
                    }}
                  >
                    Choose this plan
                  </Button>
                </div>

                {lifetime.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingTop: 20,
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "1rem",
                        textAlign: "left",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {item.incentive}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card style={{ minHeight: 400, minHeight: 575 }} raised>
              <CardContent>
                <div
                  className={classes.cardHeader}
                  style={{ backgroundColor: "#d8e3e7" }}
                >
                  <Typography component="h2">
                    <span className="secondaryHeading">Annual</span>
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px 0 10px 0",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faRupeeSign}
                    style={{
                      fontSize: "1.5rem",
                      marginRight: "5px",
                    }}
                  />
                  <Typography
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {planValues.annualMembershipCost}/yr
                  </Typography>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    margin: "10px 0 20px 0",
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                    onClick={() => {
                      localStorage.setItem("mesAAMembershiPlan", "Annual");
                      router.push("/register");
                    }}
                  >
                    Choose this plan
                  </Button>
                </div>
                {annual.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingTop: 20,
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "1rem",
                        textAlign: "left",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {item.incentive}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Pricing;
