import http from "./http-common";

class TutorialDataService {
  getAll() {
    return http.get("/burclar");
  }

  get(id) {
    return http.get(`/burclar/${id}`);
  }

  create(data) {
    return http.post("/burclar", data);
  }

  update(id, data) {
    return http.put(`/burclar/${id}`, data);
  }

  delete(id) {
    return http.delete(`/burclar/${id}`);
  }

  deleteAll() {
    return http.delete(`/burclar`);
  }

  findByTitle(burcadi) {
    return http.get(`/burclar?title=${burcadi}`);
  }
}

export default new TutorialDataService();