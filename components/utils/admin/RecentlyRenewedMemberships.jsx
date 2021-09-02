import React, { useEffect, useContext } from "react";
import Image from "next/image";
import SiteContext from "../../../context/siteContext";

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

// Component imports
import CustomPagination from "./CustomPagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .dg-renewed": {
      backgroundColor: "#CDF0EA",
      color: "#000",
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
  },
  membershipRenewedBorderStyle: {
    borderBottom: "5px solid #53B8BB",
    paddingBottom: 3,
    [theme.breakpoints.down("sm")]: {
      borderBottomWidth: "4px",
      paddingBottom: 0.1,
    },
  },
}));

const exportToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const AlumniMembers = (props) => {
  const siteContext = useContext(SiteContext);
  const {
    loading,
    renewedMemberships,
    getRenewedMembershipDetails,
    dashboardError,
  } = siteContext;
  const classes = useStyles();

  const headerStyle = "dg-renewed";

  const renewedTableFields = [
    {
      field: "membership_id",
      headerName: "Membership ID",
      width: 200,
      headerClassName: headerStyle,
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
    {
      field: "membership_certificate_url",
      headerName: "Membership Certificate",
      width: 500,
      headerClassName: headerStyle,
    },
  ];

  useEffect(() => {
    // Get all expired memberships
    getRenewedMembershipDetails();
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
    <div>
      {renewedMemberships && !dashboardError && (
        <div>
          <div style={{ margin: "75px 0 25px 0" }}>
            <Typography component="h2">
              <span className="secondaryHeading">
                <span className={classes.membershipRenewedBorderStyle}>
                  Recently Renewed
                </span>{" "}
                Annual Memberships
              </span>
            </Typography>
            <Typography style={{ paddingTop: 15 }}>
              <span className="subtitle">Renewed within the last 30 days</span>
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
              rows={renewedMemberships && renewedMemberships}
              columns={renewedTableFields}
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
    </div>
  );
};

export default AlumniMembers;
