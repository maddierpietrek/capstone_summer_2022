import http from "./http.service";
import { BASE_API_URL } from "../constants";

class Summary2DataService {
  async getAll() {
    return await http.get(BASE_API_URL + "summary2/1");
  }
}

export default new Summary2DataService();
