import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SiteContext from "../../../context/siteContext";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  adminHero: { margin: "100px 0 50px 0" },
});

const AdminHeader = () => {
  const [logout, setLogout] = useState(false);
  const classes = useStyles();
  const siteContext = useContext(SiteContext);
  const router = useRouter();

  const { adminLogout } = siteContext;

  return (
    <div className={classes.adminHero}>
      <Button
        style={{
          position: "absolute",
          top: 20,
          right: 30,
          fontWeight: 700,
          fontSize: "1rem",
        }}
        onClick={() => {
          setLogout(true);
          adminLogout();
          setTimeout(() => router.push(`/`), 2000);
        }}
      >
        {logout ? (
          <Image src="/loader.svg" alt="Loading..." width={20} height={20} />
        ) : (
          "Logout"
        )}
      </Button>
      <Typography component="h1" align="center">
        <span className="mainHeading">Admin Dashboard</span>
      </Typography>
    </div>
  );
};

export default AdminHeader;
