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
    <div style={{ position: "relative" }}>
      <div className="triangle-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div ref={ref} className={styles.testimonialContainer}>
        <h2 className={styles.secondaryTitle}>Alumni Speak</h2>
        <div style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}>
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
    </div>
  );
};

export default TestimonialSection;
