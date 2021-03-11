import axios from "axios";

export default axios.create({
  baseURL: "https://vipfal.herokuapp.com/admin/",
  headers: { 
    "Access-Control-Allow-Origin": "*",
    https: true
   }
});
//  baseURL: "http://cors-anywhere.herokuapp.com/https://vipfal.herokuapp.com/admin/",
