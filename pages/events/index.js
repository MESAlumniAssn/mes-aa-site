import React, { useEffect } from "react";

// Component imports
import EventsHeadLayout from "../../components/layout/head/EventsHeadLayout";
import EventsHeader from "../../components/utils/events/EventsHeader";
import Footer from "../../components/layout/Footer";

const index = () => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  return (
    <EventsHeadLayout>
      <EventsHeader />
      <Footer />
    </EventsHeadLayout>
  );
};

export default index;
