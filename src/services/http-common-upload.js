import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/uploads/",
  headers: { 
    "Access-Control-Allow-Origin": "*",
    https: true
   }
});
//  baseURL: "http://cors-anywhere.herokuapp.com/http://vipfal.herokuapp.com/admin/",
