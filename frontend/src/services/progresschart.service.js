import http from "./http.service";
import { BASE_API_URL } from "../constants";

class ProgressChartDataService {
  async getAll() {
    return await http.get(BASE_API_URL + "progresschart/1");
  }
}

export default new ProgressChartDataService();
