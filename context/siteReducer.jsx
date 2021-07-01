import React from "react";
import {
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
  CLEAR_STATE,
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
    case METRICS_ERROR:
      return {
        ...state,
        loading: false,
        metrics: action.payload,
      };
    case LM_FETCH_SUCCESS:
    case LM_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        lifeMembers: action.payload,
      };
    case LM_PENDING_FETCH_SUCCESS:
    case LM_PENDING_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        pendingLifeMembers: action.payload,
      };
    case AM_FETCH_SUCCESS:
    case AM_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        annualMembers: action.payload,
      };
    case AM_PENDING_FETCH_SUCCESS:
    case AM_PENDING_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        pendingAnnualMembers: action.payload,
      };
    case MEMBERSHIP_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case MEMBERSHIP_DETAILS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        authError: action.payload,
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
    case CLEAR_ERROR:
      return { ...state, loading: false, authError: null };
    default:
      return { ...state, loading: false };
  }
};

export default siteReducer;
