/* eslint-disable import/prefer-default-export */
import requestsManager from 'libs/requestsManager';

// import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';
import * as actionTypes from '../constants/helloWorldConstants';

export const updateName = (name) => ({
  // type: HELLO_WORLD_NAME_UPDATE,
  type: actionTypes.HELLO_WORLD_NAME_UPDATE,
  name,
});

export function fetchCompaniesSuccess(data) {
  return {
    type: actionTypes.FETCH_COMPANIES_SUCCESS,
    companies: data,
  };
}

export function fetchCompaniesFailure(error) {
  return {
    type: actionTypes.FETCH_COMPANIES_FAILURE,
    error,
  };
}

export function fetchCompanySuccess({company, jobs}) {
  return {
    type: actionTypes.FETCH_COMPANY_SUCCESS,
    company,
    jobs
  };
}

export function fetchCompanyFailure(error) {
  return {
    type: actionTypes.FETCH_COMPANY_FAILURE,
    error,
  };
}

export function fetchJobSuccess(data) {
  return {
    type: actionTypes.FETCH_JOB_SUCCESS,
    job: data,
  };
}

export function fetchJobFailure(error) {
  return {
    type: actionTypes.FETCH_JOB_FAILURE,
    error,
  };
}

export function createApplicationSuccess(data) {
  return {
    type: actionTypes.CREATE_APPLICATION_SUCCESS,
    application: data.application,
  };
}

export function createApplicationFailure(error) {
  return {
    type: actionTypes.CREATE_APPLICATION_FAILURE,
    error
  };
}

export function fetchMyApplicationsSuccess(data) {
  return {
    type: actionTypes.FETCH_MY_APPLICATIONS_SUCCESS,
    applications: data
  };
}

export function fetchCompanies() {
  return (dispatch) => {
    return (
      requestsManager
        .fetchEntities()
        .then(res => dispatch(fetchCompaniesSuccess(res.data)))
        .catch(error => dispatch(fetchCompaniesFailure(error)))
    );
  };
}

export function fetchCompany(id) {
  return (dispatch) => {
    return (
      requestsManager
        .fetchCompany(id)
        .then(res => dispatch(fetchCompanySuccess(res.data)))
        .catch(error => dispatch(fetchCompanyFailure(error)))
    );
  }
}

export function fetchJob(id) {
  return (dispatch) => {
    return (
      requestsManager
        .fetchJob(id)
        .then(res => dispatch(fetchJobSuccess(res.data)))
        .catch(error => dispatch(fetchJobFailure(error)))
    );
  };
}

export function createApplication(application) {
  return (dispatch) => {
    return (
      requestsManager
        .createApplication(application)
        .then(res => dispatch(createApplicationSuccess(res)))
        // .catch(error => dispatch(createApplicationFailure(error)))
    );
  };
}

export function fetchMyApplications() {
  return (dispatch) => {
    return (
      requestsManager
        .fetchMyApplications()
        .then(res => dispatch(fetchMyApplicationsSuccess(res)))
    );
  };
}
