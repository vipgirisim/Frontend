import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
 
 
export default axios.create({
  baseURL: "http://vipfal.herokuapp.com/admin/",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
   }
});
//  baseURL: "http://cors-anywhere.herokuapp.com/http://vipfal.herokuapp.com/admin/",
