import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Component imports
import TestimonialCard from "./TestimonialCard";
import Container from "@material-ui/core/Container";
import TestimonialButton from "./TestimonialButton";

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
        opacity: 0.5,
        y: 30,
      }));
    }
  }, [inView]);

  return (
    <Container maxWidth="lg" ref={ref}>
      <div style={{ marginBottom: 50, textAlign: "center" }}>
        <TestimonialButton />
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 600: 2, 960: 3 }}>
        <Masonry>
          {props.testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              custom={i}
              animate={animation}
              style={{
                margin: "20px 0 20px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};

export default Testimonials;
