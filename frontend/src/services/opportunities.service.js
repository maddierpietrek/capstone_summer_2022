import http from "./http.service";
import { BASE_API_URL } from "../constants";

class OpportunitiesDataService {
  async getAll() {
    return await http.get(BASE_API_URL + "opportunities/");
  }
}

export default new OpportunitiesDataService();
