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
    companies: data.companies,
  };
}

export function fetchCompaniesFailure(error) {
  return {
    type: actionTypes.FETCH_COMPANIES_FAILURE,
    error,
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
