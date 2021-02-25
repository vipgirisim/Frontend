import http from "./http-common-indirim";
 class indirimDataService {
  getAll() {
    return http.get("/indirim");
  }

  get(id) {
    return http.get(`/indirim/${id}`);
  }

  create(data) {
    return http.post("/indirim", data);
  }


  update(id, data) {
    return  http.post('/indirim/'+id,data);
  }
 
  delete(id) {
    return http.delete(`/indirim/${id}`);
  }

  deleteAll() {
    return http.delete(`/indirim`);
  }

  findByTitle(indirim) {
    return http.get(`/indirim?/indirimadi=${indirim}`);
  }
}

export default new indirimDataService();