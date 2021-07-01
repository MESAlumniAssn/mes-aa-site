import React, { useEffect } from "react";
import axios from "axios";

// Component imports
import TestimonialsHeadLayout from "../components/layout/head/TestimonialsHeadLayout";
import Testimonials from "../components/utils/testimonials/Testimonials";
import Footer from "../components/layout/Footer";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  parentContainer: {
    height: "100%",
  },
  testimonialsHero: {
    padding: "100px 0 50px 0",
    textAlign: "center",
  },
});

const testimonials = (props) => {
  const classes = useStyles();

  useEffect(() => {
    window.scroll({ top: 1, left: 1, behavior: "smooth" });
  }, []);

  return (
    <TestimonialsHeadLayout>
      <div className={classes.parentContainer}>
        <div className={classes.testimonialsHero}>
          <Typography
            component="h1"
            variant="h1"
            align="center"
            className="styledHeading"
            gutterBottom
          >
            Alumni Speak
          </Typography>
        </div>
        <div>
          <Testimonials testimonials={props.testimonials} />
        </div>
      </div>
      <Footer />
    </TestimonialsHeadLayout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/testimonials/all`
  );

  return {
    props: {
      testimonials: res.data,
    },
  };
};

export default testimonials;
