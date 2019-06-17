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
    case actionTypes.FETCH_COMPANIES_SUCCESS:
      return merge({}, state, {companies: action.companies});
    case actionTypes.FETCH_COMPANY_SUCCESS:
      const newState = merge({}, state);
      newState.companies[action.company.id] = action.company;
      return newState;
    default:
      return state;
  }
};

// const helloWorldReducer = combineReducers({ name });
const helloWorldReducer = combineReducers({ companies: name });

export default helloWorldReducer;
