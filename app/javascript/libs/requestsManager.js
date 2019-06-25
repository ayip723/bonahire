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

  // Add the signup/session functions here.
};
