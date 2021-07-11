export default {
  formId: "registrationForm",
  formField: {
    prefix: {
      name: "prefix",
      label: "Name Prefix",
      requiredErrorMsg: "Name prefix is required",
    },
    firstName: {
      name: "firstName",
      label: "First Name*",
      requiredErrorMsg: "First name is required",
      invalidErrorMsg: "Only alphabets and spaces allowed",
    },
    lastName: {
      name: "lastName",
      label: "Last Name*",
      requiredErrorMsg: "Last name is required",
      invalidErrorMsg: "Only alphabets and spaces allowed",
    },
    email: {
      name: "email",
      label: "Email*",
      requiredErrorMsg: "Email is required",
      invalidErrorMsg: "Email is not valid",
    },
    address1: {
      name: "address1",
      label: "Address Line 1*",
      requiredErrorMsg: "Address Line 1 is required",
    },
    address2: {
      name: "address2",
      label: "Address Line 2",
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
    },
    state: {
      name: "state",
      label: "State*",
      requiredErrorMsg: "State is required",
    },
    country: {
      name: "country",
      label: "Country*",
      requiredErrorMsg: "Country is required",
    },
    pincode: {
      name: "pincode",
      label: "Pincode*",
      requiredErrorMsg: "Pincode is required",
      invalidLengthMessage: "A pincode must be at least 4 digits ",
    },
    mobile: {
      name: "mobile",
      label: "Mobile*",
      requiredErrorMsg: "Mobile is required",
      invalidErrorMsg: "Invalid mobile number",
      invalidLengthMessage: "A mobile number must be at least 10 digits ",
    },
    birthday: {
      name: "birthday",
      label: "Birthday*",
      requiredErrorMsg: "Birthday is required",
      invalidErrorMsg: "Future date provided",
    },
    fromYear: {
      name: "fromYear",
      label: "From*",
      requiredErrorMsg: "Year is required",
    },
    toYear: {
      name: "toYear",
      label: "To*",
      requiredErrorMsg: "Year is required",
    },
    course1: {
      name: "course1",
      label: "Course*",
      requiredErrorMsg: "Course is required",
    },
    course2: {
      name: "course2",
      label: "Course",
    },
    course3: {
      name: "course3",
      label: "Course",
    },
    streamPuc: {
      name: "streamPuc",
    },
    streamDegree: {
      name: "streamDegree",
    },
    streamPg: {
      name: "streamPg",
    },
    streamOthers: {
      name: "streamOthers",
    },
    vision: {
      name: "vision",
      label: "Your vision for the association",
    },
    profession: {
      name: "profession",
      label: "Profession*",
      requiredErrorMsg: "Profession is required",
    },
    interest: {
      name: "interest",
      label: "Other interests",
    },
  },
};
