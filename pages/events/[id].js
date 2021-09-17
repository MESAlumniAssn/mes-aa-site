import React, { useEffect } from "react";
import axios from "axios";

// Component imports
import EventsHeadLayout from "../../components/layout/head/EventsHeadLayout";
import SelectedEventDetails from "../../components/utils/events/SelectedEventDetails";
import Footer from "../../components/layout/Footer";

const eventdetails = (props) => {
  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  return (
    <EventsHeadLayout>
      <SelectedEventDetails event={props.eventData} />
      <Footer />
    </EventsHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`);

  if (!res.data) return { notFound: true };

  return {
    props: {
      eventData: res.data,
    },
  };
};

export default eventdetails;
