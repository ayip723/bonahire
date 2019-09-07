import merge from 'lodash/merge';
import { combineReducers } from 'redux';
// import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';
import * as actionTypes from '../constants/helloWorldConstants';

// const name = (state = '', action) => {
const name = (state = {}, action) => {
  switch (action.type) {
    // case HELLO_WORLD_NAME_UPDATE:
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return merge({}, state, {name: action.name});
    default:
      return state;
  }
};

const companies = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMPANIES_SUCCESS:
      return merge({}, state, action.companies);
    case actionTypes.FETCH_COMPANY_SUCCESS:
      var newState = merge({}, state);
      newState[action.company.id] = action.company;
      return newState;
    default:
      return state;
  }
};

const jobs = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMPANY_SUCCESS:
      return merge({}, state, action.jobs);
    case actionTypes.FETCH_JOB_SUCCESS:
      // get job id, set company id in state, set the job
      var companyId = action.job.company_id;
      return merge({}, state, {[action.job.id]: action.job});
    default:
      return state;
  }
};

const applications = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_APPLICATION_SUCCESS:
      return merge({}, state, {[action.application.id]: action.application});
    default:
      return state;
  }
};

const my_applications = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MY_APPLICATIONS_SUCCESS:
      return merge({}, state, action.applications);
    default:
      return state;
  }
};

const my_company = (state = {company: {}, jobs: {}, applications: {}}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MY_COMPANY_SUCCESS:
      // return merge({}, state, action.company);
      return merge({}, state, { company: action.company, jobs: action.jobs, applications: {} });
    case actionTypes.FETCH_JOB_APPLICATIONS_SUCCESS:
      var newState = merge({}, state);
      // newState.jobs[action.job.id].applications = action.applications;
      // newState.jobs = merge({}, newState.jobs, {[action.job.id]: {applications: action.applications}});
      newState.jobs[action.job.id] = action.job;
      newState.applications = merge(newState.applications, action.applications);
      return newState;
    case actionTypes.FETCH_APPLICATION_MOVINGS_SUCCESS:
      var newState2 = merge({}, state);
      newState2.applications[action.application.id] = newState2.applications[action.application.id] || {};
      var application = newState2.applications[action.application.id];
      application.movings = action.movings;
      application.stages = action.stages;
      return newState2;
    default:
      return state;
  }
};

const _nullUser = Object.freeze({
  id: null
});

const session = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case actionTypes.RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case actionTypes.LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};



// const entities = (state={ users: {} }, action) => {
//   return state;
// };

const users = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case actionTypes.RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

const entities = combineReducers({ users })

const errors = (state={ session: [] }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case actionTypes.RECEIVE_CURRENT_USER:
      return { session: [] };
    default:
      return state;
  }
};

// const helloWorldReducer = combineReducers({ name });
const helloWorldReducer = combineReducers({ name, session, entities, errors, jobs, companies, applications, my_applications, my_company });

export default helloWorldReducer;
