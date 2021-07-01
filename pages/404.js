import React from "react";
import Image from "next/image";

// Component imports
import PageNotFoundHeadLayout from "../components/layout/head/PageNotFoundHeadLayout";

const PageNotFound = () => {
  return (
    <PageNotFoundHeadLayout>
      <div style={{ height: "100%" }}>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            padding: "50px 10px 20px 10px",
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
