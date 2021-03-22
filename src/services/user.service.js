import axios from 'axios';
import authHeader from './auth-header';
import http from "./http-common-users";

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

  Adminregister(username, email, password) {
    return axios.post("https://vipfal.herokuapp.com/api/admin/adminekle", {
      username,
      email,
      password
    });
  }

  Modegister(username, email, password) {
    return axios.post("https://vipfal.herokuapp.com/api/admin/modekle", {

      username,
      email,
      password
    });
  }

  Userregister(username, email, password) {
    return axios.post("https://vipfal.herokuapp.com/api/admin/userekle", {
      username,
      email,
      password
    });
  }
  /*
             username, 
              email, 
              password, 
              iban, 
              phone, 
              cuzdan, 
              falbilgisi, 
              indirimkodu, 
              resimyolu, 
              profilyazisi, 
              yorumlar, 
              yorumsayisi, 
              yediYirmidort, 
              baktigiFalid, 
              baktigiFalAdi, 
              baktigiFalUcreti, 
              kazandigiKar, 
              adminFalciyaYorumlari, 
              yaziliFalFiyat, 
              canlifalFiyati, 
              FalciRutbesi, 
              KahveFaliSayis, 
              published: status
  
  */
  Falciregister(
    username ,
    profilyazisi ,
    email,
    password ,
    phone,
    iban ,
    FalciRutbesi ,
    
    yediYirmidort ,
    falcirutbe ,
    kazandigiKar ,
    yaziliFalFiyat ,
    canlifalFiyati ,
    KahveFaliSayisi ,
    baktigiFalAdi ,
    baktigiFalUcreti , 
  ) {
    return axios.post("http://localhost:8080/api/admin/falciekle", {
      username ,
      profilyazisi ,
      email,
      password ,
      phone,
      iban ,
      FalciRutbesi ,
      yediYirmidort ,
      falcirutbe ,
      kazandigiKar ,
      yaziliFalFiyat ,
      canlifalFiyati ,
      KahveFaliSayisi ,
      baktigiFalAdi ,
      baktigiFalUcreti , 
    });
  }
  get(id) {
    return http.get(`/usergetir/${id}`);
  }

  getAll() {
    return http.get("/adminrolesgetir");
  }

  getAdminAll() {
    return http.get("/adminrolesgetir");
  }

  getModAll() {
    return http.get("/modrolesgetir");
  }
  getFalciAll() {
    return http.get("/falcirolesgetir");
  }

  getUserAll() {
    return http.get("/userrolesgetir");
  }

  get(id) {
    return http.get(`/usergetir/${id}`);
  }

  /*  create(data) {
     return http.post("/users", data);
   } */


  update(id, data) {
    return http.put('/userupdate/' + id, data);
  }

  delete(id) {
    return http.delete(`/usersil/${id}`);
  }

  deleteAll() {
    return http.delete(`/hepsinisil`);
  }

  findByTitle(username) {
    return http.get(`/kullaniciara?username=${username}`);
    //hata buradanmis indirimkodu yazmaklazimmis
  }


  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
