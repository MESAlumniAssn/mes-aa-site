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

const exportToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const ExpiredMemberhips = (props) => {
  const siteContext = useContext(SiteContext);
  const { loading, expiredMemberships, getExpiredMembershipDetails } =
    siteContext;
  const classes = useStyles();

  const headerStyle = "dg-expired";

  const expiredTableFields = [
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
      width: 400,
      headerClassName: headerStyle,
    },
    {
      field: "membership_certificate_url",
      headerName: "Membership Certificate",
      width: 400,
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
        {expiredMemberships && (
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
        )}
      </div>
    </div>
  );
};

export default ExpiredMemberhips;
