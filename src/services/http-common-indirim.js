import axios from "axios";

export default axios.create({
  baseURL: "http://vipfal.herokuapp.com/admin",
  headers: { 
   }
});
//  baseURL: "http://cors-anywhere.herokuapp.com/http://vipfal.herokuapp.com/admin/",
