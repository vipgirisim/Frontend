import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: { 
   }
});
//  baseURL: "http://cors-anywhere.herokuapp.com/https://vipfal.herokuapp.com/admin/",
