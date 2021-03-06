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

  createApplication(application) {
    return $.ajax({
      method: 'POST',
      url: '/jobs/' + application.job_id + '/applications',
      data: { application },
    });
  },

  fetchMyApplications() {
    return $.ajax({
      method: 'GET',
      url: '/applications/my_applications.json',
    });
  },

  fetchMyCompany() {
    return $.ajax({
      method: 'GET',
      url: '/companies/my_company.json',
    });
  },

  fetchJobApplications(id) {
    return $.ajax({
      method: 'GET',
      url: '/jobs/' + id + '/applications'
    })
  },

  fetchApplicationMovings(id) {
    return $.ajax({
      method: 'GET',
      url: '/applications/' + id + '/movings'
    });
  },

  createMoving(moving) {
    return $.ajax({
      method: 'POST',
      url: '/applications/' + moving.application_id + '/movings',
      data: { moving }
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

  // Add the signup/session functions here.
};
