import axios from 'axios';
import authHeader from './auth-header';
import http from "./http-common-users";

const API_URL = 'http://vipfal.herokuapp.com/api/test/';

class UserService {

  getPublicContent() {
    const axios = require('axios');
    let config = {
      method: 'get',
      url: 'http://vipfal.herokuapp.com/api/test/all',
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

  Adminregister(username, email, password) {
    return axios.post("http://localhost:8080/api/admin/adminekle", {
      username,
      email,
      password
    });
  }

  Modegister(username, email, password) {
    return axios.post("http://localhost:8080/api/admin/modekle", {

      username,
      email,
      password
    });
  }

  Userregister(username, email, password) {
    return axios.post("http://localhost:8080/api/admin/userekle", {
      username,
      email,
      password
    });
  }

  Falciregister(username, email, password, FalciRutbesi,
    KahveFaliSayisi,
    adminFalciyaYorumlari,
    baktigiFalAdi,
    baktigiFalUcreti,
    baktigiFalid,
    canlifalFiyati,
    cuzdan,
    falbilgisi,
    iban,
    indirimkodu,
    kazandigiKar,
    profilyazisi,
    resimyolu,
    yaziliFalFiyat,
    yediYirmidort,
    yorumlar,
    yorumsayisi) {
    return axios.post("http://localhost:8080/api/admin/falciekle", {
      username,
      email,
      password,
      FalciRutbesi,
      KahveFaliSayisi,
      adminFalciyaYorumlari,
      baktigiFalAdi,
      baktigiFalUcreti,
      baktigiFalid,
      canlifalFiyati,
      cuzdan,
      falbilgisi,
      iban,
      indirimkodu,
      kazandigiKar,
      profilyazisi,
      resimyolu,
      yaziliFalFiyat,
      yediYirmidort,
      yorumlar,
      yorumsayisi
    });
  }


  getAll() {
    return http.get("/tumusergetir");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users", data);
  }


  update(id, data) {
    return  http.post('/users/'+id,data);
  }
 
  delete(id) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  findByTitle(username) {
    return http.get(`/users?username=${username}`);
    //hata buradanmis indirimkodu yazmaklazimmis
  }


  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
