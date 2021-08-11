import React, { Fragment } from "react";
import { planValues } from "../../../utils/pricingPlans";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// Fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

// Component imports
import Chips from "../../utils/generic/Chips";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      minWidth: 200,
    },
  },
  headerTextStyle: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  totalsRowText: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: { fontSize: "1.1rem" },
  },
  totalsRowRupeeIcon: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
  },
  totalsRowAmount: {
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: { fontSize: "1.2rem" },
  },
}));

const createData = (membership, amount) => {
  return { membership, amount };
};

const PaymentDetails = () => {
  var rows = "";
  var membership = "";
  var amount = "";
  const classes = useStyles();

  if (typeof window !== "undefined") {
    membership = localStorage.getItem("mesAAMembershipPlan");
    amount =
      membership === "Lifetime"
        ? planValues.lifetimeMembershipCost
        : planValues.annualMembershipCost;

    rows = [createData(localStorage.getItem("mesAAMembershipPlan"), amount)];
  }

  return (
    <div>
      <Typography variant="h3" component="h3" align="center" gutterBottom>
        Your order summary
      </Typography>

      <TableContainer>
        <Table className={classes.table} aria-label="payment details">
          <TableHead style={{ backgroundColor: "#F8F5F1" }}>
            <TableRow>
              <TableCell className={classes.headerTextStyle}>
                Membership Type
              </TableCell>
              <TableCell className={classes.headerTextStyle} align="right">
                Amount Payable
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Fragment>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    style={{ padding: "35px 0" }}
                  >
                    <Chips membershipType={row.membership} />
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faRupeeSign} />{" "}
                    <span style={{ fontSize: "1rem" }}>{row.amount}</span>
                  </TableCell>
                </TableRow>
                <TableRow style={{ backgroundColor: "#F8F5F1" }}>
                  <TableCell className={classes.totalsRowText}>
                    Total Amount Payable
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classes.totalsRowRupeeIcon}
                  >
                    <FontAwesomeIcon icon={faRupeeSign} />{" "}
                    <span className={classes.totalsRowAmount}>
                      {row.amount}
                    </span>
                  </TableCell>
                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PaymentDetails;
