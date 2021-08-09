import React, { useRef, useContext } from "react";
import SiteContext from "../../../../context/siteContext";
import Image from "next/image";

// Material UI imports
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// Font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faTimesCircle,
  faTimes,
  faSmile,
  faFrown,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalBackground: {
      backgroundColor: "#FFF",
      padding: 30,
      width: "600px",
      position: "relative",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        padding: 20,
        width: "400px",
      },
    },
    tableContainer: {
      marginTop: 20,
    },
    table: {
      minWidth: 500,
    },
  };
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 15,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const JobStatus = ({ jobStatusOpen, setJobStatusOpen }) => {
  const overallStatus = useRef("pass");
  const siteContext = useContext(SiteContext);
  const classes = useStyles();

  const { jobs, clearJobStatus } = siteContext;

  const updateOverallStatus = (status) => {
    if (status === "Failure") {
      overallStatus.current = "fail";
    }
  };

  const handleClose = () => {
    setJobStatusOpen(false);
    overallStatus.current = "pass";
    clearJobStatus();
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={jobStatusOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes.modalBackground}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
            }}
            className="timesButtonAnimation"
            onClick={handleClose}
          />
          <Typography component="h1" align="center">
            <span className="mainHeading">Job Status</span>
          </Typography>

          <TableContainer className={classes.tableContainer}>
            <Table
              className={classes.table}
              aria-label="Table with all the job statuses"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  <StyledTableCell align="center">
                    Last Run Date
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              {jobs ? (
                jobs.map((job, index) => {
                  updateOverallStatus(job.status);

                  return (
                    <TableBody key={index}>
                      <StyledTableRow>
                        <StyledTableCell
                          component="th"
                          align="center"
                          scope="row"
                        >
                          {job.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {job.status === "Success" ? (
                            <FontAwesomeIcon
                              icon={faCheckSquare}
                              style={{ fontSize: "2rem", color: "#00917C" }}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faTimesCircle}
                              style={{
                                fontSize: "2rem",
                                color: "#F14668",
                              }}
                            />
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {job.last_run_date}
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  );
                })
              ) : (
                <div syle={{ textAlign: "center" }}>
                  <Image
                    src="/loader.svg"
                    alt="Loading..."
                    height={30}
                    width={30}
                  />
                </div>
              )}
            </Table>
          </TableContainer>

          <div style={{ marginTop: 30, fontSize: "1rem" }}>
            {overallStatus.current === "pass" ? (
              <span>
                <FontAwesomeIcon
                  icon={faSmile}
                  style={{
                    color: "#00917C",
                    fontSize: "1.1rem",
                    marginRight: 5,
                  }}
                />
                All jobs are running as expected!
              </span>
            ) : (
              <span>
                <FontAwesomeIcon
                  icon={faFrown}
                  style={{
                    color: "#F14668",
                    fontSize: "1.1rem",
                    marginRight: 5,
                  }}
                />
                Please have a developer look into the failing job(s)
              </span>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JobStatus;
