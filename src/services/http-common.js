import axios from "axios";

export default axios.create({
  baseURL: "https://vipfal.herokuapp.com/admin/",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*'
  }
});
