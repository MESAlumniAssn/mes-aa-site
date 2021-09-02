import React, { Fragment, useEffect, useContext } from "react";
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
    "& .dg-header-lm": {
      backgroundColor: "#fff5b7",
      color: "#000",
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    "& .dg-header-am": {
      backgroundColor: "#d5dbb3",
      color: "#000",
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    "& .dg-pending-header-lm": {
      backgroundColor: "#ffcb91",
      color: "#000",
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    "& .dg-pending-header-am": {
      backgroundColor: "#f6dfeb",
      color: "#000",
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
  },
  registeredLifeBorderStyle: {
    borderBottom: "5px solid #fa9905",
    paddingBottom: 3,
    [theme.breakpoints.down("sm")]: {
      borderBottomWidth: "4px",
      paddingBottom: 0.1,
    },
  },
  registeredAnnualBorderStyle: {
    borderBottom: "5px solid #295939",
    paddingBottom: 3,
    [theme.breakpoints.down("sm")]: {
      borderBottomWidth: "4px",
      paddingBottom: 0.1,
    },
  },
  pendingLifeBorderStyle: {
    borderBottom: "5px solid #f98404",
    paddingBottom: 3,
    [theme.breakpoints.down("sm")]: {
      borderBottomWidth: "4px",
      paddingBottom: 0.1,
    },
  },
  pendingAnnualBorderStyle: {
    borderBottom: "5px solid #72147e",
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
    lifeMembers,
    annualMembers,
    pendingLifeMembers,
    pendingAnnualMembers,
    getLifeMembers,
    getAnnualMembers,
    dashboardError,
  } = siteContext;
  const classes = useStyles();

  const headerStyle =
    props.memberType === "Lifetime"
      ? props.paymentStatus === "active"
        ? "dg-header-lm"
        : "dg-pending-header-lm"
      : props.paymentStatus === "pending"
      ? "dg-pending-header-am"
      : "dg-header-am";

  const allMemberFields = [
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
      field: "mobile",
      headerName: "Mobile",
      width: 150,
      headerClassName: headerStyle,
    },
    {
      field: "birthday",
      headerName: "Birthday",
      width: 150,
      headerClassName: headerStyle,
    },
    {
      field: "address1",
      headerName: "Address1",
      width: 200,
      headerClassName: headerStyle,
    },
    {
      field: "address2",
      headerName: "Address2",
      width: 200,
      headerClassName: headerStyle,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
      headerClassName: headerStyle,
    },
    {
      field: "state",
      headerName: "State",
      width: 150,
      headerClassName: headerStyle,
    },
    {
      field: "pincode",
      headerName: "Pincode",
      width: 150,
      headerClassName: headerStyle,
    },
    {
      field: "country",
      headerName: "Country",
      width: 150,
      headerClassName: headerStyle,
    },
    {
      field: "batch",
      headerName: "Batch",
      width: 150,
      headerClassName: headerStyle,
    },
    {
      field: "puc",
      headerName: "PUC Course",
      width: 200,
      headerClassName: headerStyle,
    },
    {
      field: "degree",
      headerName: "Degree Course",
      width: 200,
      headerClassName: headerStyle,
    },
    {
      field: "pg",
      headerName: "PG Course",
      width: 200,
      headerClassName: headerStyle,
    },
    {
      field: "other_courses",
      headerName: "Other Courses",
      width: 200,
      headerClassName: headerStyle,
    },
    {
      field: "profession",
      headerName: "Profession",
      width: 200,
      headerClassName: headerStyle,
    },
    {
      field: "other_interests",
      headerName: "Interests",
      width: 300,
      headerClassName: headerStyle,
    },
    {
      field: "vision",
      headerName: "Vision",
      width: 500,
      headerClassName: headerStyle,
    },
    {
      field: "id_card_url",
      headerName: "ID Card",
      width: 700,
      headerClassName: headerStyle,
    },
    {
      field: "membership_certificate_url",
      headerName: "Membership Certificate",
      width: 700,
      headerClassName: headerStyle,
    },
  ];

  useEffect(() => {
    // Get the active registrations
    props.memberType === "Lifetime" &&
      props.paymentStatus === "active" &&
      getLifeMembers(props.memberType, 1);

    props.memberType === "Annual" &&
      props.paymentStatus === "active" &&
      getAnnualMembers(props.memberType, 1);

    // Get the pending registrations
    props.memberType === "Lifetime" &&
      props.paymentStatus === "pending" &&
      getLifeMembers(props.memberType, 0);

    props.memberType === "Annual" &&
      props.paymentStatus === "pending" &&
      getAnnualMembers(props.memberType, 0);
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
      {lifeMembers &&
        annualMembers &&
        pendingLifeMembers &&
        pendingAnnualMembers &&
        !dashboardError && (
          <div>
            <div style={{ margin: "75px 0 25px 0" }}>
              <Typography component="h2">
                {props.paymentStatus === "active" ? (
                  <span
                    className={
                      props.memberType === "Lifetime"
                        ? "secondaryHeading " +
                          classes.registeredLifeBorderStyle
                        : "secondaryHeading " +
                          classes.registeredAnnualBorderStyle
                    }
                  >
                    Registered
                  </span>
                ) : (
                  <span
                    className={
                      props.memberType === "Lifetime"
                        ? "secondaryHeading " + classes.pendingLifeBorderStyle
                        : "secondaryHeading " + classes.pendingAnnualBorderStyle
                    }
                  >
                    Pending
                  </span>
                )}
                <span className="secondaryHeading">
                  {props.memberType === "Lifetime" ? " Life " : " Annual "}
                  Members
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
              {props.memberType === "Lifetime" &&
                props.paymentStatus === "active" &&
                lifeMembers && (
                  <DataGrid
                    rows={lifeMembers && lifeMembers}
                    columns={allMemberFields}
                    pagination
                    pageSize={5}
                    components={{
                      Toolbar: exportToolbar,
                      Pagination: CustomPagination,
                    }}
                  />
                )}

              {props.memberType === "Annual" &&
                props.paymentStatus === "active" &&
                annualMembers && (
                  <DataGrid
                    rows={annualMembers && annualMembers}
                    columns={allMemberFields}
                    pagination
                    pageSize={5}
                    components={{
                      Toolbar: exportToolbar,
                      Pagination: CustomPagination,
                    }}
                  />
                )}

              {props.memberType === "Lifetime" &&
                props.paymentStatus === "pending" &&
                pendingLifeMembers && (
                  <DataGrid
                    rows={pendingLifeMembers && pendingLifeMembers}
                    columns={allMemberFields}
                    pagination
                    pageSize={5}
                    components={{
                      Toolbar: exportToolbar,
                      Pagination: CustomPagination,
                    }}
                  />
                )}

              {props.memberType === "Annual" &&
                props.paymentStatus === "pending" &&
                pendingAnnualMembers && (
                  <DataGrid
                    rows={pendingAnnualMembers && pendingAnnualMembers}
                    columns={allMemberFields}
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
        )}
    </div>
  );
};

export default AlumniMembers;
