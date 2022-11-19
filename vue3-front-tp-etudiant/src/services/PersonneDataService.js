import http from "../http-common";

class PersonneDataService {
  getAll() {
    return http.get("/entree");
  }

  get(id) {
    return http.get(`/entree/${id}`);
  }

  create(data) {
    return http.post("/entree", data);
  }

  delete(id) {
    return http.delete(`/entree/${id}`);
  }

  update(data) {
    return http.put("/entree", data);
  }

// function LinkFormatter(value, row, index) {return "<a href='"+/personnes/+currentPersonne.id"'>"+value+"</a>";}
}

export default new PersonneDataService();
