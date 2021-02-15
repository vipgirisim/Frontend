import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://vipfal.herokuapp.com/';

class UserService {
  
  getPublicContent() {
    const axios = require('axios');
    let config = {
      method: 'get',
      url: 'https://vipfal.herokuapp.com/all',
      headers: {}
    }; 
    return axios(config);
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
