import React, { useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Component imports
import Testimonials from "../testimonials/Testimonials";

const TestimonialSection = ({ styles, testimonials }) => {
  const { inView, ref } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.75 },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
        scale: 0,
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <h2>Alumni Speak</h2>
      <div style={{ marginBottom: 75 }}>
        <Link href="/testimonials">
          <a className={`${styles.testimonialLink} styledLink`}>
            Read all the messages
          </a>
        </Link>
      </div>

      <motion.div animate={animation} style={{ padding: "20px 0" }}>
        <Testimonials testimonials={testimonials.slice(0, 6)} />
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
