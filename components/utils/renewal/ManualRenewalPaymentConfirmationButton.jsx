import React, { useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SiteContext from "../../../context/siteContext";

// Material UI imports
import Button from "@material-ui/core/Button";

const ManualRenewalPaymentConfirmationButton = ({
  memberDetails,
  membershipType,
  formattedDate,
  setMode,
}) => {
  const [showLoader, setShowLoader] = useState(false);
  const siteContext = useContext(SiteContext);
  const router = useRouter();

  const { updateRenewal } = siteContext;

  let amount =
    membershipType === "Annual"
      ? process.env.NEXT_PUBLIC_ANNUAL_MEMBERSHIP_AMOUNT
      : process.env.NEXT_PUBLIC_LIFE_MEMBERSHIP_AMOUNT;

  let certificate =
    membershipType === "Lifetime"
      ? memberDetails && memberDetails.membership_certificate_url
      : null;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        style={{
          backgroundColor: "#ff5200",
          height: "3rem",
          width: "12rem",
          color: "#FFF",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
        onClick={() => {
          setMode("M");
          setShowLoader(true);

          updateRenewal(
            memberDetails.email,
            membershipType,
            parseInt(amount),
            formattedDate,
            certificate,
            "M" // Payment mode
          );

          setTimeout(() => {
            router.push(`/paymentinfo/${memberDetails.email}`);
          }, 1000);
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
  );
};

export default ManualRenewalPaymentConfirmationButton;
