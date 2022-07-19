import http from "./http.service";
import { BASE_API_URL } from "../constants";

class BarChartDataService {
  async getAll() {
    return await http.get(BASE_API_URL + "barchart/1");
  }
}

export default new BarChartDataService();
