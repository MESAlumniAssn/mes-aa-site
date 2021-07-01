import * as Yup from "yup";
import registrationFormModel from "./registrationFromModel";

let d = new Date();
let year = d.getFullYear();
let month = parseInt(d.getMonth() + 1);
let day = d.getDate();

day = day < 10 ? "0" + day.toString() : day;
month = month < 10 ? "0" + month.toString() : month;

const today = (year + "-" + month + "-" + day).toString();

const {
  formField: {
    prefix,
    firstName,
    lastName,
    email,
    address1,
    city,
    state,
    country,
    pincode,
    mobile,
    birthday,
    fromYear,
    toYear,
    course1,
    course2,
    course3,
    streamPuc,
    streamDegree,
    streamPg,
    streamOthers,
    profession,
  },
} = registrationFormModel;

export default [
  Yup.object({
    [prefix.name]: Yup.string().required(`${prefix.requiredErrorMsg}`),
    [firstName.name]: Yup.string()
      .required(`${firstName.requiredErrorMsg}`)
      .matches(/^[aA-zZ\s]+$/, `${firstName.invalidErrorMsg}`)
      .max(50)
      .trim(),
    [lastName.name]: Yup.string()
      .required(`${lastName.requiredErrorMsg}`)
      .matches(/^[aA-zZ\s]+$/, `${lastName.invalidErrorMsg}`)
      .max(50)
      .trim(),
    [email.name]: Yup.string()
      .email(`${email.invalidErrorMsg}`)
      .required(`${email.requiredErrorMsg}`)
      .max(50)
      .trim(),
    [address1.name]: Yup.string()
      .required(`${address1.requiredErrorMsg}`)
      .max(150)
      .trim(),
    [city.name]: Yup.string()
      .required(`${city.requiredErrorMsg}`)
      .max(50)
      .trim(),
    [state.name]: Yup.string()
      .required(`${state.requiredErrorMsg}`)
      .max(50)
      .trim(),
    [country.name]: Yup.string()
      .required(`${country.requiredErrorMsg}`)
      .max(50)
      .trim(),
    [pincode.name]: Yup.string()
      .required(`${pincode.requiredErrorMsg}`)
      .min(4)
      .trim(),
    [mobile.name]: Yup.string()
      .required(`${mobile.requiredErrorMsg}`)
      .matches(/^[0-9]+$/, `${mobile.invalidErrorMsg}`)
      .min(10, `${mobile.invalidLengthMessage}`)
      .max(15)
      .trim(),
    [birthday.name]: Yup.date()
      .required(`${birthday.requiredErrorMsg}`)
      .max(new Date(today), `${birthday.invalidErrorMsg}`),
  }),
  Yup.object({
    [fromYear.name]: Yup.date().required(`${fromYear.requiredErrorMsg}`),
    [toYear.name]: Yup.date()
      .required(`${toYear.requiredErrorMsg}`)
      .min(Yup.ref("[fromYear]"), "Date range is invalid"),
    // [course1.name]: Yup.string().required(`${course1.requiredErrorMsg}`).trim(),
    // [course2.name]: Yup.string().notOneOf(
    //   [Yup.ref("[course1]")],
    //   "This course has already been selected"
    // ),
    // [course3.name]: Yup.string().notOneOf(
    //   [Yup.ref("[course1]"), Yup.ref("[course2]")``],
    //   "This course has already been selected"
    // ),
  }),
  Yup.object({
    [profession.name]: Yup.string().required(`${profession.requiredErrorMsg}`),
  }),
];
