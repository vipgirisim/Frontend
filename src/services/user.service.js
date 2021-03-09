import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://www.madilink.net:8000/api/test/';

class UserService {
  
  getPublicContent() {
    const axios = require('axios');
    let config = {
      method: 'get',
      url: 'http://www.madilink.net:8000/api/test/all',
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

  Adminregister(username, email, password) 
  {
    return axios.post("http://www.madilink.net:8000/api/admin/adminekle", {
      username,
      email,
      password
    });
  }

  Modegister(username, email, password) 
  {
    return axios.post("http://www.madilink.net:8000/api/admin/modekle", {
      username,
      email,
      password
    });
  }

 Userregister(username, email, password) 
  {
    return axios.post("http://www.madilink.net:8000/api/admin/userekle", {
      username,
      email,
      password
    });
  }

  Falciregister(username, email, password) 
  {
    return axios.post("http://www.madilink.net:8000/api/admin/falciekle", {
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
