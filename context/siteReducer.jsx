import React from "react";
import {
  LOADING,
  REGISTRATION_CREATE_SUCCESS,
  REGISTRATION_UPDATE_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  METRICS_SUCCESS,
  METRICS_ERROR,
  LM_FETCH_SUCCESS,
  LM_FETCH_ERROR,
  LM_PENDING_FETCH_SUCCESS,
  LM_PENDING_FETCH_ERROR,
  AM_FETCH_SUCCESS,
  AM_FETCH_ERROR,
  AM_PENDING_FETCH_SUCCESS,
  AM_PENDING_FETCH_ERROR,
  MEMBERSHIP_DETAILS_FETCH_SUCCESS,
  MEMBERSHIP_DETAILS_FETCH_ERROR,
  PAYMENT_STATUS_UPDATE_SUCCESS,
  PAYMENT_STATUS_UPDATE_ERROR,
  AUTH_ERROR,
  CLEAR_ERROR,
  CLEAR_MESSAGE,
  CLEAR_STATE,
  PAYMENT_ORDER,
  PAYMENT_VERIFICATION,
  PAYMENT_ERROR,
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
  RENEWAL_PROCESSED_SUCCESS,
  RENEWAL_PROCESSED_ERROR,
  EVENTS_SUCCESS,
  EVENTS_FAILURE,
  UPCOMING_EVENTS,
  COMPLETED_EVENTS,
  DELETE_TEMP_USER,
} from "./Types";

const siteReducer = (state, action) => {
  switch (action.type) {
    case REGISTRATION_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isRegistered: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    case METRICS_SUCCESS:
      return {
        ...state,
        loading: false,
        metrics: action.payload,
      };
    case LM_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        lifeMembers: action.payload,
      };
    case LM_PENDING_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        pendingLifeMembers: action.payload,
      };
    case AM_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        annualMembers: action.payload,
      };
    case AM_PENDING_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        pendingAnnualMembers: action.payload,
      };
    case EXPIRED_MEMBERSHIP_FETCHED_SUCCESS:
      return {
        ...state,
        loading: false,
        expiredMemberships: action.payload,
      };
    case RENEWED_MEMBERSHIP_FETCHED_SUCCESS:
      return {
        ...state,
        loading: false,
        renewedMemberships: action.payload,
      };
    case DELETE_TEMP_USER:
      return {
        ...state,
        isRegistered: false,
        user: null,
      };
    case METRICS_ERROR:
    case LM_FETCH_ERROR:
    case LM_PENDING_FETCH_ERROR:
    case AM_FETCH_ERROR:
    case AM_PENDING_FETCH_ERROR:
    case EXPIRED_MEMBERSHIP_FETCHED_ERROR:
    case RENEWED_MEMBERSHIP_FETCHED_ERROR:
    case MEMBERSHIP_DETAILS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        dashboardError: action.payload,
      };

    case MEMBERSHIP_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case PAYMENT_STATUS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentStatus: true,
      };
    case PAYMENT_STATUS_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        paymentStatus: false,
        dashboardError: action.payload,
      };
    case PAYMENT_ORDER:
      return {
        ...state,
        paymentOrder: action.payload,
      };
    case PAYMENT_VERIFICATION:
      return {
        ...state,
        paymentVerified: action.payload,
      };
    case PAYMENT_ERROR:
      return {
        ...state,
        paymentError: action.payload,
      };
    case TESTIMONIAL_CREATION_SUCCESS:
    case TESTIMONIAL_CREATION_ERROR:
      return {
        ...state,
        testimonial: action.payload,
      };
    case EMAIL_UNSUBSCRIBED_SUCCESS:
    case EMAIL_UNSUBSCRIBED_ERROR:
      return {
        ...state,
        loading: false,
        emailSubscriptionStatus: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        loading: false,
        emailSubscriptionStatus: null,
      };
    case EMAIL_SEND_SUCCESS:
      return {
        ...state,
        emailSent: true,
      };
    case EMAIL_SEND_FAILURE:
      return {
        ...state,
        emailSent: false,
      };
    case JOBS_FETCHED_SUCCESS:
    case JOBS_FETCHED_ERROR:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case RENEWAL_PROCESSED_SUCCESS:
      return {
        ...state,
        renewalProcessed: true,
      };
    case RENEWAL_PROCESSED_ERROR:
      return {
        ...state,
        renewalProcessed: action.payload,
      };
    case CLEAR_JOB_STATUS:
      return {
        ...state,
        jobs: null,
      };
    case EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        eventCreated: true,
        events: action.payload,
      };
    case EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        eventCreated: false,
        dashboardError: action.payload,
      };
    case UPCOMING_EVENTS:
      return {
        ...state,
        loading: false,
        upcomingEvents: action.payload,
      };
    case COMPLETED_EVENTS:
      return {
        ...state,
        loading: false,
        completedEvents: action.payload,
      };
    case CLEAR_STATE:
      return {
        ...state,
        loading: false,
        user: null,
        paymentStatus: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        authError: action.payload,
        user: null,
        isRegistered: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_ERROR:
      return { ...state, loading: false, authError: null };
    default:
      return { ...state, loading: false };
  }
};

export default siteReducer;
