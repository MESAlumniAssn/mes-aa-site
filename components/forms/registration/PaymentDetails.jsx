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

const useStyles = makeStyles({
  table: {
    minWidth: 75,
    marginTop: 30,
  },
});

const createData = (membership, amount) => {
  return { membership, amount };
};

const PaymentDetails = () => {
  var rows = "";
  var membership = "";
  var amount = "";
  const classes = useStyles();

  if (typeof window !== "undefined") {
    membership = localStorage.getItem("mesAAMembershiPlan");
    amount =
      membership === "Lifetime"
        ? planValues.lifetimeMembershipCost
        : planValues.annualMembershipCost;

    rows = [createData(localStorage.getItem("mesAAMembershiPlan"), amount)];
  }

  return (
    <div>
      <Typography variant="h3" component="h3" align="center" gutterBottom>
        Your order summary
      </Typography>

      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Membership Type
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", fontSize: "1rem" }}
                align="right"
              >
                Amount Payable
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Fragment>
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.membership}
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faRupeeSign} /> {row.amount}
                  </TableCell>
                </TableRow>
                {/* <TableRow key={index + 1}>
                  <TableCell component="th" scope="row">
                    CGST @ 9%
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faRupeeSign} /> {row.amount * 0.09}
                  </TableCell>
                </TableRow>
                <TableRow key={index + 2}>
                  <TableCell component="th" scope="row">
                    SGST @ 9%
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faRupeeSign} /> {row.amount * 0.09}
                  </TableCell>
                </TableRow> */}
                <TableRow key={index + 1}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  >
                    Total
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  >
                    <FontAwesomeIcon icon={faRupeeSign} /> {row.amount}
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
