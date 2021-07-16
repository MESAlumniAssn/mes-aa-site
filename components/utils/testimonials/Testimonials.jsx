import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Component imports
import TestimonialCard from "./TestimonialCard";
import Container from "@material-ui/core/Container";

const breakpoints = {
  default: 3,
  960: 2,
  600: 1,
};

const Testimonials = (props) => {
  const { inView, ref } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
      }));
    }

    if (!inView) {
      animation.start((i) => ({
        opacity: 0,
        y: 50,
      }));
    }
  }, [inView]);

  return (
    <Container maxWidth="lg" ref={ref}>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column_testimonials"
      >
        {props.testimonials.map((testimonial, i) => (
          <motion.div custom={i} animate={animation} key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Testimonials;
