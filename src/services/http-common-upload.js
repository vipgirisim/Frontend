import axios from "axios";

export default axios.create({
  baseURL: "http://www.madilink.net:8000/admin/",
  headers: { 
    "Access-Control-Allow-Origin": "*",
    https: true
   }
});
//  baseURL: "http://cors-anywhere.herokuapp.com/http://vipfal.herokuapp.com/admin/",
