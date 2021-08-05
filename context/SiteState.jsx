import React, { useReducer } from "react";
import SiteContext from "./siteContext";
import siteReducer from "./siteReducer";
import axios from "axios";

import {
  LOADING,
  REGISTRATION_CREATE_SUCCESS,
  REGISTRATION_UPDATE_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  METRICS_SUCCESS,
  METRICS_ERROR,
  AUTH_ERROR,
  CLEAR_ERROR,
  CLEAR_STATE,
  CLEAR_MESSAGE,
  LM_FETCH_SUCCESS,
  LM_PENDING_FETCH_SUCCESS,
  LM_FETCH_ERROR,
  LM_PENDING_FETCH_ERROR,
  AM_FETCH_SUCCESS,
  AM_PENDING_FETCH_SUCCESS,
  AM_FETCH_ERROR,
  AM_PENDING_FETCH_ERROR,
  MEMBERSHIP_DETAILS_FETCH_SUCCESS,
  MEMBERSHIP_DETAILS_FETCH_ERROR,
  PAYMENT_STATUS_UPDATE_SUCCESS,
  PAYMENT_STATUS_UPDATE_ERROR,
  PAYMENT_ORDER,
  PAYMENT_ERROR,
  PAYMENT_VERIFICATION,
  EMAIL_SEND_SUCCESS,
  EMAIL_SEND_FAILURE,
  TESTIMONIAL_CREATION_SUCCESS,
  TESTIMONIAL_CREATION_ERROR,
  EXPIRED_MEMBERSHIP_FETCHED_SUCCESS,
  EXPIRED_MEMBERSHIP_FETCHED_ERROR,
  RENEWED_MEMBERSHIP_FETCHED_SUCCESS,
  RENEWED_MEMBERSHIP_FETCHED_ERROR,
  EMAIL_UNSUBSCRIBED_SUCCESS,
  EMAIL_UNSUBSCRIBED_ERROR,
  JOBS_FETCHED_SUCCESS,
  JOBS_FETCHED_ERROR,
  CLEAR_JOB_STATUS,
} from "./Types";

