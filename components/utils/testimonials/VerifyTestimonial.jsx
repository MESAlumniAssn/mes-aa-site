import React from "react";
import Image from "next/image";

const VerifyTestimonial = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Image
        src={
          props.result === "Testimonial verified"
            ? "/images/testimonials/check.gif"
            : "/images/testimonials/error.gif"
        }
        alt="Verification result"
        height={300}
        width={300}
      />
      <p style={{ textAlign: "center", fontSize: "2rem" }}>{props.result}</p>
    </div>
  );
};

export default VerifyTestimonial;
