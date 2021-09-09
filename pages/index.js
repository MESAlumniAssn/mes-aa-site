import React from "react-fast-compare";
import styles from "../styles/Home.module.css";
import axios from "axios";

// Component imports
import HomeHeadLayout from "../components/layout/head/HomeHeadLayout";
import TestimonialSection from "../components/utils/home/TestimonialSection";
import Footer from "../components/layout/Footer";
import Header from "../components/utils/home/Header";
import Welcome from "../components/utils/home/Welcome";
import EventsBanner from "../components/utils/home/EventsBanner";

const Home = (props) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershipPlan");
    localStorage.removeItem("mesAAUser");
    localStorage.removeItem("testimonialSubmission");

    if (!sessionStorage.getItem("aa__preferences"))
      sessionStorage.setItem(
        "aa__preferences",
        JSON.stringify({ banner: true })
      );
  }

  return (
    <HomeHeadLayout>
      <section id="header" className={styles.container}>
        <Header styles={styles} />
      </section>
      <section id="welcome-letter">
        <Welcome styles={styles} />
      </section>

      <section id="testimonials" className={styles.testimonials}>
        <TestimonialSection styles={styles} testimonials={props.testimonials} />
      </section>
      {props.events.length !== 0 && <EventsBanner events={props.events} />}
      <Footer />
    </HomeHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const testimonials = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/testimonials`
  );

  const events = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/events/upcoming/current_week`
  );

  return {
    props: {
      testimonials: testimonials.data,
      events: events.data,
    },
  };
};

export default Home;
