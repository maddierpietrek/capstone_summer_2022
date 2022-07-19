import http from "./http.service";
import { BASE_API_URL } from "../constants";

class ClientDataService {
  async getAll() {
    return await http.get(BASE_API_URL + "client/1");
  }
}

export default new ClientDataService();
