import axios from "axios";

export default axios.create({
  baseURL: "https://vipfal.herokuapp.com/admin/",
  mode: 'no-cors',
headers:{
'Access-Control-Allow-Origin': '*',
"Accept":"application/json",
"Content-Type":"application/json",
'X-Requested-With': 'XMLHttpRequest'}

});