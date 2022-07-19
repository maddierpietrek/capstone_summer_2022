import http from "./http.service";
import { BASE_API_URL } from "../constants";

class ProfileDataService {
  async getAll() {
    return await http.get(BASE_API_URL + "profile/1");
  }
}

export default new ProfileDataService();
