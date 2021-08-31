import React from "react";

// Component imports
import PageNotFoundHeadLayout from "../components/layout/head/PageNotFoundHeadLayout";
import PageNotFoundComponent from "../components/utils/generic/PageNotFoundComponent";

const PageNotFound = () => {
  return (
    <PageNotFoundHeadLayout>
      <PageNotFoundComponent />
    </PageNotFoundHeadLayout>
  );
};

export default PageNotFound;
