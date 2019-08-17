import request from 'axios';
import ReactOnRails from 'react-on-rails';

const API_URL = 'companies.json';

export default {

  /**
   * Retrieve list of entities from server using AJAX call.
   *
   * @returns {Promise} - Result of ajax call.
   */
  fetchEntities() {
    return request({
      method: 'GET',
      url: API_URL,
      responseType: 'json',
    });
  },

  /**
   * Submit new entity to server using AJAX call.
   *
   * @param {Object} entity - Request body to post.
   * @returns {Promise} - Result of ajax call.
   */
  submitEntity(entity) {
    return request({
      method: 'POST',
      url: API_URL,
      responseType: 'json',
      headers: ReactOnRails.authenticityHeaders(),
      data: entity,
    });
  },

  fetchCompany(id) {
    return request({
      method: 'GET',
      url: 'companies/' + id + '.json',
      responseType: 'json',
    });
  },

  fetchJob(id) {
    return request({
      method: 'GET',
      url: 'jobs/' + id + '.json',
      responseType: 'json',
    });
  },

  // login(user) {
  //   return request({
  //     method: 'POST',
  //     url: '/session',
  //     data: { user },
  //     responseType: 'json'
  //   });
  // },

  login(user) {
    return $.ajax({
      method: 'POST',
      url: '/session',
      data: { user }
    });
  },

  // signup(user) {
  //   return request({
  //     method: 'POST',
  //     url: '/user',
  //     data: {user},
  //     responseType: 'json'
  //   });
  // },

  signup(user) {
    return $.ajax({
      method: 'POST',
      url: '/user',
      data: {user}
    });
  },

  // logout(user) {
  //   return request({
  //     method: 'DELETE',
  //     url: '/session',
  //     responseType: 'json'
  //   });
  // }
  logout(user) {
    return $.ajax({
      method: 'DELETE',
      url: '/session'
    });
  },

  createApplication(application) {
    return $.ajax({
      method: 'POST',
      url: '/jobs/' + application.job_id + '/applications',
      data: { application }
    });
  }

  // Add the signup/session functions here.
};
