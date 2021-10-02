import React, { Fragment, useContext, useEffect } from "react";
import SiteContext from "../../../context/siteContext";
import Image from "next/image";

// Component imports
import AlertDialog from "../../utils/generic/AlertDialog";

// Material UI imports
import Button from "@material-ui/core/Button";

const ManualPaymentConfirmButton = ({
  showLoader,
  setShowLoader,
  //   setSubmissionError,
  setMode,
  files,
}) => {
  const siteContext = useContext(SiteContext);
  const { authError, registerUser } = siteContext;

  useEffect(() => {
    if (authError) {
      setShowLoader(false);
      //   setSubmissionError(true);
    }
  }, [authError]);

  return (
    <Fragment>
      {authError && authError && open && (
        <div style={{ margin: "20px 0" }}>
          <AlertDialog error={authError && authError} />
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={authError && authError}
          style={{
            backgroundColor: "#FF8E01",
            height: "3rem",
            width: "12rem",
            color: "#FFF",
            fontWeight: "bold",
            letterSpacing: "1px",
            fontSize: "var(--button-font-size)",
          }}
          onClick={() => {
            setMode("M");
            registerUser(
              JSON.parse(localStorage.getItem("mesAAUser")).prefix,
              JSON.parse(localStorage.getItem("mesAAUser")).firstName,
              JSON.parse(localStorage.getItem("mesAAUser")).lastName,
              JSON.parse(localStorage.getItem("mesAAUser")).email,
              JSON.parse(localStorage.getItem("mesAAUser")).mobile,
              JSON.parse(localStorage.getItem("mesAAUser")).birthday,
              JSON.parse(localStorage.getItem("mesAAUser")).address1,
              JSON.parse(localStorage.getItem("mesAAUser")).address2,
              JSON.parse(localStorage.getItem("mesAAUser")).city,
              JSON.parse(localStorage.getItem("mesAAUser")).state,
              JSON.parse(localStorage.getItem("mesAAUser")).pincode,
              JSON.parse(localStorage.getItem("mesAAUser")).country,
              JSON.parse(localStorage.getItem("mesAAUser")).fromYear,
              JSON.parse(localStorage.getItem("mesAAUser")).toYear,
              JSON.parse(localStorage.getItem("mesAAUser")).streamPuc,
              JSON.parse(localStorage.getItem("mesAAUser")).streamDegree,
              JSON.parse(localStorage.getItem("mesAAUser")).streamPg,
              JSON.parse(localStorage.getItem("mesAAUser")).streamOthers,
              JSON.parse(localStorage.getItem("mesAAUser")).vision,
              JSON.parse(localStorage.getItem("mesAAUser")).profession,
              JSON.parse(localStorage.getItem("mesAAUser")).interest,
              JSON.parse(localStorage.getItem("mesAAUser")).membership,
              "M",
              false, // payment status
              null, // razorpay order id
              files
            );

            setShowLoader(true);
          }}
        >
          {showLoader ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <span style={{ marginRight: 5 }}>Please wait</span>
              <Image
                src={"/loader.svg"}
                alt="Loading..."
                height={25}
                width={25}
              />
            </div>
          ) : (
            "Confirm"
          )}
        </Button>
      </div>
    </Fragment>
  );
};

export default ManualPaymentConfirmButton;
