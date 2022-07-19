import http from "./http.service";
import { BASE_API_URL } from "../constants";

class Summary1DataService {
  async getAll() {
    return await http.get(BASE_API_URL + "summary1/1");
  }
}

export default new Summary1DataService();
