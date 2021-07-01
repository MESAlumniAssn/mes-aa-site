import React from "react";
import Masonry from "react-masonry-css";

// Component imports
import TestimonialCard from "./TestimonialCard";
import Container from "@material-ui/core/Container";

const breakpoints = {
  default: 3,
  960: 2,
  600: 1,
};

const Testimonials = (props) => {
  return (
    <Container maxWidth="lg">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column_testimonials"
      >
        {props.testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Testimonials;
