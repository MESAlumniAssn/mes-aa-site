import React, { useEffect } from "react";

// Component imports
import PricingCards from "../components/utils/pricing/PricingCards";
import PricingHeadLayout from "../components/layout/head/PricingHeadLayout";
import Footer from "../components/layout/Footer";

const pricing = () => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  return (
    <PricingHeadLayout>
      <PricingCards />
      <Footer />
    </PricingHeadLayout>
  );
};

export default pricing;
