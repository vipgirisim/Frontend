import http from "./http-common";
const API_URL = 'https://vipfal.herokuapp.com/api/';


class TutorialDataService {
   
  getAll() {
    const axios = require('axios');
    let config = {
      method: 'get',
      url: '/tutorials',
      headers: {}
    }; 
    return axios(config);
  }



 get(id) {
    const axios = require('axios');
    let config = {
      method: 'post',
      url: '/tutorials/${id}',
      headers: {}
    }; 
    return axios(config);
  }



  {
    return http.get(``);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();