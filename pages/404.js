import React from "react";
import Image from "next/image";

// Component imports
import PageNotFoundHeadLayout from "../components/layout/head/PageNotFoundHeadLayout";

const PageNotFound = () => {
  return (
    <PageNotFoundHeadLayout>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          margin: "0 10px",
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Image
            src="/images/404/404.svg"
            alt="Page not found"
            height={500}
            width={600}
          />
        </div>
      </div>
    </PageNotFoundHeadLayout>
  );
};

export default PageNotFound;
