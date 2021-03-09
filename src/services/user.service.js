import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://vipfal.herokuapp.com/api/test/';

class UserService {
  
  getPublicContent() {
    const axios = require('axios');
    let config = {
      method: 'get',
      url: 'https://vipfal.herokuapp.com/api/test/all',
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

  register(username, email, password) 
  {
    return axios.post("http://localhost:8080/api/admin/adminekle", {
      username,
      email,
      password
    });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}
  
export default new UserService();
