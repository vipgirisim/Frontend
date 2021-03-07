import http from "./http-common-discount";
 class IndirimDataService {
  getAll() {
    return http.get("/discounts");
  }

  get(id) {
    return http.get(`/discounts/${id}`);
  }

  create(data) {
    return http.post("/discounts", data);
  }


  update(id, data) {
    return  http.post('/discounts/'+id,data);
  }
 
  delete(id) {
    return http.delete(`/discounts/${id}`);
  }

  deleteAll() {
    return http.delete(`/discounts`);
  }

  findByTitle(discounts) {
    return http.get(`/discounts?indirimkodu=${discounts}`);
    //hata buradanmis indirimkodu yazmaklazimmis
  }
}

export default new IndirimDataService();