const SiteState = (props) => {
  const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    authError: null,
    isRegistered: false,
    loading: false,
    metrics: null,
    lifeMembers: null,
    annualMembers: null,
    expiredMemberships: null,
    renewedMemberships: null,
    pendingLifeMembers: null,
    pendingAnnualMembers: null,
    paymentStatus: false,
    paymentOrder: null,
    paymentError: null,
    paymentVerified: null,
    emailSent: false,
    testimonial: null,
    emailSubscriptionStatus: null,
    jobs: null,
  };

  const [state, dispatch] = useReducer(siteReducer, initialState);

  // Register a user
  const registerUser = async (
    prefix,
    firstName,
    lastName,
    email,
    phone,
    birthday,
    address1,
    address2,
    city,
    state,
    pincode,
    country,
    fromYear,
    toYear,
    streamPuc,
    streamDegree,
    streamPg,
    streamOthers,
    vision,
    profession,
    otherInterests,
    membership,
    paymentMode,
    images
  ) => {
    const formData = new FormData();

    formData.set("prefix", prefix);
    formData.set("first_name", firstName);
    formData.set("last_name", lastName);
    formData.set("email", email);
    formData.set("mobile", phone);
    formData.set("birthday", birthday);
    formData.set("address1", address1);
    formData.set("address2", address2);
    formData.set("city", city);
    formData.set("state", state);
    formData.set("pincode", pincode);
    formData.set("country", country);
    formData.set("duration_start", fromYear);
    formData.set("duration_end", toYear);
    formData.set("course_puc", streamPuc);
    formData.set("course_degree", streamDegree);
    formData.set("course_pg", streamPg);
    formData.set("course_others", streamOthers);
    formData.set("profession", profession);
    formData.set("vision", vision);
    formData.set("other_interests", otherInterests);
    formData.set("membership_type", membership);
    formData.set("payment_mode", paymentMode);
    images !== []
      ? images.forEach((file) => formData.append("images", file))
      : formData.set("images", images);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register/user`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch({ type: REGISTRATION_CREATE_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err.response.data.detail });
      setTimeout(() => dispatch({ type: CLEAR_ERROR }), 5000);
    }
  };

  const loginUser = async (email, password) => {
    const formData = new FormData();

    formData.set("username", email);
    formData.set("password", password);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: LOGIN_ERROR, payload: err.response.data.detail });
      setTimeout(() => dispatch({ type: CLEAR_ERROR }), 5000);
    }
  };

  // const checkForExistingEmail = async (email) => {
  //   const res = await axios.get(
  //     `${process.env.NEXT_PUBLIC_API_URL}/user/${email}`
  //   );

  //   dispatch({ type: AUTH_ERROR, payload: res.data });
  //   setTimeout(() => dispatch({ type: CLEAR_ERROR }), 5000);
  // };

  // Delete temporary user - this is run if the user closes the payment modal
  const deleteTempUser = async (altUserId) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/user/delete/${altUserId}`
      );
    } catch (err) {
      console.error(err.response.data.detail);
    }
  };

  // Metrics
  const generateMetricCounts = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/alumniassn/dashboard/totals`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("mesAAToken"))
              .access_token,
          },
        }
      );

      dispatch({ type: METRICS_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: METRICS_ERROR, payload: err.response.data.detail });
    }
  };

  // Get all active life members
  const getLifeMembers = async (memberType, paymentStatus) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/alumniassn/dashboard/${memberType}/${paymentStatus}`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("mesAAToken"))
              .access_token,
          },
        }
      );

      if (paymentStatus === 1)
        dispatch({ type: LM_FETCH_SUCCESS, payload: res.data });

      if (paymentStatus === 0)
        dispatch({ type: LM_PENDING_FETCH_SUCCESS, payload: res.data });
    } catch (err) {
      if (paymentStatus === 1)
        dispatch({ type: LM_FETCH_ERROR, payload: err.response.data.detail });

      if (paymentStatus === 0)
        dispatch({
          type: LM_PENDING_FETCH_ERROR,
          payload: err.response.data.detail,
        });
    }
  };

  // Get all active annual members
  const getAnnualMembers = async (memberType, paymentStatus) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/alumniassn/dashboard/${memberType}/${paymentStatus}`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("mesAAToken"))
              .access_token,
          },
        }
      );

      if (paymentStatus === 1)
        dispatch({ type: AM_FETCH_SUCCESS, payload: res.data });

      if (paymentStatus === 0)
        dispatch({ type: AM_PENDING_FETCH_SUCCESS, payload: res.data });
    } catch (err) {
      if (paymentStatus === 1)
        dispatch({ type: AM_FETCH_ERROR, payload: err.response.data.detail });

      if (paymentStatus === 0)
        dispatch({
          type: AM_PENDING_FETCH_ERROR,
          payload: err.response.data.detail,
        });
    }
  };

  // Get list of expired memberships
  const getExpiredMembershipDetails = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/alumniassn/dashboard/expired_members`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("mesAAToken"))
              .access_token,
          },
        }
      );
      dispatch({ type: EXPIRED_MEMBERSHIP_FETCHED_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: EXPIRED_MEMBERSHIP_FETCHED_ERROR,
        payload: err.response.data.detail,
      });
    }
  };

  // Get list of renewed memberships
  const getRenewedMembershipDetails = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/alumniassn/dashboard/recently_renewed`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("mesAAToken"))
              .access_token,
          },
        }
      );
      dispatch({ type: RENEWED_MEMBERSHIP_FETCHED_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: RENEWED_MEMBERSHIP_FETCHED_ERROR,
        payload: err.response.data.detail,
      });
    }
  };

  // Get membership details to update the payment status
  const getMembershipDetails = async (membershipId) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/membership/${membershipId}`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("mesAAToken"))
              .access_token,
          },
        }
      );

      dispatch({ type: MEMBERSHIP_DETAILS_FETCH_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: MEMBERSHIP_DETAILS_FETCH_ERROR,
        payload: err.response.data.detail,
      });
    }
  };

  // Update user payment status
  const updatePaymentStatus = async (userId) => {
    const jsonPayload = {
      authorization_token: JSON.parse(localStorage.getItem("mesAAToken"))
        .access_token,
      user_id: parseInt(userId),
    };

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/payment_status`,
        jsonPayload
      );

      dispatch({ type: PAYMENT_STATUS_UPDATE_SUCCESS });
    } catch (err) {
      dispatch({
        type: PAYMENT_STATUS_UPDATE_ERROR,
        payload: err.response.data.detail,
      });
    }
  };

  // Fetch status of all server jobs
  const fetchJobStatus = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);

      dispatch({ type: JOBS_FETCHED_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: JOBS_FETCHED_ERROR, payload: err.response.data.detail });
    }
  };

  // Clears the status when modal is closed
  const clearJobStatus = () => {
    dispatch({ type: CLEAR_JOB_STATUS });
  };

  // Manual payment notification email flag
  const updateManualPaymentNotificationStatus = async (altUserId) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/manual_payment/notification/${altUserId}`
      );
      dispatch({ type: EMAIL_SEND_SUCCESS });
    } catch (err) {
      dispatch({ type: EMAIL_SEND_FAILURE });
    }
  };

  //--------------------Testimonials--------------------

  const createTestimonial = async (name, batch, message) => {
    const jsonPayload = {
      name: name,
      batch: batch,
      message: message,
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/testimonials/create`,
        jsonPayload
      );

      dispatch({ type: TESTIMONIAL_CREATION_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: TESTIMONIAL_CREATION_ERROR,
        payload: err.response.data.detail,
      });
    }
  };

  //--------------------Testimonials End--------------------

  //--------------------Payments--------------------

  const createOrder = async (amount, currency, receipt, notes) => {
    const orderPayload = {
      amount: amount,
      currency: currency,
      receipt: receipt,
      notes: notes,
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
        orderPayload
      );

      dispatch({ type: PAYMENT_ORDER, payload: res.data });
    } catch (err) {
      // dispatch({ type: PAYMENT_ORDER, payload: res.data });
    }
  };

  const verifyPayment = async (orderId, paymentId, signature, email) => {
    const paymentVerificationPayload = {
      order_id: orderId,
      payment_id: paymentId,
      signature: signature,
      email: email,
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/verification`,
        paymentVerificationPayload
      );

      dispatch({ type: PAYMENT_VERIFICATION, payload: res.data });
    } catch (err) {
      // dispatch({ type: PAYMENT_ORDER, payload: res.data });
    }
  };

  //--------------------Payments End--------------------

  //-----------------------Emails-----------------------

  const sendWelcomeEmail = async (recipientEmail, recipientName) => {
    const jsonPayload = {
      to_email: recipientEmail,
      alumnus_name: recipientName,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/welcome`,
        jsonPayload
      );

      dispatch({ type: EMAIL_SEND_SUCCESS });
    } catch (err) {
      dispatch({ type: EMAIL_SEND_FAILURE });
    }
  };

  const sendContactEmail = async (senderEmail, senderName, message) => {
    const jsonPayload = {
      sender_email: senderEmail,
      sender_name: senderName,
      message: message,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/contact`,
        jsonPayload
      );

      dispatch({ type: EMAIL_SEND_SUCCESS });
    } catch (err) {
      dispatch({ type: EMAIL_SEND_FAILURE });
    }
  };

  const sendManualPaymentEmail = async (
    alumniName,
    alumniEmail,
    membershipId,
    membershipType
  ) => {
    const jsonPayload = {
      to_email: alumniEmail,
      alumni_name: alumniName,
      membership_id: membershipId,
      membership_type: membershipType,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/payment/manual`,
        jsonPayload
      );
      dispatch({ type: EMAIL_SEND_SUCCESS });
    } catch (err) {
      dispatch({ type: EMAIL_SEND_FAILURE });
    }
  };

  const sendTestimonialApprovalEmail = async (
    alumniName,
    alumniBatch,
    testimonial,
    url
  ) => {
    const jsonPayload = {
      name: alumniName,
      batch: alumniBatch,
      message: testimonial,
      approve_url: url,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/testimonial`,
        jsonPayload
      );
      dispatch({ type: EMAIL_SEND_SUCCESS });
    } catch (err) {
      dispatch({ type: EMAIL_SEND_FAILURE });
    }
  };

  const sendPaymentReceiptEmail = async (
    alumniName,
    address1,
    address2,
    city,
    state,
    pincode,
    country,
    recipientEmail,
    invoiceNumber,
    membership
  ) => {
    const jsonPayload = {
      alumni_name: alumniName,
      alumni_address1: address1,
      alumni_address2: address2,
      city: city,
      state: state,
      pincode: pincode,
      country: country,
      to_email: recipientEmail,
      invoice_number: invoiceNumber,
      membership_type: membership,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/receipt`,
        jsonPayload
      );
      dispatch({ type: EMAIL_SEND_SUCCESS });
    } catch (err) {
      dispatch({ type: EMAIL_SEND_FAILURE });
    }
  };

  //---------------------Emails End---------------------

  // Mail list unsubscription
  const unsubscribeFromMailingList = async (subscriberEmail) => {
    const jsonPayload = { email: subscriberEmail };

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/email_subscription`,
        jsonPayload
      );

      dispatch({ type: EMAIL_UNSUBSCRIBED_SUCCESS, payload: res.data });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 5000);
    } catch (err) {
      dispatch({
        type: EMAIL_UNSUBSCRIBED_ERROR,
        payload: err.response.data.detail,
      });
    }
  };

  // Set loading
  const setLoading = () => {
    dispatch({ type: LOADING });
  };

  // Logout admin
  const adminLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("mesAAToken");
    }
  };

  // Clear state
  const clearUserState = () => {
    dispatch({ type: CLEAR_STATE });
  };

  return (
    <SiteContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        authError: state.authError,
        isRegistered: state.isRegistered,
        loading: state.loading,
        metrics: state.metrics,
        lifeMembers: state.lifeMembers,
        annualMembers: state.annualMembers,
        pendingLifeMembers: state.pendingLifeMembers,
        pendingAnnualMembers: state.pendingAnnualMembers,
        paymentStatus: state.paymentStatus,
        paymentOrder: state.paymentOrder,
        paymentStatus: state.paymentStatus,
        paymentError: state.paymentError,
        paymentVerified: state.paymentVerified,
        testimonial: state.testimonial,
        emailSent: state.emailSent,
        expiredMemberships: state.expiredMemberships,
        renewedMemberships: state.renewedMemberships,
        emailSubscriptionStatus: state.emailSubscriptionStatus,
        jobs: state.jobs,
        setLoading,
        registerUser,
        deleteTempUser,
        generateMetricCounts,
        getLifeMembers,
        getAnnualMembers,
        getMembershipDetails,
        getExpiredMembershipDetails,
        getRenewedMembershipDetails,
        updatePaymentStatus,
        clearUserState,
        updateManualPaymentNotificationStatus,
        createOrder,
        verifyPayment,
        createTestimonial,
        sendWelcomeEmail,
        sendContactEmail,
        sendManualPaymentEmail,
        sendTestimonialApprovalEmail,
        sendPaymentReceiptEmail,
        unsubscribeFromMailingList,
        loginUser,
        adminLogout,
        fetchJobStatus,
        clearJobStatus,
      }}
    >
      {props.children}
    </SiteContext.Provider>
  );
};

export default SiteState;
