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
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 1,
        scale: 0,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.testimonialContainer}>
      <h2 className={styles.secondaryTitle}>Alumni Speak</h2>
      <div style={{ marginTop: 20, marginBottom: 50 }}>
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
