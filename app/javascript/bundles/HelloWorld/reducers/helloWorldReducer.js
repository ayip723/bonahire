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

const _nullUser = Object.freeze({
  id: null
});

const session = (state = _nullUser, action) => {
  // return state;
  Object.freeze(state);
  switch(action.type) {
    case actionTypes.RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case actionTypes.LOGOUT_CURRENT_USER:
      return
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
  return state;
};

// const helloWorldReducer = combineReducers({ name });
const helloWorldReducer = combineReducers({ companies: name, session, entities, errors });

export default helloWorldReducer;
