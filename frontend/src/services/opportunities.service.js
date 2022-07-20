import http from "./http.service";
import { BASE_API_URL } from "../constants";

class OpportunitiesDataService {
  async getAll() {
    return await http.get(BASE_API_URL + "opportunities/");
  }
  async getRevenue() {
    return await http.get(BASE_API_URL + "opportunities/revenue");
  }
}

export default new OpportunitiesDataService();
