import axios from 'axios'
import http from "./http-common";
import httppost from "./http-common-post";
class BurclarDataService {
  getAll() {
    return http.get("/burclar");
  }

  get(id) {
    return http.get(`/burclar/${id}`);
  }

  create(data) {
    return http.post("/burclar", data);
  }

  update(id, data) {

    const axios = require('axios');

    let config = {
      method: 'put',
      url: 'http://vipfal.herokuapp.com/admin/burclar/'+id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    return axios(config);
  }

  delete(id) {
    return http.delete(`/burclar/${id}`);
  }

  deleteAll() {
    return http.delete(`/burclar`);
  }

  findByTitle(burcadi) {
    return http.get(`/burclar?burcadi=${burcadi}`);
  }
}

export default new BurclarDataService();