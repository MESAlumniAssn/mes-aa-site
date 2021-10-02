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
        y: 0,
        transition: { duration: 0.5 },
      });
    }

    if (!inView) {
      animation.start({
        y: 50,
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

      <div animate={animation} style={{ padding: "20px 0" }}>
        <Testimonials testimonials={testimonials.slice(0, 6)} />
      </div>
    </div>
  );
};

export default TestimonialSection;
