import React, { createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = createRef();

const keyUsedForTesting = "testkey";

const recaptcha = (
  <ReCAPTCHA
    ref={recaptchaRef}
    size="invisible"
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || keyUsedForTesting}
  />
);

export default recaptcha;
