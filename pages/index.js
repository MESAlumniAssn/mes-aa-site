import React from "react-fast-compare";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

// Component imports
import HomeHeadLayout from "../components/layout/head/HomeHeadLayout";
import TestimonialSection from "../components/utils/home/TestimonialSection";
import Footer from "../components/layout/Footer";
import Header from "../components/utils/home/Header";
import Welcome from "../components/utils/home/Welcome";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    localStorage.removeItem("mesAAMembershiPlan");
    localStorage.removeItem("mesAAUser");
    localStorage.removeItem("testimonialSubmission");
  }

  return (
    <HomeHeadLayout>
      <section id="header" className={styles.container}>
        <Header styles={styles} router={router} />
      </section>
      <section id="welcome-letter">
        <Welcome styles={styles} />
      </section>

      <section id="testimonials" className={styles.testimonials}>
        <TestimonialSection styles={styles} testimonials={props.testimonials} />
      </section>
      <Footer />
    </HomeHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/testimonials`
  );

  return {
    props: {
      testimonials: res.data,
    },
  };
};

export default Home;
