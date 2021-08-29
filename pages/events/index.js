import React from "react";
import axios from "axios";

// Component imports
import EventsHeadLayout from "../../components/layout/head/EventsHeadLayout";
import EventsHeader from "../../components/utils/events/EventsHeader";
import Footer from "../../components/layout/Footer";

const index = () => {
  return (
    <EventsHeadLayout>
      <EventsHeader />
      <Footer />
    </EventsHeadLayout>
  );
};

export default index;
