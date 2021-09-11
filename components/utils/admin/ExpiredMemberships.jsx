import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SiteContext from "../../../context/siteContext";
import { toast } from "react-toastify";

// Material UI imports
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Component imports
import CustomPagination from "./CustomPagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .dg-expired": {
      backgroundColor: "#E97878",
      color: "#000",
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
  },
  membershipExpiredBorderStyle: {
    borderBottom: "5px solid #FF616D",
    paddingBottom: 3,
    [theme.breakpoints.down("sm")]: {
      borderBottomWidth: "4px",
      paddingBottom: 0.1,
    },
  },
}));

const emailToast = (name) =>
  toast.dark(`Renewal link sent to ${name}`, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

const exportToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: { opacity: 1, transition: { delay: 0.4, duration: 0.2 } },
};

const ExpiredMemberships = (props) => {
  const siteContext = useContext(SiteContext);
  const {
    loading,
    expiredMemberships,
    getExpiredMembershipDetails,
    sendRenewalNotificationEmail,
    dashboardError,
  } = siteContext;
  const classes = useStyles();

  const headerStyle = "dg-expired";

  const expiredTableFields = [
    {
      field: "renewal_link",
      headerName: "Resend Email",
      width: 200,
      headerClassName: headerStyle,
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
              fontWeight: "bold",
              padding: 5,
              fontSize: "var(--button-font-size)",
            }}
            onClick={() => {
              sendRenewalNotificationEmail(
                params.row.full_name,
                params.row.email,
                params.value
              );
              emailToast(params.row.full_name);
            }}
          >
            Resend Renewal Link
          </Button>
        </strong>
      ),
    },
    {
      field: "membership_id",
      headerName: "Membership ID",
      width: 200,
      headerClassName: headerStyle,
      resizable: true,
    },
    {
      field: "full_name",
      headerName: "Full Name",
      width: 200,
      headerClassName: headerStyle,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: headerStyle,
    },
    {
      field: "id_card_url",
      headerName: "ID Card",
      width: 500,
      headerClassName: headerStyle,
    },
  ];

  useEffect(() => {
    // Get all expired memberships
    getExpiredMembershipDetails();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          margin: "100px 0",
        }}
      >
        <Image src="/loader.svg" alt="Loading..." height={100} width={100} />
      </div>
    );
  }

  return (
    <motion.div variants={variants} initial="initial" animate="animate">
      {expiredMemberships && !dashboardError && (
        <div>
          <div style={{ margin: "75px 0 25px 0" }}>
            <Typography component="h2">
              <span className="secondaryHeading">
                <span className={classes.membershipExpiredBorderStyle}>
                  Expired
                </span>{" "}
                Annual Memberships
              </span>
            </Typography>
          </div>
          <div
            style={{
              height: 400,
              width: "100%",
            }}
            className={classes.root}
          >
            <DataGrid
              rows={expiredMemberships && expiredMemberships}
              columns={expiredTableFields}
              pagination
              pageSize={5}
              components={{
                Toolbar: exportToolbar,
                Pagination: CustomPagination,
              }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ExpiredMemberships;
